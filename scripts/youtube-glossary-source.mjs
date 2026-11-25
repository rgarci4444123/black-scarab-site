import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
export const BLACK_SCARAB_CHANNEL = 'UCYoG0I-DRTh7L643YZeVRyQ';

export function youtubeDurationSeconds(iso) {
  const m = iso?.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?$/);
  if (!m) throw new Error('Invalid YouTube duration');
  return Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0);
}

export async function fetchPublicYouTubeVideos(key) {
  if (!key) throw new Error('Set YOUTUBE_DATA_API_KEY for YouTube API sync, or use --receipts with verified local uploads.');
  async function api(resource, params) {
    const url = new URL(`https://www.googleapis.com/youtube/v3/${resource}`);
    for (const [name, value] of Object.entries({ ...params, key })) url.searchParams.set(name, value);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`YouTube ${resource} request failed (${response.status}); no changes were applied.`);
    return response.json();
  }
  const channel = await api('channels', { part: 'contentDetails', id: BLACK_SCARAB_CHANNEL });
  const playlistId = channel.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!playlistId) throw new Error('Could not resolve the Black Scarab uploads playlist');
  const ids = []; let pageToken = '';
  do {
    const page = await api('playlistItems', { part: 'contentDetails', playlistId, maxResults: '50', ...(pageToken ? { pageToken } : {}) });
    ids.push(...page.items.map(item => item.contentDetails.videoId)); pageToken = page.nextPageToken ?? '';
  } while (pageToken);
  const videos = [];
  for (let i = 0; i < ids.length; i += 50) {
    const page = await api('videos', { part: 'snippet,contentDetails,status', id: ids.slice(i, i + 50).join(','), maxResults: '50' });
    for (const item of page.items) {
      if (item.status.privacyStatus !== 'public' || item.status.embeddable !== true || item.snippet.channelId !== BLACK_SCARAB_CHANNEL) continue;
      const thumb = item.snippet.thumbnails.maxres ?? item.snippet.thumbnails.standard ?? item.snippet.thumbnails.high;
      videos.push({ youtube_video_id: item.id, channel_id: item.snippet.channelId, privacyStatus: item.status.privacyStatus,
        embeddable: item.status.embeddable, title: item.snippet.title, description: item.snippet.description,
        thumbnail_url: thumb.url, upload_date: item.snippet.publishedAt, duration_seconds: youtubeDurationSeconds(item.contentDetails.duration) });
    }
  }
  return videos;
}

export function readVerifiedUploadReceipts(root) {
  const videos = [];
  for (const dir of readdirSync(root, { withFileTypes: true })) {
    if (!dir.isDirectory() || !/^BSG-\d{3}-/.test(dir.name)) continue;
    const folder = join(root, dir.name), path = join(folder, 'youtube-upload-receipt.json');
    if (!existsSync(path)) continue;
    const receipt = JSON.parse(readFileSync(path, 'utf8'));
    if (receipt.status !== 'published' || receipt.visibility !== 'public' || receipt.public_visibility_verified_in_studio !== true || receipt.channel_id !== BLACK_SCARAB_CHANNEL) continue;
    const description = readFileSync(join(folder, 'youtube.txt'), 'utf8').split('\n').slice(1).join('\n').trim();
    const qa = JSON.parse(readFileSync(join(folder, 'qa.json'), 'utf8'));
    if (!qa.passed) throw new Error(`Upload QA has not passed: ${dir.name}`);
    videos.push({ youtube_video_id: receipt.video_id, channel_id: receipt.channel_id, privacyStatus: receipt.visibility,
      embeddable: true, title: receipt.title, description, thumbnail_url: `https://i.ytimg.com/vi/${receipt.video_id}/maxresdefault.jpg`,
      upload_date: receipt.published_at, duration_seconds: qa.duration_seconds });
  }
  return videos;
}
