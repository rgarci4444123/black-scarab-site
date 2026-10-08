import { socialLinks } from "@/lib/site-links";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EmailSignupCard from "@/components/email-signup-card";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { authorLinkedInUrl, authorPortraitSrc } from "@/lib/site-author";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "About Black Scarab and Founder Rodolfo Garcia Calderoni",
  description:
    "Black Scarab is an independent publication covering the companies, technologies, capital, and industrial systems shaping the physical AI economy.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/about`,
    title: "About Black Scarab",
    description:
      "Independent news and research on the physical AI economy, founded by Rodolfo Garcia Calderoni, CFA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Black Scarab",
    description:
      "Independent news and research on the physical AI economy.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Black Scarab and its founder",
    url: `${baseUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Black Scarab",
      url: baseUrl,
      email: "info@blackscarab.ai",
      description:
        "An independent publication covering the companies, technologies, capital, and industrial systems shaping the physical AI economy.",
      knowsAbout: [
        "Physical AI",
        "Robotics",
        "Industrial automation",
        "Edge AI",
        "Manufacturing",
      ],
      founder: {
        "@type": "Person",
        name: "Rodolfo Garcia Calderoni",
        honorificSuffix: "CFA",
        url: `${baseUrl}/about`,
        sameAs: [authorLinkedInUrl],
        jobTitle: "Founder",
        knowsLanguage: ["English", "Spanish"],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Arizona State University",
        },
      },
      sameAs: socialLinks.map((item) => item.href),
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-[#e2e2e5] bg-[#ffffff] shadow-[0_24px_70px_rgba(15,23,42,0.055)] sm:rounded-[30px]">
        <SiteHeader homeHref="/" />

        <section className="border-b border-[#e2e2e5] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6e6e73] sm:text-xs">
                About Black Scarab
              </p>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#0b0d0b] sm:text-6xl lg:text-[5.25rem]">
                Independent intelligence for the physical AI economy<span className="text-[#7856e8]">.</span>
              </h1>
              <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#5d6670] sm:text-lg">
                <p>
                  Black Scarab is an independent publication covering the
                  companies, technologies, capital, and industrial systems
                  shaping physical AI.
                </p>
                <p>
                  It was founded by Rodolfo Garcia Calderoni, CFA, drawing on
                  more than a decade of experience across financial services,
                  institutional relationships, and international distribution.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/news"
                  className="rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#343438]"
                >
                  Read the News
                </Link>
                <Link
                  href="/insights"
                  className="rounded-full border border-[#e2e2e5] bg-white/80 px-6 py-3 text-sm font-medium transition hover:bg-white"
                >
                  Explore Insights
                </Link>
              </div>
            </div>

            <aside aria-label="Founder profile">
              <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-full border border-[#e2e2e5] bg-[#f5f5f7] shadow-[0_20px_60px_rgba(25,35,27,0.1)]">
                <Image
                  src={authorPortraitSrc}
                  alt="Rodolfo Garcia Calderoni, founder of Black Scarab"
                  fill
                  preload
                  quality={95}
                  sizes="(min-width: 1024px) 340px, min(340px, calc(100vw - 48px))"
                  className="object-cover object-[50%_55%]"
                />
              </div>
              <div className="mx-auto mt-7 max-w-[340px] border-t border-[#e2e2e5] pt-6">
                <h2 className="text-2xl font-semibold leading-tight tracking-[-0.035em]">
                  Rodolfo Garcia Calderoni, CFA
                </h2>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#008577]">
                  Founder
                </p>
                <p className="mt-4 text-sm leading-7 text-[#687078]">
                  Based in Miami with a global view of physical AI and
                  industrial adoption.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="subscribe"
          className="scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <EmailSignupCard
              source="about-intelligence"
            />
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
