import { readFileSync, writeFileSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { syncGlossaryVideos } from './glossary-video-sync.mjs';
import { fetchPublicYouTubeVideos, readVerifiedUploadReceipts } from './youtube-glossary-source.mjs';

export async function main(args = process.argv.slice(2)) {
  const option = name => { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; };
  const root = resolve(option('--site') ?? process.cwd()), read = file => JSON.parse(readFileSync(resolve(root, file), 'utf8'));
  const receiptRoot = option('--receipts');
  const videos = receiptRoot ? readVerifiedUploadReceipts(resolve(receiptRoot)) : await fetchPublicYouTubeVideos(process.env.YOUTUBE_DATA_API_KEY);
  const result = syncGlossaryVideos({ entries: read('content/physical-ai-glossary/entries.json'), publication: read('content/physical-ai-glossary/publication.json'),
    catalog: read('content/physical-ai-glossary/videos.json'), videos, termId: option('--term'), authoritative: !receiptRoot });
  if (args.includes('--apply') && result.changes.length) {
    // Stage both complete JSON files before replacing either tracked file.
    for (const [file, data] of [['publication.json', result.publication], ['videos.json', result.catalog]]) writeFileSync(resolve(root, 'content/physical-ai-glossary', file + '.tmp'), JSON.stringify(data, null, 2) + '\n');
    for (const file of ['publication.json', 'videos.json']) renameSync(resolve(root, 'content/physical-ai-glossary', file + '.tmp'), resolve(root, 'content/physical-ai-glossary', file));
  }
  console.log(JSON.stringify({ mode: args.includes('--apply') ? 'apply' : 'dry-run', source: receiptRoot ? 'verified-local-receipts' : 'youtube-data-api', changes: result.changes, skipped: result.skipped }, null, 2));
  return result;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) main().catch(error => { console.error(error.message); process.exitCode = 1; });
