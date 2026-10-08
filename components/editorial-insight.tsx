import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { InsightReadTracker } from "@/components/engagement-analytics";
import type { CaseStudyArticle, CaseStudySection } from "@/lib/case-studies";
import { authorPortraitSrc } from "@/lib/site-author";
import styles from "./editorial-insight.module.css";

function EditorialVisual({ visual }: { visual: NonNullable<CaseStudySection["visuals"]>[number] }) {
  const overview = Boolean(visual.fullSizeLink);
  return (
    <figure className={`${styles.visual} ${overview ? styles.overview : ""}`}>
      <picture>
        {visual.mobileSrc ? (
          <source media={`(max-width:${visual.mobileBreakpoint ?? 1000}px)`} srcSet={visual.mobileSrc} width={visual.mobileWidth} height={visual.mobileHeight} />
        ) : null}
        <Image src={visual.src} alt={visual.alt} width={visual.width ?? 1663} height={visual.height ?? 932} unoptimized />
      </picture>
      {visual.caption || visual.fullSizeLink ? (
        <figcaption>
          {visual.caption}
          {visual.fullSizeLink ? <> <a href={visual.fullSizeLink} target="_blank" rel="noopener noreferrer">View full size timeline</a></> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function EditorialInsight({ article, structuredData }: { article: CaseStudyArticle; structuredData: string }) {
  const date = new Date(`${article.publishedDate}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <div className={styles.chrome}><SiteHeader homeHref="/" /></div>
      <article className={styles.article} data-insight-article>
        <InsightReadTracker slug={article.slug} />
        <div className={styles.head}>
          <p className={styles.eyebrow}><Link href="/insights">INSIGHTS</Link> <span>/</span> ROBOT LEARNING</p>
          <h1>{article.title}</h1>
          <p className={styles.dek}>{article.summary}</p>
          <div className={styles.byline}>
            <Image src={authorPortraitSrc} width={48} height={48} alt={article.author?.name ?? "Black Scarab"} />
            <div><strong>{article.author?.name}</strong><span>Published {date} <span className={styles.dot}>·</span> {article.readingMinutes} min read</span></div>
          </div>
        </div>
        <figure className={styles.cover}>
          <Image src={article.image} width={1600} height={900} alt={article.imageAlt} sizes="(min-width:1200px) 1152px, calc(100vw - 48px)" loading="eager" quality={95} />
          <figcaption>{article.imageCaption}</figcaption>
        </figure>
        <div className={styles.body} data-editorial-body>
          {article.sections.map((section, sectionIndex) => (
            <Fragment key={section.heading ?? `intro-${sectionIndex}`}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <Fragment key={paragraphIndex}>
                  <p>{typeof paragraph === "string" ? paragraph : paragraph.map((part, index) => typeof part === "string" ? part : <Link key={index} href={part.href}>{part.text}</Link>)}</p>
                  {section.visuals?.filter(visual => visual.afterParagraphIndex === paragraphIndex + 1).map(visual => <EditorialVisual key={visual.src} visual={visual} />)}
                </Fragment>
              ))}
            </Fragment>
          ))}
          <section className={styles.sources} id="sources">
            <h2>Sources</h2>
            {article.reportingNotes?.map((note, index) => <p className={styles.sourceNote} key={index}>{typeof note === "string" ? note : null}</p>)}
            <ol>{article.sourceLinks?.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ol>
          </section>
          <aside className={styles.authorCard}>
            <Image src={authorPortraitSrc} width={88} height={88} alt={article.author?.name ?? "Black Scarab"} />
            <div><p className={styles.eyebrow}>ABOUT THE AUTHOR</p><strong>{article.author?.name}</strong><p>Rodolfo is the founder of Black Scarab, where he covers the technologies and commercial signals shaping physical AI adoption.</p><Link href="/about">Meet Rodolfo</Link></div>
          </aside>
        </div>
      </article>
      <div className={styles.chrome}><SiteFooter /></div>
    </main>
  );
}
