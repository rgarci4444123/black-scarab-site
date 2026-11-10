import type {CareerGuideBlock,CareerGuideContent,CareerGuideSection,Citation} from '@/lib/career-paths/types';
import {secondOrderStepResponse} from '@/lib/career-paths/control-response';

export function CareerOverview({items}:{items:NonNullable<CareerGuideContent['overview']>}) {
  return <section className="profession-overview" aria-labelledby="career-overview-title"><h2 id="career-overview-title">Career at a glance</h2><dl>{items.map(item=><div key={item.label}><dt>{item.label}</dt><dd><strong>{item.value}</strong>{item.detail?<p>{item.detail}</p>:null}</dd></div>)}</dl></section>;
}

type StateSequence=Extract<CareerGuideBlock,{type:'state-sequence'}>;
function StateSequenceDiagram({block,mobile=false}:{block:StateSequence;mobile?:boolean}) {
  const marker=`${block.id}-${mobile?'mobile':'desktop'}-arrow`;
  const edges=block.states.slice(0,-1).map((state,index)=>block.transitions.find(edge=>edge.from===state.id&&edge.to===block.states[index+1].id));
  const loop=block.transitions.find(edge=>edge.from===block.states.at(-1)?.id);
  const name=(id:string)=>block.states.find(state=>state.id===id)?.label||id;
  const arrow={markerEnd:`url(#${marker})`};
  return <div className={`profession-state-map profession-state-map-${mobile?'mobile':'desktop'}`}>
    <svg className="profession-state-connectors" viewBox={mobile?'0 0 300 696':'0 0 760 350'} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs><marker id={marker} viewBox="0 0 8 8" markerWidth="7" markerHeight="7" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M1 1 L7 4 L1 7" className="profession-state-arrowhead"/></marker></defs>
      {mobile?<>
        {[120,264,408].map(y=><g key={y}><path d={`M150 ${y} V${y+16}`}/><path d={`M150 ${y+40} V${y+56}`} {...arrow}/></g>)}
        <path d="M54 508 H44 Q36 508 36 500 V430"/>
        <path d="M36 316 V228 Q36 220 44 220 H54" {...arrow}/>
        <path d="M246 364 H256 Q264 364 264 372 V644 Q264 652 256 652 H246" {...arrow}/>
        <path d="M54 652 H14 Q6 652 6 644 V84 Q6 76 14 76 H54" {...arrow}/>
      </>:<>
        {[124,336,548].map(x=><path key={x} d={`M${x} 108 H${x+88}`} {...arrow}/>)}
        <path d="M698 56 V16 Q698 8 690 8 H540"/>
        <path d="M432 8 H282 Q274 8 274 16 V56" {...arrow}/>
        <path d="M486 160 V246" {...arrow}/>
        <path d="M404 298 H74 Q62 298 62 286 V160" {...arrow}/>
      </>}
    </svg>
    <ol className="profession-state-cards">{block.states.map((state,index)=><li key={state.id} className={`profession-state-card profession-state-card-${state.id}`} data-state={state.id} style={mobile?{top:32+index*144}:{left:`${index*212/760*100}%`}}><strong>{state.label}</strong><p>{state.description}</p></li>)}</ol>
    {edges.map((edge,index)=>edge?<span key={edge.from} className={`profession-state-edge profession-state-edge-${index}`} style={mobile?{top:138+index*144}:{left:`${(168+index*212)/760*100}%`}}><span className="sr-only">{name(edge.from)} to {name(edge.to)}: </span>{edge.condition}</span>:null)}
    {loop?<span className="profession-state-next"><span className="sr-only">{name(loop.from)} to {name(loop.to)}: </span>{loop.condition}</span>:null}
    <div className="profession-state-card profession-state-card-fault" data-state="fault"><strong>Fault</strong><p>{block.fault.description}</p></div>
    <span className="profession-state-timeout"><span className="sr-only">{name(block.fault.from)} to Fault: </span>{block.fault.trigger}</span>
    <span className="profession-state-reset"><span className="sr-only">Fault to {name(block.fault.returnTo)}: </span>{block.fault.recovery}</span>
  </div>;
}

export function CareerStateSequence({block}:{block:StateSequence}) {
  return <figure id={block.id} className="profession-state-sequence" aria-labelledby={`${block.id}-title`}>
    <figcaption id={`${block.id}-title`}>{block.title}</figcaption>
    <StateSequenceDiagram block={block}/><StateSequenceDiagram block={block} mobile/>
    {block.explanation?<p className="profession-state-explanation">{block.explanation}</p>:null}
    <p className="profession-research-note">{block.note}</p>
  </figure>;
}

type ControlResponse=Extract<CareerGuideBlock,{type:'control-response'}>;
export function CareerControlResponse({block}:{block:ControlResponse}) {
  const points=(damping:number)=>Array.from({length:301},(_,i)=>{
    const t=i/300*block.durationSeconds;
    return `${i/300*720},${(1-secondOrderStepResponse(t,damping,block.naturalFrequencyRadPerSec)/1.5)*300}`;
  }).join(' ');
  return <figure id={block.id} className="profession-control-response" aria-labelledby={`${block.id}-title`}>
    <figcaption id={`${block.id}-title`}>{block.title}</figcaption>
    <ul className="profession-control-legend" aria-label="Response curves">{block.curves.map((curve,i)=><li key={curve.label}><span className={`profession-control-key profession-control-curve-${i}`} aria-hidden="true"/>{curve.label}</li>)}<li><span className="profession-control-key profession-control-target" aria-hidden="true"/>Target</li></ul>
    <p className="profession-control-axis-label">Position (% of target)</p>
    <div className="profession-control-plot">
      <div className="profession-control-y" aria-hidden="true">{[150,100,50,0].map(value=><span key={value} style={{top:`${(150-value)/150*100}%`}}>{value}</span>)}</div>
      <svg viewBox="0 0 720 300" preserveAspectRatio="none" role="img" aria-labelledby={`${block.id}-desc`}>
        <title id={`${block.id}-desc`}>Two illustrative position responses to a new target. The lightly damped response overshoots to about 137 percent and oscillates before settling. The more damped response peaks at about 102 percent and settles sooner. Both start at zero and approach the same target.</title>
        {[0,100,200,300].map(y=><line key={y} x1="0" x2="720" y1={y} y2={y} className={y===100?'profession-control-target-line':'profession-control-grid'}/>)}
        {block.curves.map((curve,i)=><polyline key={curve.label} points={points(curve.dampingRatio)} className={`profession-control-line profession-control-curve-${i}`}/>)}
      </svg>
    </div>
    <div className="profession-control-x" aria-hidden="true">{[0,1,2,3].map(i=><span key={i}>{i/3*block.durationSeconds}</span>)}</div>
    <p className="profession-control-time">Time (seconds)</p>
    <p className="profession-research-note">{block.note}</p>
  </figure>;
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
