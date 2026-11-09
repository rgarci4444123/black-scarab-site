import Image from 'next/image';
import Link from 'next/link';
import type { CareerFamily, CareerGuideBlock, CareerGuideContent, CareerGuideSection } from '@/lib/career-paths/types';

import {CareerOverview,CareerGuideNavigation,CareerSkillMentions,CareerCompensationTable,CareerResearchNotes} from './career-guide-elements';

function GuideBlock({block}:{block:CareerGuideBlock}) {
  switch (block.type) {
    case 'paragraph': return <p>{block.text}</p>;
    case 'heading': return <h3>{block.text}</h3>;
    case 'list': return block.ordered
      ? <ol>{block.items.map(item=><li key={item}>{item}</li>)}</ol>
      : <ul>{block.items.map(item=><li key={item}>{item}</li>)}</ul>;
    case 'table': return <div className="profession-table-wrap" role="region" aria-label={block.caption} tabIndex={0}>
      <table className="profession-evidence-table"><caption>{block.caption}</caption><thead><tr>{block.columns.map(column=><th scope="col" key={column}>{column}</th>)}</tr></thead>
        <tbody>{block.rows.map((row,index)=><tr key={index}>{row.map((cell,column)=>column===0?<th scope="row" key={column}>{cell}</th>:<td key={column}>{block.columns.length>2?<span className="profession-mobile-column" aria-hidden="true">{block.columns[column]}</span>:null}{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>;
    case 'figure': return <figure className={block.fullSizeHref?'profession-guide-illustration':undefined}><Image src={block.src} alt={block.alt} width={block.width} height={block.height} quality={block.fullSizeHref?95:undefined} sizes={block.fullSizeHref?'(max-width: 834px) calc(100vw - 74px), 760px':undefined}/><figcaption>{block.fullSizeHref?<a href={block.fullSizeHref}>{block.caption}</a>:block.caption}</figcaption></figure>;
    case 'summary-list': return <dl className="profession-summary-list">{block.items.map(item=><div key={item.title}><dt>{item.title}</dt><dd><p>{item.text}</p></dd></div>)}</dl>;
    case 'calculation': return <aside className="profession-calculation" aria-label={block.title}><h3>{block.title}</h3><p className="profession-formula">{block.formula}</p><p className="profession-formula-example">{block.example}</p><p>{block.note}</p></aside>;
    case 'skill-mentions': return <CareerSkillMentions block={block}/>;
    case 'compensation': return <CareerCompensationTable block={block}/>;
    case 'resources': return <ul className="profession-learning-links">{block.items.map(item=><li key={item.href}><a href={item.href}>{item.title} <span aria-hidden="true">↗</span></a><p>{item.description}</p></li>)}</ul>;
  }
}

function GuideSection({section}:{section:CareerGuideSection}) {
  return <section id={section.id}><h2>{section.heading}</h2>{section.paragraphs.map(text=><p key={text}>{text}</p>)}{section.blocks?.map((block,index)=><GuideBlock block={block} key={index}/>)}</section>;
}

export function CareerProfessionGuide({guide,family,occupationTitle}:{guide:CareerGuideContent;family:CareerFamily;occupationTitle:string}) {
  return <div id="main-content" className="career-section guide-main profession-guide">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/career-paths">Career Paths</Link><span aria-hidden="true">/</span><Link href={`/career-paths/${family.slug}`}>{family.name}</Link><span aria-hidden="true">/</span><span aria-current="page">{occupationTitle}</span></nav>
    <header id="the-role" className="profession-guide-header"><h1>{guide.title}</h1><p className="profession-guide-deck">{guide.deck||guide.description}</p></header>
    <article className="profession-guide-body">
      {guide.overview?.length?<CareerOverview items={guide.overview}/>:null}
      {guide.illustration?<figure className="profession-guide-illustration"><Image src={guide.illustration.src} alt={guide.illustration.alt} width={guide.illustration.width} height={guide.illustration.height} sizes="(max-width: 834px) calc(100vw - 74px), 760px"/></figure>:null}
      <CareerGuideNavigation sections={guide.sections} nextStepsId={guide.nextSteps?.id}/>
      {guide.sections.map(section=><GuideSection section={section} key={section.id}/>)}
      {guide.nextSteps?<GuideSection section={guide.nextSteps}/>:null}
      <CareerResearchNotes notes={guide.researchNotes||[]} citations={guide.citations}/>
      <nav className="profession-guide-return" aria-label="Return to category"><Link href={`/career-paths/${family.slug}#professions`}>← Explore {family.name} careers</Link></nav>
    </article>
  </div>;
}
