import type { Metadata } from "next";
import { connection } from "next/server";
import { SectionHero } from "@/components/section-hero";
import { SitePage, SiteSurface } from "@/components/site-frame";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import EmailSignupCard from "@/components/email-signup-card";
import EventsTabs from "@/components/events-tabs";
import VirtualEventsList from "@/components/virtual-events-list";
import { PageEvent } from "@/components/engagement-analytics";
import { type VirtualEvent } from "@/lib/virtual-events";
import { verifiedPublicEvents } from "@/lib/virtual-events-server";
import records from "@/data/virtual-events/events.json";

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
  const events = await verifiedPublicEvents(records as VirtualEvent[], now);
  const publicEvents = events.map(({ id, displayTitle, organizer, category, format, startUtc, endUtc, url, summary, cost, price }) =>
    ({ id, displayTitle, organizer, category, format, startUtc, endUtc, url, summary, cost, price }));
  const schema = events.map(event => ({
    "@context": "https://schema.org", "@type": "Event", name: event.displayTitle,
    description: event.summary, startDate: event.startUtc, ...(event.endUtc ? { endDate: event.endUtc } : {}),
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode", eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: event.url },
    organizer: { "@type": "Organization", name: event.organizer, url: event.organizerWebsite }, url: event.url,
    ...(event.cost === "free" ? { isAccessibleForFree: true } : {}),
  }));
  return <SitePage><SiteSurface>
    <SiteHeader homeHref="/" />
    <SectionHero section="events" title="Upcoming Virtual Events" description={description} />
    <EventsTabs active="virtual" />
    <section id="calendar" className="scroll-mt-28 px-5 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-14">
      <VirtualEventsList events={publicEvents} renderedAt={now.toISOString()} />
    </section>
    {schema.length ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /> : null}
    <PageEvent name="Virtual Events Visit" />
    <section id="subscribe" className="scroll-mt-28 border-t border-[#e2e2e5] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl"><EmailSignupCard source="virtual-events-index" /></div>
    </section>
    <SiteFooter />
  </SiteSurface></SitePage>;
}
