import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GlossaryArticleView from "@/components/glossary-article";
import { getGlossaryMetadata, getGlossarySchema, getGlossaryStaticParams, getPublishedGlossaryArticle } from "@/lib/glossary";

export const dynamicParams = false;
export function generateStaticParams() { return getGlossaryStaticParams(); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getPublishedGlossaryArticle((await params).slug);
  if (!article) notFound();
  return getGlossaryMetadata(article);
}

export default async function GlossaryTermPage({ params }: Props) {
  const article = getPublishedGlossaryArticle((await params).slug);
  if (!article) notFound();
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getGlossarySchema(article)).replace(/</g, "\\u003c") }} />
    <GlossaryArticleView article={article} />
  </>;
}
