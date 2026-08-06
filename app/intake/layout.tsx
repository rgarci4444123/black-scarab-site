import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discuss a Physical AI Opportunity",
  description:
    "Share a Mexico market-entry, industrial use-case, technology-scouting, or strategic partnership opportunity with Black Scarab.",
};

export default function IntakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
