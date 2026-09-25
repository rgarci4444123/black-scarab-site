"use client";

import { useDeferredValue, useMemo, useState } from "react";
import {
  getGlossaryAnchor,
  glossaryCategories,
  glossaryTerms,
  type GlossaryCategory,
} from "@/lib/physical-ai-glossary";

type CategoryFilter = "All categories" | GlossaryCategory;

const preparedTerms = glossaryTerms
  .map((item) => {
    const displayName = item.acronym
      ? `${item.acronym}: ${item.term}`
      : item.term;
    const searchText = [
      item.acronym,
      item.term,
      item.definition,
      item.category,
      ...(item.aliases ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase();

    return {
      ...item,
      displayName,
      searchText,
      letter: displayName.charAt(0).toLocaleUpperCase(),
    };
  })
  .sort((a, b) => a.displayName.localeCompare(b.displayName));

const alphabet = Array.from(
  new Set(preparedTerms.map((item) => item.letter)),
).sort();

const allCategoryCounts = new Map<CategoryFilter, number>([
  ["All categories", glossaryTerms.length],
  ...glossaryCategories.map(
    (category) =>
      [
        category,
        glossaryTerms.filter((item) => item.category === category).length,
      ] as const,
  ),
]);

export default function GlossaryExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<CategoryFilter>("All categories");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase());

  const filteredTerms = useMemo(
    () =>
      preparedTerms.filter((item) => {
        const matchesCategory =
          category === "All categories" || item.category === category;
        const matchesQuery =
          deferredQuery.length === 0 || item.searchText.includes(deferredQuery);

        return matchesCategory && matchesQuery;
      }),
    [category, deferredQuery],
  );

  const groupedTerms = useMemo(() => {
    const groups = new Map<string, typeof preparedTerms>();

    for (const item of filteredTerms) {
      const existing = groups.get(item.letter);
      if (existing) {
        existing.push(item);
      } else {
        groups.set(item.letter, [item]);
      }
    }

    return Array.from(groups.entries());
  }, [filteredTerms]);

  const isFiltering = query.length > 0 || category !== "All categories";

  return (
    <section aria-labelledby="glossary-explorer-title">
      <div className="rounded-[28px] border border-[#d9ded3] bg-[#eef1e9] p-5 shadow-[0_18px_46px_rgba(34,46,37,0.07)] md:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#697760]">
              Find a term
            </p>
            <h2
              id="glossary-explorer-title"
              className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#172019]"
            >
              Search the physical AI stack
            </h2>
          </div>

          <label className="relative block w-full lg:max-w-xl">
            <span className="sr-only">Search the glossary</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6f776e]"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m16 16 4 4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try HBM, actuator, force control, or OPC UA"
              className="w-full rounded-2xl border border-[#ccd3c7] bg-[#fffdf8] py-4 pl-12 pr-4 text-base text-[#172019] outline-none transition placeholder:text-[#929890] focus:border-[#6f8066] focus:ring-4 focus:ring-[#809174]/15"
            />
          </label>
        </div>

        <div
          className="mt-6 flex gap-2 overflow-x-auto border-t border-[#d4dacd] pt-5 pb-2"
          aria-label="Filter glossary by category"
        >
          {(["All categories", ...glossaryCategories] as CategoryFilter[]).map(
            (item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={active}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-[#26352a] bg-[#26352a] text-white"
                      : "border-[#d4d9cf] bg-[#fffdf8] text-[#586255] hover:border-[#96a08f]"
                  }`}
                >
                  {item}{" "}
                  <span className={active ? "text-[#d8e0d3]" : "text-[#92998f]"}>
                    {allCategoryCounts.get(item)}
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-y border-[#e7e3da] py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#6b716a]" aria-live="polite">
          Showing{" "}
          <span className="font-semibold text-[#1c251e]">
            {filteredTerms.length}
          </span>{" "}
          {filteredTerms.length === 1 ? "term" : "terms"}
          {category !== "All categories" ? ` in ${category}` : ""}
        </p>

        <nav
          aria-label="Glossary alphabet"
          className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs font-semibold text-[#65715f]"
        >
          {alphabet.map((letter) => {
            const visible = groupedTerms.some(([group]) => group === letter);

            return visible ? (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="transition hover:text-[#111827]"
              >
                {letter}
              </a>
            ) : (
              <span key={letter} className="text-[#c6c9c2]">
                {letter}
              </span>
            );
          })}
        </nav>
      </div>

      {groupedTerms.length > 0 ? (
        <div className="mt-10 space-y-14">
          {groupedTerms.map(([letter, items]) => (
            <section
              key={letter}
              id={`letter-${letter}`}
              className="scroll-mt-28"
              aria-labelledby={`letter-heading-${letter}`}
            >
              <div className="mb-5 flex items-center gap-4">
                <h2
                  id={`letter-heading-${letter}`}
                  className="font-mono text-4xl font-semibold tracking-[-0.05em] text-[#6f8066]"
                >
                  {letter}
                </h2>
                <div className="h-px flex-1 bg-[#e4e0d7]" />
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {items.map((item) => (
                  <article
                    key={item.id}
                    id={getGlossaryAnchor(item)}
                    className="glossary-entry scroll-mt-28 rounded-[22px] border border-[#e5e1d8] bg-[#fffdfa] p-5 shadow-[0_8px_24px_rgba(20,30,22,0.035)] md:p-6"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#77856d]">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-7 tracking-[-0.02em] text-[#182019]">
                      {item.acronym ? (
                        <>
                          <span className="font-mono text-[#344331]">
                            {item.acronym}
                          </span>
                          <span className="text-[#9ca397]">: </span>
                          {item.term}
                        </>
                      ) : (
                        item.term
                      )}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#606861]">
                      {item.definition}
                    </p>
                    {item.aliases?.length ? (
                      <p className="mt-4 border-t border-[#ece8df] pt-3 text-xs text-[#7b8279]">
                        Also called {item.aliases.join(", ")}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[24px] border border-[#e5e1d8] bg-[#fffdfa] px-6 py-14 text-center">
          <p className="text-lg font-semibold text-[#1c251e]">
            No terms match that search.
          </p>
          <p className="mt-2 text-sm text-[#6b716a]">
            Try an acronym, a broader phrase, or a different category.
          </p>
          {isFiltering ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All categories");
              }}
              className="mt-5 rounded-full bg-[#26352a] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#34483a]"
            >
              Show all 444 terms
            </button>
          ) : null}
        </div>
      )}
    </section>
  );
}
