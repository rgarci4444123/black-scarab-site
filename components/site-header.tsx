"use client";

import Link from "next/link";
import { useState } from "react";
import { industries } from "@/lib/industries";

type NavLink = {
  label: string;
  href: string;
  isPage?: boolean;
};

type SiteHeaderProps = {
  homeHref?: string;
  navLinks?: NavLink[];
  ctaLabel: string;
  ctaHref: string;
};

export default function SiteHeader({
  homeHref = "/",
  navLinks = [],
  ctaLabel,
  ctaHref,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClassName = "transition hover:text-[#111827]";

  return (
    <header className="sticky top-0 z-30 border-b border-[#efeae1] bg-white/92 backdrop-blur">
      <div className="px-6 py-5 md:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={homeHref}
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/black-scarab-mark.png"
              alt="Black Scarab logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-base font-bold tracking-tight">
              BLACK SCARAB
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#6b7280] md:flex">
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 align-middle transition hover:text-[#111827]"
              >
                <span>Industries</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 6"
                  className="mt-px h-[5px] w-[9px] text-[#8b9385]"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="invisible absolute left-1/2 top-full z-30 mt-4 w-72 -translate-x-1/2 rounded-[20px] border border-[#e8e4dc] bg-white p-3 opacity-0 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="grid gap-1">
                  {industries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((item) =>
              item.isPage ? (
                <Link key={item.label} href={item.href} className={linkClassName}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={linkClassName}>
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={ctaHref}
              className="hidden rounded-full border border-[#e5e7eb] px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white md:inline-flex"
            >
              {ctaLabel}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              className="rounded-full border border-[#ddd7cc] px-4 py-2 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8] md:hidden"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="mt-4 rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-4 shadow-[0_12px_32px_rgba(15,23,42,0.05)] md:hidden">
            <div className="space-y-2">
              <p className="px-2 text-xs font-medium uppercase tracking-[0.18em] text-[#7c8b6b]">
                Industries
              </p>
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                  onClick={() => setMobileOpen(false)}
                >
                  {industry.label}
                </Link>
              ))}
            </div>

            {navLinks.length > 0 ? (
              <div className="mt-4 border-t border-[#efeae1] pt-4">
                <div className="space-y-2">
                  {navLinks.map((item) =>
                    item.isPage ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ) : null}

            <div className="mt-4 border-t border-[#efeae1] pt-4">
              <Link
                href={ctaHref}
                className="block rounded-full bg-[#111827] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#1f2937]"
                onClick={() => setMobileOpen(false)}
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
