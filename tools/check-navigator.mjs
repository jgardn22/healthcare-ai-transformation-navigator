#!/usr/bin/env node
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (file) => readFileSync(path.join(ROOT, file), 'utf8');
const html = read('index.html');
const visibleHtml = html.replace(/<!--[\s\S]*?-->/g, '');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const sandbox = { window: {} };
const dataFiles = ['usecases.js', 'catalog.js', 'aibast.js', 'teams.js', 'resources.js'];
for (const file of dataFiles) vm.runInNewContext(read(file), sandbox, { filename: file });
for (const file of readdirSync(ROOT).filter((f) => f.endsWith('.js'))) new vm.Script(read(file), { filename: file });
const ids = [...visibleHtml.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
check(ids.length === new Set(ids).size, 'Duplicate HTML IDs.');
for (const m of visibleHtml.matchAll(/href="#([^"]+)"/g)) check(ids.includes(m[1]), `Broken anchor: ${m[1]}`);
for (const m of visibleHtml.matchAll(/<img\b[^>]*>/g)) check(/\balt=/.test(m[0]), 'Image missing alt text.');
check(!/href="[^"]*\/haven\//.test(visibleHtml), 'HAVEN must remain hidden.');
check(/Last reviewed: \d{4}-\d{2}-\d{2}/.test(visibleHtml), 'Missing review date.');
const versions = [...html.matchAll(/\?v=(\d+)/g)].map((m) => m[1]);
check(versions.length > 0 && new Set(versions).size === 1, 'Cache versions differ.');
const rows = [...sandbox.window.HAIN_CATALOG, ...sandbox.window.HAIN_AIBAST];
for (const row of rows) {
  check(Array.isArray(row[6]) && row[6].length > 0 && [0, 1, 2, 3, 4].includes(row[7]), `Invalid placement: ${row[0]}`);
  check(/^https:\/\/learn\.microsoft\.com\//.test(row[9]), `Missing official source: ${row[0]}`);
  check(!/preview|frontier|roadmap|Business Central|HIPAA|BAA\b|SLA\b|licens|pricing|certif|\$\d/i.test(JSON.stringify(row)),
    `Unsupported public claim: ${row[0]}`);
}
check(new Set(rows.map((r) => r[0])).size === rows.length, 'Duplicate catalog IDs.');
const publicText = [visibleHtml, ...dataFiles.map(read), read('app.js')].join('\n');
check(!/[\u2013\u2014]/.test(publicText), 'Em/en dash in public copy.');
check(!/field\.lateetud\.com|Executive Guide|MSX|sharepoint\.com|customer-reported/i.test(publicText), 'Legacy/internal source in public content.');

const urls = new Set();
const local = [];
for (const m of visibleHtml.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
  const value = m[1];
  if (value.startsWith('https://')) urls.add(value);
  else if (!value.startsWith('#') && !value.startsWith('data:')) local.push(value.split('?')[0]);
}
for (const m of visibleHtml.matchAll(/\bsrcset="([^"]+)"/g)) {
  local.push(...m[1].split(',').map((v) => v.trim().split(/\s/)[0]));
}
for (const row of rows) urls.add(row[9]);
for (const row of sandbox.window.HAIN_COWORK) urls.add(row[7]);
for (const resource of sandbox.window.HAIN_RESOURCES) urls.add(resource.url);
for (const team of Object.values(sandbox.window.HAIN_TEAMS).flat()) local.push(team.image);
for (const file of local) check(existsSync(path.join(ROOT, file.split('?')[0])), `Missing local asset: ${file}`);
for (const source of JSON.parse(read('knowledge/sources.json')).sources) urls.add(source.url);
for (const candidate of JSON.parse(read('knowledge/review-2026-11-24.json')).candidates) urls.add(candidate.sourceUrl);
for (const file of ['README.md', 'CHANGELOG.md', 'knowledge/advisor-reference.md']) {
  for (const m of read(file).matchAll(/\]\(([^)]+)\)/g)) {
    if (m[1].startsWith('https://')) urls.add(m[1]);
    else check(existsSync(path.resolve(ROOT, path.dirname(file), m[1])), `Broken Markdown link in ${file}: ${m[1]}`);
  }
}

if (process.argv.includes('--links')) {
  const queue = [...urls];
  async function worker() {
    while (queue.length) {
      const original = queue.shift();
      let current = original;
      const visited = new Set();
      try {
        for (let count = 0; ; count++) {
          if (visited.has(current) || count > 8) throw new Error('redirect loop or excessive redirects');
          visited.add(current);
          const response = await fetch(current, { redirect: 'manual', signal: AbortSignal.timeout(25000) });
          await response.body?.cancel();
          if ([301, 302, 303, 307, 308].includes(response.status)) {
            const location = response.headers.get('location');
            if (!location) throw new Error('redirect without location');
            current = new URL(location, current).href;
            continue;
          }
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          console.log(`OK ${original}${current !== original ? ' -> ' + current : ''}`);
          break;
        }
      } catch (error) {
        failures.push(`Link not verified: ${original}: ${error.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: 4 }, worker));
}
console.log(`Checked ${rows.length} catalog cards, ${sandbox.window.HAIN_COWORK.length} Cowork cards, ${local.length} local references and ${urls.size} source URLs.`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Navigator checks passed.');
}
