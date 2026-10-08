import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import {
  physicalAiAdoptionConstituents,
  physicalAiAdoptionIndex,
  physicalAiAdoptionSleeves,
} from "@/lib/physical-ai-adoption-index";
import {
  latestPhysicalAiAdoptionPerformance,
  physicalAiAdoptionPerformance,
} from "@/lib/physical-ai-adoption-performance";
import PerformanceChart from "./performance-chart";
import styles from "./page.module.css";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Physical AI 15 Index",
  description:
    "The Black Scarab Physical AI 15 tracks fifteen established companies positioned across robot platforms, motion, perception, control, edge compute, and autonomy.",
  alternates: {
    canonical: "/indices/physical-ai-adoption-15",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/indices/physical-ai-adoption-15`,
    title: "Black Scarab Physical AI 15",
    description:
      "An equal weight, currency neutral research index covering fifteen public companies across the Physical AI stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Scarab Physical AI 15",
    description:
      "An equal weight, currency neutral research index covering fifteen public companies across the Physical AI stack.",
  },
};

const methodologySteps = [
  {
    label: "Universe",
    title: "Listed operating companies",
    copy: "Eligible companies must trade on a recognized exchange and provide observable daily closing prices and public financial reporting.",
  },
  {
    label: "Relevance",
    title: "Material Physical AI exposure",
    copy: "A company must supply robot systems, motion, actuation, perception, navigation, control, edge compute, or deployment technology used in autonomous machines.",
  },
  {
    label: "Quality",
    title: "Commercial breadth",
    copy: "Selection favors established products, diversified customers, repeat deployments, and exposure that is not dependent on a single pilot program.",
  },
  {
    label: "Construction",
    title: "Equal weighting",
    copy: "Eligible companies are selected for their Physical AI exposure regardless of domicile. Constituents reset to equal weights at quarterly reviews.",
  },
];

const sleeveColors = ["#53684f", "#809578", "#a9bd9f", "#71896b", "#d5dfcf"];

const sleeveSegments = physicalAiAdoptionSleeves.map((sleeve, index) => ({
  ...sleeve,
  color: sleeveColors[index],
  offset: physicalAiAdoptionSleeves
    .slice(0, index)
    .reduce((total, segment) => total + segment.weight, 0),
}));

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M8 2v10m0 0 4-4m-4 4L4 8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function PhysicalAiAdoptionIndexPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: physicalAiAdoptionIndex.name,
    description:
      "A currency neutral equal weight price return research index tracking fifteen companies positioned across the Physical AI adoption stack.",
    creator: {
      "@type": "Organization",
      name: "Black Scarab",
      url: baseUrl,
    },
    dateCreated: "2026-10-07",
    dateModified: "2026-10-07",
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "text/csv",
      contentUrl: `${baseUrl}/data/bspi15-constituents.csv`,
    },
    isAccessibleForFree: true,
  };

  return (
    <main className="min-h-screen bg-[#ecebe4] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(datasetSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-[#d8d8d0] bg-[#fbfaf6] shadow-[0_28px_90px_rgba(15,23,42,0.07)] sm:rounded-[30px]">
        <SiteHeader homeHref="/" />

        <section className={`${styles.heroGrid} relative overflow-hidden bg-[#101710] px-6 py-9 text-white md:px-10 md:py-11 lg:px-14`}>
          <div className="pointer-events-none absolute right-[-8rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full border border-[#9eaf94]/15" />
          <div className="pointer-events-none absolute right-[-2rem] top-[-4rem] h-[24rem] w-[24rem] rounded-full border border-[#9eaf94]/15" />

          <div className="relative mx-auto max-w-[1420px]">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b6c5ac]">
                <span>Black Scarab Indices</span>
                <span className="h-1 w-1 rounded-full bg-[#829276]" />
                <span>{physicalAiAdoptionIndex.symbol}</span>
              </div>
              <h1 className="mt-5 max-w-[18ch] text-[clamp(2.4rem,4.5vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#f5f4ee]">
                {physicalAiAdoptionIndex.shortName}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-[#c5cec1] sm:text-base sm:leading-7">
                Equal weight exposure to fifteen globally listed companies across robotics, motion, perception, control, and autonomous deployment.
              </p>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#3e493b] pt-5 text-xs">
              {[
                ["Symbol", physicalAiAdoptionIndex.symbol],
                ["Constituents", String(physicalAiAdoptionIndex.constituentCount)],
                ["Weighting", physicalAiAdoptionIndex.weighting],
                ["Rebalance", physicalAiAdoptionIndex.rebalance],
                ["Return", "Price return"],
              ].map(([label, value]) => (
                <div key={label} className="min-w-[90px]">
                  <dt className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#7f8f78]">{label}</dt>
                  <dd className="mt-1.5 font-medium text-[#eef1eb]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <nav aria-label="Index page sections" className={`${styles.noPrint} sticky top-[81px] z-20 border-b border-[#d9dbd3] bg-[#fbfaf6]/95 px-5 backdrop-blur md:px-10`}>
          <div className="mx-auto flex max-w-[1420px] items-center gap-7 overflow-x-auto py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#596257]">
            <a href="#performance" className="whitespace-nowrap transition hover:text-[#172017]">Performance</a>
            <a href="#constituents" className="whitespace-nowrap transition hover:text-[#172017]">Constituents</a>
            <a href="#overview" className="whitespace-nowrap transition hover:text-[#172017]">Exposure</a>
            <a href="#methodology" className="whitespace-nowrap transition hover:text-[#172017]">Methodology</a>
            <a href="#documents" className="whitespace-nowrap transition hover:text-[#172017]">Documents</a>
            <a
              href="/data/bspi15-constituents.csv"
              download
              className="ml-auto inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-[#bfc7b9] px-4 text-[#263225] transition hover:bg-[#edf2e9]"
            >
              Holdings CSV <ArrowDown />
            </a>
          </div>
        </nav>

        <section id="performance" className="scroll-mt-36 bg-[#f2f1eb] px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="mx-auto max-w-[1420px]">
            <div className="grid gap-5 border-b border-[#d7d9d1] pb-7 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#71806c]">Price return</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#171c17]">Performance</h2>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-[#626b63] sm:justify-self-end">
                BSPI15, the S&amp;P 500, and the Nasdaq Composite are rebased to 1,000 on October 1, 2026.
              </p>
            </div>

            <div className="mt-7">
              <PerformanceChart observations={physicalAiAdoptionPerformance} />
            </div>
          </div>
        </section>

        <section id="constituents" className="scroll-mt-36 border-t border-[#d9dbd3] px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="mx-auto max-w-[1420px]">
            <div className="grid gap-5 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#71806c]">Constituents</p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#121712] sm:text-4xl">Constituent set</h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#636c64] lg:justify-self-end">
                Current weights reflect the latest closing calculation and drift between quarterly equal weight reviews.
              </p>
            </div>

            <div className="mt-7 overflow-hidden rounded-[22px] border border-[#d3d6ce] bg-[#fbfaf6]">
              <div className="hidden grid-cols-[62px_1.1fr_0.9fr_1.7fr_70px] items-center gap-4 border-b border-[#d8dbd3] bg-[#e8eae3] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#687265] sm:grid">
                <span>Weight</span>
                <span>Company</span>
                <span>Exposure</span>
                <span>Role</span>
                <span className="text-right">Listing</span>
              </div>
              {physicalAiAdoptionConstituents.map((company, index) => (
                <article
                  key={company.ticker}
                  className={`${styles.constituentRow} grid gap-3 border-b border-[#e0e1da] px-5 py-3.5 last:border-b-0 sm:grid-cols-[62px_1.1fr_0.9fr_1.7fr_70px] sm:items-center sm:gap-4`}
                >
                  <div className="flex items-center justify-between sm:block">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8577] sm:hidden">Current weight</span>
                    <span className="text-sm font-medium tabular-nums text-[#4f5b4e]">
                      {(latestPhysicalAiAdoptionPerformance.constituentWeights[company.ticker] ?? company.weight).toFixed(2)}%
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-semibold tracking-[-0.02em] text-[#151b15]">{company.company}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.11em] text-[#61705b]">{company.sleeve}</p>
                  <p className="text-sm leading-6 text-[#626a62]">{company.role}</p>
                  <div className="flex items-center justify-between text-xs sm:block sm:text-right">
                    <span className="text-[#8a9088] sm:hidden">Listing</span>
                    <p className="font-semibold tabular-nums text-[#293329]">{company.ticker}</p>
                    <p className="mt-1 text-[#8a9088]">{company.exchange}</p>
                  </div>
                  <span className="sr-only">Constituent {index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="scroll-mt-36 border-t border-[#d9dbd3] px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="mx-auto max-w-[1420px]">
            <div className="mb-7 grid gap-5 border-b border-[#d9dbd3] pb-7 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#71806c]">Exposure</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#171c17]">Exposure by function</h2>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-[#626b63] sm:justify-self-end">Fifteen constituents spanning five operating layers of the Physical AI stack.</p>
            </div>

            <div className="grid max-w-4xl overflow-hidden rounded-[18px] border border-[#d8dbd2] bg-[#fbfaf6] sm:grid-cols-[170px_minmax(0,1fr)]">
              <div className="flex items-center justify-center border-b border-[#d8dbd2] bg-[#f1f2ec] px-6 py-5 sm:border-b-0 sm:border-r">
                <div className="relative h-32 w-32" role="img" aria-label="Donut chart showing exposure across five Physical AI categories">
                  <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
                    <circle cx="60" cy="60" r="42" fill="none" stroke="#e3e6de" strokeWidth="16" />
                    {sleeveSegments.map((sleeve) => (
                      <circle
                        key={sleeve.name}
                        cx="60"
                        cy="60"
                        r="42"
                        fill="none"
                        pathLength="100"
                        stroke={sleeve.color}
                        strokeDasharray={`${sleeve.weight} ${100 - sleeve.weight}`}
                        strokeDashoffset={-sleeve.offset}
                        strokeWidth="16"
                        transform="rotate(-90 60 60)"
                      />
                    ))}
                  </svg>
                  <span className="absolute inset-0 grid place-items-center text-[9px] font-semibold uppercase tracking-[0.18em] text-[#687565]">
                    Exposure
                  </span>
                </div>
              </div>

              <div>
                {sleeveSegments.map((sleeve) => (
                  <article
                    key={sleeve.name}
                    className="grid min-h-12 grid-cols-[8px_minmax(0,1fr)_58px] items-center gap-3 border-b border-[#e0e2da] px-4 py-2.5 last:border-b-0 sm:px-5"
                  >
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: sleeve.color }} aria-hidden="true" />
                    <h3 className="text-sm font-medium text-[#1c231c]">{sleeve.name}</h3>
                    <span className="text-right text-sm font-medium tabular-nums text-[#4f5b4e]">{sleeve.weight}%</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="methodology" className="scroll-mt-36 bg-[#141b14] px-6 py-10 text-white md:px-10 md:py-14 lg:px-14">
          <div className="mx-auto max-w-[1420px]">
            <div className="grid gap-4 border-b border-[#394337] pb-7 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9daf93]">Methodology {physicalAiAdoptionIndex.methodologyVersion}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#f3f3ec] sm:text-4xl">Index methodology</h2>
              </div>
              <p className="max-w-3xl text-sm leading-6 text-[#c2cbc0] sm:justify-self-end">
                These rules govern eligibility, selection, weighting, calculation, and scheduled maintenance.
              </p>
            </div>

            <div className="mt-1 grid gap-px overflow-hidden rounded-[18px] border border-[#344032] bg-[#344032] sm:grid-cols-2">
              {methodologySteps.map((step, index) => (
                <article key={step.label} className="bg-[#141b14] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#93a38b]">{step.label}</p>
                    <span className="font-mono text-xs text-[#6f7c6a]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.025em] text-[#eef1eb]">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-xs leading-5 text-[#aeb8aa]">{step.copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 grid overflow-hidden rounded-[18px] border border-[#3d483b] bg-[#3d483b] sm:grid-cols-3 sm:gap-px">
              <div className="bg-[#192219] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8fa087]">Calculation</p>
                <h3 className="mt-2 text-base font-semibold text-[#eef1eb]">Currency neutral price return</h3>
                <p className="mt-2 text-xs leading-5 text-[#acb6a8]">Local listing returns are combined using effective weights. Foreign exchange movements are excluded.</p>
              </div>
              <div className="bg-[#192219] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8fa087]">Review schedule</p>
                <h3 className="mt-2 text-base font-semibold text-[#eef1eb]">Quarterly reset</h3>
                <p className="mt-2 text-xs leading-5 text-[#acb6a8]">Reviews occur after the final trading day of March, June, September, and December.</p>
              </div>
              <div className="bg-[#192219] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8fa087]">Continuity</p>
                <h3 className="mt-2 text-base font-semibold text-[#eef1eb]">Corporate action continuity</h3>
                <p className="mt-2 text-xs leading-5 text-[#acb6a8]">Splits, mergers, delistings, and other events are recorded with their effective dates.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="documents" className="scroll-mt-36 px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="mx-auto max-w-[1420px]">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#71806c]">Documents and data</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#131813]">Index documents</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#687068]">Current methodology and constituent data.</p>
            </div>

            <div className="mt-7 grid max-w-4xl gap-4 md:grid-cols-2">
              <a href="/documents/bspi15-index-methodology-v1.0.pdf" download className="group rounded-[20px] border border-[#d6d9d0] bg-[#f5f5ef] p-5 transition hover:border-[#899984] hover:bg-[#eef2ea]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#73816d]">Methodology</p>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">Methodology 1.0</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4e6049]">Download PDF <ArrowDown /></span>
              </a>
              <a href="/data/bspi15-constituents.csv" download className="group rounded-[20px] border border-[#d6d9d0] bg-[#f5f5ef] p-5 transition hover:border-[#899984] hover:bg-[#eef2ea]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#73816d]">Data</p>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">Constituent data</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4e6049]">Download CSV <ArrowDown /></span>
              </a>
            </div>

            <div className="mt-12 border-t border-[#d9dbd3] pt-7 text-xs leading-6 text-[#737a73]">
              <p className="max-w-5xl">The Black Scarab Physical AI 15 is an editorial research index. It is not an investment fund, security, financial product, investment recommendation, or offer to buy or sell securities. Index values and constituents are published for informational purposes.</p>
            </div>
          </div>
        </section>

        <SiteFooter tone="dark" />
      </div>
    </main>
  );
}
