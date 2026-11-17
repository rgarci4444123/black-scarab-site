import { SectionHero } from "@/components/section-hero";
import { SitePage, SiteSurface } from "@/components/site-frame";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import EmailSignupCard from "@/components/email-signup-card";
import EventsTabs from "@/components/events-tabs";

const suggestionHref = `mailto:info@blackscarab.ai?subject=${encodeURIComponent("Event suggestion for Black Scarab")}&body=${encodeURIComponent("Event name:\nEvent link:\nDate:\n\n")}`;

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <SitePage><SiteSurface>
    <SiteHeader homeHref="/" />
    <SectionHero section="events" />
    <EventsTabs />
    {children}
    <section aria-label="Suggest an event" className="px-5 pb-6 sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-[1460px] justify-center border-t border-[#e2e2e5] pt-6">
        <a href={suggestionHref} className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border border-[#cbd3dd] bg-white px-6 py-3 text-sm font-medium text-[#0071e3] transition hover:border-[#0071e3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0071e3]">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
            <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <path d="m3.5 5.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Suggest an event
        </a>
      </div>
    </section>
    <section id="subscribe" className="scroll-mt-28 border-t border-[#e2e2e5] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl"><EmailSignupCard source="events-index" /></div>
    </section>
    <SiteFooter />
  </SiteSurface></SitePage>;
}
