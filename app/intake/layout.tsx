import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discuss a Physical AI Opportunity",
  description:
    "Share a Mexico market-entry, industrial use-case, technology-scouting, or strategic partnership opportunity with Black Scarab.",
  alternates: {
    canonical: "/intake",
  },
  openGraph: {
    type: "website",
    url: "/intake",
    title: "Discuss a Physical AI Opportunity | Black Scarab",
    description:
      "Share a Mexico market-entry, industrial use-case, technology-scouting, or strategic partnership opportunity with Black Scarab.",
  },
};

export default function IntakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
