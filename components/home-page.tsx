import Image from "next/image";
import Link from "next/link";
import { insights } from "@/app/insights-data";
import SiteHeader from "@/components/site-header";

const navItems = [
  { label: "Technology", href: "/catalog", isPage: true },
  { label: "Insights", href: "/insights", isPage: true },
  { label: "About", href: "/about", isPage: true },
];

const engagements = [
  {
    number: "01",
    audience: "For physical AI companies",
    title: "Mexico Market-Entry Assessment",
    description:
      "A focused assessment of market fit, priority use cases, buyer context, competitive positioning, and the most credible next step.",
    outputs: ["Market-fit thesis", "Priority use cases", "Entry-path recommendation"],
  },
  {
    number: "02",
    audience: "For providers or operators",
    title: "Industrial Opportunity Mapping",
    description:
      "A structured view of relevant operators, decision-makers, technical evaluators, integrators, and commercial pathways.",
    outputs: ["Stakeholder map", "Use-case qualification", "Partner landscape"],
  },
  {
    number: "03",
    audience: "For qualified opportunities",
    title: "Strategic Introductions & Development",
    description:
      "Prepared introductions and early commercial coordination around a defined problem, credible technology fit, and useful next step.",
    outputs: ["Introduction brief", "Qualified meetings", "Early-stage coordination"],
  },
];

const focusAreas = [
  {
    title: "Manufacturing",
    description:
      "Machine vision, adaptive automation, collaborative robotics, quality inspection, and material handling.",
  },
  {
    title: "Warehousing & logistics",
    description:
      "Autonomous mobile robots, intelligent handling, inventory perception, and fleet coordination.",
  },
  {
    title: "Energy & infrastructure",
    description:
      "Robotic inspection, remote asset intelligence, aerial sensing, and condition monitoring.",
  },
  {
    title: "Mining & construction",
    description:
      "Hazardous-environment inspection, reality capture, autonomous equipment, and progress intelligence.",
  },
];

