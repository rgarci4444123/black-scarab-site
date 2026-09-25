import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GlossaryExplorer from "@/components/glossary-explorer";
import SiteHeader from "@/components/site-header";
import {
  getGlossaryAnchor,
  glossaryCategories,
  glossaryLastReviewed,
  glossaryTerms,
} from "@/lib/physical-ai-glossary";
import { authorPortraitSrc } from "@/lib/site-author";

const baseUrl = "https://www.blackscarab.ai";
const canonicalPath = "/resources/physical-ai-glossary";
const title =
  "Physical AI Glossary: 444 AI, Robotics and Hardware Terms Explained";
const description =
  "Clear definitions for 444 physical AI terms covering robotics, chips, memory, sensors, actuators, models, control systems, edge computing, and industrial safety.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    type: "article",
    url: `${baseUrl}${canonicalPath}`,
    title,
    description,
    images: [
      {
        url: `${baseUrl}/images/social/black-scarab-insights.png`,
        width: 1200,
        height: 630,
        alt: "Black Scarab physical AI glossary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BlackScarabAI",
    title,
    description,
    images: [`${baseUrl}/images/social/black-scarab-insights.png`],
  },
};

const referenceLinks = [
  {
    label: "Google DeepMind on Vision Language Action models",
    url: "https://deepmind.google/en/models/gemini-robotics/gemini-robotics/",
  },
  {
    label: "NVIDIA Physical AI glossary",
    url: "https://www.nvidia.com/en-gb/glossary/generative-physical-ai/",
  },
  {
    label: "Intel processor guide from CPUs to ASICs",
    url: "https://www.intel.com/content/www/us/en/newsroom/tech101/client-computing/processor-guidebook-the-basics-from-cpus-to-asics.html",
  },
  {
    label: "Micron guide to High Bandwidth Memory",
    url: "https://www.micron.com/products/memory/hbm",
  },
  {
    label: "ROS 2 concepts and communication guidance",
    url: "https://docs.ros.org/en/ros2_documentation/kilted/How-To-Guides/Topics-Services-Actions.html",
  },
  {
    label: "NIST AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  {
    label: "International Federation of Robotics",
    url: "https://ifr.org/industrial-robots",
  },
  {
    label: "Rockwell Automation industrial glossary",
    url: "https://literature.rockwellautomation.com/idc/groups/literature/documents/qr/ag-qr071_-en-p.pdf",
  },
  {
    label: "OPC Foundation Unified Architecture specification",
    url: "https://reference.opcfoundation.org/specs/OPC-10000-1/4",
  },
  {
    label: "ISO 10218 industrial robot safety standard",
    url: "https://www.iso.org/standard/73933.html",
  },
];

