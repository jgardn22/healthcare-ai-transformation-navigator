#!/usr/bin/env node
/*
 * Syncs healthcare use cases from the AIBAST Agents Library into aibast.js.
 *
 * Source:  https://microsoft.github.io/aibast-agents-library  (registry.json, solutions/catalog.json and first_party.json, MIT licensed)
 * Output:  aibast.js (window.HAIN_AIBAST), loaded by the Use Case Explorer.
 *          Healthcare library agents (AB-...) land in Pattern 3. Microsoft first-party agents (AB-FP-...) land in Pattern 4,
 *          and only when the Business Apps catalog (catalog.js) does not already have the same agent for the same product.
 *
 * Run locally:  node tools/sync-aibast.mjs
 * Scheduled:    .github/workflows/sync-aibast.yml opens a pull request when the library changes.
 *
 * To control how a library agent is placed, add it to PLACEMENT below (slug = last part of the registry name).
 * Agents without an entry fall back to keyword rules, are flagged "needs review", and land in Cross-Enterprise Orchestration
 * when no keyword matches.
 */
import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://microsoft.github.io/aibast-agents-library';
const OUT = path.join(ROOT, 'aibast.js');
const INDEX = path.join(ROOT, 'index.html');
const INDUSTRY = /health/i;

/* lobs use the Navigator line-of-business ids; impacts use capture, cash, cost, risk, experience, capacity */
const PLACEMENT = {
  'patient-intake': { lobs: ['access', 'ambulatory'], impacts: ['capacity', 'experience'] },
  'care-gap-closure': { lobs: ['poph', 'raq'], impacts: ['capture', 'experience'] },
  'clinical-notes-summarizer': { lobs: ['ambulatory', 'acute', 'periop'], impacts: ['capacity', 'risk'] },
  'prior-authorization': { lobs: ['um', 'access', 'revenue'], impacts: ['cash', 'capacity'] }
};

/* First-party agents: placement by library id, otherwise by product family (see FP_PRODUCT_LOBS). */
const FP_PLACEMENT = {
  'sales-development-agent': { lobs: ['growth'], impacts: ['capture', 'capacity'] },
  'customer-intent-agent-voice': { lobs: ['access', 'member'], impacts: ['experience', 'capacity'] },
  'quality-management-agent': { lobs: ['access', 'member'], impacts: ['risk', 'experience'] },
  'expense-agent-business-central': { lobs: ['finance'], impacts: ['cost', 'capacity'] },
  'sales-order-agent': { lobs: ['growth', 'supply'], impacts: ['capture', 'capacity'] },
  'payables-agent': { lobs: ['finance'], impacts: ['cash', 'cost'] }
};
const FP_PRODUCT_LOBS = [
  [/sales|agent 365/i, ['growth']],
  [/customer service|contact center/i, ['access', 'member']],
  [/supply chain/i, ['supply']],
  [/finance|business central/i, ['finance']],
  [/project operations/i, ['pmo']]
];

const KEYWORD_LOBS = [
  [/schedul|intake|registration|access|appointment/i, ['access']],
  [/prior.?auth|utilization|authorization/i, ['um']],
  [/claim|denial|billing|revenue/i, ['revenue']],
  [/care gap|hedis|quality|population|outreach/i, ['poph']],
  [/clinical note|summar|chart|documentation/i, ['ambulatory']],
  [/pharmac|medication|formulary/i, ['pharmacy']],
  [/supply|inventory|procure/i, ['supply']],
  [/member|enrollment|benefit/i, ['member']],
  [/provider|credential|network/i, ['network']],
  [/compliance|regulat|audit|privacy/i, ['legal']],
  [/workforce|staffing|hr\b|onboard/i, ['hr']],
  [/contact center|call center|virtual agent/i, ['access']]
];

