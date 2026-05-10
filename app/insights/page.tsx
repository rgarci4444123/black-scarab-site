import Link from "next/link";
import EmailSignupCard from "@/components/email-signup-card";
import SiteHeader from "@/components/site-header";
import { insights } from "../insights-data";

export default function InsightsPage() {
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
          ctaHref="/intake"
        />

        <section className="px-6 py-14 text-center md:px-10 md:py-18">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
            Insights
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Articles and ideas from Black Scarab
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6b7280]">
            Perspectives on edge AI, industrial deployment, and the sectors
            shaping the future of real-world operations.

          </p>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-12 md:px-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((insight) => (
              <Link
                key={insight.title}
                href={insight.href}
                target={insight.kind === "external" ? "_blank" : undefined}
                rel={insight.kind === "external" ? "noreferrer" : undefined}
                className="overflow-hidden rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                {insight.image ? (
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="h-64 w-full object-cover object-top"
                  />
                ) : null}
                <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                  {insight.published}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                  {insight.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-[#6b7280]">
                  {insight.summary}
                </p>
                <p className="mt-6 text-sm font-medium text-[#111827]">
                  {insight.ctaLabel}
                </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/intake"
              className="inline-block rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
            >
              Contact Black Scarab
            </Link>
          </div>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-5xl">
            <EmailSignupCard
              source="insights-index"
              title="Get new Black Scarab edge AI updates"
              description="Subscribe for new platform guides, deployment insights, and real-world case studies as soon as they are published."
            />
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
