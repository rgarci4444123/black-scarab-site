import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EngagementAnalytics } from "@/components/engagement-analytics";
import NewsletterCapture from "@/components/newsletter-capture";
import "./globals.css";

const baseUrl = "https://www.blackscarab.ai";
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Black Scarab",
  url: baseUrl,
  logo: `${baseUrl}/icon.png`,
  email: "info@blackscarab.ai",
  description:
    "An independent publication covering the companies, technologies, capital, and industrial systems shaping the physical AI economy.",
  founder: {
    "@type": "Person",
    name: "Rodolfo Garcia Calderoni",
    honorificSuffix: "CFA",
    jobTitle: "Founder",
  },
  sameAs: ["https://www.linkedin.com/company/black-scarab/"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Black Scarab",
  url: baseUrl,
  publisher: {
    "@type": "Organization",
    name: "Black Scarab",
    url: baseUrl,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "Black Scarab",
  title: {
    default: "Black Scarab",
    template: "%s | Black Scarab",
  },
  description:
    "Independent news and research on the physical AI economy.",
  openGraph: {
    type: "website",
    siteName: "Black Scarab",
    url: baseUrl,
    title: "Black Scarab",
    description:
      "Independent news and research on the physical AI economy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Scarab",
    description:
      "Independent news and research on the physical AI economy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
        <NewsletterCapture />
        <EngagementAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>

    </html>
  );
}
