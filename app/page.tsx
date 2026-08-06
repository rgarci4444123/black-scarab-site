import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Physical AI Market Development for Mexico",
  description:
    "Black Scarab helps physical AI companies understand the Mexican market, reach industrial stakeholders, and form qualified commercial opportunities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Black Scarab | Physical AI Market Development for Mexico",
    description:
      "Market intelligence, stakeholder mapping, strategic introductions, and opportunity development for physical AI companies entering Mexico.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Scarab | Physical AI Market Development for Mexico",
    description:
      "Connecting physical AI companies with qualified industrial opportunities in Mexico.",
  },
  keywords: [
    "physical AI Mexico",
    "robotics market entry Mexico",
    "industrial automation Mexico",
    "industrial AI",
    "robotics",
    "autonomous systems",
    "market development Latin America",
    "strategic introductions Mexico",
    "edge AI",
    "Black Scarab",
  ],
};

export default function Page() {
  return <HomePage />;
}
