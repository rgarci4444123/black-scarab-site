import Image from "next/image";
import Link from "next/link";
import AuthorLinkedIn from "@/components/author-linkedin";
import type { MarketCommentary } from "@/lib/market-commentaries";
import { authorLinkedInUrl, authorPortraitSrc } from "@/lib/site-author";
import { MarketBarChart } from "./market-bar-chart";
import styles from "./market-article.module.css";

type NativeEdition = Extract<MarketCommentary, { article: unknown }>;

export function MarketArticle({ edition }: { edition: NativeEdition }) {
  const { article, title, publishedAt, readingMinutes } = edition;
  const dateLabel = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(publishedAt));

  return (
    <div className={styles.edition}>
      <section className="article-header" aria-label="Commentary introduction">
        <header className="article-masthead">
          <div className="edition-line">
            <Link href="/markets">← Markets / Weekly market commentary #{article.issueNumber}</Link>
            <time dateTime={publishedAt}>{dateLabel}</time>
          </div>
          <h1>{title}</h1>
          <div className="byline">
            <Image src={authorPortraitSrc} width={42} height={42} alt="" />
            <div>
              <div className="byline-author">
                <Link href="/about">{article.authorName}</Link>
                <AuthorLinkedIn href={authorLinkedInUrl} />
              </div>
              <span>{article.bylineCoverage} <i aria-hidden="true">·</i> {readingMinutes} min read</span>
            </div>
          </div>
        </header>
        <figure className="hero weekly-cover">
          <Image src={edition.image} alt={edition.imageAlt} width={edition.imageWidth ?? 1672}
            height={edition.imageHeight ?? 941} sizes="(max-width: 640px) calc(100vw - 72px), (max-width: 830px) calc(100vw - 102px), 730px" preload />
          <figcaption>Editorial illustration.</figcaption>
        </figure>
      </section>
      <div className="reading-layout">
        <article className="article-body" id="article" aria-label="Weekly market commentary">
          <details className="edition-contents">
            <summary>In this edition <span aria-hidden="true">+</span></summary>
            <nav aria-label="Article contents">
              {article.sections.filter(({ heading }) => heading).map(({ id, heading }) => (
                <a href={`#${id}`} key={id}>{heading}</a>
              ))}
              <a href="#sources">Sources and references</a>
            </nav>
            <a className="contents-index-link" href="/indices/physical-ai-adoption-15">Explore the Physical AI 15</a>
          </details>
          {article.sections.map(({ id, heading, blocks }) => (
            <section className="article-section" id={id} key={id}>
              {heading ? <h2>{heading}</h2> : null}
              {blocks.map((block, index) => typeof block === "string"
                ? <p key={index}>{block}</p>
                : <MarketBarChart id={`chart-${block}`} chart={article.charts[block - 1]} key={index} />)}
            </section>
          ))}
          <hr className={styles.divider} />
          <section className="sources" id="sources">
            <h2>Sources and references</h2>
            {article.sourceGroups.map(({ heading, items, start }) => (
              <div key={heading}>
                <h3>{heading}</h3>
                <ol start={start}>
                  {items.map(({ parts }, index) => (
                    <li key={start + index}>
                      {parts.map(({ href, text }) => href ? <a href={href} key={href}>{text}</a> : text)}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
            {article.notes.map(note => <p className={styles.note} key={note}>{note}</p>)}
          </section>
        </article>
      </div>
    </div>
  );
}
