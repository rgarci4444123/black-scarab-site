import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "About Black Scarab",
  description:
    "Learn how Black Scarab approaches AI infrastructure, edge intelligence, and real-world industrial deployment across critical sectors.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/about`,
    title: "About Black Scarab",
    description:
      "Black Scarab builds practical AI infrastructure systems for industries that need local intelligence, resilient deployment, and operational fit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Black Scarab",
    description:
      "Black Scarab builds practical AI infrastructure systems for industries that need local intelligence, resilient deployment, and operational fit.",
  },
};

export default function AboutPage() {
  const navLinks = [
    { label: "Products", href: "/catalog", isPage: true },
    { label: "Models", href: "/models", isPage: true },
    { label: "Insights", href: "/insights", isPage: true },
    { label: "About", href: "/about", isPage: true },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Black Scarab",
    url: `${baseUrl}/about`,
    about: {
      "@type": "Organization",
      name: "Black Scarab",
      url: baseUrl,
      email: "info@blackscarab.ai",
      sameAs: ["https://www.linkedin.com/company/black-scarab/"],
    },
  };

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={navLinks}
          ctaLabel="Get Started"
          ctaHref="/intake"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-18">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              About
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Built for real-world industrial deployment
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6b7280]">
              Black Scarab designs AI infrastructure systems for operators who
              need reliable edge compute, field-ready sensing, and solutions
              that fit actual workflows instead of demo environments.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                What We Build
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                We connect edge compute, models, sensors, cameras, robotics,
                and deployment planning into cohesive systems for demanding
                environments.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                How We Work
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                We focus on practical architecture, resilient local processing,
                and hardware-software fit so the final system works where
                operations actually happen.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Where We Focus
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                Agriculture, manufacturing, logistics, healthcare, retail, and
                smart city use cases where latency, connectivity, safety, and
                operational reliability matter.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-lg leading-8 text-[#4b5563]">
            <p>
              Black Scarab exists to make applied AI more deployable. Many
              organizations do not need another generic software layer. They
              need systems that can live on-site, ingest data locally, and stay
              useful under real constraints like patchy connectivity, harsh
              environments, and strict operational timing.
            </p>
            <p>
              That is why our work centers on infrastructure, not just models.
              We think in terms of field devices, compute placement, power,
              sensing, workflow integration, and the commercial realities of
              scaling technology across facilities, fleets, or distributed
              sites.
            </p>
            <p>
              Our articles and case studies reflect that same lens: practical,
              deployment-oriented, and grounded in real examples from the
              industries adopting edge AI across global markets.
            </p>
          </div>
        </section>

        <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Start planning your system
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              If you are evaluating an edge AI system for real operations, we
              can help scope the right combination of infrastructure, sensing,
              and deployment strategy.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
                Explore Insights
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
