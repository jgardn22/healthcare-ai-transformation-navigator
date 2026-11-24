import test from 'node:test';
import assert from 'node:assert/strict';
import { reviewCadence } from './review-cadence.mjs';

test('monthly check uses first business day and avoids duplicate Monday work', () => {
  const schedule = { EVENT_NAME: 'schedule', SCHEDULE: '0 15 1-3 * *' };
  assert.deepEqual(reviewCadence(new Date('2026-11-01T15:00:00Z'), schedule), { run: false, kind: 'weekly' });
  assert.deepEqual(reviewCadence(new Date('2026-11-02T15:00:00Z'), schedule), { run: false, kind: 'monthly' });
  assert.deepEqual(reviewCadence(new Date('2026-11-02T15:00:00Z'), { ...schedule, SCHEDULE: '0 15 * * 1' }), { run: true, kind: 'monthly' });
  assert.deepEqual(reviewCadence(new Date('2026-12-01T15:00:00Z'), schedule), { run: true, kind: 'monthly' });
  assert.deepEqual(reviewCadence(new Date('2026-12-02T15:00:00Z'), schedule), { run: false, kind: 'weekly' });
});

test('manual announcement check requires an official HTTPS source', () => {
  const env = { EVENT_NAME: 'workflow_dispatch', REVIEW_KIND: 'announcement',
    ANNOUNCEMENT_URL: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes' };
  assert.deepEqual(reviewCadence(new Date('2026-11-24T15:00:00Z'), env), { run: true, kind: 'announcement' });
  assert.throws(() => reviewCadence(new Date(), { ...env, ANNOUNCEMENT_URL: 'https://microsoft.com.example.com/news' }), /official/);
  assert.throws(() => reviewCadence(new Date(), { ...env, ANNOUNCEMENT_URL: '' }));
});
