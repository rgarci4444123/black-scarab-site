import type { Metadata } from "next";
import { connection } from "next/server";
import { getUpcomingPhysicalAiEvents, type PhysicalAiEvent } from "@/lib/events";
import { ArrowUpRight, EventDirectoryRow, EventMonthGroup } from "@/components/event-directory";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Physical AI Events",
  description:
    "Conferences, webinars and workshops shaping Physical AI.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/events`,
    title: "Physical AI Events | Black Scarab",
    description:
      "The major conferences, exhibitions, and industry gatherings shaping physical AI.",
  },
};



function ChevronDown() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-4 w-4 transition-transform group-open/workshops:rotate-180"
      fill="none"
    >
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function WorkshopPanel({ event }: { event: PhysicalAiEvent }) {
  if (event.workshops?.length) {
    return (
      <details className="group/workshops border-t border-[#e2e2e5] pt-5 sm:col-start-2 sm:col-end-4">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-1 text-sm text-[#263126] transition hover:text-[#0071e3] [&::-webkit-details-marker]:hidden">
          <span>
            <span className="font-semibold">
              {event.workshops.length} workshops
            </span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 font-medium">
            Choose <ChevronDown />
          </span>
        </summary>

        <div className="mt-3 grid overflow-hidden rounded-2xl border border-[#d8d5cc] bg-[#d8d5cc] lg:grid-cols-2">
          {event.workshops.map((workshop) => (
            <a
              key={workshop.name}
              href={workshop.url}
              target="_blank"
              rel="noreferrer"
              className="group/workshop flex min-h-32 flex-col justify-between gap-5 bg-[#f5f5f7] p-5 transition hover:bg-[#f0f7ff]"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#788173]">
                  {workshop.schedule}
                </p>
                <h4 className="mt-2 max-w-xl text-base font-semibold leading-6 tracking-[-0.015em] text-[#172017]">
                  {workshop.name}
                </h4>
              </div>
              <div className="flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#687a5d]">
                <span>{workshop.focus}</span>
                <ArrowUpRight />
              </div>
            </a>
          ))}
        </div>
      </details>
    );
  }

  return null;
}

function EventCard({ event }: { event: PhysicalAiEvent }) {
  return (
    <EventDirectoryRow dateLabel={event.dateLabel} dateDetails={<>{event.city}<br />{event.country}</>}
      title={event.shortName} summary={event.summary} url={event.url} actionLabel="Event site"
      actionAriaLabel={`Visit the official ${event.shortName} website`}
      meta={<>
          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#6e6e73]">
            {event.focus}
          </span>
          {event.tier === "Anchor" ? (
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#c64c3b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c64c3b]" />
              Priority
            </span>
          ) : null}
      </>}>
      <WorkshopPanel event={event} />
    </EventDirectoryRow>
  );
}

export default async function EventsPage() {
  await connection();
  const upcomingEvents = getUpcomingPhysicalAiEvents();
  const groupedEvents = Array.from(
    upcomingEvents
      .reduce(
        (groups, event) => {
          const group = groups.get(event.monthKey);

          if (group) {
            group.events.push(event);
          } else {
            groups.set(event.monthKey, {
              monthKey: event.monthKey,
              month: event.month,
              events: [event],
            });
          }

          return groups;
        },
        new Map<
          string,
          { monthKey: string; month: string; events: PhysicalAiEvent[] }
        >(),
      )
      .values(),
  );

  const eventListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Black Scarab Physical AI Events",
    numberOfItems: upcomingEvents.length,
    itemListElement: upcomingEvents.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: event.name,
      description: event.summary,
      url: event.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventListSchema).replace(/</g, "\\u003c"),
        }}
      />

        <section id="calendar" className="scroll-mt-28 px-5 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-14">
          <div className="mx-auto max-w-[1460px]">
            {groupedEvents.map((group) => (
              <EventMonthGroup
                key={group.monthKey}
                monthKey={group.monthKey}
                month={group.month}
              >
                  {group.events.map((event) => (
                    <EventCard key={event.shortName} event={event} />
                  ))}
              </EventMonthGroup>
            ))}
          </div>
        </section>

    </>
  );
}
