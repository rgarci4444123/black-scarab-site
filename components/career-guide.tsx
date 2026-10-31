import Link from 'next/link';
import { publishedFamilies, siteUrl } from '@/lib/career-paths/families';
import { occupationsFor } from '@/lib/career-paths/occupations';
import type { CareerFamily } from '@/lib/career-paths/types';
import { Arrow } from './arrow';
import { SectionHero } from './section-hero';
import { CareerFamilyCard } from './career-family-card';
export function CareerGuide({ family }: { family: CareerFamily }) {
  const compensation = family.compensation.filter(r => r.status === 'published' && r.sourceIds.length && r.geography && r.asOf && (r.base || r.bonus || r.equity));
  const employment = family.employment.filter(r => r.status === 'published' && r.sourceIds.length && r.geography && r.asOf && r.summary);
  return <div id="main-content" className="career-section guide-main">
    <SectionHero section="career-paths" title={family.name} description={family.shortDescription} headingId={`${family.slug}-title`} />
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/career-paths" className="back-link" aria-label="All career paths"><span aria-hidden="true">←</span> Career Paths</Link><span aria-hidden="true">/</span><span aria-current="page">{family.name}</span></nav>
    <nav className="guide-index" aria-label="On this page"><a href="#overview">Overview</a><a href="#the-work">The work</a><a href="#professions">Explore the professions</a><a href="#skills">Skills & qualifications</a>{compensation.length > 0 && <a href="#compensation">Compensation</a>}{employment.length > 0 && <a href="#outlook">Career outlook</a>}<a href="#getting-started">How to get started</a><a href="#further-reading">Further reading</a></nav>
    <div className="guide-layout">
    <article className="guide-body">
      <section id="overview"><h2>A closer look</h2>{family.introduction.map(text => <p key={text}>{text}</p>)}</section>
      <section id="the-work"><h2>{family.work.heading}</h2>{family.work.paragraphs.map(text => <p key={text}>{text}</p>)}<div className="example"><p className="eyebrow">IN PRACTICE</p><h3>{family.example.title}</h3><p>{family.example.description}</p></div></section>
      <section id="professions"><div className="section-heading"><h2>Explore the professions</h2><span className="small-label">REPRESENTATIVE ROLES</span></div><dl className="occupation-list">{occupationsFor(family.id).map(role => <div className="occupation" key={role.id}><dt>{role.title}</dt><dd>{role.summary}</dd></div>)}</dl></section>
      <section id="skills"><h2>Skills & qualifications</h2><p>{family.skills.qualifications}</p><div className="skills-columns"><div><h3>Technical foundations</h3><ul>{family.skills.technical.map(skill => <li key={skill}>{skill}</li>)}</ul></div><div><h3>In day-to-day work</h3><ul>{family.skills.professional.map(skill => <li key={skill}>{skill}</li>)}</ul></div></div></section>
      {compensation.length > 0 && <section id="compensation"><h2>Compensation</h2>{compensation.map((record, i) => <div className="research-record" key={`${record.occupationId}-${i}`}><h3>{occupationsFor(family.id).find(role => role.id === record.occupationId)?.title ?? record.occupationId}</h3><p>{record.geography} · {record.seniority} · {record.asOf}</p>{record.base && <p>Base compensation ({record.currency} per {record.period}): {Object.entries(record.base).map(([label, value]) => `${label}: ${value?.toLocaleString('en-US')}`).join(' · ')}</p>}{record.bonus && <p>Bonus ({record.currency} per {record.period}): {Object.entries(record.bonus).map(([label, value]) => `${label}: ${value?.toLocaleString('en-US')}`).join(' · ')}</p>}{record.equity && <p>Equity: {record.equity.description}. Valuation basis: {record.equity.valuationBasis}</p>}<p className="research-note">{record.methodology}</p><ResearchSources ids={record.sourceIds} family={family} /></div>)}</section>}
      {employment.length > 0 && <section id="outlook"><h2>Career outlook</h2>{employment.map((record, i) => <div className="research-record" key={i}><p>{record.summary}</p><p>{record.geography} · {record.asOf}</p>{record.employmentCount !== undefined && <p>Employment: {record.employmentCount.toLocaleString('en-US')}</p>}{record.growth && <p>Projected growth: {record.growth.percentage}% ({record.growth.startYear}–{record.growth.endYear})</p>}<p className="research-note">{record.methodology}</p><ResearchSources ids={record.sourceIds} family={family} /></div>)}</section>}
      <section id="getting-started"><h2>{family.gettingStarted.heading}</h2>{family.gettingStarted.paragraphs.map(text => <p key={text}>{text}</p>)}</section>
      <section id="further-reading"><h2>Further reading</h2>{family.relatedArticles.map(article => <a className="related-article" key={article.path} href={`${siteUrl}${article.path}`}><div><span className="eyebrow">BLACK SCARAB INSIGHTS</span><h3>{article.title}</h3></div><Arrow diagonal /></a>)}<details className="sources"><summary>Sources & technical references</summary><ul>{family.citations.map(source => <li key={source.id}><a href={source.url}>{source.title} ↗</a>{source.scope && <span>{source.scope}</span>}<span>Accessed {source.accessedAt}</span></li>)}</ul></details>{family.lastReviewed && <p className="review-date">Last reviewed {family.lastReviewed}</p>}</section>
    </article></div>
    <nav className="other-families" aria-label="Explore other career families"><p className="eyebrow">EXPLORE OTHER CAREER PATHS</p><div className="family-grid">{publishedFamilies.filter(f => f.id !== family.id).map(other => <CareerFamilyCard family={other} key={other.id} />)}</div></nav>
  </div>;
}
function ResearchSources({ ids, family }: { ids: string[]; family: CareerFamily }) {
  return <ul className="research-sources">{ids.map(id => family.citations.find(c => c.id === id)).filter(source => source !== undefined).map(source => <li key={source.id}><a href={source.url}>{source.title}</a></li>)}</ul>;
}
