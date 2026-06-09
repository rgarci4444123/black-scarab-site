"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { catalogRoadmapItems } from "@/lib/catalog-roadmap";
import {
  products,
  productCategoryGuides,
  productCategories,
  productIndustries,
  type ProductCategory,
  type ProductIndustry,
} from "@/lib/products";

const normalizeCatalogName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const liveProductNames = new Set(
  products.map((product) => normalizeCatalogName(product.name)),
);

const roadmapTargets = catalogRoadmapItems.filter(
  (item) => !liveProductNames.has(normalizeCatalogName(item.name)),
);

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
  const roadmapCountByCategory = useMemo(() => {
    return productCategories.reduce<Record<ProductCategory, number>>(
      (counts, category) => {
        counts[category] = roadmapTargets.filter(
          (item) => item.category === category,
        ).length;
        return counts;
      },
      Object.fromEntries(
        productCategories.map((category) => [category, 0]),
      ) as Record<ProductCategory, number>,
    );
  }, []);
  const visibleRoadmapItems = useMemo(() => {
    return roadmapTargets.filter((item) => {
      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;
      const industryMatch =
        activeIndustry === "All" || item.buyerFit.includes(activeIndustry);

      return categoryMatch && industryMatch;
    });
  }, [activeCategory, activeIndustry]);
  const roadmapItemsByCategory = useMemo(() => {
    return productCategories
      .map((category) => ({
        category,
        items: visibleRoadmapItems.filter((item) => item.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, [visibleRoadmapItems]);

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
                Deployment Map
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Choose the right layer of the stack
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-[#6b7280]">
              Browse products by the role they play in a real deployment:
              perception, compute, connectivity, model runtime, robotics,
              power, storage, and complete solution kits.
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
                    {productCountByCategory[guide.category]} live pages
                  </span>
                  <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-medium text-[#7c8b6b]">
                    {roadmapCountByCategory[guide.category]} targets
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
                <p className="mt-3 text-xs leading-5 text-[#6b7280]">
                  {guide.commercePath}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Buyer Context
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Refine by deployment need
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#6b7280]">
              Category selection now happens in the architecture map above.
              This keeps the catalog from repeating the same filter twice.
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

      <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              100-Item Buildout Map
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {visibleRoadmapItems.length} future targets matched
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#6b7280]">
            This is the working expansion list: components, models, software,
            robots, drones, and solution kits that still need full product
            pages, images, links, pricing, and affiliate paths.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {roadmapItemsByCategory.map((group) => (
            <div
              key={group.category}
              className="rounded-[24px] border border-[#e8e4dc] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {group.category}
                </h3>
                <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                  {group.items.length} targets
                </span>
              </div>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div
                    key={`${item.category}-${item.name}`}
                    className="rounded-[18px] border border-[#eee8dd] bg-[#fffdfa] p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#111827]">
                        {item.componentType}
                      </span>
                      {item.buyerFit.slice(0, 2).map((fit) => (
                        <span
                          key={fit}
                          className="rounded-full border border-[#e3ddd1] px-3 py-1 text-xs font-medium text-[#6b7280]"
                        >
                          {fit}
                        </span>
                      ))}
                    </div>
                    <h4 className="mt-3 text-base font-semibold tracking-tight">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                      {item.role}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[#7c8b6b]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#efeae1] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Live Product Library
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {filteredProducts.length} detailed product pages matched
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#6b7280]">
            These are the finished product records with images, deeper notes,
            and outbound paths. The buildout map above is the backlog for what
            should become this library over time.
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
