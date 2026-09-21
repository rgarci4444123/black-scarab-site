import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing access to Black Scarab publications, website features, and connector services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader homeHref="/" ctaLabel="Discuss an Opportunity" ctaHref="/intake" />
        <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
            Terms of use
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            Clear terms for using Black Scarab.
          </h1>
          <p className="mt-6 text-base leading-8 text-[#59616b] sm:text-lg">
            These terms govern access to the Black Scarab website, publications, forms, feeds, and connector services. By using these services, you agree to these terms. If you do not agree, please do not use them.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-[#4b5563]">
            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Informational purpose</h2>
              <p className="mt-3">
                Black Scarab publishes independent news, research, analysis, and educational material about physical AI, local AI, robotics, industrial technology, and related markets. The content is provided for general information and does not constitute investment, legal, tax, accounting, engineering, safety, medical, or other professional advice. You remain responsible for verifying information and obtaining qualified advice before making a decision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Editorial information and sources</h2>
              <p className="mt-3">
                Black Scarab aims to distinguish verified facts, company statements, outside reporting, analysis, and hypothetical examples. Sources, specifications, prices, availability, customer relationships, and market conditions can change. Publication does not guarantee that information is complete, current, or free from error.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">AI and connector services</h2>
              <p className="mt-3">
                A Black Scarab connector may help users discover relevant publications by returning limited previews, publication metadata, and links to complete reports on this website. Connector results may be selected, summarized, or presented by a third party AI service and may be incomplete or out of date. The complete publication at its canonical Black Scarab URL is the controlling version of Black Scarab content.
              </p>
              <p className="mt-3">
                Third party AI platforms operate under their own terms and privacy policies. Black Scarab does not control their interfaces, generated responses, availability, or handling of information submitted directly to them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Intellectual property and permitted use</h2>
              <p className="mt-3">
                Unless otherwise identified, Black Scarab owns its original articles, analysis, illustrations, site design, and branding. You may access and share links to public pages for lawful personal, educational, or internal business use. You may not reproduce, republish, sell, license, systematically extract, or create a substitute publication from Black Scarab content without written permission.
              </p>
              <p className="mt-3">
                Automated indexing that follows the published robots instructions is permitted. Bulk downloading, bypassing technical restrictions, or using Black Scarab content to build datasets or train models requires prior written permission. Third party names, marks, images, and quoted material remain the property of their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Acceptable use</h2>
              <p className="mt-3">
                You may not misuse the website, forms, feeds, or connector services; interfere with their operation; attempt unauthorized access; submit unlawful or harmful material; impersonate another person; or use the services in a way that infringes the rights of Black Scarab or others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">External links and services</h2>
              <p className="mt-3">
                Black Scarab links to source materials and third party services for reference and context. A link does not imply endorsement, control, or responsibility for the linked content, security, availability, products, or practices. Your use of a third party service is governed by that provider&apos;s terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Availability and changes</h2>
              <p className="mt-3">
                Black Scarab may update, correct, remove, suspend, or discontinue content or services at any time. Access may be interrupted by maintenance, technical problems, provider changes, or events outside Black Scarab&apos;s control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Disclaimers and limitation of liability</h2>
              <p className="mt-3">
                The website, publications, feeds, and connector services are provided as available without guarantees of accuracy, availability, fitness for a particular purpose, or noninfringement. To the fullest extent permitted by applicable law, Black Scarab LLC and its representatives will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of, or reliance on, the services or content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Privacy</h2>
              <p className="mt-3">
                The collection and use of information submitted directly to Black Scarab is described in the{" "}
                <Link href="/privacy" className="font-medium text-[#34402f] underline decoration-[#9eaa95] underline-offset-4">
                  Privacy Notice
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#111827]">Updates and contact</h2>
              <p className="mt-3">
                These terms may be updated as Black Scarab&apos;s publications and services change. The current version is effective September 20, 2026. Questions about these terms can be sent to{" "}
                <Link href="mailto:info@blackscarab.ai" className="font-medium text-[#34402f] underline decoration-[#9eaa95] underline-offset-4">
                  info@blackscarab.ai
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
