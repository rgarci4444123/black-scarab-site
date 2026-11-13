import Link from "next/link";
import EmailSignupCard from "@/components/email-signup-card";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getGlossaryRelatedTerms, getGlossaryContextTargets, glossaryPublication } from "@/lib/glossary";
import { createGlossaryMentionLinker } from "@/lib/glossary-linking";
import { getDraftGlossaryRelatedTerms, GLOSSARY_PREVIEW_PATH } from "@/lib/glossary-preview";
import type { GlossaryArticle } from "@/lib/glossary-publication";
import type { ReactNode } from "react";
import { glossaryCategoryColor } from "@/lib/glossary-colors";

// Supplied prose is rendered as text, never as executable HTML or MDX.
function inline(text: string, renderText: (value: string) => ReactNode = (value) => value): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)]+\))/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{renderText(part.slice(2, -2))}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={index}>{renderText(part.slice(1, -1))}</em>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} className="text-[#0075ff] underline underline-offset-4" rel="noopener noreferrer">{link[1]}</a>;
    return renderText(part);
  });
}

export default function GlossaryArticleView({ article, preview = false }: { article: GlossaryArticle; preview?: boolean }) {
  const control = glossaryPublication.terms[article.id];
  const related = preview ? getDraftGlossaryRelatedTerms(article.slug) : getGlossaryRelatedTerms(article);
  const hubPath = preview ? GLOSSARY_PREVIEW_PATH : "/resources/physical-ai-glossary";
  const blocks = article.bodyMarkdown.split(/\n\s*\n/);
  const sections = blocks.map((block, index) => {
    const heading = block.match(/^#{2,3} (.+)$/);
    return heading ? { index, title: heading[1], id: `section-${index}` } : null;
  }).filter((section) => section !== null);
  const firstParagraph = blocks.findIndex((block) => !block.startsWith("#"));
  const linkMentions = createGlossaryMentionLinker(getGlossaryContextTargets(article, preview));
  const renderLinkedText = (text: string) => linkMentions(text).map((segment, index) => segment.href
    ? <Link key={index} href={segment.href} data-glossary-mention={segment.targetId} className="underline decoration-[#b8bec7] decoration-1 underline-offset-[4px] transition-colors hover:text-[#0075ff] hover:decoration-[#0075ff] focus-visible:text-[#0075ff]">{segment.text}</Link>
    : segment.text);
  const lastModified = control.modifiedAt ?? control.publishedAt;
  return (
    <main className="min-h-screen bg-white text-[#0b0d0b]">
      <SiteHeader homeHref="/" />
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-[#626a74]">
          <Link href={hubPath}>Physical AI Glossary</Link><span aria-hidden="true">/</span><span aria-current="page">{article.displayName}</span>
        </nav>
        <header className="border-b border-[#dedfe4] pb-6 pt-7 sm:pb-9 sm:pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: glossaryCategoryColor(article.category) }}>{article.category}</p>
          <h1 className="mt-4 max-w-4xl text-[36px] font-semibold leading-[1.06] tracking-[-0.06em] sm:text-[56px]">{article.headline}<span className="text-[#718b78]">.</span></h1>
          <p className="mt-6 text-xs text-[#626a74]">By <Link href="/about" className="underline underline-offset-4">{control.authorName}</Link>{lastModified ? <> · <time dateTime={lastModified}>{new Date(lastModified).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</time></> : null}</p>
        </header>
        <div className="grid items-start gap-10 pt-8 lg:grid-cols-[160px_minmax(0,1fr)]">
          <aside className="hidden text-xs leading-5 lg:block" aria-label="On this page">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#72747c]">On this page</p>
            {sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block border-l border-[#dedfe4] py-2 pl-3 text-[#626a74] hover:text-[#0075ff]">{section.title}</a>)}
            <a href="#sources" className="block border-l border-[#dedfe4] py-2 pl-3">Sources</a>
            <a href="#related-terms" className="block border-l border-[#dedfe4] py-2 pl-3">Related terms</a>
          </aside>
          <article className="min-w-0 text-base leading-8 text-[#626a74]">
            <details className="mb-5 border-y border-[#dedfe4] py-3 text-sm lg:hidden"><summary>On this page</summary>{sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block py-2">{section.title}</a>)}<a href="#sources" className="block py-2">Sources</a><a href="#related-terms" className="block py-2">Related terms</a></details>
            {blocks.map((block, index) => {
              const heading = block.match(/^(#{2,3}) (.+)$/);
              if (heading) return <h2 key={index} id={`section-${index}`} className="mb-4 mt-8 scroll-mt-6 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#0b0d0b]">{heading[2]}</h2>;
              const lines = block.split("\n");
              if (lines.every((line) => /^[-*] /.test(line))) return <ul key={index} className="mb-6 list-disc space-y-2 pl-5">{lines.map((line, n) => <li key={n}>{inline(line.slice(2), renderLinkedText)}</li>)}</ul>;
              if (lines.every((line) => /^\d+\. /.test(line))) return <ol key={index} className="mb-6 list-decimal space-y-2 pl-5">{lines.map((line, n) => <li key={n}>{inline(line.replace(/^\d+\. /, ""), renderLinkedText)}</li>)}</ol>;
              return <p key={index} className={index === firstParagraph ? "mb-7 border-l-[3px] border-[#00a98f] pl-5 text-xl leading-8 text-[#0b0d0b]" : "mb-4"}>{inline(block, index === firstParagraph ? undefined : renderLinkedText)}</p>;
            })}
            <section id="sources" className="mt-9 scroll-mt-6 border-t border-[#dedfe4] pt-6"><h2 className="text-xl font-semibold tracking-tight text-[#0b0d0b]">Sources</h2><ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6">{article.sources.map((source) => <li key={`${source.label}-${source.url}`}><a href={source.url} className="text-[#0075ff] underline underline-offset-4" rel="noopener noreferrer">{source.label}</a></li>)}</ol></section>
            {related.length > 0 && <section id="related-terms" className="mt-9 scroll-mt-6"><h2 className="text-xl font-semibold tracking-tight text-[#0b0d0b]">Related terms</h2><div className="mt-3 grid gap-x-6 sm:grid-cols-2">{related.map((term) => term.href ? <Link key={term.id} href={term.href} className="block border-b border-[#dedfe4] py-4 text-sm text-[#0b0d0b] underline decoration-[#b8bec7] decoration-1 underline-offset-[5px] transition-colors hover:text-[#0075ff] hover:decoration-[#0075ff] focus-visible:text-[#0075ff] focus-visible:decoration-[#0075ff]">{term.name}</Link> : <span key={term.id} className="border-b border-[#dedfe4] py-4 text-sm text-[#0b0d0b]">{term.name}</span>)}</div></section>}
            {control.coveragePaths.length > 0 && <section className="mt-8 border-y border-[#dedfe4] py-5"><h2 className="text-xs font-semibold uppercase tracking-widest text-[#72747c]">Further reading</h2>{control.coveragePaths.map((path) => <Link key={path} href={path} className="mt-3 block text-sm text-[#0075ff]">{path.split("/").at(-1)!.replaceAll("-", " ")}</Link>)}</section>}
            <div className="mt-10"><EmailSignupCard source={`glossary-${article.slug}`} compact /></div>
          </article>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
