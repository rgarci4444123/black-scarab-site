import { SectionHero } from "@/components/section-hero";
import { SitePage, SiteSurface } from "@/components/site-frame";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import EmailSignupCard from "@/components/email-signup-card";
import EventsTabs from "@/components/events-tabs";

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <SitePage><SiteSurface>
    <SiteHeader homeHref="/" />
    <SectionHero section="events" />
    <EventsTabs />
    {children}
    <section id="subscribe" className="scroll-mt-28 border-t border-[#e2e2e5] px-5 py-12 sm:px-8 sm:py-16 lg:px-14">
      <div className="mx-auto max-w-5xl"><EmailSignupCard source="events-index" /></div>
    </section>
    <SiteFooter />
  </SiteSurface></SitePage>;
}
