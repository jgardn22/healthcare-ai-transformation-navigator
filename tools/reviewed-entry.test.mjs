import test from 'node:test';
import assert from 'node:assert/strict';
import { validateReviewedEntry } from './reviewed-entry.mjs';

const valid = () => ({
  status: 'GA', reviewedAt: '2026-11-24', gaEvidence: 'Official release notes explicitly identify this capability as GA.',
  sourceUrl: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new',
  row: ['AB-EXAMPLE', 'Copilot Studio', 'Illustrative design', '', 'Review an intake request',
    'Use approved knowledge and require human approval for changes.', ['access'], 2, [],
    'https://learn.microsoft.com/en-us/microsoft-copilot-studio/whats-new', ['capacity']]
});

test('accepts explicit reviewed copy with matching official evidence and placement', () => {
  assert.doesNotThrow(() => validateReviewedEntry(valid()));
});

test('rejects lifecycle labels alone and nonofficial sources', () => {
  const missing = valid();
  delete missing.gaEvidence;
  assert.throws(() => validateReviewedEntry(missing), /evidence/);
  const unofficial = valid();
  unofficial.sourceUrl = 'https://example.com/claims-ga';
  assert.throws(() => validateReviewedEntry(unofficial), /official/);
  const invalidDate = valid();
  invalidDate.reviewedAt = '2026-02-30';
  assert.throws(() => validateReviewedEntry(invalidDate), /review date/);
});

test('rejects preview, Business Central and missing placement', () => {
  for (const label of ['Public Preview', 'Business Central', 'HIPAA certified']) {
    const entry = valid();
    entry.row[5] = label;
    assert.throws(() => validateReviewedEntry(entry), /Excluded/);
  }
  const entry = valid();
  entry.row[6] = [];
  assert.throws(() => validateReviewedEntry(entry), /placement/);
});
