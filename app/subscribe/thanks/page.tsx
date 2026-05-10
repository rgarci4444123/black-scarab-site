import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Thanks for subscribing",
  description: "You are on the list for future Black Scarab edge AI updates.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SubscribeThanksPage() {
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

        <section className="px-6 py-18 text-center md:px-10 md:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
            Subscribed
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            You&apos;re on the list
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6b7280]">
            You&apos;ll get thoughtful updates on edge AI, physical AI, and real-world systems as new Black Scarab research goes live.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/insights"
              className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
            >
              Read the latest insights
            </Link>
            <Link
              href="/"
              className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
            >
              Back to home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
