import { BLACK_SCARAB_CHANNEL } from './youtube-glossary-source.mjs';
const ORIGIN = 'https://www.blackscarab.ai';
const TERM_PATH = '/resources/physical-ai-glossary/';

export function glossarySlugs(description) {
  const slugs = new Set();
  for (const raw of (description ?? '').match(/https?:\/\/[^\s<>"']+/g) ?? []) {
    let url;
    try { url = new URL(raw.replace(/[),.;]+$/, '')); } catch { continue; }
    if (!['blackscarab.ai', 'www.blackscarab.ai'].includes(url.hostname) || url.username || url.password) continue;
    const match = url.pathname.match(/^\/resources\/physical-ai-glossary\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/);
    if (match) slugs.add(match[1]);
  }
  return [...slugs];
}

export function syncGlossaryVideos({ entries, publication, catalog, videos, termId, authoritative = false, now = new Date() }) {
  const result = { publication: structuredClone(publication), catalog: structuredClone(catalog), changes: [], skipped: [] };
  const bySlug = new Map(entries.map(entry => [entry.slug, entry]));
  const candidates = new Map();
  const publicIds = new Set();
  if (termId && !entries.some(entry => entry.id === termId)) throw new Error(`Unknown glossary term: ${termId}`);
  for (const video of videos) {
    if (video.privacyStatus !== 'public' || video.embeddable !== true || video.channel_id !== BLACK_SCARAB_CHANNEL) {
      result.skipped.push({ video_id: video.youtube_video_id, reason: 'Not a public, embeddable Black Scarab video' }); continue;
    }
    publicIds.add(video.youtube_video_id);
    const slugs = glossarySlugs(video.description);
    if (slugs.length !== 1) {
      result.skipped.push({ video_id: video.youtube_video_id, reason: 'Exactly one glossary URL is required in the description' }); continue;
    }
    const entry = bySlug.get(slugs[0]);
    if (!entry || (termId && termId !== entry.id)) continue;
    const control = result.publication.terms[entry.id];
    if (control.status !== 'published') continue;
    if (!/^[\w-]{11}$/.test(video.youtube_video_id) || !video.title?.trim() || !video.description?.trim()
      || !Number.isFinite(video.duration_seconds) || video.duration_seconds <= 0
      || !/^\d{4}-\d\d-\d\dT.+(?:Z|[+-]\d\d:\d\d)$/.test(video.upload_date)
      || !Number.isFinite(Date.parse(video.upload_date)) || Date.parse(video.upload_date) > now.getTime()) {
      throw new Error(`Incomplete video metadata: ${video.youtube_video_id}`);
    }
    const thumbnail = new URL(video.thumbnail_url);
    if (thumbnail.protocol !== 'https:' || thumbnail.username || thumbnail.password || thumbnail.hostname !== 'i.ytimg.com'
      || !thumbnail.pathname.startsWith(`/vi/${video.youtube_video_id}/`)) throw new Error('Thumbnail must match its YouTube video');
    if (candidates.has(entry.id) && candidates.get(entry.id).youtube_video_id !== video.youtube_video_id) throw new Error(`Multiple videos match ${entry.id}; select one explicitly`);
    if (control.youtube_video_id && control.youtube_video_id !== video.youtube_video_id && !authoritative) throw new Error(`Refusing to replace the existing video for ${entry.id}`);
    candidates.set(entry.id, { ...video, glossary_url: `${ORIGIN}${TERM_PATH}${entry.slug}` });
  }
  // A complete API scan also removes embeds whose videos no longer qualify as public.
  if (authoritative) for (const entry of entries) {
    if (termId && entry.id !== termId) continue;
    const control = result.publication.terms[entry.id], old = control.youtube_video_id;
    if (old && !publicIds.has(old)) {
      delete control.youtube_video_id; delete result.catalog.videos[old];
      control.modifiedAt = now.toISOString(); result.changes.push({ term_id: entry.id, action: 'remove-unavailable', video_id: old });
    }
  }
  for (const [id, video] of candidates) {
    const control = result.publication.terms[id], previous = result.catalog.videos[video.youtube_video_id];
    if (control.youtube_video_id === video.youtube_video_id && JSON.stringify(previous) === JSON.stringify(video)) continue;
    control.youtube_video_id = video.youtube_video_id; control.modifiedAt = now.toISOString();
    result.catalog.videos[video.youtube_video_id] = video;
    result.changes.push({ term_id: id, slug: bySlug.get(glossarySlugs(video.description)[0]).slug, action: 'set-video', video_id: video.youtube_video_id });
  }
  return result;
}
