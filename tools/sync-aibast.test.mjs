import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const generator = fileURLToPath(new URL('./sync-aibast.mjs', import.meta.url));
const index = new URL('../index.html', import.meta.url);
const generated = new URL('../aibast.js', import.meta.url);

test('offline regeneration is stable and does not bump cache versions on a no-change run', () => {
  const beforeIndex = readFileSync(index, 'utf8');
  const beforeGenerated = readFileSync(generated, 'utf8');
  const output = execFileSync(process.execPath, [generator, '--offline', '--write-reviewed'], { encoding: 'utf8' });
  assert.match(output, /No changes:/);
  assert.equal(readFileSync(index, 'utf8'), beforeIndex);
  assert.equal(readFileSync(generated, 'utf8'), beforeGenerated);
});

test('audit-only mode leaves published files untouched', () => {
  const beforeIndex = readFileSync(index, 'utf8');
  const beforeGenerated = readFileSync(generated, 'utf8');
  execFileSync(process.execPath, [generator, '--offline']);
  assert.equal(readFileSync(index, 'utf8'), beforeIndex);
  assert.equal(readFileSync(generated, 'utf8'), beforeGenerated);
});
