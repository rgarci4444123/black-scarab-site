import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import {
  getProductBySlug,
  getProductOutboundUrl,
  products,
} from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} Catalog`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const outboundUrl = getProductOutboundUrl(product);

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={[
            { label: "Products", href: "/catalog", isPage: true },
            { label: "Models", href: "/models", isPage: true },
            { label: "Insights", href: "/insights", isPage: true },
            { label: "About", href: "/about", isPage: true },
          ]}
          ctaLabel="Get Started"
          ctaHref="/intake?track=advanced"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-18">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                {product.category}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-[#6b7280]">
                {product.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-[#ddd7cc] bg-white px-3 py-1 text-xs font-medium text-[#111827]"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={outboundUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#ddd7cc] px-6 py-3 text-sm font-medium text-[#111827] transition hover:bg-white"
                >
                  View product
                </a>
                <Link
                  href="/intake?track=advanced"
                  className="rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
                >
                  Design My System
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#dde7d7] bg-[#edf4e8] shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="h-[320px] w-full object-cover lg:h-[420px]"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#efeae1] px-6 py-14 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Quick Summary
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Why it matters
            </h2>
          </div>

          <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 text-[#6b7280] shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            {product.whyItMatters}
          </div>
        </section>

        <section className="border-b border-[#efeae1] px-6 py-14 md:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
            Specs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Simplified decision specs
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                  {spec.label}
                </p>
                <p className="mt-4 text-xl font-semibold tracking-tight">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#efeae1] px-6 py-14 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Best For
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Where this product fits best
            </h2>
          </div>

          <div className="space-y-4">
            {product.bestFor.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-5 text-[#6b7280] shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#efeae1] px-6 py-14 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Used In
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Example deployment contexts
            </h2>
          </div>

          <div className="space-y-4">
            {product.usedIn.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-5 text-[#6b7280] shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Black Scarab POV
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Where we see the real value
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6b7280]">
              {product.blackScarabPov}
            </p>
          </div>
        </section>

        <section className="border-b border-[#efeae1] px-6 py-14 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Category
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight">
                {product.category}
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Power Profile
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight">
                {product.powerProfile}
              </p>
            </div>
            <div className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Deployment Types
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight">
                {product.deploymentTypes.join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
              Commercial Link Logic
            </p>
            <p className="mt-4 text-sm leading-6 text-[#6b7280]">
              This catalog is already structured so affiliate links can be added
              later without changing the page design. Once a product gets an
              affiliate URL, the main outbound button can automatically switch
              from the official manufacturer site to that tracked commercial
              link.
            </p>
          </div>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#6b7280] md:px-10">
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
        </section>
      </div>
    </main>
  );
}
