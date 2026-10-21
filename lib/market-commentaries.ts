import firstEdition from "@/lib/markets/commentary-2026-10-21.json";

export const marketCommentaries = [firstEdition];
export const latestMarketCommentary = marketCommentaries[0];
export function getMarketCommentary(slug: string) {
  return marketCommentaries.find((edition) => edition.slug === slug);
}
