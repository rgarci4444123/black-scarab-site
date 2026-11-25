import catalog from "@/content/physical-ai-glossary/videos.json";
import type { GlossaryArticle, GlossaryControl } from "@/lib/glossary-publication";

export type GlossaryVideo = {
  youtube_video_id: string;
  glossary_url: string;
  channel_id: string;
  privacyStatus: "public";
  embeddable: boolean;
  title: string;
  description: string;
  thumbnail_url: string;
  upload_date: string;
  duration_seconds: number;
};

export const glossaryVideoCatalog = catalog.videos as Record<string, GlossaryVideo>;
export const BLACK_SCARAB_YOUTUBE_CHANNEL = "UCYoG0I-DRTh7L643YZeVRyQ";

export function glossaryVideoEmbedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=0&rel=0&playsinline=1&cc_lang_pref=en`;
}

export function getGlossaryVideo(article: GlossaryArticle, control: GlossaryControl) {
  const id = control.youtube_video_id;
  if (!id) return null;
  const video = glossaryVideoCatalog[id];
  if (!video || video.youtube_video_id !== id || !/^[\w-]{11}$/.test(id)
    || video.privacyStatus !== "public" || !video.embeddable
    || video.channel_id !== BLACK_SCARAB_YOUTUBE_CHANNEL
    || video.glossary_url !== `https://www.blackscarab.ai/resources/physical-ai-glossary/${article.slug}`) return null;
  return video;
}

export function getGlossaryVideoSchema(video: GlossaryVideo, articleUrl: string) {
  return {
    "@type": "VideoObject", "@id": `${articleUrl}#video`,
    name: video.title, description: video.description,
    thumbnailUrl: [video.thumbnail_url], uploadDate: video.upload_date,
    duration: `PT${video.duration_seconds}S`,
    embedUrl: glossaryVideoEmbedUrl(video.youtube_video_id),
    url: `https://www.youtube.com/watch?v=${video.youtube_video_id}`,
    inLanguage: "en", isPartOf: { "@id": `${articleUrl}#article` },
    publisher: { "@type": "Organization", name: "Black Scarab", url: "https://www.blackscarab.ai" },
  };
}
