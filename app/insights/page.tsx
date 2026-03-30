import Link from "next/link";
import { insights } from "../insights-data";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <header className="border-b border-[#efeae1] px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/black-scarab-mark.png"
                alt="Black Scarab logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-base font-bold tracking-tight">BLACK SCARAB</span>
            </Link>

            <Link
              href="/intake"
              className="rounded-full border border-[#e5e7eb] px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </header>

        <section className="px-6 py-14 text-center md:px-10 md:py-18">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
            Insights
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Articles and ideas from Black Scarab
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6b7280]">
            Perspectives on edge AI, industrial deployment, and the sectors
            shaping the future of Latin America.

          </p>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-12 md:px-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((insight) => (
              <a
                key={insight.title}
                href={insight.href}
                target="_blank"
                rel="noreferrer"
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
                  Read on LinkedIn
                </p>
                </div>
              </a>
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
      </div>
    </main>
  );
}