export default function PhysicalAiGlossaryPage() {
  const pageUrl = `${baseUrl}${canonicalPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": `${pageUrl}#glossary`,
        name: title,
        description,
        url: pageUrl,
        dateModified: "2026-09-25",
        creator: {
          "@type": "Person",
          name: "Rodolfo Garcia Calderoni, CFA",
          url: `${baseUrl}/about`,
        },
        publisher: {
          "@type": "Organization",
          name: "Black Scarab",
          url: baseUrl,
        },
        hasDefinedTerm: glossaryTerms.map((item) => ({
          "@type": "DefinedTerm",
          name: item.acronym
            ? `${item.acronym}: ${item.term}`
            : item.term,
          description: item.definition,
          inDefinedTermSet: `${pageUrl}#glossary`,
          url: `${pageUrl}#${getGlossaryAnchor(item)}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: `${baseUrl}/insights`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Physical AI Glossary",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f4f2ec] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-[#dfded7] bg-[#fbfaf6] shadow-[0_24px_70px_rgba(15,23,42,0.055)] sm:rounded-[30px]">
        <SiteHeader homeHref="/" />

        <article>
          <header className="relative overflow-hidden border-b border-[#e8e4dc] px-6 py-14 md:px-10 md:py-20 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute right-[-8rem] top-[-9rem] h-[28rem] w-[28rem] rounded-full border-[70px] border-[#dfe5da]/60"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[-10rem] left-[38%] h-[19rem] w-[19rem] rounded-full border-[48px] border-[#eee9de]/75"
            />

            <div className="relative mx-auto max-w-6xl">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm text-[#7a8178]"
              >
                <Link href="/" className="transition hover:text-[#202b22]">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link
                  href="/insights"
                  className="transition hover:text-[#202b22]"
                >
                  Insights
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-[#485247]">Reference Guide</span>
              </nav>

              <div className="mt-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718066]">
                    Black Scarab Reference Guide
                  </p>
                  <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#121812] sm:text-6xl lg:text-7xl">
                    The Physical AI Glossary
                  </h1>
                  <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5e675f] md:text-xl md:leading-9">
                    444 clear definitions for the processors, models,
                    sensors, actuators, software, and engineering ideas behind
                    intelligent machines.
                  </p>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-[#747b73]">
                    Built for curious readers, operators, investors, students,
                    and buyers who want the real meaning without needing an
                    engineering degree.
                  </p>
                </div>

                <div className="rounded-[26px] border border-[#d7ddcf] bg-[#e9eee5]/90 p-6 backdrop-blur">
                  <p className="font-mono text-7xl font-semibold tracking-[-0.08em] text-[#2e3d31]">
                    444
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#526050]">
                    essential terms
                  </p>
                  <div className="mt-6 border-t border-[#cfd7ca] pt-5">
                    <p className="text-sm leading-6 text-[#697267]">
                      {glossaryCategories.length} categories spanning the full
                      physical AI stack, from models and compute to machines,
                      deployment, and safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#747b73]">
                <span>By Rodolfo Garcia Calderoni, CFA</span>
                <span className="hidden text-[#bbbcb7] sm:inline">|</span>
                <span>Last reviewed {glossaryLastReviewed}</span>
              </div>
            </div>
          </header>

          <div className="px-6 py-12 md:px-10 md:py-16 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <GlossaryExplorer />
            </div>
          </div>

          <section className="border-t border-[#e8e4dc] bg-[#f1f0ea] px-6 py-14 md:px-10 lg:px-16">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718066]">
                  Editorial method
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#182019]">
                  Clear first, complete second
                </h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-[#626a62]">
                  <p>
                    The glossary uses established technical meanings, then
                    translates them into the language of real machines. It does
                    not treat a vendor name as an industry standard or turn a
                    peak specification into a promise of real performance.
                  </p>
                  <p>
                    Some terms vary by company, industry, or engineering
                    discipline. Where that happens, the definition focuses on
                    the practical meaning a reader is most likely to encounter.
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#dedbd2] bg-[#fffdfa] p-6">
                <h2 className="text-lg font-semibold text-[#202920]">
                  Selected references
                </h2>
                <ul className="mt-4 space-y-3">
                  {referenceLinks.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm leading-6 text-[#526147] underline decoration-[#b9c7b2] underline-offset-4 transition hover:text-[#111827]"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-[#e8e4dc] px-6 py-14 md:px-10 lg:px-16">
            <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 rounded-[26px] border border-[#e5e1d8] bg-[#fffdfa] p-6 sm:flex-row sm:items-center md:p-8">
              <Image
                src={authorPortraitSrc}
                alt="Rodolfo Garcia Calderoni"
                width={112}
                height={112}
                className="h-24 w-24 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77856d]">
                  About the author
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[#172019]">
                  Rodolfo Garcia Calderoni, CFA
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#687068]">
                  Founder of Black Scarab, covering the companies,
                  technologies, capital, and industrial systems shaping the
                  physical AI economy.
                </p>
                <Link
                  href="/about"
                  className="mt-4 inline-block text-sm font-semibold text-[#42513f] underline decoration-[#b9c7b2] underline-offset-4"
                >
                  Meet Rodolfo
                </Link>
              </div>
            </div>
          </section>
        </article>

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
