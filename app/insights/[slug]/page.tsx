import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getCaseStudyBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Black Scarab",
    };
  }

  return {
    title: `${article.title} | Black Scarab`,
    description: article.seoDescription,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const article = getCaseStudyBySlug(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(`${article.publishedDate}T12:00:00`).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );
  const industryHref =
    article.industry === "Manufacturing"
      ? "/industries/manufacturing"
      : article.industry === "Agriculture"
        ? "/industries/agriculture"
        : "/insights";
  const industryLinkLabel =
    industryHref === "/insights" ? "Insights index" : `${article.industry} page`;
  const ctaTitle =
    article.industry === "Agriculture"
      ? "Design an agriculture system around your own field conditions"
      : article.industry === "Manufacturing"
        ? "Design a manufacturing system around your own production line"
        : "Scope an edge AI system around your own urban operations";
  const ctaDescription =
    article.industry === "Agriculture"
      ? "If you are evaluating edge AI for agricultural operations, we can help scope the right combination of compute, sensors, aerial systems, and field connectivity."
      : article.industry === "Manufacturing"
        ? "If you are evaluating edge AI for industrial inspection or production monitoring, we can help scope the right combination of machine vision, edge compute, and plant-floor infrastructure."
        : "If you are evaluating edge AI for traffic systems, public safety, or urban sensing, we can help scope the right mix of edge compute, connectivity, and field-ready devices.";
  const secondaryCtaLabel =
    article.industry === "Agriculture"
      ? "Explore Agriculture"
      : article.industry === "Manufacturing"
        ? "Explore Manufacturing"
        : "Back to Insights";

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={[
            { label: "Products", href: "/catalog", isPage: true },
            { label: "Models", href: "/models", isPage: true },
            { label: "Insights", href: "/insights", isPage: true },
            { label: "About", href: "/#about", isPage: true },
          ]}
          ctaLabel="Get Started"
          ctaHref="/intake"
        />

        <article>
          <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-18">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                  Case Study · {article.industry}
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  {article.title}
                </h1>
                <p className="mt-5 text-lg leading-8 text-[#6b7280]">
                  {article.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#6b7280]">
                  <span>Published {formattedDate}</span>
                  <span className="text-[#c9c1b5]">|</span>
                  <Link
                    href={industryHref}
                    className="transition hover:text-[#111827]"
                  >
                    {industryLinkLabel}
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/intake"
                    className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                  >
                    Design My System
                  </Link>
                  <Link
                    href="/insights"
                    className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
                  >
                    Back to Insights
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#dde7d7] bg-[#edf4e8] shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="h-[320px] w-full object-cover lg:h-[440px]"
                />
              </div>
            </div>
          </section>

          <section className="px-6 py-14 md:px-10">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-10">
                {article.sections.map((section, index) => (
                  <section key={`${section.heading ?? "intro"}-${index}`}>
                    {section.heading ? (
                      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {section.heading}
                      </h2>
                    ) : null}
                    <div className="mt-4 space-y-5 text-base leading-8 text-[#4b5563] md:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <aside className="h-fit rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                  At a glance
                </p>
                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                      Industry
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#111827]">
                      {article.industry}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                      Format
                    </p>
                    <p className="mt-2 text-sm font-medium text-[#111827]">
                      Website-native case study
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                      Sources
                    </p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-[#6b7280]">
                      {article.sources.map((source) => (
                        <li key={source}>{source}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                Next Step
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                {ctaTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6b7280]">
                {ctaDescription}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/intake"
                  className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  Design My System
                </Link>
                <Link
                  href={industryHref}
                  className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
                >
                  {secondaryCtaLabel}
                </Link>
              </div>
            </div>
          </section>
        </article>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#6b7280] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. AI infrastructure for modern industry.</span>
            <span className="text-[#c9c1b5]">|</span>
            <span>Based in Miami, FL</span>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="mailto:info@blackscarab.ai"
              className="transition hover:text-[#111827]"
            >
              info@blackscarab.ai
            </a>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="https://www.linkedin.com/company/black-scarab/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#111827]"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
