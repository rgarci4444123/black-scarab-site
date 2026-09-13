import type {
  LocalAiArticleSlug,
  LocalAiCtaPlacement,
} from "@/lib/local-ai-deployment";

type LocalAiImplementationCtaProps = {
  articleSlug: LocalAiArticleSlug;
  placement: LocalAiCtaPlacement;
};

export default function LocalAiImplementationCta({
  articleSlug,
  placement,
}: LocalAiImplementationCtaProps) {
  const articleUrl = `https://www.blackscarab.ai/insights/${articleSlug}`;
  const params = new URLSearchParams({
    source_article: articleSlug,
    source_url: articleUrl,
    cta_placement: placement,
  });
  const isEndPlacement = placement === "end_of_article";

  return (
    <aside
      data-local-ai-cta
      data-article-identifier={articleSlug}
      data-article-url={articleUrl}
      data-cta-placement={placement}
      className={
        isEndPlacement
          ? "overflow-hidden rounded-[24px] border border-[#d9e4d3] bg-[#edf4e8] p-6 shadow-[0_14px_34px_rgba(17,24,39,0.06)] sm:p-8"
          : "overflow-hidden rounded-[22px] border border-[#d9e4d3] bg-[#f1f6ed] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:p-7"
      }
      aria-label="Local AI implementation help"
    >
      <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#647456]">
            Local AI implementation
          </p>
          <p className="mt-3 text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl">
            Want someone to build this for you?
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f6872] sm:text-base">
            Black Scarab can connect you with vetted Local AI specialists for
            private AI systems, from personal setups to business and enterprise
            deployments.
          </p>
        </div>
        <a
          href={`/local-ai/deployment?${params.toString()}`}
          data-analytics-event="local-ai-cta"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#273142] focus:outline-none focus:ring-2 focus:ring-[#7c8b6b] focus:ring-offset-2"
        >
          Discuss Your Project →
        </a>
      </div>
    </aside>
  );
}
