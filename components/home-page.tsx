import Image from "next/image";
import Link from "next/link";
import { insights } from "@/app/insights-data";
import EmailSignupCard from "@/components/email-signup-card";
import SiteHeader from "@/components/site-header";
import { newsUpdates } from "@/lib/news";
import styles from "./home-page.module.css";

const ecosystemNodes = [
  {
    label: "Companies",
    image: "/images/news/palladyne-ai-fanuc-industrial-robots.png",
    position: styles.companies,
  },
  {
    label: "Machines",
    image: "/article-images/nvidia-physical-ai-infrastructure-guide.png",
    position: styles.machines,
  },
  {
    label: "Capital",
    image: "/images/news/bain-capital-ventures-fund-xi-physical-ai.png",
    position: styles.capital,
  },
  {
    label: "Infrastructure",
    image: "/article-images/physical-ai-infrastructure-companies.png",
    position: styles.infrastructure,
  },
  {
    label: "Deployment",
    image: "/article-images/case-study-manufacturing.jpg",
    position: styles.deployment,
  },
];

function PhysicalAiEconomy() {
  return (
    <figure
      className={styles.ecosystem}
      aria-label="The physical AI economy connects companies, machines, capital, infrastructure, and deployment"
    >
      <svg
        className={styles.network}
        viewBox="0 0 760 560"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="sphere-fill" cx="50%" cy="46%" r="56%">
            <stop offset="0" stopColor="#eef3eb" stopOpacity="0.9" />
            <stop offset="0.72" stopColor="#f7f8f5" stopOpacity="0.52" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <clipPath id="sphere-clip">
            <circle cx="392" cy="280" r="172" />
          </clipPath>
        </defs>

        <g className={styles.connectionLines}>
          <path d="M132 118 C222 110 244 188 330 214" />
          <path d="M116 278 C228 264 240 254 336 264" />
          <path d="M136 446 C230 430 244 350 342 328" />
          <path d="M625 126 C556 130 538 194 466 220" />
          <path d="M648 424 C560 414 540 350 466 328" />
          <path d="M132 118 C310 128 468 426 648 424" />
          <path d="M116 278 C304 126 476 138 625 126" />
          <path d="M136 446 C318 410 470 196 625 126" />
        </g>

        <circle
          cx="392"
          cy="280"
          r="184"
          fill="url(#sphere-fill)"
          stroke="#ccd6c8"
          strokeWidth="1"
        />

        <g clipPath="url(#sphere-clip)" className={styles.sphereGrid}>
          <circle cx="392" cy="280" r="172" />
          <ellipse cx="392" cy="280" rx="172" ry="68" />
          <ellipse cx="392" cy="280" rx="172" ry="118" />
          <ellipse cx="392" cy="280" rx="70" ry="172" />
          <ellipse cx="392" cy="280" rx="122" ry="172" />
          <path d="M220 280 H564" />
          <path d="M392 108 V452" />
          <path d="M267 172 C308 190 322 222 316 248 C310 276 278 286 284 316 C292 350 334 352 346 384" />
          <path d="M420 148 C450 164 476 184 482 212 C490 248 468 260 476 290 C486 328 530 334 542 368" />
        </g>

        <g className={styles.networkDots}>
          {[
            [304, 192],
            [350, 236],
            [430, 206],
            [482, 252],
            [318, 308],
            [396, 286],
            [454, 338],
            [354, 372],
            [506, 304],
            [276, 264],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />
          ))}
        </g>
      </svg>

      {ecosystemNodes.map((node) => (
        <div key={node.label} className={`${styles.node} ${node.position}`}>
          <span className={styles.nodeLabel}>{node.label}</span>
          <span className={styles.nodeImage}>
            <Image
              src={node.image}
              alt=""
              fill
              loading="eager"
              sizes="(min-width: 1024px) 88px, 64px"
              className="object-cover grayscale"
            />
          </span>
        </div>
      ))}
    </figure>
  );
}

