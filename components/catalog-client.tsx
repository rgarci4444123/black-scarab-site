"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  products,
  productCategoryGuides,
  productCategories,
  productIndustries,
  type ProductCategory,
  type ProductIndustry,
} from "@/lib/products";

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "All">(
    "All",
  );
  const [activeIndustry, setActiveIndustry] = useState<ProductIndustry | "All">(
    "All",
  );
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;
      const industryMatch =
        activeIndustry === "All" || product.industries.includes(activeIndustry);

      return categoryMatch && industryMatch;
    });
  }, [activeCategory, activeIndustry]);
  const productCountByCategory = useMemo(() => {
    return productCategories.reduce<Record<ProductCategory, number>>(
      (counts, category) => {
        counts[category] = products.filter(
          (product) => product.category === category,
        ).length;
        return counts;
      },
      Object.fromEntries(
        productCategories.map((category) => [category, 0]),
      ) as Record<ProductCategory, number>,
    );
  }, []);
  const pillClass = (active: boolean) =>
    active
      ? "rounded-full border border-[#111827] bg-[#111827] px-4 py-2 text-sm font-medium text-white"
      : "rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]";

  return (
    <>
      <section className="border-t border-[#efeae1] px-6 py-8 md:px-10">
        <div className="mb-10">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
                Technology Layers
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Navigate the physical AI stack
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[#6b7280]">
              Browse researched technologies by the role they may play in a
              physical system: perception, compute, connectivity, model
              runtime, robotics, power, storage, and complete platforms.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productCategoryGuides.map((guide) => (
              <button
                key={guide.category}
                type="button"
                onClick={() => setActiveCategory(guide.category)}
                className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-5 text-left shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#e3ddd1] px-3 py-1 text-xs font-medium text-[#111827]">
                    {productCountByCategory[guide.category]} profiles
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {guide.category}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {guide.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                  {guide.examples.join(" · ")}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Research Filters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Refine by operating context
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#6b7280]">
              Use the layer and industry filters to narrow the library. Final
              suitability still requires provider-led technical diligence.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="mb-3 text-sm font-medium text-[#111827]">Industry</p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveIndustry("All")}
                  className={pillClass(activeIndustry === "All")}
                >
                  All
                </button>
                {productIndustries.map((industry) => (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => setActiveIndustry(industry)}
                    className={pillClass(activeIndustry === industry)}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-[#e8e4dc] bg-[#fffdfa] p-5">
              <p className="text-sm font-medium text-[#111827]">
                Active category:{" "}
                <span className="text-[#7c8b6b]">{activeCategory}</span>
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className={pillClass(activeCategory === "All")}
                >
                  All categories
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndustry("All")}
                  className={pillClass(activeIndustry === "All")}
                >
                  All industries
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#efeae1] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Researched Technology Library
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {filteredProducts.length} technology profiles matched
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#6b7280]">
            Each profile consolidates public specifications, pricing context,
            potential applications, and links to the relevant vendor or listed
            source for further diligence.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/catalog/${product.slug}`}
              className="overflow-hidden rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <img
                src={product.image}
                alt={product.imageAlt}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                    {product.category}
                  </span>
                  <span className="rounded-full bg-[#f9f7f2] px-3 py-1 text-xs font-medium text-[#6b7280]">
                    {product.powerProfile}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {product.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-[#6b7280]">
                  <span>{product.vendor}</span>
                  <span className="text-[#c9c1b5]">|</span>
                  <span>{product.price}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#6b7280]">
                  {product.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.industries.slice(0, 3).map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-[#e3ddd1] px-3 py-1 text-xs font-medium text-[#111827]"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
