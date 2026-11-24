#!/usr/bin/env node
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { validateReviewedEntry } from './reviewed-entry.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://microsoft.github.io/aibast-agents-library';
const entries = JSON.parse(readFileSync(path.join(ROOT, 'knowledge', 'aibast-reviewed.json'), 'utf8')).entries;
if (!Array.isArray(entries)) throw new Error('Reviewed entries must be an array.');
entries.forEach(validateReviewedEntry);
if (new Set(entries.map((e) => e.row[0])).size !== entries.length) throw new Error('Duplicate reviewed IDs.');

const args = new Set(process.argv.slice(2));
for (const arg of args) {
  if (!['--write-reviewed', '--offline'].includes(arg)) throw new Error(`Unknown option: ${arg}`);
}
const rows = entries.map((e) => e.row);
const output = '/* Generated from explicitly reviewed entries by tools/sync-aibast.mjs. Do not edit by hand. */\r\n'
  + 'window.HAIN_AIBAST_META = ' + JSON.stringify({ source: BASE, count: rows.length }) + ';\r\n'
  + 'window.HAIN_AIBAST = ' + JSON.stringify(rows, null, 2).replace(/\n/g, '\r\n') + ';\r\n';
const outPath = path.join(ROOT, 'aibast.js');
const changed = output !== readFileSync(outPath, 'utf8');
if (args.has('--write-reviewed') && changed) {
  writeFileSync(outPath, output);
  const indexPath = path.join(ROOT, 'index.html');
  const html = readFileSync(indexPath, 'utf8');
  const versions = [...html.matchAll(/\?v=(\d+)/g)].map((m) => Number(m[1]));
  if (!versions.length) throw new Error('No cache versions found.');
  writeFileSync(indexPath, html.replace(/\?v=\d+/g, '?v=' + (Math.max(...versions) + 1)));
}

let candidates = [];
if (!args.has('--offline')) {
  const get = async (relative) => {
    const response = await fetch(`${BASE}/${relative}`, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`${relative}: HTTP ${response.status}`);
    return response.json();
  };
  const [registry, catalog, firstParty] = await Promise.all([
    get('registry.json'), get('solutions/catalog.json'), get('first_party.json')
  ]);
  if (!Array.isArray(registry.agents) || !catalog.solutions || !Array.isArray(firstParty.agents)) {
    throw new Error('Unexpected upstream schema; no candidates can be verified.');
  }
  const excluded = /business central/i;
  const healthcare = registry.agents.filter((a) => {
    const solution = a._solution || {};
    return !excluded.test(JSON.stringify(a)) &&
      (/health/i.test(a.category || '') || (solution.industries || []).some((i) => /health/i.test(i)));
  }).map((a) => ({ id: 'AB-' + a.name.split('/').pop().toUpperCase(), kind: 'library demo' }));
  const first = firstParty.agents.filter((a) => !excluded.test(JSON.stringify(a)))
    .map((a) => ({ id: 'AB-FP-' + a.id.toUpperCase(), kind: 'unverified first-party candidate' }));
  const reviewed = new Set(rows.map((r) => r[0]));
  candidates = [...healthcare, ...first].filter((a) => !reviewed.has(a.id));
}
const summary = [
  `Reviewed library entries: ${rows.length}. Unverified upstream candidates: ${candidates.length}.`,
  'No upstream descriptions or lifecycle labels are promoted automatically.',
  changed && !args.has('--write-reviewed') ? 'Generated output differs from the reviewed allowlist; regenerate in a review branch.' : '',
  !changed ? 'No changes: no material verified library updates.' : '',
  candidates.length ? 'Pending capability-level GA evidence and placement review:\n' + candidates.map((c) => `- ${c.id}: ${c.kind}`).join('\n') : ''
].filter(Boolean).join('\n\n');
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary + '\n');
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `changed=${changed && args.has('--write-reviewed')}\n`);
