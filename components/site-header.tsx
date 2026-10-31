"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNavLinks, type SiteNavLink } from "@/lib/site-navigation";

type SiteHeaderProps = {
  homeHref?: string;
  navLinks?: SiteNavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaTone?: "outline" | "solid";
};

export default function SiteHeader({
  homeHref = "/",
  navLinks = primaryNavLinks,
  ctaLabel,
  ctaHref,
  ctaTone = "outline",
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!mobileOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [mobileOpen]);
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const linkClassName = "transition hover:text-[#0071e3]";

  return (
    <header className="sticky top-0 z-30 border-b border-[#e2e2e5] bg-white/92 backdrop-blur">
      <div className="px-6 py-5 lg:px-10">
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <Link
            href={homeHref}
            className="flex items-center gap-3 lg:justify-self-start"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/black-scarab-mark.png"
              alt="Black Scarab logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-base font-bold tracking-tight">
              BLACK SCARAB
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm text-[#6e6e73] lg:flex lg:justify-self-center">
            {navLinks.map((item) =>
              item.isPage ? (
                <Link key={item.label} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={`${linkClassName} ${isCurrent(item.href) ? "text-[#202522] font-semibold" : ""}`}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={linkClassName}>
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 lg:justify-self-end">
            {ctaLabel && ctaHref ? (
              <Link
                href={ctaHref}
                className={
                  ctaTone === "solid"
                    ? "hidden rounded-full border border-[#1d1d1f] bg-[#1d1d1f] px-5 py-3 text-sm font-medium text-white transition hover:border-[#343438] hover:bg-[#343438] lg:inline-flex"
                    : "hidden rounded-full border border-[#e5e7eb] px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#1d1d1f] hover:text-white lg:inline-flex"
                }
              >
                {ctaLabel}
              </Link>
            ) : null}

            <button
              type="button"
              ref={menuButton}
              onClick={() => setMobileOpen((current) => !current)}
              className="rounded-full border border-[#e2e2e5] px-4 py-2 text-sm font-medium text-[#111827] transition hover:bg-[#f5f5f7] lg:hidden"
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div role="navigation" aria-label="Mobile navigation" className="mt-4 rounded-[24px] border border-[#e2e2e5] bg-[#ffffff] p-4 shadow-[0_12px_32px_rgba(15,23,42,0.05)] lg:hidden">
            {navLinks.length > 0 ? (
              <div>
                <div className="space-y-2">
                  {navLinks.map((item) =>
                    item.isPage ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        aria-current={isCurrent(item.href) ? "page" : undefined}
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f5f5f7]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#f5f5f7]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ) : null}

            {ctaLabel && ctaHref ? (
              <div className="mt-4 border-t border-[#e2e2e5] pt-4">
                <Link
                  href={ctaHref}
                  className="block rounded-full bg-[#1d1d1f] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#343438]"
                  onClick={() => setMobileOpen(false)}
                >
                  {ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}
