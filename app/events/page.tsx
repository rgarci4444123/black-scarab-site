import type { Metadata } from "next";
import EmailSignupCard from "@/components/email-signup-card";
import SiteHeader from "@/components/site-header";
import { physicalAiEvents, type PhysicalAiEvent } from "@/lib/events";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "Physical AI Events",
  description:
    "A curated calendar of the conferences, exhibitions, and industry gatherings shaping robotics, embodied intelligence, and autonomous systems.",
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

const groupedEvents = Array.from(
  physicalAiEvents
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

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
    >
      <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function EventCard({ event }: { event: PhysicalAiEvent }) {
  return (
    <article className="group grid gap-5 border-t border-[#dedbd2] py-7 first:border-t-0 sm:grid-cols-[140px_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-8">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#687263]">
          {event.dateLabel}
        </p>
        <p className="mt-2 text-sm text-[#747c84]">
          {event.city}
          <br />
          {event.country}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#647456]">
            {event.focus}
          </span>
          {event.tier === "Anchor" ? (
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8a7154]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#879a7c]" />
              Priority
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 text-[1.65rem] font-semibold leading-[1.03] tracking-[-0.04em] text-[#111611] sm:text-[1.9rem]">
          {event.shortName}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#626b75]">
          {event.summary}
        </p>
      </div>

      <a
        href={event.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full border border-[#cbc7bd] px-5 py-2.5 text-sm font-medium text-[#1a211a] transition hover:border-[#6d7c68] hover:bg-[#edf2e9] sm:mt-1"
        aria-label={`Visit the official ${event.shortName} website`}
      >
        Event site <ArrowUpRight />
      </a>
    </article>
  );
}

export default function EventsPage() {
  const eventListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Black Scarab Physical AI Events",
    numberOfItems: physicalAiEvents.length,
    itemListElement: physicalAiEvents.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: event.name,
        startDate: event.startDate,
        endDate: event.endDate,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        url: event.url,
        location: {
          "@type": "Place",
          name: event.venue ?? `${event.city}, ${event.country}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: event.city,
            addressCountry: event.country,
          },
        },
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f4f2ec] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventListSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-[#dfded7] bg-[#fbfaf6] shadow-[0_24px_70px_rgba(15,23,42,0.055)] sm:rounded-[30px]">
        <SiteHeader homeHref="/" />

        <section className="border-b border-[#dce5d6] bg-[#111810] px-6 py-10 text-white md:px-10 md:py-12 lg:px-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Black Scarab
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Physical AI Events
              </h1>
            </div>

            <div className="w-full max-w-md border-t border-[#53604e] pt-4 sm:mb-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#91a286]">
                Calendar
              </p>
              <p className="mt-2 text-sm leading-6 text-[#d3dbcf] sm:text-base sm:leading-7">
                Conferences shaping robotics, autonomy, and embodied intelligence.
              </p>
            </div>
          </div>
        </section>

        <section id="calendar" className="scroll-mt-28 px-5 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-14">
          <div className="mx-auto max-w-[1460px]">
            {groupedEvents.map((group) => (
              <section
                key={group.monthKey}
                id={group.monthKey}
                className="scroll-mt-28 grid gap-4 border-b border-[#cfcac0] py-8 first:pt-10 last:border-b-0 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-10 lg:py-10 lg:first:pt-12"
                aria-labelledby={`${group.monthKey}-heading`}
              >
                <div>
                  <h2
                    id={`${group.monthKey}-heading`}
                    className="text-xl font-semibold tracking-[-0.025em] text-[#273126] lg:sticky lg:top-28"
                  >
                    {group.month}
                  </h2>
                </div>
                <div>
                  {group.events.map((event) => (
                    <EventCard key={event.shortName} event={event} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section id="subscribe" className="scroll-mt-28 border-t border-[#d9d9d2] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
          <div className="mx-auto max-w-5xl">
            <EmailSignupCard
              source="events-index"
            />
          </div>
        </section>

        <footer className="border-t border-[#d9d9d2] px-6 py-6 text-center text-sm text-[#626b75] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. Intelligence for the physical AI economy.</span>
            <span className="text-[#c9c1b5]">|</span>
            <a href="mailto:info@blackscarab.ai" className="transition hover:text-[#111827]">
              info@blackscarab.ai
            </a>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="https://www.linkedin.com/company/black-scarab/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#111827]"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
