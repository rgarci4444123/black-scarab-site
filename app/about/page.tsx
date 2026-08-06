import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

const baseUrl = "https://www.blackscarab.ai";

const processSteps = [
  {
    number: "01",
    title: "Understand the technology",
    description:
      "Study the product, deployment evidence, commercial maturity, and the problem it can credibly solve.",
  },
  {
    number: "02",
    title: "Qualify the opportunity",
    description:
      "Test the use case, economic logic, buyer readiness, and fit with Mexico's operating environment.",
  },
  {
    number: "03",
    title: "Map the stakeholders",
    description:
      "Identify the decision-makers, technical evaluators, channel partners, and delivery capabilities required.",
  },
  {
    number: "04",
    title: "Bring the parties together",
    description:
      "Create focused introductions around a defined problem, a credible solution, and a useful next step.",
  },
  {
    number: "05",
    title: "Form the opportunity",
    description:
      "Support early commercial coordination so the provider and operator can determine whether to proceed.",
  },
  {
    number: "06",
    title: "Hand off technical delivery",
    description:
      "The technology provider and qualified implementation partners lead validation, deployment, and support.",
  },
];

export const metadata: Metadata = {
  title: "About Black Scarab & Founder Rodolfo Garcia Calderoni",
  description:
    "Meet Rodolfo Garcia Calderoni, CFA, founder of Black Scarab, a physical AI market-development firm connecting technology companies with industrial opportunities in Mexico.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/about`,
    title: "Meet the Founder | Black Scarab",
    description:
      "Black Scarab connects physical AI companies with industrial opportunities in Mexico through research, market development, and strategic introductions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Founder | Black Scarab",
    description:
      "Physical AI market development and strategic introductions for Mexico.",
  },
};

