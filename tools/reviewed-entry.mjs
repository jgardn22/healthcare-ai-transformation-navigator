export function validateReviewedEntry(entry) {
  const row = entry?.row;
  const url = new URL(entry?.sourceUrl);
  if (url.protocol !== 'https:' || url.hostname !== 'learn.microsoft.com') {
    throw new Error('Reviewed library entries require an official Learn source.');
  }
  const date = new Date(entry.reviewedAt);
  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(entry.reviewedAt || '') &&
    Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === entry.reviewedAt;
  if (entry.status !== 'GA' || !validDate ||
      typeof entry.gaEvidence !== 'string' || !entry.gaEvidence.trim() || entry.sourceUrl !== row?.[9]) {
    throw new Error('Explicit GA evidence, review date and matching card source are required.');
  }
  if (!Array.isArray(row) || row.length !== 11 || !/^AB-[A-Z0-9-]+$/.test(row[0]) ||
      !Array.isArray(row[6]) || !row[6].length || ![0, 1, 2, 3, 4].includes(row[7]) ||
      !Array.isArray(row[8]) || !Array.isArray(row[10]) ||
      ![row[1], row[2], row[4], row[5]].every((s) => typeof s === 'string' && s.trim())) {
    throw new Error('Reviewed card must have explicit placement and complete public copy.');
  }
  const text = JSON.stringify(row);
  if (/business central|preview|frontier|roadmap|HIPAA|BAA\b|SLA\b|licens|pricing|certif|MSX|crm\/|internal|[\u2013\u2014]/i.test(text)) {
    throw new Error('Excluded or unsupported claims in reviewed public copy.');
  }
}
