import type { GlossaryArticle } from "@/lib/glossary-publication";

export type GlossaryRelatedLink = { label: string; targetId: string | null };
export type GlossaryContextTarget = { id: string; href: string; phrases: string[] };
export type GlossaryTextSegment = { text: string; href?: string; targetId?: string };

const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/g, "");

// Reviewed alternate names for existing entries, not fuzzy matches to nearby topics.
const alternateNames: Record<string, string> = {
  "Robot Policy": "BSG-290",
  "Fleet Management": "BSG-141",
  "Microcontroller": "BSG-221",
  "Feedback": "BSG-133",
  "Sim-to-Real Transfer": "BSG-369",
  "OTA Update": "BSG-266",
  "Joint": "BSG-328",
  "AI Inference": "BSG-187",
  "Robotics Perception": "BSG-276",
  "Resolution": "BSG-181",
  "Robot Manipulator": "BSG-217",
  "SCARA Robot": "BSG-350",
  "Safety Light Curtain": "BSG-205",
  "Robot Perception": "BSG-276",
  "MAC Operation": "BSG-213",
};

// These eight uses explicitly concern motor/joint feedback, not neural encoders.
const encoderContexts = new Set(["BSG-030", "BSG-039", "BSG-244", "BSG-292", "BSG-328", "BSG-363", "BSG-385", "BSG-430"]);

export function createGlossaryRelatedResolver(articles: GlossaryArticle[]) {
  const byId = new Map(articles.map((article) => [article.id, article]));
  const names = new Map<string, Set<string>>();
  for (const article of articles) {
    for (const label of [article.term, article.displayName, article.displayName.split(":")[0], article.slug, ...article.aliases]) {
      const key = normalize(label);
      if (!names.has(key)) names.set(key, new Set());
      names.get(key)!.add(article.id);
    }
  }
  const alternates = new Map(Object.entries(alternateNames).map(([name, id]) => [normalize(name), id]));
  return (article: GlossaryArticle): GlossaryRelatedLink[] => article.suppliedRelatedTerms.map((label) => {
    const key = normalize(label);
    const candidates = [...(names.get(key) ?? [])].filter((id) => id !== article.id);
    const sameCategory = candidates.filter((id) => byId.get(id)!.category === article.category);
    let targetId = candidates.length === 1 ? candidates[0] : sameCategory.length === 1 ? sameCategory[0] : null;
    if (!targetId && key === "encoder" && encoderContexts.has(article.id)) targetId = "BSG-118";
    if (!targetId && key === "node" && article.id === "BSG-230") targetId = "BSG-337";
    if (!targetId && key === "calibration" && ["BSG-002", "BSG-216"].includes(article.id)) targetId = "BSG-359";
    if (!targetId) targetId = alternates.get(key) ?? null;
    if (targetId === article.id) targetId = null;
    if (targetId && !byId.has(targetId)) throw new Error(`Unknown related term: ${targetId}`);
    return { label, targetId };
  });
}

export function glossaryTargetPhrases(article: GlossaryArticle, labels: string[] = []) {
  return [...new Set([article.term, article.displayName.split(":")[0], ...article.aliases, ...labels])];
}

const escapePattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Render-local state: at most one body link per destination, six per article.
// Returned segments always concatenate to the exact input, including punctuation.
export function createGlossaryMentionLinker(targets: GlossaryContextTarget[], limit = 6) {
  const phrases = new Map<string, { target: GlossaryContextTarget; phrase: string }[]>();
  for (const target of targets) for (const phrase of target.phrases) {
    if (phrase.length < 2) continue;
    const key = normalize(phrase);
    const values = phrases.get(key) ?? [];
    values.push({ target, phrase });
    phrases.set(key, values);
  }
  const eligible = [...phrases.values()].filter((values) => new Set(values.map((value) => value.target.id)).size === 1);
  const alternatives = [...new Set(eligible.flatMap((values) => values.map(({ phrase }) => phrase)))].sort((a,b) => b.length-a.length);
  const pattern = alternatives.length ? new RegExp(`(?<![\\p{L}\\p{N}_])(?:${alternatives.map((phrase) => phrase.split(/[\s\u2010-\u2015-]+/).map(escapePattern).join("[\\s\u2010-\u2015-]+")).join("|")})(?:es|s)?(?![\\p{L}\\p{N}_])`, "giu") : null;
  const used = new Set<string>();
  return (text: string): GlossaryTextSegment[] => {
    if (!pattern || used.size >= limit) return [{ text }];
    const parts: GlossaryTextSegment[] = [];
    let offset = 0;
    for (const match of text.matchAll(pattern)) {
      const raw = match[0];
      const key = normalize(raw);
      const values = phrases.get(key) ?? phrases.get(key.replace(/es$/, "")) ?? phrases.get(key.replace(/s$/, ""));
      if (!values?.length) continue;
      const { target } = values[0];
      // CAN, PL, etc. must not turn ordinary lowercase words into acronym links.
      const caseFits = values.some(({ phrase }) => !/^[A-Z\d ]{2,8}$/.test(phrase) || raw === phrase || raw === phrase+"s");
      if (!caseFits || used.has(target.id) || used.size >= limit) continue;
      if (match.index! > offset) parts.push({ text: text.slice(offset, match.index) });
      parts.push({ text: raw, href: target.href, targetId: target.id });
      offset = match.index! + raw.length;
      used.add(target.id);
    }
    if (offset < text.length) parts.push({ text: text.slice(offset) });
    return parts.length ? parts : [{ text }];
  };
}