export default function AboutPage() {
const navLinks = [
    { label: "Insights", href: "/insights", isPage: true },
    { label: "About", href: "/about", isPage: true },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Black Scarab and its founder",
    url: `${baseUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Black Scarab",
      url: baseUrl,
      email: "info@blackscarab.ai",
      description:
        "A physical AI market-development firm connecting technology companies with industrial opportunities in Mexico.",
      areaServed: ["Mexico", "Latin America"],
      founder: {
        "@type": "Person",
        name: "Rodolfo Garcia Calderoni",
        honorificSuffix: "CFA",
        jobTitle: "Founder",
        knowsLanguage: ["English", "Spanish"],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Arizona State University",
        },
      },
      sameAs: ["https://www.linkedin.com/company/black-scarab/"],
    },
  };

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={navLinks}
          showIndustries={false}
          ctaLabel="Discuss an Opportunity"
          ctaHref="/intake"
        />

        <section className="relative overflow-hidden bg-[#10150f] px-6 py-14 text-white md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#9eb18e]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#dce7d2]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.72fr)] lg:items-start">
            <div className="lg:pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Meet the founder
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[4rem]">
                Building the commercial bridge between physical AI and
                industry.
              </h1>

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-[#d7ddd4] sm:text-lg">
                <p>
                  Black Scarab was founded to help physical AI companies
                  navigate Latin America: a high-potential but complex growth
                  market.
                </p>
                <p>
                  Mexico is our initial focus. Relevant use cases span
                  manufacturing, mining, energy, logistics, construction, and
                  infrastructure. But commercial adoption requires more than
                  outstanding engineering. It requires a clear business case,
                  the right local stakeholders, and a credible path to technical
                  delivery.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                {["Mexico first", "Based in Miami", "English + Spanish"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#e6ebe3]"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <aside className="lg:pl-4" aria-label="Founder profile">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/15 bg-[#171b17] shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
                <Image
                  src="/rodolfo-garcia-founder-portrait.png"
                  alt="Rodolfo Garcia Calderoni, founder of Black Scarab"
                  fill
                  preload
                  quality={95}
                  sizes="(min-width: 1024px) 500px, (min-width: 640px) 70vw, calc(100vw - 48px)"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              <div className="mt-7 border-t border-white/15 pt-6">
                <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  Rodolfo Garcia Calderoni, CFA
                </h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8c7ab]">
                  Founder
                </p>
                <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#cbd3c7]">
                  <p>
                    Rodolfo brings more than a decade of experience across
                    financial services, institutional relationships, and
                    international distribution, including roles at J.P. Morgan
                    and, most recently, as Director of International Sales at
                    Global X ETFs.
                  </p>
                  <p>
                    Across those roles, his work centered on market-specific
                    strategy, positioning, partner enablement, and translating
                    complex products and emerging themes, including AI and
                    robotics, for institutional audiences across Latin America
                    and other global markets.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Why Black Scarab
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Great technology does not enter a new market by itself.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#4b5563] sm:text-lg">
              <p>
                Physical AI is moving from compelling demonstrations into real
                industrial workflows. Yet every market has its own business
                culture, procurement pathways, decision-makers, and delivery
                ecosystem. What succeeds in one country cannot simply be copied
                into another.
              </p>
              <p>
                Black Scarab exists to bridge that gap: understand the
                technology, translate its capabilities into a credible business
                case, identify the stakeholders required to move forward, and
                create an opportunity worth pursuing.
              </p>
              <blockquote className="rounded-[24px] border border-[#d7e1d0] bg-[#edf4e8] p-6 text-xl font-medium leading-8 tracking-[-0.015em] text-[#263021] sm:p-8 sm:text-2xl sm:leading-9">
                &ldquo;The value is not the introduction alone. It is the work
                required to make that introduction relevant, timely, and
                actionable.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                How opportunity gets formed
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                From research to a credible commercial next step
              </h2>
              <p className="mt-5 text-base leading-8 text-[#5f6772] sm:text-lg">
                Black Scarab brings a structured market-development lens to the
                space between promising technology and an industrial buyer.
              </p>
            </div>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[#e2ddd4] bg-[#e2ddd4] sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <li key={step.number} className="bg-[#fffdfa] p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#647456]">
                      {step.number}
                    </span>
                    <span className="h-px flex-1 bg-[#dce4d6]" />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#66707b]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-[#dce5d6] bg-[#edf4e8] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                  Clear roles
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Commercial formation and technical delivery are different
                  jobs.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#596453]">
                  Black Scarab is deliberately focused on the front end of the
                  opportunity. That keeps the role clear and brings technical
                  specialists in where their expertise matters most.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[26px] border border-[#d4dfcc] bg-white/75 p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#647456]">
                    Black Scarab leads
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-[#3f4a3a]">
                    {[
                      "Technology scouting and research",
                      "Market and use-case assessment",
                      "Stakeholder and partner mapping",
                      "Strategic introductions",
                      "Early opportunity formation",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#657755]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[26px] border border-[#1e281c] bg-[#111810] p-7 text-white sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8c7ab]">
                    Providers and qualified partners lead
                  </p>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-[#d4dbd1]">
                    {[
                      "Technical validation and engineering",
                      "Installation and systems integration",
                      "Commissioning and training",
                      "Warranties and service commitments",
                      "Ongoing technical support",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8c7ab]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] border border-[#e3ded5] bg-[#faf8f3] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Start a focused conversation
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Have a technology or industrial problem worth exploring?
              </h2>
              <p className="mt-5 text-base leading-8 text-[#606975]">
                Whether you represent a physical AI company evaluating Mexico
                or an industrial operator looking for a credible solution
                landscape, the first step is to establish the fit.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-stretch">
              <Link
                href="/intake"
                className="rounded-full bg-[#111827] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Discuss an Opportunity
              </Link>
              <Link
                href="/insights"
                className="rounded-full border border-[#d7d1c6] bg-white px-6 py-3 text-center text-sm font-medium text-[#111827] transition hover:bg-[#f6f4ef]"
              >
                Explore Research
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
