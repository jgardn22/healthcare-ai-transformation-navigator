#!/usr/bin/env node
/*
 * Syncs healthcare use cases from the AIBAST Agents Library into aibast.js.
 *
 * Source:  https://microsoft.github.io/aibast-agents-library  (registry.json + solutions/catalog.json, MIT licensed)
 * Output:  aibast.js (window.HAIN_AIBAST), loaded by the Use Case Explorer in Pattern 2 (Copilot Studio agents).
 *
 * Run locally:  node tools/sync-aibast.mjs
 * Scheduled:    .github/workflows/sync-aibast.yml opens a pull request when the library changes.
 *
 * To control how a library agent is placed, add it to PLACEMENT below (slug = last part of the registry name).
 * Agents without an entry fall back to keyword rules, are flagged "needs review", and land in Cross-Enterprise Orchestration
 * when no keyword matches.
 */
import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
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

const meta = { source: BASE, registryVersion: registry.version || '', registryGenerated: registry.generated_at || '', count: rows.length };
const out = '/* Generated by tools/sync-aibast.mjs from the AIBAST Agents Library healthcare industry. Do not edit by hand. */\n'
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
    `AIBAST library healthcare use cases: ${rows.length} total.`,
    added.length ? `\nNew:\n${added.map((x) => '- ' + x).join('\n')}` : '',
    removed.length ? `\nNo longer in the library:\n${removed.map((x) => '- ' + x).join('\n')}` : '',
    flagged.length ? `\nNeeds line-of-business review (placed by keyword; add to PLACEMENT in tools/sync-aibast.mjs):\n${flagged.map((f) => `- ${f.slug} -> ${f.lobs.join(', ')}`).join('\n')}` : ''
  ].filter(Boolean).join('\n');
  appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed}\nbody<<EOF\n${body}\nEOF\n`);
}
