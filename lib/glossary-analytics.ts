export type GlossaryAnalyticsItem = {
  id: string;
  name: string;
  category: string;
  aliases: string[];
  href: string | null;
};

const normalize = (value: string) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");

export function glossaryTermProperties(item: GlossaryAnalyticsItem) {
  return { term: item.name, slug: item.href?.split("/").at(-1) ?? item.id, category: item.category };
}

// Search text can be arbitrary. Only inventory labels and aggregate outcomes
// become event properties; free-text input is never copied into analytics.
export function glossarySearchProperties(query: string, category: string, visible: GlossaryAnalyticsItem[]) {
  const key = normalize(query);
  const exact = visible.filter((item) => [item.name, item.name.split(":").at(-1)!, ...item.aliases]
    .some((label) => normalize(label) === key));
  const match = exact.length === 1 ? exact[0] : null;
  return {
    category,
    result_count: visible.length,
    match_type: !visible.length ? "no_results" : exact.length > 1 ? "ambiguous" : match ? "exact" : "partial",
    matched_term: match?.name ?? null,
    matched_slug: match ? glossaryTermProperties(match).slug : null,
  };
}
