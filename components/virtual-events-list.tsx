"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics/react";
import { groupVirtualEvents } from "@/lib/virtual-events";

export type PublicVirtualEvent = {
  id: string; displayTitle: string; organizer: string; category: string; format: string;
  startUtc: string; endUtc: string | null; url: string; summary: string; cost: string; price: string | null;
};

export function eventDateParts(start: string, zone: string) {
  const date = new Date(start);
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short", timeZone: zone }).format(date),
    day: new Intl.DateTimeFormat("en-US", { day: "numeric", timeZone: zone }).format(date),
    full: new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZone: zone, timeZoneName: "short" }).format(date),
  };
}

export default function VirtualEventsList({ events, renderedAt }: { events: PublicVirtualEvent[]; renderedAt: string }) {
  const [zone, setZone] = useState("UTC");
  const [now, setNow] = useState(() => new Date(renderedAt));
  useEffect(() => {
    const initial = window.setTimeout(() => {
      try { setZone(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"); } catch { /* UTC fallback */ }
      setNow(new Date());
    }, 0);
    const tick = () => setNow(new Date());
    const timer = window.setInterval(tick, 30_000);
    document.addEventListener("visibilitychange", tick);
    return () => { window.clearTimeout(initial); window.clearInterval(timer); document.removeEventListener("visibilitychange", tick); };
  }, []);
  const visible = events.filter(e => Date.parse(e.startUtc) > now.getTime());
  // Only presentation fields cross the server/client boundary.
  const groups = groupVirtualEvents(visible, now);

  if (!visible.length) return <div className="mx-auto max-w-2xl py-16 text-center sm:py-24">
    <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#273126]">More virtual events coming soon</h2>
    <p className="mt-4 text-base leading-7 text-[#6e6e73]">We&apos;re tracking upcoming webinars, demonstrations, and technical sessions across the Physical AI industry. Check back for new listings.</p>
  </div>;

  return <div className="mx-auto max-w-6xl py-8 sm:py-10">
    <p className="mb-6 text-xs text-[#6e6e73]">Times shown in {zone}</p>
    {groups.map((group, index) => <section key={group.label ?? index} aria-label={group.label ?? "Upcoming virtual events"} className="mb-8 last:mb-0">
      {group.label ? <h2 className="mb-4 text-xl font-semibold tracking-[-0.025em] text-[#273126]">{group.label}</h2> : null}
      {group.events.map(event => {
        const date = eventDateParts(event.startUtc, zone);
        return <article key={event.id} className="grid grid-cols-[52px_minmax(0,1fr)] gap-4 border-t border-[#e2e2e5] py-7 sm:grid-cols-[76px_minmax(0,1fr)] sm:gap-8 sm:py-8">
          <time dateTime={event.startUtc} aria-label={date.full} className="flex h-[72px] flex-col items-center justify-center rounded-xl bg-[#f5f5f7] sm:h-[84px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6e6e73]">{date.month}</span>
            <span className="mt-1 text-2xl font-semibold tracking-tight text-[#273126] sm:text-3xl">{date.day}</span>
          </time>
          <div className="min-w-0">
            <p className="text-xs font-medium text-[#6e6e73]">{event.organizer} · {event.category}</p>
            <h3 className="mt-2 text-[1.4rem] font-semibold leading-tight tracking-[-0.035em] text-[#111611] [overflow-wrap:anywhere] sm:text-[1.8rem]">{event.displayTitle}</h3>
            <p className="mt-3 text-xs leading-6 text-[#626b75]"><time dateTime={event.startUtc}>{date.full}</time> · {event.format}{event.cost === "paid" ? ` · ${event.price}` : event.cost === "free" ? " · Free" : ""}</p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#626b75]">{event.summary}</p>
            <a href={event.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#0071e3] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
              onClick={() => track("Virtual Event Registration Click", { event_id: event.id, organizer: event.organizer })}
              onAuxClick={eventClick => { if (eventClick.button === 1) track("Virtual Event Registration Click", { event_id: event.id, organizer: event.organizer }); }}>
              Event Details <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>;
      })}
    </section>)}
  </div>;
}
