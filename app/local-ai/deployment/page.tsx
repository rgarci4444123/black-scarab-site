import type { Metadata } from "next";
import LocalAiDeploymentForm from "@/components/local-ai-deployment-form";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    absolute: "Local AI Implementation & Private AI Deployment | Black Scarab",
  },
  description:
    "Looking to deploy private Local AI? Black Scarab connects individuals and organizations with vetted specialists for on-premise AI, private LLMs, RAG, and GPU infrastructure.",
  alternates: {
    canonical: "/local-ai/deployment",
  },
  openGraph: {
    type: "website",
    url: "/local-ai/deployment",
    title: "Local AI Implementation & Private AI Deployment | Black Scarab",
    description:
      "Looking to deploy private Local AI? Black Scarab connects individuals and organizations with vetted specialists for on-premise AI, private LLMs, RAG, and GPU infrastructure.",
  },
};

export default function LocalAiDeploymentPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          ctaLabel="Back to Insights"
          ctaHref="/insights"
        />

        <section className="relative overflow-hidden bg-[#10150f] px-6 py-12 text-white md:px-10 md:py-16 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#9eb18e]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#dce7d2]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(500px,1.18fr)] lg:items-start lg:gap-16">
            <div className="lg:pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Local AI implementation
              </p>
              <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
                Build Your Own Private AI
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#d8ded5] sm:text-lg">
                Tell us what you&apos;re trying to accomplish. Black Scarab
                works with vetted Local AI specialists who can help design,
                build, and deploy private AI systems for individuals,
                professionals, businesses, and enterprises.
              </p>
              <div className="mt-8 space-y-5 border-l border-[#65715f] pl-5 text-sm leading-7 text-[#bfc8bc] sm:text-base">
                <p>
                  Whether you&apos;re looking for a private AI assistant at home,
                  an internal company knowledge system, an on-premise LLM
                  deployment, or larger GPU infrastructure, tell us what
                  you&apos;re trying to build.
                </p>
                <p>
                  We&apos;ll review your project and, when appropriate, connect
                  you directly with an implementation specialist that fits the
                  requirements.
                </p>
              </div>
            </div>

            <LocalAiDeploymentForm />
          </div>
        </section>

        <footer className="border-t border-[#242c22] bg-[#10150f] px-6 py-6 text-center text-sm text-[#b8c0b6] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. AI infrastructure for modern industry.</span>
            <span className="text-[#596257]">|</span>
            <span>Based in Miami, FL</span>
            <span className="text-[#596257]">|</span>
            <a
              href="mailto:info@blackscarab.ai"
              className="transition hover:text-white"
            >
              info@blackscarab.ai
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