const featuredInsights = insights.slice(0, 3);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader
          homeHref="/"
          navLinks={navItems}
          showIndustries={false}
          ctaLabel="Discuss an Opportunity"
          ctaHref="/intake"
        />

        <section className="relative overflow-hidden bg-[#10150f] px-6 py-14 text-white md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="pointer-events-none absolute -left-28 top-0 h-96 w-96 rounded-full bg-[#9eb18e]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#dce7d2]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.72fr)] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b8c7ab]">
                Physical AI market development · Mexico
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl lg:text-[4.35rem]">
                From breakthrough technology to qualified industrial
                opportunity.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#d7ddd4] sm:text-lg">
                Black Scarab helps robotics, autonomous-systems, and industrial
                AI companies understand the Mexican market, reach the right
                stakeholders, and form credible commercial opportunities.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/intake"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111810] transition hover:bg-[#edf4e8]"
                >
                  Discuss an Opportunity
                </Link>
                <Link
                  href="/insights"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore Research
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.14em] text-[#d4dbd1]">
                <span className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2">
                  Mexico first
                </span>
                <span className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2">
                  Based in Miami
                </span>
                <span className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2">
                  English + Spanish
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#dfe7d8] p-6 text-[#10150f] shadow-[0_28px_80px_rgba(0,0,0,0.25)] sm:p-8">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(16,21,15,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,21,15,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/65 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.19em] text-[#586450]">
                  <span>Black Scarab</span>
                  <span>Commercial bridge</span>
                </div>

                <p className="mt-12 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
                  A structured path from market signal to commercial next step.
                </p>

                <ol className="mt-8 space-y-3">
                  {[
                    "Technology fit",
                    "Mexico use case",
                    "Stakeholder map",
                    "Qualified introduction",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-[#10150f]/10 bg-white/45 px-4 py-3"
                    >
                      <span className="font-mono text-xs font-semibold text-[#637157]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 rounded-2xl bg-[#111810] px-5 py-4 text-sm leading-6 text-[#d7ddd4]">
                  Technical validation and deployment remain with the provider
                  and qualified implementation partners.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Ways to engage
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Start with a defined commercial question.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#59616b] sm:text-lg">
                Engagements are structured around the decision that needs to be
                made—not a generic promise to implement an entire system.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {engagements.map((engagement, index) => (
                <article
                  key={engagement.number}
                  className={
                    index === engagements.length - 1
                      ? "rounded-[26px] border border-[#1e281c] bg-[#111810] p-7 text-white sm:p-8"
                      : "rounded-[26px] border border-[#e3ded5] bg-white p-7 sm:p-8"
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={
                        index === engagements.length - 1
                          ? "font-mono text-xs font-semibold tracking-[0.16em] text-[#b8c7ab]"
                          : "font-mono text-xs font-semibold tracking-[0.16em] text-[#647456]"
                      }
                    >
                      {engagement.number}
                    </span>
                    <span
                      className={
                        index === engagements.length - 1
                          ? "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b8c7ab]"
                          : "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#718064]"
                      }
                    >
                      {engagement.audience}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.025em]">
                    {engagement.title}
                  </h3>
                  <p
                    className={
                      index === engagements.length - 1
                        ? "mt-4 text-sm leading-7 text-[#d4dbd1]"
                        : "mt-4 text-sm leading-7 text-[#626b75]"
                    }
                  >
                    {engagement.description}
                  </p>
                  <ul
                    className={
                      index === engagements.length - 1
                        ? "mt-6 space-y-2 border-t border-white/12 pt-5 text-sm text-[#e0e6dd]"
                        : "mt-6 space-y-2 border-t border-[#ece7df] pt-5 text-sm text-[#4f5964]"
                    }
                  >
                    {engagement.outputs.map((output) => (
                      <li key={output} className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={
                            index === engagements.length - 1
                              ? "h-1.5 w-1.5 rounded-full bg-[#b8c7ab]"
                              : "h-1.5 w-1.5 rounded-full bg-[#718064]"
                          }
                        />
                        {output}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-7 max-w-4xl text-sm leading-7 text-[#69727b]">
              Scope depends on the technology and market question. Technical
              validation, engineering, installation, and support remain with
              the provider and qualified implementation partners.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Initial sector focus
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Physical AI where operational value is measurable
              </h2>
              <p className="mt-5 text-base leading-8 text-[#606975] sm:text-lg">
                The focus is not robotics for its own sake. It is technology
                that improves inspection, movement, visibility, safety, or
                productivity in demanding physical environments.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-[#e2ddd4] bg-[#e2ddd4] sm:grid-cols-2">
              {focusAreas.map((area, index) => (
                <article key={area.title} className="bg-[#fffdfa] p-7 sm:p-9">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#647456]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[#dce4d6]" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em]">
                    {area.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#66707b]">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[30px] border border-[#20271f] bg-[#111810] p-7 text-white sm:p-10 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8c7ab]">
                Technology landscape
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Understand the stack behind physical AI.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d1d8ce]">
                Edge compute, perception, sensors, connectivity, robotics, and
                software still matter. The Black Scarab technology library is a
                research resource for understanding how those layers fit
                together—not a claim that Black Scarab installs every product.
              </p>
              <Link
                href="/catalog"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111810] transition hover:bg-[#edf4e8]"
              >
                Explore Technology
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Robotics", "Perception", "Edge compute", "Sensors", "Connectivity", "Software"].map(
                (layer) => (
                  <div
                    key={layer}
                    className="rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-5 text-sm font-medium text-[#e0e6dd]"
                  >
                    {layer}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-[#efeae1] bg-[#faf8f3] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                  Insights
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Research before the introduction
                </h2>
                <p className="mt-5 text-base leading-8 text-[#606975]">
                  Independent analysis of physical AI, robotics, edge
                  infrastructure, and real-world deployment.
                </p>
              </div>
              <Link
                href="/insights"
                className="w-fit rounded-full border border-[#d7d1c6] bg-white px-6 py-3 text-sm font-medium transition hover:bg-[#f6f4ef]"
              >
                View All Research
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {featuredInsights.map((insight) => (
                <Link
                  key={insight.title}
                  href={insight.href}
                  target={insight.kind === "external" ? "_blank" : undefined}
                  rel={insight.kind === "external" ? "noreferrer" : undefined}
                  className="group overflow-hidden rounded-[24px] border border-[#e8e4dc] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
                >
                  {insight.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8eee3]">
                      <Image
                        src={insight.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 33vw, calc(100vw - 48px)"
                        className="object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : null}
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.17em] text-[#718064]">
                      {insight.published}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold leading-7 tracking-[-0.02em]">
                      {insight.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#66707b]">
                      {insight.summary}
                    </p>
                    <p className="mt-6 text-sm font-medium text-[#111827]">
                      {insight.ctaLabel} →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.56fr_1.44fr] lg:items-center lg:gap-14">
            <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-[26px] bg-[#171b17]">
              <Image
                src="/rodolfo-garcia-founder.png"
                alt="Rodolfo Garcia Calderoni, founder of Black Scarab"
                fill
                quality={95}
                sizes="(min-width: 1024px) 360px, calc(100vw - 48px)"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Founder-led
              </p>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Built around cross-border relationships, market judgment, and
                clear commercial positioning.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#606975] sm:text-lg">
                Rodolfo Garcia Calderoni, CFA, founded Black Scarab to help
                differentiated physical AI companies navigate the gap between
                technical capability and market adoption in Latin America,
                beginning with Mexico.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex rounded-full border border-[#d7d1c6] px-6 py-3 text-sm font-medium transition hover:bg-[#faf8f3]"
              >
                Meet the Founder
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[#efeae1] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] border border-[#e3ded5] bg-[#faf8f3] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#647456]">
                Start with fit
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Evaluating Mexico or exploring an industrial use case?
              </h2>
              <p className="mt-5 text-base leading-8 text-[#606975]">
                Begin with the technology, the operational problem, and what a
                useful next step would need to accomplish.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:flex-col">
              <Link
                href="/intake"
                className="rounded-full bg-[#111827] px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-[#1f2937]"
              >
                Discuss an Opportunity
              </Link>
              <a
                href="mailto:info@blackscarab.ai?subject=Mexico%20Market%20Opportunity"
                className="rounded-full border border-[#d7d1c6] bg-white px-6 py-3 text-center text-sm font-medium transition hover:bg-[#f6f4ef]"
              >
                Email Black Scarab
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#efeae1] px-6 py-6 text-center text-sm text-[#626b75] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>
              © 2026 Black Scarab. Physical AI market development for Mexico.
            </span>
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
