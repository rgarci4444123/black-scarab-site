import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import CatalogClient from "@/components/catalog-client";
import { products } from "@/lib/products";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Physical AI Technology Landscape",
  description:
    "Research the robotics, sensing, edge compute, connectivity, software, and infrastructure layers behind physical AI systems.",
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/catalog`,
    title: "Black Scarab Physical AI Technology Landscape",
    description:
      "A research-led landscape of robotics, sensing, compute, connectivity, and software for real-world physical AI systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Scarab Physical AI Technology Landscape",
    description:
      "Research the technology layers behind physical AI and industrial autonomy.",
  },
};

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={[
            { label: "Technology", href: "/catalog", isPage: true },
            { label: "Insights", href: "/insights", isPage: true },
            { label: "About", href: "/about", isPage: true },
          ]}
          showIndustries={false}
          ctaLabel="Discuss an Opportunity"
          ctaHref="/intake"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 text-center md:px-10 md:py-18">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
            Technology research · Physical AI
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Explore the technology stack behind physical AI
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6b7280]">
            A research library for understanding the robotics, sensing, compute,
            connectivity, software, and infrastructure layers that make
            real-world autonomous systems possible.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              {products.length} detailed technology profiles
            </div>
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              Cross-layer research
            </div>
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              Public sources + Black Scarab analysis
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/models"
              className="inline-flex rounded-full border border-[#111827] bg-white px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white"
            >
              Explore Model Landscape
            </Link>
            <Link
              href="/intake"
              className="inline-flex rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
            >
              Discuss an Opportunity
            </Link>
          </div>
        </section>

        <section className="border-b border-[#dfe7da] bg-[#edf4e8] px-6 py-8 md:px-10">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#667455]">
                Research scope
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#172016]">
                A landscape, not a storefront
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-6 text-[#52604a]">
              <p>
                These profiles organize publicly available information and
                Black Scarab&apos;s market perspective to support technology
                discovery and better commercial conversations.
              </p>
              <p>
                Inclusion does not imply endorsement, representation, or a
                resale relationship. Black Scarab does not sell, procure,
                install, integrate, warrant, or support the technologies listed
                here. Technical diligence and delivery remain with the
                technology provider and qualified implementation partners.
              </p>
            </div>
          </div>
        </section>

        <CatalogClient />

        <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              From research to market context
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Use the landscape to frame a qualified opportunity
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              If you represent a physical AI company evaluating Mexico—or an
              industrial operator exploring a specific operational problem—we
              can discuss the market, stakeholders, and commercial path worth
              investigating.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#7c8b6b]">
              Any technical validation, system design, installation, and
              ongoing support are led by the technology provider and qualified
              delivery partners.
            </p>
            <div className="mt-8">
              <Link
                href="/intake"
                className="inline-block rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Discuss an Opportunity
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#6b7280] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. Physical AI market development for Mexico.</span>
            <span className="text-[#c9c1b5]">|</span>
            <span>Based in Miami, FL</span>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="mailto:info@blackscarab.ai"
              className="transition hover:text-[#111827]"
            >
              info@blackscarab.ai
            </a>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="https://www.linkedin.com/company/black-scarab/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#111827]"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
