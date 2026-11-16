import { readFile, open, unlink } from 'node:fs/promises';
import { createContentLoader } from './content-source-loader.mjs';
import { scan, reviewBatch, readJson, writeJson, verifyCandidate } from './virtual-events/scan.mjs';
const core = createContentLoader()('lib/virtual-events.ts');
const [command = 'daily', ...args] = process.argv.slice(2);
const file = 'data/virtual-events/events.json';

async function main() {
  if (['daily', 'broad'].includes(command)) {
    const report = await scan({ mode: command, sourceId: args.includes('--source') ? args[args.indexOf('--source') + 1] : undefined });
    // Partial failures remain visible; never report successful discovery when all retrieval failed.
    if (!report.sourceChecks.some(s => s.status === 'ok')) process.exitCode = 1;
    if (command === 'broad' && report.search.status !== 'ok') process.exitCode = 1;
    return;
  }
  if (command === 'review') { await reviewBatch(); return; }
  const records = await readJson(file);
  if (command === 'validate') {
    const ids = new Set(); const approvedKeys = new Set();
    for (const e of records) {
      if (!e.id || ids.has(e.id)) throw new Error(`Duplicate or missing ID: ${e.id}`);
      ids.add(e.id);
      if (!['candidate','approved','rejected','published','expired','canceled'].includes(e.status)) throw new Error(`Invalid status: ${e.id}`);
      if (!Array.isArray(e.aliases) || !Array.isArray(e.rationale) || !e.evidence || !e.verification) throw new Error(`Incomplete record: ${e.id}`);
      if (['approved','published'].includes(e.status)) {
        if (e.approvedFingerprint !== core.fingerprint(e) || !e.reviewedBy || !e.reviewedAt) throw new Error(`Approval invalidated by unreviewed edit: ${e.id}`);
        if (e.status === 'published' && !e.publishedAt) throw new Error(`Published timestamp missing: ${e.id}`);
        const words = e.summary.trim().split(/\s+/).length;
        if (words < 25 || words > 45 || !e.sourceTimezone || !Number.isFinite(Date.parse(e.startUtc)) || (e.cost === 'paid' && !e.price)) throw new Error(`Approved record is incomplete: ${e.id}`);
        if (approvedKeys.has(e.duplicateKey)) throw new Error(`Duplicate approved event: ${e.id}`);
        approvedKeys.add(e.duplicateKey);
      }
    }
    console.log(`Validated ${records.length} event records. Automatic publication disabled.`); return;
  }
  if (command === 'import') {
    if (!args[0]) throw new Error('Usage: events:import -- path/to/verified-candidate.json');
    const imported = JSON.parse(await readFile(args[0], 'utf8'));
    for (const e of [].concat(imported)) {
      e.status = 'candidate'; e.approvedFingerprint = null; e.reviewedBy = null; e.reviewedAt = null;
      await verifyCandidate(e); core.reconcile(records, e);
    }
    await writeJson(file, records); return;
  }
  const id = process.env.EVENT_ID || args[0];
  const event = records.find(e => e.id === id);
  if (!event) throw new Error(`Unknown event ID: ${id ?? '(missing)'}`);
  if (command === 'approve') {
    if (process.env.EVENT_SUMMARY) event.summary = process.env.EVENT_SUMMARY;
    if (process.env.EVENT_DISPLAY_TITLE) event.displayTitle = process.env.EVENT_DISPLAY_TITLE;
    if (process.env.EVENT_OVERRIDE_REASON) event.overrideReason = process.env.EVENT_OVERRIDE_REASON;
    await verifyCandidate(event);
    core.approve(event, process.env.EVENT_REVIEWER || args[1] || '');
  } else if (command === 'reject') {
    event.status = 'rejected'; event.approvedFingerprint = null;
    event.reviewedBy = process.env.EVENT_REVIEWER || args[1] || '';
    if (!event.reviewedBy) throw new Error('Reviewer name required');
    event.reviewedAt = new Date().toISOString();
  } else throw new Error(`Unknown command: ${command}`);
  await writeJson(file, records);
  console.log(`${command}: ${id}. Merge the review pull request to deploy.`);
}
async function run() {
  if (['daily','broad','validate'].includes(command)) return main();
  const lock = await open('data/virtual-events/.scan.lock', 'wx').catch(() => { throw new Error('Another virtual-events operation is running'); });
  try { return await main(); } finally { await lock.close(); await unlink('data/virtual-events/.scan.lock'); }
}
run().catch(error => { console.error(error.message); process.exitCode = 1; });
