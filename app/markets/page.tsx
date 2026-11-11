import { SectionHero } from "@/components/section-hero";
import { MarketNavigation } from "./market-navigation";
import type { Metadata } from "next";
import styles from "./markets.module.css";
import Image from "next/image";
import Link from "next/link";
import PerformanceChart from "@/app/indices/physical-ai-adoption-15/performance-chart";
import { physicalAiAdoptionPerformance } from "@/lib/physical-ai-adoption-performance";
import { latestMarketCommentary, marketCommentaries } from "@/lib/market-commentaries";

export const metadata: Metadata = {
  title: "Physical AI Markets",
  description: "Weekly market commentary and the Black Scarab Physical AI 15 index. Earnings, capital spending and the economic forces shaping physical AI in public equities.",
  alternates: { canonical: "/markets" },
  openGraph: { type: "website", url: "https://www.blackscarab.ai/markets", title: "Physical AI Markets | Black Scarab", description: "Weekly commentary on the businesses and economic forces shaping physical AI in public markets.", images: [{ url: latestMarketCommentary.image, width: 1672, height: 941, alt: latestMarketCommentary.imageAlt }] },
  twitter: { card: "summary_large_image", title: "Physical AI Markets | Black Scarab", images: [latestMarketCommentary.image] },
};

export default function MarketsPage() {
  const latest = latestMarketCommentary;
  const href = `/markets/${latest.slug}`;
  const previous = marketCommentaries.slice(1);
  return <><SectionHero section="markets" /><div className={styles.scope}>
    <MarketNavigation />
    <section className="index-section" aria-labelledby="index-title"><div className="index-intro"><div><p className="eyebrow">The index</p><h2 id="index-title">Black Scarab Physical AI 15</h2><p>Fifteen listed companies across robotics, sensing, motion control and industrial automation.</p></div><Link className="index-link" href="/indices/physical-ai-adoption-15">Explore the index <span aria-hidden="true">↗</span></Link></div><div className="live-chart"><PerformanceChart observations={physicalAiAdoptionPerformance} /></div></section>
    <section id="commentary" aria-labelledby="weekly-heading">
      <h2 id="weekly-heading" className="commentary-heading">Weekly Market Commentary</h2>
      <div className="feature"><Link className="feature-image" href={href} aria-label={`Read ${latest.title}`}><Image src={latest.image} alt={latest.imageAlt} width={1672} height={941} sizes="(max-width: 760px) 100vw, 580px" priority /></Link>
        <div className="feature-copy"><p className="date"><time dateTime={latest.publishedAt}>{new Date(`${latest.publishedAt}T12:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}</time><span className="dot" />{latest.readingMinutes} min read</p><h3><Link href={href}>{latest.title}</Link></h3><p className="summary">{latest.summary}</p><div className="author"><Image src="/rodolfo-garcia-about-portrait.jpeg" alt="" width={32} height={32} /><div><strong>Rodolfo Garcia Calderoni, CFA</strong><span>Founder, Black Scarab</span></div></div><Link className="read" href={href}>Read the commentary <span aria-hidden="true">→</span></Link></div>
      </div>
      {previous.length > 0 ? <div className="archive"><ul className="archive-list">{previous.map(edition => <li key={edition.slug}><article className="archive-entry"><div className="archive-meta"><time dateTime={edition.publishedAt}>{edition.publishedAt}</time><span className="dot" /><span>{edition.readingMinutes} min read</span></div><h3><Link href={`/markets/${edition.slug}`}>{edition.title}</Link></h3></article></li>)}</ul></div> : null}
    </section>
  </div></>;
}
