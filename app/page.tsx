"use client";

import Link from "next/link";
import { useState } from "react";
import { insights } from "./insights-data";
import { industries } from "@/lib/industries";

export default function Home() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Industries", href: "#industries" },
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const featuredInsights = insights.slice(0, 3);
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#111827]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <header
            id="home"
            className="sticky top-0 z-20 border-b border-[#efeae1] bg-white/92 backdrop-blur"
          >
            <div className="flex items-center justify-between px-6 py-5 md:px-10">
              <a href="#home" className="flex items-center gap-3">
                <img
                  src="/black-scarab-mark.png"
                  alt="Black Scarab logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-base font-bold tracking-tight">
                  BLACK SCARAB
                </span>
              </a>

              <nav className="hidden items-center gap-7 text-sm text-[#6b7280] md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition hover:text-[#111827]"
                  >
                    {item.label}
                  </a>
                ))}
                <Link href="/insights" className="transition hover:text-[#111827]">
                  Insights
                </Link>
              </nav>

              <a
                href="/intake"
                className="rounded-full border border-[#e5e7eb] px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white"
              >
                Get Started
              </a>
            </div>
          </header>

          <section className="relative overflow-hidden px-6 py-18 text-center md:px-10 md:py-24">
            <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(217,229,210,0.5),transparent_70%)]" />
            <p className="relative text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Edge AI Systems
            </p>
            <h1 className="relative mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              AI Infrastructure for Industry
            </h1>
            <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6b7280]">
              Advanced Edge AI systems tailored for agriculture, manufacturing,
              and modern industrial operations.
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#solutions"
                className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Explore Solutions
              </a>
            </div>
          </section>

          <section
            id="industries"
            className="border-y border-[#efeae1] px-6 py-4 md:px-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              {industries.map((industry) => {
                const isActive = industry.key === activeIndustry.key;

                return (
                  <button
                    key={industry.key}
                    type="button"
                    onClick={() => setActiveIndustry(industry)}
                    className={
                      isActive
                        ? "rounded-full border border-[#d8d4cc] bg-white px-4 py-2 font-medium text-[#111827] shadow-sm"
                        : "px-3 py-2 text-[#6b7280] transition hover:text-[#111827]"
                    }
                  >
                    {industry.label}
                  </button>
                );
              })}
            </div>
          </section>

          <section id="solutions" className="px-6 py-14 md:px-10 md:py-18">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                {activeIndustry.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                {activeIndustry.title}
              </h2>
              <p className="mt-3 text-lg text-[#6b7280]">
                {activeIndustry.subtitle}
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#dde7d7] bg-[#edf4e8] shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.imageAlt}
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[360px]"
              />
            </div>

            <div className="mx-auto mt-10 max-w-3xl text-center">
              <h3 className="text-2xl font-semibold md:text-3xl">
                {activeIndustry.solutionTitle}
              </h3>
              <p className="mt-3 text-[#6b7280]">
                {activeIndustry.solutionDescription}
              </p>
              <Link
                href={`/industries/${activeIndustry.slug}`}
                className="mt-5 inline-block text-sm font-medium text-[#111827] underline-offset-4 transition hover:underline"
              >
                View {activeIndustry.label} industry page
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {activeIndustry.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-sm font-bold tracking-wide">{card.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                    {card.description}
                  </p>
                  <p className="mt-6 text-3xl font-bold tracking-tight">
                    {card.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="/intake"
                className="inline-block rounded-full bg-[#111827] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                {activeIndustry.cta}
              </a>
            </div>
          </section>

          <section
            id="about"
            className="grid gap-8 border-t border-[#efeae1] px-6 py-14 md:grid-cols-2 md:px-10"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Built for real-world industrial deployment
              </h2>
            </div>

            <div className="space-y-4 text-[#6b7280]">
              <p>
                Black Scarab develops AI infrastructure systems designed for
                industries that need reliable edge computing, intelligent
                sensing, and scalable deployment.
              </p>
              <p>
                Instead of generic software, we focus on practical systems that
                connect hardware, AI, and operations into one deployable
                solution.
              </p>
            </div>
          </section>

          <section className="border-t border-[#efeae1] px-6 py-14 md:px-10">
            <div className="flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                  Insights
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Research, perspective, and market intelligence
                </h2>
                <p className="mt-4 text-lg leading-8 text-[#6b7280]">
                  A curated selection of Black Scarab articles exploring edge AI,
                  industrial deployment, and the sectors reshaping Latin America.
                </p>
              </div>

              <div>
                <Link
                  href="/insights"
                  className="inline-block rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                >
                  View All Articles
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {featuredInsights.map((insight) => (
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
                      className="h-56 w-full object-cover object-top"
                    />
                  ) : null}
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                      {insight.published}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                      {insight.title}
                    </h3>
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
          </section>

          <section
            id="contact"
            className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Start planning your system
              </h2>
              <p className="mt-4 text-lg text-[#6b7280]">
                Ready to build a tailored AI infrastructure solution for your
                business? Let&apos;s start the conversation.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/intake"
                  className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  Get Started
                </a>
                <a
                  href="#home"
                  className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
                >
                  Back to Top
                </a>
              </div>
            </div>
          </section>

          <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#6b7280] md:px-10">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span>© 2026 Black Scarab. AI infrastructure for modern industry.</span>
              <span className="text-[#c9c1b5]">|</span>
              <span>Based in Miami, FL</span>
              <span className="text-[#c9c1b5]">|</span>
              <a href="mailto:info@blackscarab.ai" className="transition hover:text-[#111827]">
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
      </div>
    </main>
  );
}
