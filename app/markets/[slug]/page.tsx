import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { archivedAuthorLinkedIn } from "@/components/author-linkedin";
import { getMarketCommentary, marketCommentaries } from "@/lib/market-commentaries";
import { authorLinkedInUrl } from "@/lib/site-author";
import styles from "../commentary.module.css";
import { MarketArticle } from "../market-article";
import issueThreeVisuals from "../commentary-2026-11-04.module.css";
import issueFourVisuals from "../commentary-2026-11-11.module.css";
import issueFiveVisuals from "../commentary-2026-11-18.module.css";

// Add the shared icon to the archived editions' existing author row.
const archivedByline = /(<div class="byline"><img [^>]+><div>)(<a href="\/about">Rodolfo Garcia Calderoni, CFA<\/a>)/;

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return marketCommentaries.map(edition => ({ slug: edition.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const edition = getMarketCommentary((await params).slug);
  if (!edition) notFound();
  const path = `/markets/${edition.slug}`;
  const image = edition.socialImage ?? edition.image;
  return { title: edition.title, description: edition.summary, authors: [{ name: "Rodolfo Garcia Calderoni, CFA", url: "https://www.blackscarab.ai/about" }], alternates: { canonical: path }, openGraph: { type: "article", url: `https://www.blackscarab.ai${path}`, title: edition.title, description: edition.summary, publishedTime: edition.publishedTime ?? edition.publishedAt, authors: ["Rodolfo Garcia Calderoni, CFA"], images: [{ url: image, width: edition.socialImageWidth ?? edition.imageWidth ?? 1672, height: edition.socialImageHeight ?? edition.imageHeight ?? 941, alt: edition.imageAlt }] }, twitter: { card: "summary_large_image", title: edition.title, description: edition.summary, images: [image] } };
}
export default async function CommentaryPage({ params }: Props) {
  const edition = getMarketCommentary((await params).slug);
  if (!edition) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: edition.title, description: edition.summary, datePublished: edition.publishedTime ?? edition.publishedAt, dateModified: edition.publishedTime ?? edition.publishedAt, image: `https://www.blackscarab.ai${edition.socialImage ?? edition.image}`, mainEntityOfPage: `https://www.blackscarab.ai/markets/${edition.slug}`, author: { "@type": "Person", name: "Rodolfo Garcia Calderoni", honorificSuffix: "CFA", url: "https://www.blackscarab.ai/about", sameAs: [authorLinkedInUrl] }, publisher: { "@type": "Organization", name: "Black Scarab", url: "https://www.blackscarab.ai", logo: { "@type": "ImageObject", url: "https://www.blackscarab.ai/icon.png" } } };
  const issueStyle = edition.slug === "ai-boom-industrial-bottlenecks" ? issueFiveVisuals.scope
    : edition.slug === "us-factories-expand-china-slows" ? issueThreeVisuals.scope
    : edition.slug === "ai-selloff-factory-stocks-earnings" ? issueFourVisuals.scope : "";

  return (
    <div className={`${styles.scope} ${issueStyle}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      {"article" in edition ? <MarketArticle edition={edition} /> : (
        <div dangerouslySetInnerHTML={{
          __html: edition.html.replace(archivedByline, (_, byline, authorLink) =>
            `${byline}<div class="byline-author">${authorLink}${archivedAuthorLinkedIn}</div>`),
        }} />
      )}
    </div>
  );
}
