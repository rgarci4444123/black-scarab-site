import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "How Black Scarab handles information submitted through its website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader homeHref="/" ctaLabel="Discuss an Opportunity" ctaHref="/intake" />
        <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
            Privacy notice
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Your information should have a clear purpose.
          </h1>
          <p className="mt-6 text-base leading-8 text-[#59616b] sm:text-lg">
            Black Scarab collects only the information you choose to submit through this website. This notice explains how that information is used and the choices available to you.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-[#4b5563]">
            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Newsletter subscriptions</h2>
              <p className="mt-3">
                When you subscribe to Black Scarab Weekly, we collect your email address and the signup location on the website. We use this information to send the weekly newsletter, understand which signup placements are useful, and maintain the subscriber list. Newsletter subscription information is processed by beehiiv, our email publication provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Business inquiries</h2>
              <p className="mt-3">
                Information submitted through the opportunity form is used to review and respond to the inquiry. This can include your name, company, contact details, website, and the information you provide about the opportunity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Site measurement</h2>
              <p className="mt-3">
                The site uses Vercel Analytics and Speed Insights to understand site performance and aggregate engagement, including newsletter form activity and article interactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Your choices</h2>
              <p className="mt-3">
                Every newsletter includes an unsubscribe link. You can also request access, correction, or deletion of information you submitted by emailing{" "}
                <Link href="mailto:info@blackscarab.ai" className="font-medium text-[#34402f] underline decoration-[#9eaa95] underline-offset-4">
                  info@blackscarab.ai
                </Link>
                . Black Scarab does not sell subscriber email addresses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Updates</h2>
              <p className="mt-3">
                This notice may be updated as the site and its service providers change. The current version is effective September 9, 2026.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
