import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import { getIndustryBySlug, industries } from "@/lib/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

const baseUrl = "https://www.blackscarab.ai";

const navItems = [
  { label: "Technology", href: "/catalog", isPage: true },
  { label: "Insights", href: "/insights", isPage: true },
  { label: "About", href: "/about", isPage: true },
];

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

  const description =
    "A Black Scarab research brief on the operating challenges, technology landscape, and real-world deployment patterns shaping " +
    industry.label +
    ".";

  return {
    title: industry.label + " Technology Research",
    description,
    alternates: {
      canonical: "/industries/" + industry.slug,
    },
    openGraph: {
      type: "website",
      url: baseUrl + "/industries/" + industry.slug,
      title: industry.label + " Technology Research | Black Scarab",
      description,
      images: [
        {
          url: industry.image,
          alt: industry.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.label + " Technology Research | Black Scarab",
      description,
      images: [industry.image],
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const pageDescription =
    "A research view of the operating constraints, representative technologies, and deployment patterns shaping " +
    industry.label +
    ".";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: industry.label + " Technology Research",
    description: pageDescription,
    url: baseUrl + "/industries/" + industry.slug,
    isPartOf: {
      "@type": "WebSite",
      name: "Black Scarab",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: industry.label,
    },
  };

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={navItems}
          showIndustries={false}
          ctaLabel="Discuss an Opportunity"
          ctaHref="/intake"
        />

        <section className="relative overflow-hidden bg-[#10150f] px-6 py-14 text-white md:px-10 md:py-20 lg:px-14">
          <div className="pointer-events-none absolute -left-28 top-0 h-96 w-96 rounded-full bg-[#9eb18e]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#dce7d2]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Industry research · {industry.label}
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl lg:text-[3.9rem]">
                {industry.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#d7ddd4] sm:text-lg">
                {pageDescription}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aeb8aa]">
                Use this brief to frame a better market conversation—not as a
                substitute for technical validation, engineering, or provider
                due diligence.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/intake"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111810] transition hover:bg-[#edf4e8]"
                >
                  Discuss an Opportunity
                </Link>
                <Link
                  href={industry.relatedInsightHref}
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {industry.relatedInsightCtaLabel ?? "Read Related Insight"}
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] border border-white/15 bg-[#dfe7d8] shadow-[0_28px_80px_rgba(0,0,0,0.25)]">
              <Image
                src={industry.image}
                alt={industry.imageAlt}
                fill
                preload
                sizes="(min-width: 1280px) 580px, (min-width: 1024px) 48vw, calc(100vw - 48px)"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10150f]/65 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d2ddcc]">
                    Black Scarab brief
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                    Technology in operating context
                  </p>
                </div>
                <span className="hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium text-white backdrop-blur sm:inline-flex">
                  Research, not system design
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Operating context
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Start with the constraint, not the product.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#606975]">
                These are recurring conditions that can shape whether a
                technology is relevant, how its value case should be framed,
                and which stakeholders need to evaluate it.
              </p>
            </div>

            <div className="space-y-3">
              {industry.challenges.map((challenge, index) => (
                <article
                  key={challenge}
                  className="grid gap-3 rounded-[22px] border border-[#e3ded5] bg-white p-5 sm:grid-cols-[48px_1fr] sm:items-start sm:gap-5 sm:p-6"
                >
                  <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#647456]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-[#59636e]">
                    {challenge}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Technology landscape
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Representative technologies worth understanding
              </h2>
              <p className="mt-5 text-base leading-8 text-[#606975] sm:text-lg">
                These examples help illustrate the hardware and infrastructure
                categories that may appear in a {industry.label} use case. They
                are research references, not a prescribed bill of materials.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {industry.cards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group flex min-h-full flex-col rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718064]">
                    {card.detail}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#66707b]">
                    {card.description}
                  </p>
                  <p className="mt-7 text-sm font-medium text-[#111827]">
                    View technology profile →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dce5d6] bg-[#edf4e8] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                  Operating stack
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Common roles inside the system
                </h2>
                <p className="mt-5 text-base leading-8 text-[#596453]">
                  A useful evaluation looks beyond a single device. Each layer
                  has a different job in capturing, processing, or translating
                  physical-world data into an operational decision.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {industry.devices.map((device, index) => (
                  <article
                    key={device.name}
                    className="grid gap-4 rounded-[22px] border border-[#d5dfce] bg-white/70 p-5 lg:grid-cols-[48px_0.8fr_1.2fr] lg:items-start lg:gap-5 lg:p-6"
                  >
                    <span className="font-mono text-xs font-semibold tracking-[0.14em] text-[#647456]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold tracking-[-0.015em]">
                        {device.name}
                      </h3>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#647456]">
                        {device.deploymentRole}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-[#626d5d]">
                      {device.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                  Use-case patterns
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Where the technology may create value
                </h2>
                <p className="mt-5 text-base leading-8 text-[#606975]">
                  Each opportunity still requires site-specific validation,
                  economics, stakeholder alignment, and a qualified technical
                  delivery plan.
                </p>
              </div>
              <Link
                href="/intake"
                className="w-fit rounded-full border border-[#d7d1c6] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f6f4ef]"
              >
                Discuss a Use Case
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {industry.scenarios.map((scenario, index) => (
                <article
                  key={scenario.title}
                  className="rounded-[26px] border border-[#e3ded5] bg-[#fffdfa] p-7 sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#647456]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[#dce4d6]" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em]">
                    {scenario.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#66707b]">
                    {scenario.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Real-world evidence
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Deployment stories worth studying
              </h2>
              <p className="mt-5 text-base leading-8 text-[#606975]">
                Case studies help separate a compelling technology narrative
                from demonstrated operational value.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {industry.caseStudies.map((caseStudy) =>
                caseStudy.href ? (
                  <Link
                    key={caseStudy.title}
                    href={caseStudy.href}
                    className="group rounded-[26px] border border-[#e8e4dc] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] sm:p-8"
                  >
                    <h3 className="text-xl font-semibold leading-7 tracking-[-0.02em]">
                      {caseStudy.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#66707b]">
                      {caseStudy.summary}
                    </p>
                    <p className="mt-6 text-sm font-medium leading-6 text-[#111827]">
                      {caseStudy.impact}
                    </p>
                    <p className="mt-7 text-sm font-medium text-[#647456]">
                      Read case study →
                    </p>
                  </Link>
                ) : (
                  <article
                    key={caseStudy.title}
                    className="rounded-[26px] border border-[#e8e4dc] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:p-8"
                  >
                    <h3 className="text-xl font-semibold leading-7 tracking-[-0.02em]">
                      {caseStudy.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#66707b]">
                      {caseStudy.summary}
                    </p>
                    <p className="mt-6 text-sm font-medium leading-6 text-[#111827]">
                      {caseStudy.impact}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[30px] border border-[#20271f] bg-[#111810] p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8c7ab]">
                Continue the research
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                {industry.relatedInsightTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-[#d1d8ce]">
                Explore the evidence behind this brief, or start a conversation
                about a technology or operating problem relevant to Mexico.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-col">
              <Link
                href={industry.relatedInsightHref}
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-[#111810] transition hover:bg-[#edf4e8]"
              >
                {industry.relatedInsightCtaLabel ?? "Read Related Insight"}
              </Link>
              <Link
                href="/intake"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                Discuss an Opportunity
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#626b75] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>
              © 2026 Black Scarab. Physical AI market development for Mexico.
            </span>
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