export default function HomePage() {
  const latestNews = newsUpdates[0];
  const featuredInsight =
    insights.find((insight) =>
      insight.href.includes(
        "mexico-physical-ai-manufacturing-nearshoring-automation",
      ),
    ) ?? insights[0];
  const infrastructureCompanies =
    insights.find((insight) =>
      insight.href.includes("top-15-physical-ai-infrastructure-companies"),
    ) ?? insights[1];

  const editorialCards = [
    {
      eyebrow: "Latest news",
      title: latestNews.title,
      href: `/news/${latestNews.slug}`,
      image: latestNews.image,
      imageAlt: latestNews.imageAlt ?? "",
    },
    {
      eyebrow: "Featured insight",
      title: featuredInsight.title,
      href: featuredInsight.href,
      image: featuredInsight.image,
      imageAlt: featuredInsight.title,
    },
    {
      eyebrow: "Physical AI companies",
      title: infrastructureCompanies.title,
      href: infrastructureCompanies.href,
      image: infrastructureCompanies.image,
      imageAlt: infrastructureCompanies.title,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4f2ec] px-3 py-3 text-[#101410] sm:px-5 sm:py-5 lg:px-7">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-[24px] border border-[#dfded7] bg-[#fbfaf6] shadow-[0_24px_70px_rgba(15,23,42,0.055)] sm:rounded-[30px]">
        <SiteHeader
          homeHref="/"
          ctaLabel="Subscribe"
          ctaHref="#subscribe"
          ctaTone="solid"
        />

        <section className="border-b border-[#d9d9d2] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-14">
          <div className="mx-auto grid max-w-[1460px] gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(560px,1.12fr)] lg:items-center lg:gap-4">
            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#536451] sm:text-xs">
                News <span aria-hidden="true">·</span> Research{" "}
                <span aria-hidden="true">·</span> Industry
              </p>
              <h1 className="mt-7 max-w-[12ch] text-[clamp(3.25rem,6vw,6.6rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-[#0b0d0b]">
                Intelligence for the physical AI economy.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[#626a74] sm:text-lg sm:leading-8 lg:max-w-xl xl:text-xl xl:leading-9">
                Black Scarab covers the companies, technologies, and industrial
                systems moving physical AI from development into deployment.
              </p>
            </div>

            <PhysicalAiEconomy />
          </div>
        </section>

        <section aria-labelledby="editorial-heading">
          <h2 id="editorial-heading" className="sr-only">
            Latest Black Scarab coverage
          </h2>
          <div className="grid divide-y divide-[#d9d9d2] md:grid-cols-3 md:divide-x md:divide-y-0">
            {editorialCards.map((card, index) => (
              <article key={card.eyebrow} className="group min-w-0 p-5 sm:p-7 lg:p-8">
                <Link href={card.href} className="block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#334236]">
                    {card.eyebrow}
                  </p>
                  <div className="relative mt-5 aspect-[16/8.6] overflow-hidden bg-[#e7ebe3]">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? undefined : "eager"}
                        sizes="(min-width: 768px) 33vw, calc(100vw - 48px)"
                        className="object-cover transition duration-500 group-hover:scale-[1.025]"
                      />
                    ) : null}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-medium leading-[1.08] tracking-[-0.035em] text-[#171a17] sm:text-[1.7rem] lg:text-[1.85rem]">
                    {card.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#526147]">
                    Read report <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="subscribe"
          className="scroll-mt-28 border-t border-[#d9d9d2] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <EmailSignupCard
              source="homepage-intelligence"
              title="Follow the physical AI economy"
              description="Get Black Scarab news, deep research, and practical analysis in one clear Thursday briefing."
            />
          </div>
        </section>

        <footer className="border-t border-[#d9d9d2] px-6 py-6 text-center text-sm text-[#626b75] md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>© 2026 Black Scarab. Intelligence for the physical AI economy.</span>
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
