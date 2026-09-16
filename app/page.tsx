import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Intelligence for the Physical AI Economy",
  description:
    "Independent news and research on the companies, technologies, capital, and industrial systems shaping the physical AI economy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Black Scarab | Intelligence for the Physical AI Economy",
    description:
      "News and research on the companies, technologies, and industrial systems moving physical AI from development into deployment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Scarab | Intelligence for the Physical AI Economy",
    description:
      "Independent news and research covering the physical AI economy.",
  },
  keywords: [
    "physical AI news",
    "physical AI research",
    "physical AI companies",
    "physical AI economy",
    "industrial robotics",
    "embodied AI",
    "industrial automation",
    "edge AI infrastructure",
    "Black Scarab",
  ],
};

export default function Page() {
  return <HomePage />;
}
