"use client";

import Link from "next/link";
import { useState } from "react";
import { insights } from "./insights-data";

type IndustryCard = {
  title: string;
  description: string;
  price: string;
};

type Industry = {
  key: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  solutionTitle: string;
  solutionDescription: string;
  cta: string;
  cards: IndustryCard[];
};

const industries: Industry[] = [
  {
    key: "agriculture",
    label: "Agriculture",
    eyebrow: "Featured Industry",
    title: "Agriculture Technology",
    subtitle: "Optimize your farming operations with modular AI infrastructure.",
    image: "/agriculture-hero.jpg",
    imageAlt: "Agriculture technology system",
    solutionTitle: "Precision Farming System",
    solutionDescription:
      "Advanced drone, AI computer, and smart sensors for crop monitoring, environmental analysis, and intelligent field operations.",
    cta: "Design My System",
    cards: [
      {
        title: "X-AGRO DRONE",
        description: "Aerial crop monitoring and mapping",
        price: "$2,500",
      },
      {
        title: "JETSON MODULE",
        description: "Edge AI processing power",
        price: "$799",
      },
      {
        title: "SOIL SENSORS",
        description: "Climate and soil data sensors",
        price: "$299",
      },
    ],
  },
  {
    key: "logistics",
    label: "Transportation & Logistics",
    eyebrow: "Featured Industry",
    title: "Transportation & Logistics",
    subtitle:
      "Improve fleet responsiveness with localized intelligence at the edge.",
    image: "/article-images/logistics-latam.png",
    imageAlt: "Transportation and logistics edge AI illustration",
    solutionTitle: "Reflexive Fleet System",
    solutionDescription:
      "Edge AI systems for routing visibility, fleet monitoring, and real-time decision support across logistics networks.",
    cta: "Design My Logistics Stack",
    cards: [
      {
        title: "FLEET EDGE NODE",
        description: "Vehicle-side compute for real-time decisions",
        price: "$1,250",
      },
      {
        title: "SMART VISION CAMERA",
        description: "On-route monitoring and event detection",
        price: "$480",
      },
      {
        title: "OPERATIONS DASHBOARD",
        description: "Centralized fleet intelligence and alerts",
        price: "$899",
      },
    ],
  },
  {
    key: "manufacturing",
    label: "Manufacturing",
    eyebrow: "Featured Industry",
    title: "Manufacturing Intelligence",
    subtitle:
      "Bring edge AI directly onto the factory floor for faster operational insight.",
    image: "/article-images/manufacturing-latam.png",
    imageAlt: "Manufacturing edge AI system",
    solutionTitle: "Autonomous Factory Stack",
    solutionDescription:
      "Machine vision, edge compute, and industrial monitoring systems built for nearshoring-era factories across LatAm.",
    cta: "Design My Factory Stack",
    cards: [
      {
        title: "VISION INSPECTION UNIT",
        description: "Real-time quality control at the edge",
        price: "$1,499",
      },
      {
        title: "INDUSTRIAL AI NODE",
        description: "Localized inference for robotics and sensors",
        price: "$1,099",
      },
      {
        title: "LINE ANALYTICS SUITE",
        description: "Production visibility and operational alerts",
        price: "$950",
      },
    ],
  },
  {
    key: "healthcare",
    label: "Healthcare",
    eyebrow: "Featured Industry",
    title: "Decentralized Healthcare Systems",
    subtitle:
      "Push intelligence closer to care with portable, edge-powered medical systems.",
    image: "/article-images/healthcare-latam.png",
    imageAlt: "Healthcare edge AI system",
    solutionTitle: "Mobile Diagnostics Platform",
    solutionDescription:
      "Edge AI for handheld diagnostics, rural monitoring, and decentralized care delivery where connectivity is limited.",
    cta: "Design My Healthcare System",
    cards: [
      {
        title: "PORTABLE AI DEVICE",
        description: "On-device inference for remote diagnostics",
        price: "$1,350",
      },
      {
        title: "SMART HEALTH SENSOR",
        description: "Continuous vital monitoring at the edge",
        price: "$420",
      },
      {
        title: "CARE RESPONSE PORTAL",
        description: "Clinical insights and distributed coordination",
        price: "$780",
      },
    ],
  },
  {
    key: "retail",
    label: "Retail",
    eyebrow: "Featured Industry",
    title: "Responsive Retail Infrastructure",
    subtitle:
      "Make physical storefronts smarter with localized intelligence and faster operational feedback.",
    image: "/article-images/retail-latam.png",
    imageAlt: "Retail edge AI system",
    solutionTitle: "Responsive Storefront Platform",
    solutionDescription:
      "Edge AI for occupancy awareness, storefront intelligence, and real-time retail operations across distributed locations.",
    cta: "Design My Retail Stack",
    cards: [
      {
        title: "STORE VISION NODE",
        description: "Foot traffic and in-store movement awareness",
        price: "$1,150",
      },
      {
        title: "SMART SENSOR GRID",
        description: "Localized monitoring for real-time operations",
        price: "$520",
      },
      {
        title: "RETAIL INTELLIGENCE HUB",
        description: "Actionable insights across storefronts",
        price: "$890",
      },
    ],
  },
];

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
                href="#contact"
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
              <a
                href="#contact"
                className="rounded-full border border-[#e5e7eb] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
              >
                Talk to Us
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
                href="#contact"
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
                  href="mailto:info@blackscarab.ai"
                  className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  info@blackscarab.ai
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
            © 2026 Black Scarab. AI infrastructure for modern industry.
          </footer>
        </div>
      </div>
    </main>
  );
}
