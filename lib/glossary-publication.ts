import { createHash } from "node:crypto";

export type GlossaryArticle = {
  id: string;
  legacyId: string;
  term: string;
  displayName: string;
  category: string;
  anchor: string;
  slug: string;
  aliases: string[];
  headline: string;
  definition: string;
  bodyMarkdown: string;
  submittedMarkdown: string;
  sources: { label: string; url: string }[];
  suppliedRelatedTerms: string[];
  provenance: { batch: number; archive: string; submittedSha256: string };
};

export type GlossaryReview = {
  reviewer: string;
  reviewedAt: string;
  revision: string;
  notes: string;
};

export type GlossaryControl = {
  status: "draft" | "reviewed" | "published";
  authorName: string;
  metaDescription: string;
  seoTitle?: string;
  relatedIds: string[];
  relatedLinks?: { label: string; targetId: string | null }[];
  coveragePaths: string[];
  reviews: {
    editorial?: GlossaryReview;
    sources?: GlossaryReview & { checkedUrls: string[] };
    searchIntent?: GlossaryReview & {
      decision: "new-term-page" | "reuse-existing-guide";
      existingCoverage: string[];
    };
    links?: GlossaryReview;
  };
  publishedAt: string | null;
  modifiedAt: string | null;
};

export type GlossaryRelease = {
  enabled: boolean;
  canonicalOrigin: string;
  originVerification: {
    origin: string;
    verifiedBy: string;
    verifiedAt: string;
    evidence: string;
  } | null;
  approval: { approvedBy: string; approvedAt: string } | null;
  cohorts: { id: string; enabled: boolean; termIds: string[] }[];
  terms: Record<string, GlossaryControl>;
};

export const GLOSSARY_PATH = "/resources/physical-ai-glossary";

export function suggestGlossarySlug(name: string): string {
  return name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function glossaryRevision(article: GlossaryArticle, control: GlossaryControl): string {
  // Review records and release switches are intentionally outside the content revision.
  const content = [article.id, article.term, article.displayName, article.category,
    article.anchor, article.slug, article.aliases, article.headline, article.definition,
    article.bodyMarkdown, article.sources, article.suppliedRelatedTerms,
    control.authorName, control.metaDescription, control.seoTitle, control.relatedIds, control.relatedLinks, control.coveragePaths];
  return createHash("sha256").update(JSON.stringify(content)).digest("hex");
}

function nonempty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function pastDate(value: unknown, now: Date): value is string {
  return nonempty(value) && /^\d{4}-\d\d-\d\dT/.test(value)
    && Number.isFinite(Date.parse(value)) && Date.parse(value) <= now.getTime();
}

function sourceUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) && !url.username && !url.password;
  } catch { return false; }
}

export function glossaryEditorialIssues(
  article: GlossaryArticle,
  control: GlossaryControl,
  knownIds: Set<string>,
  now = new Date(),
): string[] {
  const issues: string[] = [];
  const revision = glossaryRevision(article, control);
  if (!nonempty(control.authorName)) issues.push("Author is missing");
  if (!nonempty(control.metaDescription)) issues.push("Meta description is missing");
  for (const kind of ["editorial", "sources", "searchIntent", "links"] as const) {
    const review = control.reviews[kind];
    if (!review || !nonempty(review.reviewer) || !nonempty(review.notes)
      || !pastDate(review.reviewedAt, now) || review.revision !== revision) {
      issues.push(`${kind}: current revision needs a completed review`);
    }
  }
  const checked = new Set(control.reviews.sources?.checkedUrls ?? []);
  if (!article.sources.length || article.sources.some((source) => !sourceUrl(source.url) || !checked.has(source.url))) {
    issues.push("Every supplied source needs verification against the article's claims");
  }
  if (control.reviews.searchIntent?.decision !== "new-term-page") {
    issues.push("Search intent has not been approved for a distinct term page");
  }
  if (!control.relatedIds.length || control.relatedIds.some((id) => !knownIds.has(id) || id === article.id)
    || new Set(control.relatedIds).size !== control.relatedIds.length) {
    issues.push("Related terms need valid, distinct inventory IDs");
  }
  if (control.coveragePaths.some((path) => !/^\/(?:insights|news)\/[a-z0-9-]+$/.test(path))) {
    issues.push("Coverage links must use existing News or Insights article paths");
  }
  return issues;
}

export function glossaryReleaseIssues(release: GlossaryRelease, now = new Date()): string[] {
  const issues: string[] = [];
  if (!release.enabled) issues.push("Glossary publication is disabled");
  try {
    const url = new URL(release.canonicalOrigin);
    if (url.protocol !== "https:" || url.origin !== release.canonicalOrigin || url.username || url.password) {
      issues.push("Canonical origin must be an HTTPS origin without a path or trailing slash");
    }
  } catch { issues.push("Canonical origin is invalid"); }
  const verification = release.originVerification;
  if (!verification || verification.origin !== release.canonicalOrigin || !nonempty(verification.verifiedBy)
    || !pastDate(verification.verifiedAt, now) || !nonempty(verification.evidence)) {
    issues.push("Production hostname, redirects, and canonical metadata need verification");
  }
  if (!release.approval || !nonempty(release.approval.approvedBy) || !pastDate(release.approval.approvedAt, now)) {
    issues.push("A release approval is required");
  }
  return issues;
}

