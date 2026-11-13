// Server-side content facade. Never import article bodies into the client explorer.
import entries from "@/content/physical-ai-glossary/entries.json";
import controls from "@/content/physical-ai-glossary/publication.json";
import { glossaryTargetPhrases } from "@/lib/glossary-linking";
import {
  GLOSSARY_PATH, glossaryEditorialIssues, glossaryReleaseIssues, glossaryRevision,
  publishedGlossaryArticles, validateGlossary,
  type GlossaryArticle, type GlossaryRelease,
} from "@/lib/glossary-publication";

export const glossaryArticles = entries as GlossaryArticle[];
export const glossaryPublication = controls as GlossaryRelease;
validateGlossary(glossaryArticles, glossaryPublication);
const byId = new Map(glossaryArticles.map((article) => [article.id, article]));

export function getPublishedGlossaryArticles() {
  return publishedGlossaryArticles(glossaryArticles, glossaryPublication);
}

export function getPublishedGlossaryArticle(slug: string) {
  return getPublishedGlossaryArticles().find((article) => article.slug === slug);
}

export function getGlossaryStaticParams() {
  return getPublishedGlossaryArticles().map((article) => ({ slug: article.slug }));
}

export function glossaryArticlePath(article: GlossaryArticle) {
  return `${GLOSSARY_PATH}/${article.slug}`;
}

export function getGlossaryHubArticlePaths(): Record<string, string> {
  return Object.fromEntries(getPublishedGlossaryArticles().map((article) => [article.legacyId, glossaryArticlePath(article)]));
}

export function getGlossaryRelatedTerms(article: GlossaryArticle, preview = false) {
  const publishedIds = new Set(getPublishedGlossaryArticles().map((item) => item.id));
  const control = glossaryPublication.terms[article.id];
  const links = control.relatedLinks ?? control.relatedIds.map((id) => ({ label: byId.get(id)!.displayName, targetId: id }));
  return links.map(({ label, targetId }, index) => {
    const related = targetId ? byId.get(targetId) : null;
    return { id: `${article.id}-${index}`, targetId, name: label, href: related
      ? preview ? `/preview/physical-ai-glossary/${related.slug}`
        : publishedIds.has(related.id) ? glossaryArticlePath(related) : `${GLOSSARY_PATH}#${related.anchor}`
      : null };
  });
}

export function getGlossaryContextTargets(article: GlossaryArticle, preview = false) {
  const related = getGlossaryRelatedTerms(article, preview);
  return glossaryPublication.terms[article.id].relatedIds.flatMap((id) => {
    const target = byId.get(id)!;
    const links = related.filter((link) => link.targetId === id);
    const href = links.find((link) => link.href)?.href;
    return href ? [{ id, href, phrases: glossaryTargetPhrases(target, links.map((link) => link.name)) }] : [];
  });
}

export function getGlossaryMetadata(article: GlossaryArticle) {
  const control = glossaryPublication.terms[article.id];
  const canonical = `${glossaryPublication.canonicalOrigin}${glossaryArticlePath(article)}`;
  const title = `${control.seoTitle ?? article.headline} | Black Scarab`;
  return {
    title: { absolute: title }, description: control.metaDescription,
    alternates: { canonical },
    openGraph: { title, description: control.metaDescription, url: canonical, type: "article" as const,
      publishedTime: control.publishedAt!, modifiedTime: control.modifiedAt ?? control.publishedAt! },
    twitter: { card: "summary_large_image" as const, title, description: control.metaDescription },
  };
}

export function getGlossarySchema(article: GlossaryArticle) {
  const origin = glossaryPublication.canonicalOrigin;
  const hubUrl = `${origin}${GLOSSARY_PATH}`;
  const url = `${origin}${glossaryArticlePath(article)}`;
  const control = glossaryPublication.terms[article.id];
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "DefinedTerm", "@id": `${url}#term`, name: article.term,
      description: article.definition, ...(article.aliases.length ? { alternateName: article.aliases } : {}),
      url, inDefinedTermSet: { "@type": "DefinedTermSet", "@id": `${hubUrl}#glossary`, url: hubUrl } },
    { "@type": "Article", "@id": `${url}#article`, headline: article.headline,
      mainEntity: { "@id": `${url}#term` }, mainEntityOfPage: url,
      author: { "@type": "Person", name: control.authorName, url: `${origin}/about` },
      publisher: { "@type": "Organization", name: "Black Scarab", url: origin },
      datePublished: control.publishedAt, dateModified: control.modifiedAt ?? control.publishedAt,
      citation: article.sources.map((source) => source.url) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Physical AI Glossary", item: hubUrl },
      { "@type": "ListItem", position: 2, name: article.displayName, item: url },
    ] },
  ] };
}

export function getGlossarySitemapEntries() {
  return getPublishedGlossaryArticles().map((article) => {
    const control = glossaryPublication.terms[article.id];
    return { url: `${glossaryPublication.canonicalOrigin}${glossaryArticlePath(article)}`,
      lastModified: new Date(control.modifiedAt ?? control.publishedAt!) };
  });
}

export function getGlossaryReadinessReport() {
  const ids = new Set(glossaryArticles.map((article) => article.id));
  return {
    totalDrafts: glossaryArticles.length,
    publicArticleCount: getPublishedGlossaryArticles().length,
    releaseIssues: glossaryReleaseIssues(glossaryPublication),
    terms: glossaryArticles.map((article) => ({
      id: article.id, term: article.displayName, slug: article.slug,
      status: glossaryPublication.terms[article.id].status,
      revision: glossaryRevision(article, glossaryPublication.terms[article.id]),
      issues: glossaryEditorialIssues(article, glossaryPublication.terms[article.id], ids),
    })),
  };
}
