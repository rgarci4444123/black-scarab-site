import type { Metadata } from "next";
import LocalAiDeploymentForm from "@/components/local-ai-deployment-form";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: { absolute: "Find a Robotics Partner | Black Scarab" },
  description:
    "Tell Black Scarab about your robotics project and explore relevant expertise and potential connections across the Physical AI ecosystem.",
  alternates: { canonical: "/robotics/partner" },
};

export default function RoboticsPartnerPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader homeHref="/" ctaLabel="Back to Insights" ctaHref="/insights" />
        <section className="bg-[#10150f] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(500px,1.18fr)] lg:items-start lg:gap-16">
            <div className="lg:pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Robotics projects
              </p>
              <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
                Find the right expertise.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d8ded5] sm:text-lg">
                Tell us what you&apos;re building and where you could use help.
                We&apos;ll explore relevant companies, tools, and potential
                connections across the Physical AI ecosystem.
              </p>
              <p className="mt-8 text-sm leading-7 text-[#bfc8bc]">
                Free to submit. Introductions depend on project fit and availability.
              </p>
            </div>
            <LocalAiDeploymentForm inquiryType="robotics_partner_inquiry" />
          </div>
        </section>
        <SiteFooter tone="dark" />
      </div>
    </main>
  );
}
