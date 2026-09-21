import { caseStudies } from "@/lib/case-studies";
import { newsUpdates } from "@/lib/news";

const baseUrl = "https://www.blackscarab.ai";
export const MUSE_MAX_RESULTS = 5;
export const MUSE_PREVIEW_LIMIT = 250;

export type MuseContentType = "news" | "insight";

export type MuseSearchResult = {
  title: string;
  content_type: MuseContentType;
  published_at: string;
  preview: string;
  canonical_url: string;
};

type SearchablePublication = MuseSearchResult & {
  titleSearch: string;
  summarySearch: string;
  metadataSearch: string;
  slugSearch: string;
};

const STOP_WORDS = new Set([
  "a",
  "about",
  "an",
  "and",
  "article",
  "articles",
  "ai",
  "artificial",
  "credible",
  "find",
  "for",
  "guide",
  "guides",
  "i",
  "in",
  "intelligence",
  "is",
  "latest",
  "me",
  "news",
  "of",
  "on",
  "physical",
  "read",
  "recent",
  "report",
  "reports",
  "reporting",
  "research",
  "should",
  "show",
  "size",
  "the",
  "to",
  "understand",
  "what",
  "which",
  "with",
]);

const SYNONYMS: Record<string, string[]> = {
  budget: ["affordable", "cost", "price", "pricing", "hobbyist"],
  company: ["business", "enterprise", "organization"],
  deployment: ["commercial", "customer", "deployments"],
  deployments: ["commercial", "customer", "deployment"],
  hardware: ["camera", "chip", "compute", "gpu", "processor", "sensor"],
  inspection: ["asset", "monitoring", "maintenance"],
  local: ["offline", "on premise", "private"],
  organization: ["business", "company", "enterprise", "small business"],
  private: ["local", "offline", "on premise"],
  robot: ["robotics", "autonomous"],
  robotics: ["robot", "autonomous"],
  size: ["enterprise", "hobbyist", "small business"],
};

function normalize(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function createPreview(summary: string) {
  if (summary.length <= MUSE_PREVIEW_LIMIT) {
    return summary;
  }

  const shortened = summary.slice(0, MUSE_PREVIEW_LIMIT - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  const safeCut = lastSpace > MUSE_PREVIEW_LIMIT - 35 ? lastSpace : shortened.length;

  return `${shortened.slice(0, safeCut).trimEnd()}…`;
}

function searchableTermGroups(query: string) {
  const tokens = normalize(query)
    .split(" ")
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));

  return [...new Set(tokens)].map((primary) => ({
    primary,
    related: [...new Set((SYNONYMS[primary] ?? []).map(normalize))],
  }));
}

const publications: SearchablePublication[] = [
  ...newsUpdates.map((article) => ({
    title: article.title,
    content_type: "news" as const,
    published_at: article.publishedAt,
    preview: createPreview(article.summary),
    canonical_url: `${baseUrl}/news/${article.slug}`,
    titleSearch: normalize(article.title),
    summarySearch: normalize(article.summary),
    metadataSearch: normalize(`${article.category} ${article.keyPoints.join(" ")}`),
    slugSearch: normalize(article.slug),
  })),
  ...caseStudies.map((article) => ({
    title: article.title,
    content_type: "insight" as const,
    published_at: article.publishedAt ?? `${article.publishedDate}T12:00:00.000Z`,
    preview: createPreview(article.summary),
    canonical_url: `${baseUrl}/insights/${article.slug}`,
    titleSearch: normalize(article.title),
    summarySearch: normalize(`${article.summary} ${article.seoDescription}`),
    metadataSearch: normalize(
      `${article.industry} ${article.typeLabel ?? ""} ${article.formatLabel ?? ""} ${(article.tags ?? []).join(" ")}`,
    ),
    slugSearch: normalize(article.slug),
  })),
];

function termScore(publication: SearchablePublication, term: string, weight = 1) {
  let score = 0;

  if (publication.titleSearch.includes(term)) score += 8 * weight;
  if (publication.summarySearch.includes(term)) score += 4 * weight;
  if (publication.metadataSearch.includes(term)) score += 3 * weight;
  if (publication.slugSearch.includes(term)) score += 2 * weight;

  return score;
}

function publicationScore(
  publication: SearchablePublication,
  termGroups: ReturnType<typeof searchableTermGroups>,
) {
  let score = 0;
  let matchingGroups = 0;

  for (const group of termGroups) {
    const primaryScore = termScore(publication, group.primary);
    let groupScore = primaryScore;

    for (const related of group.related) {
      groupScore += termScore(publication, related, 0.35);
    }

    if (groupScore > 0) matchingGroups += 1;
    score += groupScore;
  }

  return { score, matchingGroups };
}

export function searchMusePublications({
  query,
  contentType = "all",
  limit = MUSE_MAX_RESULTS,
}: {
  query: string;
  contentType?: "all" | MuseContentType;
  limit?: number;
}): MuseSearchResult[] {
  const normalizedQuery = normalize(query);
  const termGroups = searchableTermGroups(query);
  const newsIntent = /\b(news|reporting)\b/.test(normalizedQuery);
  const insightIntent = /\b(deep dive|guide|insight)\b/.test(normalizedQuery);
  const localAiIntent = /\b(local ai|private ai)\b/.test(normalizedQuery);
  const effectiveType =
    contentType === "all" && newsIntent && !insightIntent ? "news" : contentType;
  const requiredMatchingGroups = Math.min(2, termGroups.length);

  const ranked = publications
    .filter(
      (publication) =>
        (effectiveType === "all" || publication.content_type === effectiveType) &&
        (!localAiIntent ||
          publication.titleSearch.includes("local ai") ||
          publication.titleSearch.includes("private ai") ||
          publication.summarySearch.includes("local ai") ||
          publication.summarySearch.includes("private ai") ||
          publication.metadataSearch.includes("local ai") ||
          publication.metadataSearch.includes("private ai")),
    )
    .map((publication) => ({ publication, ...publicationScore(publication, termGroups) }))
    .filter(
      ({ matchingGroups }) =>
        termGroups.length === 0 || matchingGroups >= requiredMatchingGroups,
    )
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return (
        new Date(right.publication.published_at).getTime() -
        new Date(left.publication.published_at).getTime()
      );
    })
    .slice(0, Math.min(Math.max(limit, 1), MUSE_MAX_RESULTS));

  return ranked.map(({ publication }) => ({
    title: publication.title,
    content_type: publication.content_type,
    published_at: publication.published_at,
    preview: publication.preview,
    canonical_url: publication.canonical_url,
  }));
}
