import firstEdition from "@/lib/markets/commentary-2026-10-21.json";
import secondEdition from "@/lib/markets/commentary-2026-10-28.json";

export type MarketCommentary = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  publishedTime?: string;
  coverageLabel: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  socialImage?: string;
  socialImageWidth?: number;
  socialImageHeight?: number;
  html: string;
};

export const marketCommentaries: MarketCommentary[] = [secondEdition, firstEdition];
export const latestMarketCommentary = marketCommentaries[0];
export function getMarketCommentary(slug: string) {
  return marketCommentaries.find((edition) => edition.slug === slug);
}