export function validateGlossary(
  articles: GlossaryArticle[], release: GlossaryRelease, now = new Date(),
): void {
  const ids = new Set<string>(), slugs = new Set<string>(), anchors = new Set<string>(), legacyIds = new Set<string>();
  for (const article of articles) {
    if (!/^BSG-\d{3}$/.test(article.id) || ids.has(article.id)) throw new Error(`Duplicate or invalid glossary ID: ${article.id}`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) || slugs.has(article.slug)) throw new Error(`Duplicate or invalid glossary slug: ${article.slug}`);
    if (!article.anchor || anchors.has(article.anchor)) throw new Error(`Duplicate or missing legacy anchor: ${article.id}`);
    if (!article.legacyId || legacyIds.has(article.legacyId)) throw new Error(`Duplicate or missing legacy ID: ${article.id}`);
    if (![article.term, article.headline, article.definition, article.bodyMarkdown, article.submittedMarkdown].every(nonempty)) {
      throw new Error(`Incomplete article: ${article.id}`);
    }
    ids.add(article.id); slugs.add(article.slug); anchors.add(article.anchor); legacyIds.add(article.legacyId);
  }
  if (Object.keys(release.terms).length !== articles.length || Object.keys(release.terms).some((id) => !ids.has(id))) {
    throw new Error("Publication controls must cover exactly the glossary inventory");
  }
  const cohortIds = new Set<string>();
  for (const cohort of release.cohorts) {
    if (!cohort.id || cohortIds.has(cohort.id) || new Set(cohort.termIds).size !== cohort.termIds.length
      || cohort.termIds.some((id) => !ids.has(id))) throw new Error(`Invalid cohort: ${cohort.id}`);
    cohortIds.add(cohort.id);
  }
  for (const article of articles) {
    const control = release.terms[article.id];
    if (!control || !["draft", "reviewed", "published"].includes(control.status)) throw new Error(`Invalid status: ${article.id}`);
    if (control.relatedLinks) {
      const labels = control.relatedLinks.map((link) => link.label);
      const targets = [...new Set(control.relatedLinks.flatMap((link) => link.targetId ? [link.targetId] : []))];
      if (JSON.stringify(labels) !== JSON.stringify(article.suppliedRelatedTerms)
        || control.relatedLinks.some((link) => link.targetId !== null && (!ids.has(link.targetId) || link.targetId === article.id))
        || JSON.stringify(targets) !== JSON.stringify(control.relatedIds)) {
        throw new Error(`Related links must retain supplied labels and valid, consistent targets: ${article.id}`);
      }
    }
    if (control.status !== "draft") {
      const issues = glossaryEditorialIssues(article, control, ids, now);
      if (issues.length) throw new Error(`${article.id}: ${issues.join("; ")}`);
    }
    if (control.status === "published") {
      if (!pastDate(control.publishedAt, now) || (control.modifiedAt !== null && !pastDate(control.modifiedAt, now))) {
        throw new Error(`${article.id}: valid publication and modification timestamps are required`);
      }
      if (control.modifiedAt && Date.parse(control.modifiedAt) < Date.parse(control.publishedAt!)) {
        throw new Error(`${article.id}: modification precedes publication`);
      }
      const contentDate = Date.parse(control.modifiedAt ?? control.publishedAt!);
      if (Object.values(control.reviews).some((review) => Date.parse(review.reviewedAt) > contentDate)) {
        throw new Error(`${article.id}: reviewed changes need a current modification timestamp`);
      }
    }
  }
  if (release.enabled) {
    const issues = glossaryReleaseIssues(release, now);
    if (issues.length) throw new Error(issues.join("; "));
    for (const article of articles) {
      if (release.terms[article.id].status === "published"
        && !release.cohorts.some((cohort) => cohort.enabled && cohort.termIds.includes(article.id))) {
        throw new Error(`${article.id}: published article is outside enabled cohorts`);
      }
    }
  }
}

export function publishedGlossaryArticles(articles: GlossaryArticle[], release: GlossaryRelease, now = new Date()): GlossaryArticle[] {
  validateGlossary(articles, release, now);
  if (glossaryReleaseIssues(release, now).length) return [];
  const allowed = new Set(release.cohorts.filter((cohort) => cohort.enabled).flatMap((cohort) => cohort.termIds));
  return articles.filter((article) => allowed.has(article.id) && release.terms[article.id].status === "published");
}
