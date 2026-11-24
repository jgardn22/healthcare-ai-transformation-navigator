import { appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export function reviewCadence(now, env) {
  const first = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
  while ([0, 6].includes(first.getUTCDay())) first.setUTCDate(first.getUTCDate() + 1);
  const monthly = now.getUTCDate() === first.getUTCDate();
  const manual = env.EVENT_NAME === 'workflow_dispatch';
  const isMonthlySchedule = env.SCHEDULE === '0 15 1-3 * *';
  const run = manual || !isMonthlySchedule || (monthly && now.getUTCDay() !== 1);
  const kind = manual ? env.REVIEW_KIND : monthly ? 'monthly' : 'weekly';
  if (manual && !['weekly', 'monthly', 'announcement'].includes(kind)) throw new Error('Unknown review kind.');
  if (manual && kind === 'announcement') {
    const url = new URL(env.ANNOUNCEMENT_URL);
    if (url.protocol !== 'https:' || !(url.hostname === 'microsoft.com' || url.hostname.endsWith('.microsoft.com'))) {
      throw new Error('Announcement review requires an official Microsoft HTTPS URL.');
    }
  }
  return { run, kind };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { run, kind } = reviewCadence(new Date(), process.env);
  const summary = run
    ? `${kind} read-only checks requested. Substantive source research remains Project-owned; this workflow does not attest that claims were reviewed.`
    : 'Skipped: not the first business day, or the Monday schedule already covers the monthly check.';
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary + '\n');
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `run=${run}\n`);
}
