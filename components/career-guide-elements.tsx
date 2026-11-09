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

type TimingBudget=Extract<CareerGuideBlock,{type:'timing-budget'}>;
export function CareerTimingBudget({block}:{block:TimingBudget}) {
  const legend=[...new Map(block.rows.flatMap(row=>row.segments).map(segment=>[segment.kind,segment])).values()];
  const deadline=`${block.deadlineMs/block.scaleMs*100}%`;
  return <figure id={block.id} className="profession-timing-budget" aria-labelledby={`${block.id}-title`}>
    <figcaption id={`${block.id}-title`}>{block.title}</figcaption>
    <ul className="profession-timing-legend" aria-label="Timeline stages">{legend.map(stage=><li key={stage.kind}><span className={`profession-timing-key profession-timing-${stage.kind}`} aria-hidden="true"/>{stage.label}</li>)}</ul>
    <div className="profession-timing-axis"><span>0 ms</span><span className="profession-timing-deadline-label" style={{left:deadline}}>{block.deadlineMs} ms deadline</span><span>{block.scaleMs} ms</span></div>
    <div className="profession-timing-rows">
      <span className="profession-timing-deadline" style={{left:deadline}} aria-hidden="true"/>
      {block.rows.map(row=>{
        const total=row.segments.reduce((sum,segment)=>sum+segment.durationMs,0);
        const delayed=total>block.deadlineMs;
        return <div className="profession-timing-row" key={row.label}>
          <div className="profession-timing-row-label" style={{maxWidth:`calc(${deadline} - 14px)`}}>
            <svg className={`profession-timing-status ${delayed?'profession-timing-status-late':'profession-timing-status-on-time'}`} width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              {delayed?<><path d="M10 2.5 18 17H2Z"/><path d="M10 7v4.5M10 14h.01"/></>:<><circle cx="10" cy="10" r="7.5"/><path d="m6.5 10 2.3 2.3 4.7-4.8"/></>}
            </svg>
            <strong>{row.label} · <span className="profession-timing-total">{total} ms</span></strong>
            <span className="sr-only">{delayed?'Misses':'Meets'} the {block.deadlineMs} millisecond deadline.</span>
          </div>
          <div className="profession-timing-track">
            <ol role="list" aria-label={`${row.label}: elapsed response time`}>{row.segments.map((segment,index)=><li key={index} className={`profession-timing-${segment.kind}`} style={{width:`${segment.durationMs/block.scaleMs*100}%`}} aria-label={`${segment.label}: ${segment.durationMs} milliseconds`}><span aria-hidden="true">{segment.durationMs}</span></li>)}</ol>
            {delayed?<span className="profession-timing-overrun" style={{left:deadline,width:`${(total-block.deadlineMs)/block.scaleMs*100}%`}} aria-hidden="true"/>:null}
          </div>
        </div>;
      })}
    </div>
    <p className="profession-timing-note">{block.note}</p>
  </figure>;
}
