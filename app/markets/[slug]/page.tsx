import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketCommentary, marketCommentaries } from "@/lib/market-commentaries";
import styles from "../commentary.module.css";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return marketCommentaries.map(edition => ({ slug: edition.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const edition = getMarketCommentary((await params).slug);
  if (!edition) notFound();
  const path = `/markets/${edition.slug}`;
  return { title: edition.title, description: edition.summary, authors: [{ name: "Rodolfo Garcia Calderoni, CFA", url: "https://www.blackscarab.ai/about" }], alternates: { canonical: path }, openGraph: { type: "article", url: `https://www.blackscarab.ai${path}`, title: edition.title, description: edition.summary, publishedTime: edition.publishedAt, authors: ["Rodolfo Garcia Calderoni, CFA"], images: [{ url: edition.image, width: 1672, height: 941, alt: edition.imageAlt }] }, twitter: { card: "summary_large_image", title: edition.title, description: edition.summary, images: [edition.image] } };
}
export default async function CommentaryPage({ params }: Props) {
  const edition = getMarketCommentary((await params).slug);
  if (!edition) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: edition.title, description: edition.summary, datePublished: edition.publishedAt, dateModified: edition.publishedAt, image: `https://www.blackscarab.ai${edition.image}`, mainEntityOfPage: `https://www.blackscarab.ai/markets/${edition.slug}`, author: { "@type": "Person", name: "Rodolfo Garcia Calderoni", honorificSuffix: "CFA", url: "https://www.blackscarab.ai/about" }, publisher: { "@type": "Organization", name: "Black Scarab", url: "https://www.blackscarab.ai", logo: { "@type": "ImageObject", url: "https://www.blackscarab.ai/icon.png" } } };
  return <main className={styles.scope}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />{/* Static, reviewed editorial HTML maintained in the repository. */}<div dangerouslySetInnerHTML={{ __html: edition.html }} /></main>;
}
