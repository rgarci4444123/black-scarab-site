import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Lead Capture Systems | Black Scarab",
  description:
    "Black Scarab sets up AI-powered lead capture systems that respond instantly to leads, automate follow-up, and improve booking flow for growing businesses.",
  alternates: {
    canonical: "/lead-capture",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/lead-capture`,
    title: "Lead Capture Systems | Black Scarab",
    description:
      "AI-powered lead response and follow-up systems for businesses that want faster response times and higher conversion without more manual work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Capture Systems | Black Scarab",
    description:
      "AI-powered lead response and follow-up systems for businesses that want faster response times and higher conversion without more manual work.",
  },
};

export default function LeadCapturePage() {
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
          ctaHref="/intake?track=lead-capture"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-18">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Lead Capture Systems
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              AI-powered lead response for growing businesses
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6b7280]">
              We set up simple systems that respond instantly to new leads,
              automate follow-up, organize lead tracking, and help businesses
              book more calls without adding more manual work.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/intake?track=lead-capture"
                className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Get Your System Set Up
              </Link>
              <Link
                href="/"
                className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
              >
                Back to Black Scarab
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Outcome
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                Respond to leads instantly and reduce the lag that costs you
                calls and conversions.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Setup
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                Fast implementation using a focused, repeatable setup that does
                not require a custom software project.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Pricing
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                Setup from $1,000 with optional ongoing support from $50 per
                month.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Delivery
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                Built using the same operational design principles behind our
                larger intelligence systems.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-[#dde7d7] bg-[#edf4e8] p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                What You Get
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                A working lead response system, not a pile of tools
              </h2>
              <ul className="mt-6 space-y-4 text-base leading-7 text-[#46533f]">
                <li>Instant response to new inbound leads</li>
                <li>Automated follow-up flow</li>
                <li>Organized lead tracking</li>
                <li>Call booking workflow</li>
                <li>Simple handoff so you can see it working live</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#e8e4dc] bg-[#fffdfa] p-8 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                Process
              </p>
              <ol className="mt-6 space-y-4 text-sm leading-7 text-[#6b7280]">
                <li>1. Quick discovery to understand your lead flow</li>
                <li>2. Fast proposal and payment before build</li>
                <li>3. Setup in 48 to 72 hours</li>
                <li>4. Live handoff and optional monthly support</li>
              </ol>
              <Link
                href="/intake?track=lead-capture"
                className="mt-8 inline-block rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Start the Intake
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              When It Fits
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Best for businesses that want speed, not a giant build
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              If you need faster response to inbound leads and a cleaner path
              from contact to booked call, this is the fastest way to work with
              Black Scarab. If you need a larger operational AI system, use the
              advanced intake instead.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/intake?track=lead-capture"
                className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Set Up Lead Capture
              </Link>
              <Link
                href="/intake?track=advanced"
                className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
              >
                Need an Advanced System?
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
