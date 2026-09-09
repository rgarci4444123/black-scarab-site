import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmailSignupCard from "@/components/email-signup-card";
import SiteHeader from "@/components/site-header";
import { getNewsUpdateBySlug, newsUpdates } from "@/lib/news";

type Props = {
  params: Promise<{ slug: string }>;
};

const baseUrl = "https://www.blackscarab.ai";

export function generateStaticParams() {
  return newsUpdates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const update = getNewsUpdateBySlug(slug);

  if (!update) {
    return { title: "News Article Not Found" };
  }

  return {
    title: update.title,
    description: update.summary,
    authors: [{ name: update.author.name, url: update.author.href }],
    alternates: { canonical: `/news/${update.slug}` },
    openGraph: {
      type: "article",
      url: `${baseUrl}/news/${update.slug}`,
      siteName: "Black Scarab",
      title: update.title,
      description: update.summary,
      publishedTime: update.publishedDate,
      authors: [update.author.name],
      images: update.image ? [{ url: update.image, alt: update.imageAlt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: update.title,
      description: update.summary,
      images: update.image ? [update.image] : undefined,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const update = getNewsUpdateBySlug(slug);

  if (!update) notFound();

  const articleUrl = `${baseUrl}/news/${update.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: update.title,
    description: update.summary,
    datePublished: update.publishedDate,
    dateModified: update.publishedDate,
    articleSection: update.category,
    mainEntityOfPage: articleUrl,
    image: update.image ? [`${baseUrl}${update.image}`] : undefined,
    author: { "@type": "Person", name: update.author.name, url: `${baseUrl}${update.author.href}` },
    publisher: {
      "@type": "Organization",
      name: "Black Scarab",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/icon.png` },
    },
    citation: update.sources.map((source) => source.url),
  };

  return (
    <main className="min-h-screen bg-[#f6f4ef] px-4 py-4 text-[#111827] sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e7e3da] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SiteHeader homeHref="/" ctaLabel="Discuss an Opportunity" ctaHref="/intake" />

        <article>
          <header className="border-b border-[#e8e3da] bg-[#fffdfa] px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
            <div className="mx-auto max-w-4xl">
              <Link href="/news" className="text-sm font-medium text-[#526147] transition hover:text-[#111827]">
                Back to Physical AI News
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#647456]">
                <span>{update.category}</span>
                <span aria-hidden="true" className="text-[#c7bfb3]">·</span>
                <time dateTime={update.publishedDate}>{update.publishedLabel}</time>
                <span aria-hidden="true" className="text-[#c7bfb3]">·</span>
                <span>{update.readingTime}</span>
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[4rem]">
                {update.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#58636e] sm:text-xl">
                {update.summary}
              </p>
              <Link href={update.author.href} className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#111827] transition hover:text-[#526147]">
                <Image src="/rodolfo-garcia-about-portrait.jpeg" alt="" width={40} height={40} sizes="40px" className="h-10 w-10 rounded-full object-cover ring-1 ring-[#ded9cf]" />
                <span>By {update.author.name}</span>
              </Link>
            </div>
          </header>

          <div className="px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
            <div className="mx-auto max-w-4xl">
              {update.image ? (
                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-[#dce7d7]">
                    <Image src={update.image} alt={update.imageAlt ?? ""} fill priority sizes="(min-width: 1024px) 896px, calc(100vw - 48px)" className="object-cover" />
                  </div>
                  {update.imageCaption ? <figcaption className="mt-3 text-sm leading-6 text-[#727a84]">{update.imageCaption}</figcaption> : null}
                </figure>
              ) : null}

              <section className="mt-10 rounded-[22px] border border-[#d9e4d3] bg-[#eef4ea] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#647456]">At a glance</p>
                <ul className="mt-5 space-y-3 text-base leading-7 text-[#374235]">
                  {update.keyPoints.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#718064]" aria-hidden="true" />{point}</li>)}
                </ul>
              </section>

              <div className="mt-12 space-y-11">
                {update.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{section.heading}</h2>
                    <div className="mt-5 space-y-5 text-base leading-8 text-[#3f4954] sm:text-lg">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-12 border-y border-[#e8e3da] py-8">
                <h2 className="text-xl font-semibold tracking-[-0.02em]">Sources and further reading</h2>
                <ol className="mt-5 space-y-3 text-sm leading-6 text-[#58636e]">
                  {update.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="font-medium text-[#3f5137] underline decoration-[#b9c7b2] underline-offset-4 transition hover:text-[#111827]">{source.label}</a></li>)}
                </ol>
              </section>

              <section className="mt-12 grid gap-6 rounded-[24px] border border-[#e3ded5] bg-[#faf8f3] p-6 sm:grid-cols-[112px_minmax(0,1fr)] sm:p-8">
                <Image src="/rodolfo-garcia-about-portrait.jpeg" alt="Rodolfo Garcia Calderoni" width={112} height={112} sizes="112px" className="h-28 w-28 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#647456]">About the author</p>
                  <h2 className="mt-3 text-xl font-semibold">Rodolfo Garcia Calderoni, CFA</h2>
                  <p className="mt-3 text-sm leading-7 text-[#606975]">Rodolfo is the founder of Black Scarab, where he covers the technologies and commercial signals shaping physical AI adoption in Mexico and Latin America.</p>
                  <Link href="/about" className="mt-4 inline-block text-sm font-medium text-[#3f5137] underline decoration-[#b9c7b2] underline-offset-4">Meet Rodolfo</Link>
                </div>
              </section>
            </div>
          </div>
        </article>

        <section className="border-t border-[#efeae1] px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-5xl"><EmailSignupCard source={`news-${update.slug}`} /></div>
        </section>
      </div>
    </main>
  );
}
