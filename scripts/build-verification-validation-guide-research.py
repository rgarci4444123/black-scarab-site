#!/usr/bin/env python3
"""Reproduce V&V evidence and compensation from the immutable employer archive."""
import argparse,hashlib,json
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
p=argparse.ArgumentParser();p.add_argument('--archive-root',type=Path,required=True);a=p.parse_args();root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_path.read_text());digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
records=[json.loads(l) for l in (a.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()];cohort=[r for r in records if r['screening']['primaryRoleId']=='verification-validation-engineer']
def write(path,value):
 f=root/path;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256'];assert hashlib.sha256((a.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
selected={
 3:('Software and complete-system V&V, simulation/HIL, autonomy behavior, automated integration and field investigation.','Technical Expertise:'),
 9:('Autonomy validation strategy, scenario datasets, metrics, coverage and release evidence.','MS/BS degree'),
 10:('Autonomy behavior requirements, on-water scenarios, reproducible anomalies and simulation/HIL regression.','Bachelor’s degree'),
 16:('End-to-end robotic V&V, quantitative acceptance criteria, simulation/HIL/field evaluation and regression.','Bachelor’s, Master’s'),
 19:('HIL system benches, sensor/fault injection, hardware-software interactions and requirements-based evidence.','Education:'),
 20:('Simulation/SIL test strategy, scenario variation, log replay, assertions and simulation fidelity.','Education:'),
 29:('Whole-robot software/firmware regression, HIL, fault recovery, test traceability and CI.','BS or MS'),
 42:('System-level robotics test automation, HIL, requirements-to-results traceability and multi-disciplinary failure analysis.','3+ years of experience'),
 48:('Cross-domain system requirements, performance verification, flight telemetry, failure analysis and product integrity.','3+ years experience'),
 49:('Senior/staff technical ownership of cross-domain system requirements, verification and failure analysis; not a line-management role.','6+ years'),
 57:('Autonomy V&V strategy, scenario/requirements coverage, simulation plans, traceability and quantitative results.','B.S. or higher'),
 61:('Full autonomy-system validation, behavior regression, SIL/HIL, test automation and vehicle-log analysis.','Bachelor’s or Master’s'),
 62:('System-level fault-response verification, HIL/vehicle campaigns, metrics and requirements review.','BS or higher'),
}
reviewed=[]
for i,(scope,needle) in selected.items():
 r=cohort[i];line=next(l for l in r['sourceText'].splitlines() if needle in l);start=r['sourceText'].index(line)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-10','reviewMethod':'Contextual full stored-source review; original research and classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':line,'qualificationSpans':[{'text':line,'start':start,'end':start+len(line)}]})
boundaries={14:'Primarily browser/UI/API automated QA and product-workflow testing, rather than physical robot behavior/requirements V&V.',41:'Technician work. ATS labels USD 30–48 as yearly, but body explicitly says USD 30–48/hr; period conflict, no annualization.',60:'Cloud, application UI and operations workflow integration tests; separate from physical autonomy behavior and from the other Zoox System Test requisition.'}
text_ranges={10:(145000,190000,'USD annually'),29:(140000,160000,'$160,000/year'),48:(149000,200000,'annual base salary'),49:(196000,270000,'annual base salary')}
obs=[];excluded=[]
for i,r in enumerate(cohort):
 reason=boundaries.get(i)
 if r['countries']!=['United States']:reason=reason or 'Not an exclusively U.S. advertisement.'
 if i not in selected:reason=reason or 'Outside selected system/robot-behavior V&V scope or not contextually admitted. Includes specialist firmware/silicon, dedicated test infrastructure, product UI, manufacturing-test and other adjacent roles.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[v for v in r['compensation'] if v['currency']=='USD' and v['period']=='year' and v['minimum']>0 and v['maximum']>=v['minimum']]
 if len(pay)==1:salary={**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured'}
 elif i in text_ranges:
  low,high,needle=text_ranges[i];clause=next(l for l in r['sourceText'].splitlines() if needle in l);assert f'{low:,}' in clause and f'{high:,}' in clause;start=r['sourceText'].index(clause)
  salary={'minimum':low,'maximum':high,'currency':'USD','period':'year','basis':'base salary' if i!=29 else 'advertised salary','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)}}
 else:excluded.append({**provenance(r),'reason':'No complete explicitly annual USD range verified. Salary amounts or annual-bonus language do not establish salary frequency.'});continue
 obs.append({**provenance(r),**salary,'midpoint':(salary['minimum']+salary['maximum'])/2,'seniority':r['seniority'],'scope':selected[i][0]})
exact=median(o['midpoint'] for o in obs);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/verification-validation-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-10','roleId':'verification-validation-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary, excluding bonus and equity','postingCount':len(obs),'employerCount':len({o['employerId'] for o in obs}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'Median of one eligible annual USD salary-range midpoint per distinct requisition.','eligibility':'Reviewed technical engineering roles owning robot/autonomy system requirements, behavior validation, end-to-end regression, system-level integration/verification or cross-domain readiness evidence.','limitations':'Purposive U.S. sample includes general, senior and staff roles, with California concentration and multiple Zoox, Skydio and Applied Intuition requisitions. Not an entry-level rate or representative market median. Structured salary fields do not consistently establish base pay.','observations':obs,'excludedObservations':excluded})
examples=[]
for i in [9,48,57]:
 r=cohort[i];o=next(o for o in obs if o['id']==r['id']);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':r['id'],'location':', '.join(r['locations'])})
write('public/research/verification-validation-engineer-evidence-2026-11-10.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-10','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; source archive and original classifications preserved.','roles':{'verification-validation-engineer':{'recordIds':[r['id'] for r in reviewed],'auditPath':'research/career-guides/verification-validation-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Broad cohort includes firmware, silicon, hardware-test, UI/API QA, manufacturing-test and technician roles. No clean current-vacancy or skill-frequency claims.'}},'records':reviewed})
write('research/career-guides/verification-validation-engineer/evidence-audit.json',{'reviewedAt':'2026-11-10','snapshotId':aggregate['snapshotId'],'scope':'Robot/autonomy system requirements, acceptance criteria, scenario-based V&V, simulation/HIL, traceable evidence and regression. Adjacent primary component testing and browser/product QA remain distinct.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'additionalBoundaryFullSourceReviews':[{**provenance(cohort[i]),'decision':reason} for i,reason in boundaries.items()],'technicalSources':['https://www.nasa.gov/reference/5-3-product-verification/','https://www.nasa.gov/reference/5-4-product-validation/','https://docs.pytest.org/en/stable/how-to/parametrize.html'],'liveEmployerCheck':{'url':cohort[57]['url'],'result':'Official employer job index lists the title; direct posting fetch returned 403. No current vacancy count claimed.'},'editorialVisual':'Illustrative traceability matrix. Three executed tests pass, but the stale-input requirement has no linked test. A mapped passing test is not a general claim that a requirement is fully verified; missing links cannot be treated as passing evidence.'})
model={'kind':'illustrative-traceability-example','tests':[{'id':'T1','label':'Stop at low speed','result':'passed'},{'id':'T2','label':'Stop at high speed','result':'passed'},{'id':'T3','label':'Blocked goal','result':'passed'}],'requirements':[{'id':'R1','label':'Stop on command','definition':'In the toy simulation, issue a stop request within two update cycles after receiving a stop command.','testIds':['T1','T2']},{'id':'R2','label':'Report blocked goal','definition':'In the toy simulation, return a defined no-route result when the goal is blocked.','testIds':['T3']},{'id':'R3','label':'Reject stale input','definition':'In the toy simulation, reject a sensor update older than the configured age threshold.','testIds':[]}],'configuration':'Illustrative software build A, fixed scenario set; no employer data.','assumptions':'All three tests have passed in this invented example. R3 has no mapped test, so passing executed tests does not demonstrate coverage of every requirement. Mapping alone does not establish completeness, confidence or safety. Full engineering verification also examines acceptance criteria, relevant conditions and evidence quality.'}
write('public/research/verification-validation-traceability-example-2026-11-10.json',model)
print(json.dumps({'reviewed':len(reviewed),'salaryN':len(obs),'employers':len({o['employerId'] for o in obs}),'median':exact,'estimate':estimate}))
