import { glossaryArticles, getGlossaryRelatedTerms } from "@/lib/glossary";

export const GLOSSARY_PREVIEW_PATH = "/preview/physical-ai-glossary";

export function allowsLocalGlossaryPreview(settings: {
  nodeEnv?: string; enabled?: string; host: string | null; vercel?: string;
}) {
  return settings.nodeEnv === "development" && settings.enabled === "1" && !settings.vercel
    && /^(localhost|127\.0\.0\.1|\[::1\])(?::\d{1,5})?$/.test(settings.host?.toLowerCase() ?? "");
}

export function getDraftGlossaryArticle(slug: string) {
  return glossaryArticles.find((article) => article.slug === slug);
}

export function getDraftGlossaryRelatedTerms(slug: string) {
  const article = getDraftGlossaryArticle(slug);
  if (!article) return [];
  return getGlossaryRelatedTerms(article, true);
}