async function getJson(rel) {
  let last;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(`${BASE}/${rel}`, { headers: { 'user-agent': 'hain-aibast-sync' } });
      if (!r.ok) throw new Error(`${rel}: HTTP ${r.status}`);
      return await r.json();
    } catch (e) { last = e; await new Promise((res) => setTimeout(res, 1500 * (i + 1))); }
  }
  throw last;
}

const clean = (s) => String(s || '').replace(/[\u2010-\u2015\u2212]/g, '-').replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/\s+/g, ' ').trim();
const sentence = (s) => { const t = clean(s); return t && !/[.!?]$/.test(t) ? t + '.' : t; };

function placementFor(slug, text) {
  if (PLACEMENT[slug]) return { ...PLACEMENT[slug], reviewed: true };
  const lobs = [...new Set(KEYWORD_LOBS.filter(([re]) => re.test(text)).flatMap(([, l]) => l))].slice(0, 3);
  return { lobs: lobs.length ? lobs : ['orch'], impacts: null, reviewed: false };
}

function toolsFor(sol) {
  const names = [...(sol.featured_tools || []), ...(sol.agent_requirements || [])].join(' ');
  const t = [];
  if (/dynamics\s*36/i.test(names)) t.push('Dynamics 365');
  if (/power bi/i.test(names)) t.push('Power BI');
  return t;
}

/* ---- first-party dedupe against the Business Apps catalog ---- */
function loadCatalogRows() {
  const file = path.join(ROOT, 'catalog.js');
  if (!existsSync(file)) return [];
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(file, 'utf8'), sandbox);
  return sandbox.window.HAIN_CATALOG || [];
}
const normName = (n) => String(n || '').toLowerCase().replace(/\b(agents?|ai-powered|for opportunities|microsoft|dynamics 365)\b/g, ' ').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const productKeys = (p) => String(p || '').replace(/Dynamics 365 /g, '').split('/').map((x) => x.trim().toLowerCase()).filter(Boolean);
function alreadyInCatalog(fp, rows) {
  const n = normName(fp.name);
  const keys = productKeys(fp.product);
  return rows.some((r) => {
    const cn = normName(r[4]);
    const sameProduct = keys.some((k) => String(r[1] || '').toLowerCase().includes(k));
    return sameProduct && cn && (cn === n || cn.includes(n));
  });
}

const registry = await getJson('registry.json');
const catalog = (await getJson('solutions/catalog.json')).solutions || {};

const agents = (registry.agents || []).filter((a) => {
  const s = a._solution || {};
  return INDUSTRY.test(a.category || '') || (s.industries || []).some((i) => INDUSTRY.test(i));
}).sort((a, b) => ((a._solution || {}).slot || 999) - ((b._solution || {}).slot || 999) || a.name.localeCompare(b.name));

if (!agents.length) throw new Error('No healthcare agents found in the library registry; refusing to overwrite aibast.js.');

const rows = [];
const flagged = [];
for (const a of agents) {
  const slug = a.name.split('/').pop();
  const s = a._solution || {};
  const c = catalog[a.name] || {};
  const title = clean(s.advertised_name || a.display_name);
  const text = [title, s.executive_summary, (s.capabilities || []).join(' ')].join(' ');
  const place = placementFor(slug, text);
  if (!place.reviewed) flagged.push({ slug, title, lobs: place.lobs });
  const caps = (s.capabilities || []).slice(0, 3).map((x) => clean(x).replace(/[.;]$/, ''));
  const desc = [
    sentence(s.executive_summary || a.description),
    caps.length ? 'Key capabilities: ' + caps.join('; ') + '.' : '',
    sentence(c.card_pitch),
    (s.personas || []).length ? 'Primary users: ' + (s.personas || []).map(clean).join(', ') + '.' : ''
  ].filter(Boolean).join(' ');
  rows.push([
    'AB-' + slug.toUpperCase(),
    'Copilot Studio', 'AIBAST library agent', a._synthetic_data ? 'Synthetic demo' : '',
    title, desc, place.lobs, 2, toolsFor(s),
    'AIBAST Agents Library (microsoft.github.io/aibast-agents-library) \u00B7 MIT licensed, runs on synthetic data, validate before use',
    place.impacts
  ]);
}

