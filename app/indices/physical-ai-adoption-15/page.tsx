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
    <main className="min-h-screen bg-[#f4f2ec] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-[#dfded7] bg-[#fbfaf6] shadow-[0_24px_70px_rgba(15,23,42,0.055)] sm:rounded-[30px]">
        <SiteHeader homeHref="/" />

        <section className={styles.hero}>
          <p className={styles.eyebrow}>Black Scarab Indices</p>
          <h1>{physicalAiAdoptionIndex.shortName}</h1>
          <p className={styles.introduction}>Equal weight exposure to fifteen globally listed companies across robotics, motion, perception, control, and autonomous deployment.</p>
          <dl className={styles.facts}>
            {[
              ["Symbol", physicalAiAdoptionIndex.symbol],
              ["Constituents", String(physicalAiAdoptionIndex.constituentCount)],
              ["Weighting", physicalAiAdoptionIndex.weighting],
              ["Rebalance", physicalAiAdoptionIndex.rebalance],
              ["Return", "Price return"],
            ].map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </section>

        <nav aria-label="Index page sections" className={styles.sectionNav}>
          <div>
            <a href="#performance">Performance</a>
            <a href="#constituents">The 15 companies</a>
            <a href="#overview">Exposure</a>
            <a href="#methodology">Methodology</a>
            <a href="#documents">Downloads</a>
          </div>
        </nav>

        <section id="performance" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>Performance</h2>
            <p>BSPI15, the S&amp;P 500, and the Nasdaq Composite.<br />Rebased to 1,000 on October 1, 2026.</p>
          </div>
          <PerformanceChart observations={physicalAiAdoptionPerformance} />
        </section>

        <section id="constituents" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>The 15 companies</h2>
            <p>Current weights reflect the latest closing calculation and drift between quarterly equal weight reviews.</p>
          </div>
          <div className={styles.constituents}>
            <div className={styles.tableHeading} aria-hidden="true">
              <span>Company</span><span>Role in Physical AI</span><span>Exposure</span><span>Weight</span>
            </div>
            {physicalAiAdoptionConstituents.map((company) => (
              <article key={company.ticker} className={styles.constituentRow}>
                <div className={styles.company}>
                  <h3>{company.company}</h3>
                  <p>{company.ticker}<span> · </span>{company.exchange}</p>
                </div>
                <p className={styles.companyRole}>{company.role}</p>
                <p className={styles.sleeve}>{company.sleeve}</p>
                <p className={styles.weight}><span>Weight </span>{(latestPhysicalAiAdoptionPerformance.constituentWeights[company.ticker] ?? company.weight).toFixed(2)}%</p>
              </article>
            ))}
          </div>
        </section>

        <section id="overview" className={styles.section}>
          <div className={styles.exposureLayout}>
            <div className={styles.exposureIntro}>
              <p className={styles.eyebrow}>Across the stack</p>
              <h2>Five ways into<br className="hidden sm:block" /> Physical AI</h2>
              <p>Fifteen constituents spanning five operating layers. Exposure weights shown at the equal weight reset.</p>
            </div>
            <div className={styles.exposureBars}>
              {physicalAiAdoptionSleeves.map((sleeve) => (
                <div key={sleeve.name} className={styles.exposureRow}>
                  <div><h3>{sleeve.name}</h3><span>{sleeve.weight}%</span></div>
                  <div className={styles.barTrack} aria-hidden="true"><div style={{ width: `${sleeve.weight}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="methodology" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2>How the index works</h2>
          </div>
          <div className={styles.methodologyGrid}>
            {methodologySteps.map((step, index) => (
              <details key={step.label} className={styles.methodologyItem}>
                <summary><span className={styles.stepNumber}>0{index + 1}</span><span><span className={styles.stepLabel}>{step.label}</span><span className={styles.stepTitle}>{step.title}</span></span><span className={styles.expandIcon} aria-hidden="true" /></summary>
                <p>{step.copy}</p>
              </details>
            ))}
          </div>
          <div className={styles.calculationNotes}>
            <div><h3>Currency neutral price return</h3><p>Local listing returns are combined using effective weights. Foreign exchange movements are excluded.</p></div>
            <div><h3>Quarterly reset</h3><p>Reviews occur after the final trading day of March, June, September, and December.</p></div>
            <div><h3>Corporate action continuity</h3><p>Splits, mergers, delistings, and other events are recorded with their effective dates.</p></div>
          </div>
        </section>

        <section id="documents" className={styles.section}>
          <div className={styles.sectionHeading}><h2>Downloads</h2><p>Current methodology and constituent data.</p></div>
          <div className={styles.downloads}>
            <a href="/documents/bspi15-index-methodology-v1.0.pdf" download><span><strong>Index methodology</strong><span>Download PDF · Version 1.0</span></span><ArrowDown /></a>
            <a href="/data/bspi15-constituents.csv" download><span><strong>Constituent holdings</strong><span>Download CSV · Equal weight allocation</span></span><ArrowDown /></a>
          </div>
          <p className={styles.disclaimer}>The Black Scarab Physical AI 15 is an editorial research index. It is not an investment fund, security, financial product, investment recommendation, or offer to buy or sell securities. Index values and constituents are published for informational purposes.</p>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
