import Link from "next/link";
import SiteHeader from "@/components/site-header";
import CatalogClient from "@/components/catalog-client";
import { catalogRoadmapItems } from "@/lib/catalog-roadmap";
import { products } from "@/lib/products";

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={[
            { label: "Products", href: "/catalog", isPage: true },
            { label: "Insights", href: "/insights", isPage: true },
            { label: "About", href: "/about", isPage: true },
          ]}
          ctaLabel="Get Started"
          ctaHref="/intake"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 text-center md:px-10 md:py-18">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
            AI Infrastructure Catalog
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Source the stack behind real-world AI systems
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6b7280]">
            Find the compute, sensors, cameras, networking, storage, power,
            software, and deployment products needed to assemble edge AI, local
            AI, and industry-specific systems from one growing catalog.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              {products.length} sourced product pages
            </div>
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              {catalogRoadmapItems.length}-product first milestone
            </div>
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              Official links and pricing fields
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/models"
              className="inline-flex rounded-full border border-[#111827] bg-white px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white"
            >
              Explore Model Layer
            </Link>
            <Link
              href="/intake"
              className="inline-flex rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
            >
              Design My System
            </Link>
          </div>
        </section>

        <CatalogClient />

        <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Turn shortlisted products into a deployable system
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              Use the intake flow to tell us what you&apos;re building and we&apos;ll
              help map the right devices, infrastructure, and architecture to
              your use case.
            </p>
            <div className="mt-8">
              <a
                href="/intake"
                className="inline-block rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Design My System
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#6b7280] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. AI infrastructure for modern industry.</span>
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
