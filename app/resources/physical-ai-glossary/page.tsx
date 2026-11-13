import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import GlossaryDirectory from "@/components/glossary-directory";
import { glossaryArticles, glossaryPublication, getGlossaryHubArticlePaths } from "@/lib/glossary";
import { glossaryCategoryColor } from "@/lib/glossary-colors";
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

export default function PhysicalAiGlossaryPage() {
  const paths = getGlossaryHubArticlePaths();
  const pageUrl = `${baseUrl}${canonicalPath}`;
  const items = glossaryArticles.map((article) => ({ id: article.id, name: article.displayName,
    category: article.category, definition: article.definition, aliases: article.aliases,
    anchor: article.anchor, href: paths[article.legacyId] ?? null, pilotRank: null }));
  const dates = Object.values(glossaryPublication.terms).flatMap((term) => term.modifiedAt ?? term.publishedAt ?? []);
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "DefinedTermSet", "@id": `${pageUrl}#glossary`, name: title, description, url: pageUrl,
      dateModified: dates.sort().at(-1),
      publisher: { "@type": "Organization", name: "Black Scarab", url: baseUrl },
      hasDefinedTerm: glossaryArticles.map((article) => ({ "@type": "DefinedTerm", name: article.displayName,
        description: article.definition, inDefinedTermSet: `${pageUrl}#glossary`,
        url: paths[article.legacyId] ? `${baseUrl}${paths[article.legacyId]}` : `${pageUrl}#${article.anchor}` })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Physical AI Glossary", item: pageUrl } ] }
  ] };
  return <main className="min-h-screen bg-white text-[#0b0d0b]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><SiteHeader homeHref="/" />
    <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-10">
      <header className="grid items-center gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#72747c]">Black Scarab Reference Guide</p><h1 className="mt-5 max-w-xl text-[44px] font-semibold leading-[1.02] tracking-[-0.065em] sm:text-[60px]">The Physical AI Glossary<span className="text-[#718b78]">.</span></h1></div>
        <Link href={"/resources/physical-ai-glossary/repeatability"} className="border-y border-[#dedfe4] py-6"><p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: glossaryCategoryColor("Robotics and Actuation") }}>Term in focus</p><h2 className="mt-3 text-2xl font-semibold tracking-tight">Repeatability</h2><p className="mt-3 text-sm leading-7 text-[#626a74]">Consistency, accuracy, and reading a robot specification.</p><span className="mt-4 block text-[10px] font-semibold uppercase tracking-widest text-[#0075ff]">Read the full explanation</span></Link>
      </header>
      <GlossaryDirectory items={items} />
    </div>
    <SiteFooter />
  </main>;
}
