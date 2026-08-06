import type { Metadata } from "next";
import Link from "next/link";
import ModelsClient from "@/components/models-client";
import SiteHeader from "@/components/site-header";

const baseUrl = "https://www.blackscarab.ai";

export const metadata: Metadata = {
  title: "AI Model Landscape for Physical Systems",
  description:
    "Research open-source and commercial AI models by deployment style, model type, and potential fit within physical AI systems.",
  alternates: {
    canonical: "/models",
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/models`,
    title: "Black Scarab AI Model Landscape",
    description:
      "A research-led comparison of AI models across edge, local, and cloud deployment strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Scarab AI Model Landscape",
    description:
      "Research the intelligence layer behind physical AI systems.",
  },
};

export default function ModelsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={[
            { label: "Technology", href: "/catalog", isPage: true },
            { label: "Insights", href: "/insights", isPage: true },
            { label: "About", href: "/about", isPage: true },
          ]}
          showIndustries={false}
          ctaLabel="Discuss an Opportunity"
          ctaHref="/intake"
        />

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 text-center md:px-10 md:py-18">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
            Model research · Physical AI
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">
            Understand the intelligence layer behind physical systems
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6b7280]">
            Compare open-source and commercial models by capability, licensing,
            and deployment style to understand where they may fit within
            robotics, vision, autonomy, and industrial workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              Open source + API models
            </div>
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              Edge · local · cloud
            </div>
            <div className="rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827]">
              Research comparison, not deployment advice
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/catalog"
              className="inline-flex rounded-full border border-[#111827] bg-white px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#111827] hover:text-white"
            >
              Explore Technology Landscape
            </Link>
            <Link
              href="/intake"
              className="inline-flex rounded-full bg-[#111827] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
            >
              Discuss an Opportunity
            </Link>
          </div>
        </section>

        <section className="border-b border-[#dfe7da] bg-[#edf4e8] px-6 py-8 md:px-10">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#667455]">
                Research scope
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#172016]">
                A comparison tool, not a recommendation
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-6 text-[#52604a]">
              <p>
                Model profiles synthesize publicly available information and
                Black Scarab&apos;s research perspective. They are intended to
                clarify the landscape and support early market conversations.
              </p>
              <p>
                Inclusion is not an endorsement or a deployment prescription.
                Model selection, licensing review, security assessment,
                validation, engineering, and implementation remain the
                responsibility of technology providers and qualified technical
                partners.
              </p>
            </div>
          </div>
        </section>

        <ModelsClient />

        <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              From research to market context
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Start with the industrial problem, not the model
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#6b7280]">
              If a model or capability points to a relevant physical AI use
              case, Black Scarab can help investigate the Mexico market,
              identify stakeholders, and form the right early conversation.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#7c8b6b]">
              Technical architecture, model validation, integration, and
              production support are led by technology providers and qualified
              implementation partners.
            </p>
            <div className="mt-8">
              <Link
                href="/intake"
                className="inline-block rounded-full bg-[#111827] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Discuss an Opportunity
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#6b7280] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. Physical AI market development for Mexico.</span>
            <span className="text-[#c9c1b5]">|</span>
            <span>Based in Miami, FL</span>
            <span className="text-[#c9c1b5]">|</span>
            <a
              href="mailto:info@blackscarab.ai"
              className="transition hover:text-[#111827]"
            >
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
