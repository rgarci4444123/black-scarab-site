import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EmailSignupCard from "@/components/email-signup-card";
import SiteHeader from "@/components/site-header";
import { newsUpdates } from "@/lib/news";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Physical AI News",
  description:
    "Timely, sourced reporting on the machines, models, infrastructure, and market signals shaping physical AI.",
  authors: [{ name: "Rodolfo Garcia Calderoni, CFA", url: "/about" }],
  alternates: {
    canonical: "/news",
    types: {
      "application/rss+xml": "https://www.blackscarab.ai/news/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/news`,
    title: "Physical AI News | Black Scarab",
    description:
      "Timely, sourced reporting on the machines, models, infrastructure, and market signals shaping physical AI.",
  },
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          showIndustries={false}
          ctaLabel="Discuss an Opportunity"
          ctaHref="/intake"
        />

        <section className="border-b border-[#dce5d6] bg-[#111810] px-6 py-10 text-white md:px-10 md:py-12 lg:px-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Black Scarab
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Physical AI News
              </h1>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#d3dbcf] sm:text-right">
              Timely, sourced reporting on the machines, models,
              infrastructure, and market signals moving AI into the physical world.
            </p>
          </div>
        </section>

        <section className="px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="border-b border-[#e5e0d8] pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#647456]">
                Latest reporting
              </p>
            </div>

            <div className="divide-y divide-[#e8e3da]">
              {newsUpdates.map((update, index) => (
                <article
                  key={update.slug}
                  className="grid gap-6 py-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-9 md:py-10"
                >
                  <Link
                    href={`/news/${update.slug}`}
                    className={
                      update.image
                        ? "group relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#dde7d7]"
                        : "group flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[18px] bg-[#111810] p-6 text-white"
                    }
                    aria-label={`Read ${update.title}`}
                  >
                    {update.image ? (
                      <Image
                        src={update.image}
                        alt={update.imageAlt ?? ""}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 768px) 260px, calc(100vw - 48px)"
                        className="object-cover transition duration-300 group-hover:scale-[1.025]"
                      />
                    ) : (
                      <>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b8c7ab]">
                          Physical AI brief
                        </span>
                        <span className="max-w-[12rem] text-3xl font-semibold tracking-[-0.04em]">
                          22 DoF
                        </span>
                        <span className="text-sm leading-6 text-[#ccd6c6]">
                          Vision, touch, and direct drive control.
                        </span>
                      </>
                    )}
                  </Link>

                  <div className="flex flex-col items-start">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#647456]">
                      <span>{update.category}</span>
                      <span aria-hidden="true" className="text-[#c7bfb3]">·</span>
                      <time dateTime={update.publishedDate}>{update.publishedLabel}</time>
                    </div>
                    <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                      <Link
                        href={`/news/${update.slug}`}
                        className="transition hover:text-[#526147]"
                      >
                        {update.title}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-[#59636e] sm:text-lg">
                      {update.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#6f7780]">
                      <span>By {update.author.name}</span>
                      <span aria-hidden="true" className="text-[#c7bfb3]">|</span>
                      <span>{update.readingTime}</span>
                    </div>
                    <Link
                      href={`/news/${update.slug}`}
                      className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[#d7d1c6] px-5 py-2.5 text-sm font-medium transition hover:border-[#aebba5] hover:bg-[#edf4e8]"
                    >
                      Read article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-5xl">
            <EmailSignupCard
              source="news-index"
              title="Follow the physical AI signal"
              description="Get concise Black Scarab reporting on robotics, embodied AI, industrial deployment, and the infrastructure moving intelligence into the physical world."
            />
          </div>
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#626b75] md:px-10">
          © 2026 Black Scarab. Physical AI market development for Mexico.
        </footer>
      </div>
    </main>
  );
}
