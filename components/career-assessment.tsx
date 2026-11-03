'use client';
import Link from 'next/link';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import {assessmentQuestions} from '@/lib/career-paths/assessment-questions';
import {assessCareers,toggleSelection,validSelection,type AssessmentAnswers,type FieldRecommendation} from '@/lib/career-paths/assessment-engine';
import {fieldOrder,fieldPlans} from '@/lib/career-paths/discovery';
import {occupations} from '@/lib/career-paths/occupations';

function CareersToExplore({recommendation,guideLinks}:{recommendation:FieldRecommendation;guideLinks:Record<string,string>}) {
 const categoryRoles=occupations.filter(role=>role.primaryFamilyId===recommendation.id);
 const ids=[...new Set([...recommendation.roleIds,...categoryRoles.map(role=>role.id)])].slice(0,2);
 const roles=ids.map(id=>categoryRoles.find(role=>role.id===id)).filter(role=>role!==undefined);
 return <section className="assessment-careers" aria-labelledby="assessment-careers-title">
  <h2 id="assessment-careers-title">Careers to Explore</h2>
  <ul className="assessment-career-list">{roles.map(role=><li key={role.id}>
   <h3>{guideLinks[role.id]?<Link href={guideLinks[role.id]}>{role.title}</Link>:role.title}</h3>
   <p>{role.summary}</p>
  </li>)}</ul>
 </section>;
}

export function CareerAssessment({guideLinks,children}:{guideLinks:Record<string,string>;children:ReactNode}) {
 const [answers,setAnswers]=useState<AssessmentAnswers>({}),[step,setStep]=useState(0),[complete,setComplete]=useState(false);
 const heading=useRef<HTMLHeadingElement>(null),firstRender=useRef(true);
 const question=assessmentQuestions[step],selected=answers[question.id]||[];
 const result=complete?assessCareers(answers):null;
 useEffect(()=>{if(firstRender.current){firstRender.current=false;return;}heading.current?.focus();},[step,complete]);
 function restart(){setAnswers({});setStep(0);setComplete(false);}
 function next(event:React.FormEvent){event.preventDefault();if(!validSelection(question,selected))return;if(step===assessmentQuestions.length-1)setComplete(true);else setStep(value=>value+1);}
 const primary=result?.recommendations[0],secondary=result?.recommendations[1];
 const primaryPlan=primary?fieldPlans[primary.id]:undefined;
 const secondaryPlan=secondary?fieldPlans[secondary.id]:undefined;
 if(result) return <div className="assessment-results">
  <nav className="assessment-results-breadcrumbs" aria-label="Breadcrumb"><Link href="/career-paths">Career Paths</Link><span aria-hidden="true">/</span><span aria-current="page">Results</span></nav>
  <header className="assessment-match">
   <p className="assessment-match-label">Your Career Match</p>
   <h1 ref={heading} tabIndex={-1}>{primaryPlan?.name||'Explore the four fields'}</h1>
   {primaryPlan?<p className="assessment-match-description">{primaryPlan.summary}</p>:null}
  </header>
  {primary?<div className="assessment-results-details">
   <CareersToExplore recommendation={primary} guideLinks={guideLinks}/>
   {secondaryPlan?<section className="assessment-secondary" aria-labelledby="assessment-secondary-title">
    <h2 id="assessment-secondary-title">Also Worth Exploring</h2>
    <h3>{secondaryPlan.name}</h3><p>{secondaryPlan.summary}</p>
    <Link href={`/career-paths/${secondaryPlan.id}`}>Explore this field</Link>
   </section>:null}
  </div>:<ul className="assessment-field-choices">{fieldOrder.map(id=><li key={id}><h2><Link href={`/career-paths/${id}`}>{fieldPlans[id].name}</Link></h2><p>{fieldPlans[id].summary}</p></li>)}</ul>}
  <div className="assessment-results-actions">
   <Link className="assessment-explore" href={primary?`/career-paths/${primary.id}`:'/career-paths'}>Explore career paths</Link>
   <button type="button" onClick={restart}>Retake quiz</button>
  </div>
 </div>;
 return <>{children}<div className="assessment-workspace">
<div className="assessment-progress"><span>Question {step+1} of {assessmentQuestions.length}</span><span>{question.mode==='multi'?`Choose up to ${question.max}`:'Choose one'}</span><progress aria-label="Assessment progress" value={step} max={assessmentQuestions.length}/></div><form onSubmit={next}><h2 ref={heading} tabIndex={-1} id="assessment-question-title">{question.title}</h2><p id="assessment-question-hint" className="assessment-question-hint">{question.hint}</p><fieldset aria-labelledby="assessment-question-title" aria-describedby="assessment-question-hint"><div className="assessment-options">{question.options.map(option=><label key={option.id} className={`assessment-option${selected.includes(option.id)?' selected':''}`}><input type={question.mode==='multi'?'checkbox':'radio'} name={question.id} value={option.id} checked={selected.includes(option.id)} onChange={()=>setAnswers(previous=>({...previous,[question.id]:toggleSelection(question,previous[question.id]||[],option.id)}))}/><span>{option.label}{option.detail?<small>{option.detail}</small>:null}</span></label>)}</div></fieldset><div className="assessment-controls"><button type="button" disabled={step===0} onClick={()=>setStep(value=>value-1)}>← Back</button><button className="career-discovery-button" type="submit" disabled={!validSelection(question,selected)}>{step===assessmentQuestions.length-1?'Explore my results':'Continue'} <span aria-hidden="true">→</span></button></div></form><div className="assessment-foot"><button onClick={restart}>Start over</button><span>Answers stay in this tab and reset when you reload.</span></div>
  <details className="assessment-method"><summary>How these suggestions are made</summary><p>Your choices add signals to four fields and related roles. Each question has a capped contribution, so selecting more options does not dominate the result. Interests guide the recommendations; skills you explicitly report help identify transferable foundations and learning steps. Your starting situation and preferred way of learning do not change field rankings.</p><p>This is an editorial, rules-based exploration tool, not a scientifically validated aptitude test or an employment eligibility assessment. It uses no career-fit percentages. Answers are held in page memory, without sending or saving your responses.</p></details>
 </div></>;
}