/* ---- first-party agents ---- */
const firstParty = await getJson('first_party.json');
const catalogRows = loadCatalogRows();
const fpNew = (firstParty.agents || []).filter((a) => !alreadyInCatalog(a, catalogRows));
for (const a of fpNew) {
  const fixed = FP_PLACEMENT[a.id];
  const byProduct = FP_PRODUCT_LOBS.find(([re]) => re.test(a.product));
  const lobs = fixed ? fixed.lobs : byProduct ? byProduct[1] : ['orch'];
  if (!fixed) flagged.push({ slug: a.id, title: a.name, lobs });
  const uses = (a.use_cases || []).slice(0, 3).map((x) => clean(x).replace(/[.;]$/, ''));
  const desc = [
    sentence(a.description),
    uses.length ? 'Key capabilities: ' + uses.join('; ') + '.' : '',
    (a.personas || []).length ? 'Primary users: ' + a.personas.map(clean).join(', ') + '.' : ''
  ].filter(Boolean).join(' ');
  rows.push([
    'AB-FP-' + a.id.toUpperCase(),
    clean(a.product), 'Agent', clean(a.lifecycle || ''),
    clean(a.name), desc, lobs, 3, [],
    'AIBAST Agents Library first-party catalog (snapshot ' + (firstParty.snapshot_date || 'n/a') + ') \u00B7 documented on Microsoft Learn, validate status before use',
    fixed ? fixed.impacts : null
  ]);
}

const meta = { source: BASE, registryVersion: registry.version || '', registryGenerated: registry.generated_at || '', firstPartySnapshot: firstParty.snapshot_date || '', count: rows.length };
const out = '/* Generated by tools/sync-aibast.mjs from the AIBAST Agents Library (healthcare industry plus first-party agents). Do not edit by hand. */\n'
  + 'window.HAIN_AIBAST_META = ' + JSON.stringify(meta) + ';\n'
  + 'window.HAIN_AIBAST = [\n' + rows.map((r) => '  ' + JSON.stringify(r)).join(',\n') + '\n];\n';

const prev = existsSync(OUT) ? readFileSync(OUT, 'utf8') : '';
const prevIds = new Set([...prev.matchAll(/\["(AB-[^"]+)"/g)].map((m) => m[1]));
const nowIds = new Set(rows.map((r) => r[0]));
const added = rows.filter((r) => !prevIds.has(r[0])).map((r) => `${r[0]} ${r[4]}`);
const removed = [...prevIds].filter((id) => !nowIds.has(id));
const changed = out !== prev;

if (changed) {
  writeFileSync(OUT, out, 'utf8');
  const html = readFileSync(INDEX, 'utf8');
  const v = Math.max(...[...html.matchAll(/\?v=(\d+)/g)].map((m) => Number(m[1])));
  writeFileSync(INDEX, html.replaceAll('?v=' + v, '?v=' + (v + 1)), 'utf8');
}

console.log(JSON.stringify({ changed, total: rows.length, added, removed, needsReview: flagged }, null, 2));

if (process.env.GITHUB_OUTPUT) {
  const body = [
    `AIBAST library use cases: ${rows.length} total (healthcare agents plus Microsoft first-party agents not already in the catalog).`,
    added.length ? `\nNew:\n${added.map((x) => '- ' + x).join('\n')}` : '',
    removed.length ? `\nNo longer in the library:\n${removed.map((x) => '- ' + x).join('\n')}` : '',
    flagged.length ? `\nNeeds line-of-business review (placed by keyword; add to PLACEMENT in tools/sync-aibast.mjs):\n${flagged.map((f) => `- ${f.slug} -> ${f.lobs.join(', ')}`).join('\n')}` : ''
  ].filter(Boolean).join('\n');
  appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\nbody<<EOF\n${body}\nEOF\n`);
}
