import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createContentLoader } from './content-source-loader.mjs';
import { glossarySlugs, syncGlossaryVideos } from './glossary-video-sync.mjs';
import { youtubeDurationSeconds, BLACK_SCARAB_CHANNEL } from './youtube-glossary-source.mjs';
const load = createContentLoader();
const api = load('lib/glossary.ts'), helpers = load('lib/glossary-video.ts');
const entries = api.glossaryArticles, publication = api.glossaryPublication;
const catalog = JSON.parse(readFileSync('content/physical-ai-glossary/videos.json', 'utf8'));
const source = structuredClone(catalog.videos['aHv7Ks-i1k0']);
const base = () => { const p = structuredClone(publication); for (const c of Object.values(p.terms)) delete c.youtube_video_id; return { entries, publication: p, catalog: { schemaVersion: 1, videos: {} }, videos: [structuredClone(source)] }; };

test('each assigned term has matching public video metadata and schema', () => {
  const assigned = entries.filter(e => publication.terms[e.id].youtube_video_id);
  assert.ok(assigned.length > 0);
  for (const article of entries) {
    const id = publication.terms[article.id].youtube_video_id;
    const video = helpers.getGlossaryVideo(article, publication.terms[article.id]);
    const schema = api.getGlossarySchema(article)['@graph'].find(n => n['@type'] === 'VideoObject');
    if (!id) { assert.equal(video, null); assert.equal(schema, undefined); continue; }
    assert.equal(video.youtube_video_id, id);
    assert.equal(video.privacyStatus, 'public');
    assert.equal(video.glossary_url, `https://www.blackscarab.ai/resources/physical-ai-glossary/${article.slug}`);
    for (const name of ['name', 'description', 'thumbnailUrl', 'uploadDate', 'duration', 'embedUrl']) assert.ok(schema[name]);
    assert.equal(schema.name, video.title);
    assert.equal(schema.description, video.description);
    assert.equal(schema.thumbnailUrl[0], video.thumbnail_url);
    assert.match(schema.uploadDate, /(?:Z|[+-]\d\d:\d\d)$/);
    assert.equal(new URL(schema.embedUrl).searchParams.get('autoplay'), '0');
    assert.equal(new URL(schema.embedUrl).hostname, 'www.youtube-nocookie.com');
    assert.equal(new URL(schema.embedUrl).pathname, `/embed/${id}`);
    assert.equal(schema['@id'], `${video.glossary_url}#video`);
  }
});
test('private, scheduled, unlisted, nonembeddable and wrong-channel videos never populate a term', () => {
  for (const patch of [{ privacyStatus: 'private' }, { privacyStatus: 'private', publishAt: '2027-01-01T12:00:00Z' }, { privacyStatus: 'unlisted' }, { embeddable: false }, { channel_id: 'another-channel' }]) {
    const fixture = base();Object.assign(fixture.videos[0], patch);const result = syncGlossaryVideos(fixture);
    assert.equal(result.changes.length, 0);assert.equal(result.publication.terms['BSG-001'].youtube_video_id, undefined);
  }
});
test('URL matching is exact and refuses ambiguous descriptions', () => {
  assert.deepEqual(glossarySlugs('https://www.blackscarab.ai/resources/physical-ai-glossary/5g?source=youtube'), ['5g']);
  assert.deepEqual(glossarySlugs('https://blackscarab.ai.evil.example/resources/physical-ai-glossary/5g'), []);
  assert.deepEqual(glossarySlugs('https://www.blackscarab.ai/resources/physical-ai-glossary/5g/other'), []);
  const f = base();f.videos[0].description += '\nhttps://www.blackscarab.ai/resources/physical-ai-glossary/adaptation';
  assert.deepEqual(syncGlossaryVideos(f).changes, []);
});
test('sync is idempotent and changes only the matching published term', () => {
  const f = base(), result = syncGlossaryVideos(f);
  assert.equal(result.changes.length, 1);assert.equal(result.changes[0].term_id, 'BSG-001');
  for (const entry of entries.filter(e => e.id !== 'BSG-001')) assert.deepEqual(result.publication.terms[entry.id], f.publication.terms[entry.id]);
  assert.equal(syncGlossaryVideos({ ...f, publication: result.publication, catalog: result.catalog }).changes.length, 0);
  f.publication.terms['BSG-001'].status = 'draft';assert.deepEqual(syncGlossaryVideos(f).changes, []);
});
test('complete API scans detach a previously embedded video that becomes unavailable', () => {
  const f = base(), first = syncGlossaryVideos(f);
  const result = syncGlossaryVideos({ ...f, publication: first.publication, catalog: first.catalog, videos: [], authoritative: true });
  assert.equal(result.publication.terms['BSG-001'].youtube_video_id, undefined);
  assert.equal(result.changes[0].action, 'remove-unavailable');
  assert.equal(helpers.getGlossaryVideo(entries[0], result.publication.terms['BSG-001']), null);
});
test('incomplete schema data and duplicate term matches stop before applying updates', () => {
  for (const patch of [{ title: '' }, { upload_date: '2026-11-25' }, { duration_seconds: 0 }, { thumbnail_url: 'https://example.com/image.jpg' }]) {
    const f = base();Object.assign(f.videos[0], patch);assert.throws(() => syncGlossaryVideos(f));
  }
  const f = base(); f.videos.push({ ...source, youtube_video_id: 'abcdefghijk', thumbnail_url: 'https://i.ytimg.com/vi/abcdefghijk/maxresdefault.jpg' });
  assert.throws(() => syncGlossaryVideos(f), /Multiple videos/);
  assert.equal(f.publication.terms['BSG-001'].youtube_video_id, undefined);
});
test('YouTube ISO durations normalize without guessing', () => {
  assert.equal(youtubeDurationSeconds('PT2M39S'), 159);assert.equal(youtubeDurationSeconds('PT1H2M3S'), 3723);assert.throws(() => youtubeDurationSeconds('unknown'));
  assert.equal(source.channel_id, BLACK_SCARAB_CHANNEL);
});
