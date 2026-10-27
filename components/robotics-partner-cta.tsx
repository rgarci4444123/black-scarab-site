type RoboticsPartnerCtaProps = {
  articleSlug: string;
  description?: string;
};

export default function RoboticsPartnerCta({
  articleSlug,
  description = "From NVIDIA Isaac and simulation to onboard compute and deployment, finding the right technology partners can be challenging. Tell us what you’re building, and we’ll explore relevant companies, tools, and potential connections across the Physical AI ecosystem.",
}: RoboticsPartnerCtaProps) {
  const articleUrl = `https://www.blackscarab.ai/insights/${articleSlug}`;
  const params = new URLSearchParams({
    source_article: articleSlug,
    source_url: articleUrl,
    cta_placement: "end_of_article",
  });

  return (
    <aside
      data-robotics-partner-cta
      data-article-identifier={articleSlug}
      data-article-url={articleUrl}
      data-cta-placement="end_of_article"
      className="overflow-hidden rounded-[24px] border border-[#d9e4d3] bg-[#edf4e8] p-6 shadow-[0_14px_34px_rgba(17,24,39,0.06)] sm:p-8"
      aria-label="Robotics project inquiry"
    >
      <h2 className="text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl">
        Building a robot? Find the right expertise.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5f6872] sm:text-base">
        {description}
      </p>
      <a
        href={`/robotics/partner?${params.toString()}`}
        data-analytics-event="robotics-partner-cta"
        className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#273142] focus:outline-none focus:ring-2 focus:ring-[#7c8b6b] focus:ring-offset-2"
      >
        Find a Robotics Partner →
      </a>
      <p className="mt-3 text-xs leading-6 text-[#5f6872]">
        Free to submit. Introductions depend on project fit and availability.
      </p>
    </aside>
  );
}
