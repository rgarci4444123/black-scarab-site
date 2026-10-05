import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import AuthorLinkedIn from "@/components/author-linkedin";
import { InsightReadTracker } from "@/components/engagement-analytics";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import type { CaseStudyArticle, CaseStudyParagraph } from "@/lib/case-studies";
import { authorLinkedInUrl, authorPortraitSrc } from "@/lib/site-author";
import styles from "./editorial-insight.module.css";

function paragraphContent(paragraph: CaseStudyParagraph) {
  if (typeof paragraph === "string") return paragraph;
  return paragraph.map((part, index) => typeof part === "string" ? part : (
    <a key={`${part.href}-${index}`} href={part.href} target="_blank" rel="noopener noreferrer">{part.text}</a>
  ));
}

export default function EditorialInsight({ article }: { article: CaseStudyArticle }) {
  const date = new Date(`${article.publishedDate}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <main className={styles.root}>
      <SiteHeader homeHref="/" />
      <article data-insight-article>
        <InsightReadTracker slug={article.slug} />
        <header className={styles.intro}>
          <p className={styles.kicker}><Link href="/insights">Insights</Link> &nbsp; / &nbsp; Deep Dive</p>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.subtitle}>{article.summary}</p>
          <div className={styles.byline}>
            <Image src={authorPortraitSrc} width={48} height={48} alt="Rodolfo Garcia Calderoni" className={styles.portrait} sizes="48px" />
            <div>
              <div className={styles.authorName}><Link href="/about">{article.author?.name}</Link><AuthorLinkedIn href={authorLinkedInUrl} /></div>
              <p className={styles.meta}>Published {date} &nbsp; · &nbsp; {article.readingMinutes} min read</p>
            </div>
          </div>
        </header>
        <figure className={styles.cover}>
          <Image src={article.image} alt={article.imageAlt} width={1536} height={864} sizes="(min-width:1200px) 1152px, calc(100vw - 48px)" preload />
          <figcaption>{article.imageCaption}</figcaption>
        </figure>
        <div className={styles.body}>
          {article.sections.map((section, index) => (
            <section className={styles.section} key={`${section.heading ?? "intro"}-${index}`}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <Fragment key={paragraphIndex}>
                  <p>{paragraphContent(paragraph)}</p>
                  {section.visuals?.filter(visual => visual.afterParagraphIndex === paragraphIndex + 1).map(visual => (
                    <figure className={styles.chart} key={visual.src}>
                      <picture>
                        {visual.mobileSrc ? <source media="(max-width:600px)" srcSet={visual.mobileSrc} /> : null}
                        <Image src={visual.src} alt={visual.alt} width={1800} height={1164} unoptimized />
                      </picture>
                    </figure>
                  ))}
                </Fragment>
              ))}
            </section>
          ))}
          <details className={styles.sources}>
            <summary>Reporting notes and sources</summary>
            <div className={styles.sourceNotes}>{article.reportingNotes?.map((note, index) => <p key={index}>{paragraphContent(note)}</p>)}</div>
          </details>
          <section className={styles.authorCard}>
            <Image src={authorPortraitSrc} alt="Rodolfo Garcia Calderoni" width={75} height={75} sizes="75px" />
            <div>
              <div className={styles.authorName}><Link href="/about">{article.author?.name}</Link><AuthorLinkedIn href={authorLinkedInUrl} /></div>
              <p>Founder of Black Scarab. Analysis of the companies, machines and infrastructure shaping Physical AI.</p>
            </div>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
