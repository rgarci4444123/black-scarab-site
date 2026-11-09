import type {CareerGuideBlock,CareerGuideContent,CareerGuideSection,Citation} from '@/lib/career-paths/types';

export function CareerOverview({items}:{items:NonNullable<CareerGuideContent['overview']>}) {
  return <section className="profession-overview" aria-labelledby="career-overview-title"><h2 id="career-overview-title">Career at a glance</h2><dl>{items.map(item=><div key={item.label}><dt>{item.label}</dt><dd><strong>{item.value}</strong>{item.detail?<p>{item.detail}</p>:null}</dd></div>)}</dl></section>;
}

export function CareerGuideNavigation({sections,nextStepsId}:{sections:CareerGuideSection[];nextStepsId?:string}) {
  return <details className="profession-guide-contents" open><summary>In this guide</summary><nav aria-label="On this page"><ol>{sections.map(section=><li key={section.id}><a href={`#${section.id}`}>{section.navLabel||section.heading}</a></li>)}</ol><div className="profession-contents-extra">{nextStepsId?<a href={`#${nextStepsId}`}>Next steps</a>:null}<a href="#guide-sources">Sources & methodology</a></div></nav></details>;
}

type SkillMentions=Extract<CareerGuideBlock,{type:'skill-mentions'}>;
export function CareerSkillMentions({block}:{block:SkillMentions}) {
  return <div className="profession-skill-research"><figure className="profession-skill-chart"><figcaption>{block.title}</figcaption><ul>{block.rows.map(row=><li key={row.label}><div className="profession-skill-label"><span>{row.label}</span><data value={row.count}>{row.count}<span className="sr-only"> of {block.denominator} advertisements</span></data></div><div className="profession-skill-track" aria-hidden="true"><span style={{width:`${Math.min(100,Math.max(0,row.count/block.denominator*100))}%`}}/></div></li>)}</ul></figure>
    <p className="profession-research-note">{block.note}</p><details className="profession-research-detail"><summary>How mentions were classified</summary><p>{block.detailNote}</p><div className="profession-table-wrap" role="region" aria-label="Automatic skill mention classifications" tabIndex={0}><table className="profession-skill-detail-table"><caption>Strongest detected wording per advertisement · denominator {block.denominator}</caption><thead><tr><th scope="col">Skill</th><th scope="col">Required or option</th><th scope="col">Preferred</th><th scope="col">Context only</th></tr></thead><tbody>{block.rows.map(row=><tr key={row.label}><th scope="row">{row.label}</th><td>{row.required}</td><td>{row.preferred}</td><td>{row.contextual}</td></tr>)}</tbody></table></div></details>
  </div>;
}

type Compensation=Extract<CareerGuideBlock,{type:'compensation'}>;
export function CareerCompensationTable({block}:{block:Compensation}) {
  const money=(value:number,currency:string)=>new Intl.NumberFormat('en-US',{style:'currency',currency,maximumFractionDigits:0}).format(value);
  const annualUSD=block.examples.every(example=>example.period==='year'&&example.currency==='USD');
  return <div className="profession-compensation"><div className="profession-table-wrap" role="region" aria-label={block.caption} tabIndex={0}><table className="profession-compensation-table"><caption>{block.caption}</caption><thead><tr><th scope="col">Employer, role & location</th><th scope="col">{annualUSD?'Annual salary (USD)':'Advertised salary'}</th></tr></thead><tbody>{block.examples.map(example=><tr key={`${example.employer}-${example.title}`}><th scope="row"><strong>{example.employer}</strong><span>{example.title}</span><small>{example.location}</small></th><td><div className="profession-salary-range"><span>{money(example.minimum,example.currency)}</span>{' '}<span>to {money(example.maximum,example.currency)}</span></div></td></tr>)}</tbody></table></div><p className="profession-research-note">{block.note}</p></div>;
}

export function CareerResearchNotes({notes,citations}:{notes:string[];citations:Citation[]}) {
  return <section id="guide-sources" className="profession-guide-sources"><h2>Sources and methodology</h2><details className="profession-research-detail"><summary>Research methodology</summary>{notes.map(note=><p key={note}>{note}</p>)}</details><details className="profession-source-references"><summary>Source references ({citations.length})</summary><ol>{citations.map(citation=><li id={`source-${citation.id}`} key={citation.id}><a href={citation.url}>{citation.title} <span aria-hidden="true">↗</span></a>{citation.scope?<p>{citation.scope}</p>:null}</li>)}</ol></details></section>;
}

type Workflow=Extract<CareerGuideBlock,{type:'workflow'}>;
export function CareerWorkflow({block}:{block:Workflow}) {
  return <figure id={block.id} className="profession-workflow" aria-labelledby={`${block.id}-title`}>
    <figcaption id={`${block.id}-title`}>{block.title}</figcaption>
    <ol className="profession-workflow-stages">{block.stages.map((stage,index)=><li key={stage.title} className={index===block.review.stage?'profession-workflow-check':undefined}>
      <span className="profession-workflow-step" aria-hidden="true">{String(index+1).padStart(2,'0')}</span>
      <strong>{stage.title}</strong><p>{stage.description}</p>
      {index===block.review.stage?<aside className="profession-workflow-review"><strong>{block.review.title}</strong><p>{block.review.description}</p></aside>:null}
    </li>)}</ol>
  </figure>;
}

type DiagnosticMap=Extract<CareerGuideBlock,{type:'diagnostic-map'}>;
export function CareerDiagnosticMap({block}:{block:DiagnosticMap}) {
  return <figure id={block.id} className="profession-diagnostic-map" aria-labelledby={`${block.id}-title`}>
    <figcaption id={`${block.id}-title`}>{block.title}</figcaption>
    <p className="profession-diagnostic-symptom">{block.symptom}</p>
    <ul className="profession-diagnostic-branches">{block.branches.map(branch=><li key={branch.system}>
      <h4>{branch.system}</h4>{branch.evidence?<p>{branch.evidence}</p>:null}<dl><dt>Investigate</dt><dd>{branch.investigation}</dd></dl>
    </li>)}</ul>
    <p className="profession-diagnostic-conclusion">{block.conclusion}</p>
  </figure>;
}
