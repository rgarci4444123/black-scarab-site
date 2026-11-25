import { glossaryVideoEmbedUrl, type GlossaryVideo } from "@/lib/glossary-video";

export default function GlossaryVideoPlayer({ video }: { video: GlossaryVideo }) {
  return <figure className="mb-9 mt-7" aria-label={video.title}>
    <div className="aspect-video min-h-[200px] w-full overflow-hidden rounded-lg bg-[#101a24]">
      <iframe
        src={glossaryVideoEmbedUrl(video.youtube_video_id)}
        title={video.title}
        width="960" height="540"
        className="h-full min-h-[200px] w-full border-0"
        loading="lazy"
        allow="encrypted-media; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </figure>;
}
