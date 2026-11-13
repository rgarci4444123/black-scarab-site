"use client";

import { useDeferredValue, useState } from "react";
import Link from "next/link";
import { glossaryCategoryColor } from "@/lib/glossary-colors";

type PreviewItem = { id: string; name: string; category: string; definition: string; href: string | null; anchor: string; pilotRank: number | null; aliases: string[] };

export default function GlossaryDirectory({ items }: { items: PreviewItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const search = useDeferredValue(query.toLowerCase().trim());
  const categories = [...new Set(items.map((item) => item.category))];
  const visible = items.filter((item) => (category === "All categories" || item.category === category)
    && `${item.name} ${item.aliases.join(" ")} ${item.definition}`.toLowerCase().includes(search));
  return <section data-category-treatment="text">
    <div className="flex flex-wrap items-center gap-3 border-y border-[#dedfe4] py-5">
      <label className="min-w-0 w-full sm:w-auto sm:flex-1"><span className="sr-only">Search glossary terms</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search terms or acronyms" className="w-full rounded-md border border-[#dedfe4] bg-white px-4 py-3 text-base text-[#0b0d0b]" /></label>
      <select aria-label="Filter by category" value={category} onChange={(event) => setCategory(event.target.value)} className="max-w-full rounded-md border border-[#dedfe4] bg-white px-3 py-3 text-sm text-[#626a74]"><option>All categories</option>{categories.map((name) => <option key={name}>{name}</option>)}</select>
    </div>
    <div className="grid gap-x-10 sm:grid-cols-2">{visible.map((item) => <article key={item.id} id={item.anchor} className="glossary-entry min-w-0 scroll-mt-24 border-b border-[#dedfe4] py-6">
      <p data-category-label={item.category} className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: glossaryCategoryColor(item.category) }}>{item.category}</p>
      <h2 className="mt-3 text-xl leading-tight tracking-tight text-[#0b0d0b]">{item.href ? <Link href={item.href} className="underline decoration-[#b8bec7] decoration-1 underline-offset-[5px] transition-colors hover:text-[#0075ff] hover:decoration-[#0075ff] focus-visible:text-[#0075ff] focus-visible:decoration-[#0075ff]">{item.name}</Link> : item.name}</h2>
      <p className="mt-3 text-sm leading-7 text-[#626a74]">{item.definition}</p>
    </article>)}</div>
    {!visible.length && <p className="py-10 text-[#626a74]">No matching terms. Try another name or acronym.</p>}
  </section>;
}
