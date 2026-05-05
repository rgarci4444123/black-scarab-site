import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import { getIndustryBySlug, industries } from "@/lib/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Black Scarab",
    };
  }

  return {
    title: `${industry.label} | Black Scarab`,
    description: industry.subtitle,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={[
            { label: "Products", href: "/catalog", isPage: true },
            { label: "Models", href: "/models", isPage: true },
            { label: "Insights", href: "/insights", isPage: true },
            { label: "About", href: "/about", isPage: true },
          ]}
          ctaLabel="Get Started"
          ctaHref="/intake?track=advanced"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                Industry Page
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {industry.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#6b7280]">
                {industry.subtitle}
              </p>
              <p className="mt-5 text-base leading-7 text-[#6b7280]">
                {industry.overview}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/intake?track=advanced"
                  className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  {industry.cta}
                </Link>
                <Link
                  href={industry.relatedInsightHref}
                  className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
                >
                  {industry.relatedInsightCtaLabel ?? "Read Related Insight"}
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#dde7d7] bg-[#edf4e8] shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
              <img
                src={industry.image}
                alt={industry.imageAlt}
                className="h-[320px] w-full object-cover lg:h-[420px]"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#efeae1] px-6 py-14 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Why It Matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Industry challenges we design for
            </h2>
          </div>

          <div className="space-y-4">
            {industry.challenges.map((challenge) => (
              <div
                key={challenge}
                className="rounded-[22px] border border-[#e8e4dc] bg-[#fffdfa] p-5 text-[#6b7280] shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                {challenge}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#efeae1] px-6 py-14 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Solution Stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {industry.solutionTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              {industry.solutionDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {industry.cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <p className="text-sm font-bold tracking-wide">{card.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {card.description}
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                  {card.detail}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-b border-[#efeae1] px-6 py-14 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                Devices
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Core modules in this system
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {industry.devices.map((device) => (
              <div
                key={device.name}
                className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <p className="text-xl font-semibold tracking-tight">
                  {device.name}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {device.description}
                </p>
                <p className="mt-5 text-sm font-medium text-[#111827]">
                  {device.deploymentRole}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#efeae1] px-6 py-14 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Deployment Scenarios
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              How this infrastructure gets used
            </h2>
          </div>

          <div className="space-y-5">
            {industry.scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <p className="text-xl font-semibold tracking-tight">
                  {scenario.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#efeae1] px-6 py-14 md:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Case Study Direction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Example deployment stories
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {industry.caseStudies.map((caseStudy) => (
              caseStudy.href ? (
                <Link
                  key={caseStudy.title}
                  href={caseStudy.href}
                  className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-xl font-semibold tracking-tight">
                    {caseStudy.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                    {caseStudy.summary}
                  </p>
                  <p className="mt-5 text-sm font-medium text-[#111827]">
                    {caseStudy.impact}
                  </p>
                </Link>
              ) : (
                <div
                  key={caseStudy.title}
                  className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-xl font-semibold tracking-tight">
                    {caseStudy.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                    {caseStudy.summary}
                  </p>
                  <p className="mt-5 text-sm font-medium text-[#111827]">
                    {caseStudy.impact}
                  </p>
                </div>
              )
            ))}
          </div>
        </section>

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Related Insight
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {industry.relatedInsightTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              Explore the broader market perspective behind this industry page.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={industry.relatedInsightHref}
                className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
              >
                {industry.relatedInsightCtaLabel ?? "Read on LinkedIn"}
              </Link>
              <Link
                href="/intake?track=advanced"
                className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Design My System
              </Link>
            </div>
          </div>
        </section>

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
