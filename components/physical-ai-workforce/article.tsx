import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { SitePage, SiteSurface } from "@/components/site-frame";
import AuthorLinkedIn from "@/components/author-linkedin";
import EmailSignupCard from "@/components/email-signup-card";
import { InsightReadTracker } from "@/components/engagement-analytics";
import { authorLinkedInUrl, authorPortraitSrc } from "@/lib/site-author";
import type { CaseStudyArticle } from "@/lib/case-studies";
import content from "@/lib/physical-ai-workforce-content.json";
import tableData from "@/lib/physical-ai-workforce-tables.json";
import { workforceSections, workforceSectionId } from "@/lib/physical-ai-workforce";
import styles from "./article.module.css";

type Table = { name: string; title: string; scope: string; columns: string[]; rows: string[][] };
const tables: Record<string, Table> = tableData;
const methodIndex = content.blocks.findIndex(block => block.markdown === "# Methodology");
const sourcesIndex = content.blocks.findIndex(block => block.markdown === "# Sources and the twenty career guides");

function inline(text: string, links = false) {
  return text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return links ? <a key={index} href={link[2].replace("https://www.blackscarab.ai", "")}>{link[1]}</a> : link[1];
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

function DataTable({ table }: { table: Table }) {
  const numeric = ["hiring", "skills", "compensation"].includes(table.name);
  return <figure className={`${styles.figure} ${table.name === "compensation" ? styles.pay : ""} ${table.name === "entry-routes" ? styles.entry : ""} ${table.name === "locations" ? styles.locations : ""}`}>
    <figcaption><h3>{table.title}</h3><p>{table.scope}</p></figcaption>
    <table className={numeric ? styles.numeric : undefined}>
      <thead><tr>{table.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>
      <tbody>{table.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row">{inline(cell)}</th> : <td key={index}>{inline(cell)}</td>)}</tr>)}</tbody>
    </table>
  </figure>;
}

function Block({ id, markdown }: { id: string; markdown: string }) {
  if (tables[id]) return <DataTable table={tables[id]} />;
  if (markdown === "---") return <hr />;
  if (markdown.startsWith("# ")) return <h2 id={workforceSectionId(markdown)}>{markdown.slice(2)}</h2>;
  if (markdown.startsWith("### ")) return <h4>{markdown.slice(4)}</h4>;
  if (markdown.startsWith("## ")) return <h3>{markdown.slice(3)}</h3>;
  if (markdown.startsWith("* ")) return <p className={styles.sourceLink}>{inline(markdown.slice(2), true)}</p>;
  if (markdown.startsWith("*") && markdown.endsWith("*")) return <p className={styles.caption}>{inline(markdown.slice(1, -1))}</p>;
  return <p>{inline(markdown, markdown.includes("twenty Physical AI career guides") || id === "sources")}</p>;
}

export default function WorkforceArticle({ article, schemas }: { article: CaseStudyArticle; schemas: unknown[] }) {
  return <SitePage><SiteSurface>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
    <SiteHeader homeHref="/" />
    <article data-insight-article className={styles.report}>
      <InsightReadTracker slug={article.slug} />
      <header className={styles.hero}>
        <nav aria-label="Breadcrumb"><Link href="/insights">Insights</Link><span>/</span><span>Workforce research</span></nav>
        <div className={styles.heroGrid}>
          <div><p className={styles.eyebrow}>Black Scarab Intelligence · Deep Dive</p>
            <h1>{article.title.split(": ")[0]}:<span>{" "}{article.title.split(": ").slice(1).join(": ")}</span></h1>
            <div className={styles.byline}>
              <Link href="/about"><Image src={authorPortraitSrc} alt="" width={44} height={44} /><span>Rodolfo Garcia Calderoni, CFA</span></Link><AuthorLinkedIn href={authorLinkedInUrl} />
            </div>
            <p className={styles.date}><time dateTime="2026-11-24">November 24, 2026</time><span>·</span>12 min read</p>
          </div>
          <figure className={styles.cover}><Image src={article.image} alt={article.imageAlt} width={1254} height={1254} loading="eager" sizes="(min-width: 1024px) 440px, (min-width: 761px) 35vw, 300px" /><figcaption>Editorial illustration by Black Scarab.</figcaption></figure>
        </div>
      </header>
      <div className={styles.layout}>
        <aside className={styles.contents}>
          <nav aria-label="In this report"><p>In this report</p>{workforceSections.slice(0,7).map(section => <a href={`#${workforceSectionId(section.markdown)}`} key={section.id}>{section.markdown.slice(2)}</a>)}<a href="#methodology">Methodology and sources</a></nav>
          <Link href="/career-paths" className={styles.guideLink}>Explore the 20 career guides</Link>
        </aside>
        <div className={styles.body}>
          {content.blocks.slice(2,methodIndex).map(block => <Fragment key={block.id}>
            {block.markdown === "# What employers are willing to pay" ? <div className={styles.newsletter}>
              <EmailSignupCard source={`insight-inline:${article.slug}`} compact />
            </div> : null}
            <Block {...block} />
          </Fragment>)}
          <div className={styles.appendix}>
            <details id="methodology"><summary>Methodology</summary><div>{content.blocks.slice(methodIndex+1,sourcesIndex).map(block => <Block key={block.id} {...block} />)}</div></details>
            <details id="sources"><summary>Sources and the twenty career guides</summary><div>{content.blocks.slice(sourcesIndex+1).map(block => <Block key={block.id} id="sources" markdown={block.markdown} />)}<h3>Employer advertisements</h3>{article.sourceLinks?.filter(source => !content.blocks.slice(sourcesIndex+1).some(block => block.markdown.includes(source.url))).map(source => <p key={source.url}><a href={source.url}>{source.label}</a></p>)}</div></details>
          </div>
          <section className={styles.author}><Image src={authorPortraitSrc} alt="Rodolfo Garcia Calderoni" width={72} height={72} /><div><p>About the author</p><h2>Rodolfo Garcia Calderoni, CFA</h2><p>Founder of Black Scarab, covering the technologies and commercial signals shaping physical AI adoption.</p><Link href="/about">Meet Rodolfo</Link></div></section>
          <div className={styles.bottomLinks}><Link href="/insights">Back to Insights</Link><Link href="/career-paths">Explore career paths</Link></div>
        </div>
      </div>
    </article>
    <section className="px-6 pb-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <EmailSignupCard source={`insight:${article.slug}`} />
      </div>
    </section>
    <SiteFooter />
  </SiteSurface></SitePage>;
}
