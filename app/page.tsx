import type { Metadata } from "next";
import HomePage from "@/components/home-page";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Black Scarab",
  description:
    "Black Scarab designs AI infrastructure and edge intelligence systems for agriculture, manufacturing, logistics, healthcare, retail, and smart city operations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Black Scarab | AI Infrastructure for Industry",
    description:
      "AI infrastructure and edge intelligence systems designed for real-world industrial deployment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Scarab | AI Infrastructure for Industry",
    description:
      "AI infrastructure and edge intelligence systems designed for real-world industrial deployment.",
  },
  keywords: [
    "edge AI",
    "AI infrastructure",
    "industrial AI",
    "smart cities",
    "agriculture AI",
    "manufacturing AI",
    "Latin America",
    "Black Scarab",
  ],
};

export default function Page() {
  return <HomePage />;
}
