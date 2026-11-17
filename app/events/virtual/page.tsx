import type { Metadata } from "next";
import { connection } from "next/server";
import { headers } from "next/headers";
import VirtualEventsList from "@/components/virtual-events-list";
import { PageEvent } from "@/components/engagement-analytics";
import { DAY, type VirtualEvent } from "@/lib/virtual-events";
import { verifiedPublicEvents } from "@/lib/virtual-events-server";
import { allowsLocalVirtualEventsPreview } from "@/lib/virtual-events-preview";
import records from "@/data/virtual-events/events.json";
import intake from "@/data/virtual-events/intakes/2026-11-16-curated.json";

const description = "Live webinars, technical workshops, and industry discussions covering robotics, Physical AI, industrial automation, and autonomous systems.";
export const metadata: Metadata = {
  title: "Upcoming Virtual Events",
  description,
  alternates: { canonical: "/events/virtual" },
  openGraph: { type: "website", title: "Upcoming Virtual Events | Black Scarab", description, url: "https://www.blackscarab.ai/events/virtual" },
};

export default async function VirtualEventsPage() {
  await connection();
  const now = new Date();
  const preview = allowsLocalVirtualEventsPreview({ nodeEnv: process.env.NODE_ENV,
    enabled: process.env.BLACK_SCARAB_VIRTUAL_EVENTS_PREVIEW, host: (await headers()).get("host"), vercel: process.env.VERCEL });
  const previewIds = new Set(intake.map(event => event.eventId));
  const events = preview ? (records as VirtualEvent[]).filter(event => previewIds.has(event.id)
    && !["rejected", "expired", "canceled"].includes(event.status)
    && Date.parse(event.startUtc) > now.getTime() && Date.parse(event.startUtc) <= now.getTime() + 30 * DAY)
    .sort((a, b) => Date.parse(a.startUtc) - Date.parse(b.startUtc))
    : await verifiedPublicEvents(records as VirtualEvent[], now);
  const publicEvents = events.map(({ id, displayTitle, organizer, category, format, startUtc, endUtc, url, summary, cost, price }) =>
    ({ id, displayTitle, organizer, category, format, startUtc, endUtc, url, summary, cost, price }));
  const schema = preview ? [] : events.map(event => ({
    "@context": "https://schema.org", "@type": "Event", name: event.displayTitle,
    description: event.summary, startDate: event.startUtc, ...(event.endUtc ? { endDate: event.endUtc } : {}),
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode", eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: event.url },
    organizer: { "@type": "Organization", name: event.organizer, url: event.organizerWebsite }, url: event.url,
    ...(event.cost === "free" ? { isAccessibleForFree: true } : {}),
  }));
  return <>
    <section id="calendar" className="scroll-mt-28 px-5 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-14">
      <VirtualEventsList events={publicEvents} renderedAt={now.toISOString()} />
    </section>
    {schema.length ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /> : null}
    <PageEvent name="Virtual Events Visit" />
  </>;
}
