import sixthEdition from "@/lib/markets/commentary-2026-11-25.json";
import fifthEdition from "@/lib/markets/commentary-2026-11-18.json";
import fourthEdition from "@/lib/markets/commentary-2026-11-11.json";
import thirdEdition from "@/lib/markets/commentary-2026-11-04.json";
import firstEdition from "@/lib/markets/commentary-2026-10-21.json";
import secondEdition from "@/lib/markets/commentary-2026-10-28.json";

export type MarketChart = {
  title: string;
  subtitle: string;
  caption: string;
  columns: readonly string[];
  domain: readonly number[];
  rows: readonly { label: string; value: number; display: string; tone: string }[];
  metricsHeading?: string;
  metrics?: readonly { label: string; value: string; detail?: string }[];
};

export type MarketArticle = {
  issueNumber: number;
  authorName: string;
  bylineCoverage: string;
  sections: readonly { id: string; heading: string; blocks: readonly (string | number)[] }[];
  charts: readonly MarketChart[];
  sourceGroups: readonly { heading: string; start: number; items: readonly { parts: readonly { text: string; href?: string }[] }[] }[];
  notes: readonly string[];
};

type MarketEdition = {
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
};

export type MarketCommentary = MarketEdition & ({ html: string } | { article: MarketArticle });

export const marketCommentaries: MarketCommentary[] = [sixthEdition, fifthEdition, fourthEdition, thirdEdition, secondEdition, firstEdition];
export const latestMarketCommentary = marketCommentaries[0];
export function getMarketCommentary(slug: string) {
  return marketCommentaries.find((edition) => edition.slug === slug);
}
