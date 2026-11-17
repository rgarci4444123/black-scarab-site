"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics/react";
import { EventDirectoryRow, EventMonthGroup, EventPriorityBadge } from "@/components/event-directory";

export type PublicVirtualEvent = {
  id: string; displayTitle: string; organizer: string; category: string; format: string;
  startUtc: string; endUtc: string | null; url: string; summary: string; cost: string; price: string | null;
  priority?: boolean;
};

export function eventDateParts(start: string, zone: string) {
  const date = new Date(start);
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short", timeZone: zone }).format(date),
    day: new Intl.DateTimeFormat("en-US", { day: "numeric", timeZone: zone }).format(date),
    full: new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZone: zone, timeZoneName: "short" }).format(date),
    label: new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", timeZone: zone }).format(date),
    clock: new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: zone, timeZoneName: "short" }).format(date),
    monthLabel: new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: zone }).format(date),
    monthKey: `${new Intl.DateTimeFormat("en-US", { year: "numeric", timeZone: zone }).format(date)}-${new Intl.DateTimeFormat("en-US", { month: "2-digit", timeZone: zone }).format(date)}`,
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
  const groups = new Map<string, { month: string; events: { event: PublicVirtualEvent; date: ReturnType<typeof eventDateParts> }[] }>();
  for (const event of visible) {
    const date = eventDateParts(event.startUtc, zone);
    if (!groups.has(date.monthKey)) groups.set(date.monthKey, { month: date.monthLabel, events: [] });
    groups.get(date.monthKey)!.events.push({ event, date });
  }

  if (!visible.length) return <div className="mx-auto max-w-2xl py-16 text-center sm:py-24">
    <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#273126]">More virtual events coming soon</h2>
    <p className="mt-4 text-base leading-7 text-[#6e6e73]">We&apos;re tracking upcoming webinars, demonstrations, and technical sessions across the Physical AI industry. Check back for new listings.</p>
  </div>;

  return <div className="mx-auto max-w-[1460px]">
    {[...groups].map(([monthKey, group]) => <EventMonthGroup key={monthKey} monthKey={monthKey} month={group.month}>
      {group.events.map(({ event, date }) => <EventDirectoryRow key={event.id}
        dateLabel={<time dateTime={event.startUtc} aria-label={date.full}>{date.label}</time>}
        dateDetails={<><time dateTime={event.startUtc}>{date.clock}</time>
          {event.format === "Hybrid webinar" ? <><br />Hybrid</> : null}
          {event.cost === "paid" ? <><br />{event.price}</> : event.cost === "free" ? <><br />Free</> : null}</>}
        meta={<><span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#6e6e73]">{event.organizer}</span>
          {event.priority ? <EventPriorityBadge /> : null}</>}
        title={event.displayTitle} summary={event.summary} url={event.url} actionLabel="Event Details"
        onClick={() => track("Virtual Event Registration Click", { event_id: event.id, organizer: event.organizer })}
        onAuxClick={eventClick => { if (eventClick.button === 1) track("Virtual Event Registration Click", { event_id: event.id, organizer: event.organizer }); }} />)}
    </EventMonthGroup>)}
  </div>;
}
