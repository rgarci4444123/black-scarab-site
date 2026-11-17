"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EventsTabs() {
  const active = usePathname().startsWith("/events/virtual") ? "virtual" : "in-person";
  return (
    <nav aria-label="Event directories" className="flex justify-center gap-7 border-b border-[#e2e2e5] px-5 sm:gap-10">
      {([
        ["in-person", "/events", "In-Person Events"],
        ["virtual", "/events/virtual", "Virtual Events"],
      ] as const).map(([id, href, label]) => (
        <Link key={id} href={href} scroll={false} aria-current={active === id ? "page" : undefined}
          className={`border-b-2 px-1 py-5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#387b76] ${active === id ? "border-[#387b76] text-[#286b66]" : "border-transparent text-[#6e6e73] hover:text-[#111611]"}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
