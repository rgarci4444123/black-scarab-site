#!/usr/bin/env python3
"""Reproduce Systems Safety evidence and salary derivation from the preserved archive."""
import argparse,hashlib,json,re
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
p=argparse.ArgumentParser();p.add_argument('--archive-root',type=Path,required=True);a=p.parse_args();root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_path.read_text());digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
cohort=[r for r in map(json.loads,(a.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()) if r['screening']['primaryRoleId']=='systems-safety-engineer']
def write(path,value):
 f=root/path;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256'];assert hashlib.sha256((a.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
selected={
0:('System requirements, robot architecture, hazard analysis, FMEA/FMEdA/FTA and safety-lifecycle work products.',"Background: Bachelor's or Master's degree"),
4:('Machine-level safety cases, hazard analysis, safety requirements, fault propagation and HIL fault injection for industrial autonomy.','Bachelor’s or master’s degree'),
5:('Autonomous-trucking safety architecture, FMEA/FTA/STPA, requirements and safety cases.','MS/BS degree'),
8:('Embedded software and AI assurance, partitioning, diagnostics, timing, software safety requirements and verification evidence.','Bachelor’s Degree'),
9:('Hardware functional safety, hazard analysis, FMEA/FMEdA/FTA, redundancy, diagnostics and fault-reaction experiments.','BS or advanced degree'),
10:('Independent product assurance across hardware, software, AI, controls and human-robot interaction; safety cases and change governance.','Bachelor’s or Master’s degree'),
11:('Technical functional-safety lifecycle, safety architecture, requirements, quantitative reliability and validation; lead technical IC scope.','Bachelor’s degree'),
16:('Humanoid subsystem safety lifecycle, hazard analysis, safety requirements, architecture and assurance cases.','5+ years experience'),
18:('Robot/vehicle platform safety architecture, safe states, HARA/FMEA/FTA, dependent failures and safety cases.','3+ years of experience in system architecture'),
22:('Robotics system requirements, stopping/collision avoidance, fail-safe/degraded strategies, hazard analysis and safety evidence.','B.S. in Robotics'),
28:('Sensor/perception safety requirements, safety cases, fail-operational architecture and simulation/field evidence.','BS or MS in a related technical field'),
}
reviewed=[]
for i,(scope,needle) in selected.items():
 r=cohort[i];line=next(l for l in r['sourceText'].splitlines() if needle in l);start=r['sourceText'].index(line)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-10','reviewMethod':'Contextual full stored-source review; original classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':line,'qualificationSpans':[{'text':line,'start':start,'end':start+len(line)}]})
obs=[];excluded=[]
for i,r in enumerate(cohort):
 reason=None
 if i==23:reason='Primary implementation of balance, locomotion and whole-body control, despite safety reporting and supporting assurance duties.'
 if r['countries']!=['United States']:reason='Not an exclusively U.S. advertisement.'
 if i not in selected:reason=reason or 'Outside selected contextual systems-safety review.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[v for v in r['compensation'] if v['currency']=='USD' and v['period']=='year' and v['minimum']>0 and v['maximum']>=v['minimum']]
 if len(pay)==1:salary={**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured'}
 elif i==8:
  clause=next(l for l in r['sourceText'].splitlines() if '$' in l and 'annual salary' in l);values=[float(v.replace(',',''))*(1000 if k else 1) for v,k in re.findall(r'\$([\d,]+(?:\.\d+)?)(K)?',clause)];start=r['sourceText'].index(clause)
  salary={'minimum':values[0],'maximum':values[1],'currency':'USD','period':'year','basis':'advertised annual base salary','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)}}
 else:excluded.append({**provenance(r),'reason':'Salary range lacks an explicit annual pay period; full-time status or annual-bonus wording does not establish salary frequency.'});continue
 obs.append({**provenance(r),**salary,'midpoint':(salary['minimum']+salary['maximum'])/2,'seniority':r['seniority'],'scope':selected[i][0]})
exact=median(o['midpoint'] for o in obs);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/systems-safety-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-10','roleId':'systems-safety-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary excluding bonus and equity','postingCount':len(obs),'employerCount':len({o['employerId'] for o in obs}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'Median of one explicitly annual USD salary-range midpoint per distinct requisition.','eligibility':'Individual-contributor system/product/functional safety roles for robots, autonomous vehicles and industrial autonomy. Experienced/senior/staff technical roles included; primary controls implementation excluded.','limitations':'Selected U.S. sample emphasizes experienced technical safety roles. Two distinct Applied Intuition requisitions cover industrial and trucking applications. Not an entry-level rate or representative market median. Structured salary fields do not consistently establish base pay.','observations':obs,'excludedObservations':excluded})
examples=[]
for i in [8,11,28]:
 r=cohort[i];o=next(o for o in obs if o['id']==r['id']);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':r['id'],'location':r['locations'][0].replace(' Office (POST)','').replace(', United States','')})
write('public/research/systems-safety-engineer-evidence-2026-11-10.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-10','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; immutable source archive and original classifications preserved.','roles':{'systems-safety-engineer':{'recordIds':[r['id'] for r in reviewed],'auditPath':'research/career-guides/systems-safety-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Robot, autonomous-vehicle and industrial-autonomy safety analysis, safety requirements, architecture and assurance evidence. No current-vacancy or skill-frequency claims.'}},'records':reviewed})
write('research/career-guides/systems-safety-engineer/evidence-audit.json',{'reviewedAt':'2026-11-10','snapshotId':aggregate['snapshotId'],'scope':'System/product/functional safety analysis, requirements and assurance for robots and autonomous machinery. Primary controls implementation excluded.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'additionalBoundaryFullSourceReviews':[{**provenance(cohort[23]),'decision':'Primary balance/locomotion control implementation; excluded despite safety title and supporting safety-case duties.'}], 'technicalSources':['https://www.iso.org/standard/51528.html','https://www.iso.org/standard/73481.html','https://www.iso.org/standard/73933.html','https://webstore.iec.ch/en/publication/5515','https://www.ul.com/news/ul-4600-edition-3-updates-incorporate-autonomous-trucking','https://www.cdc.gov/niosh/robotics/about/','https://s3vi.ndc.nasa.gov/ssri-kb/static/resources/Fault%20Tree%20Handbook_NASA.pdf'],'editorialVisual':'Invented qualitative monitor-availability fault tree. Both monitors unavailable if shared supply is lost OR both local monitor faults occur. No failure probabilities, PL/SIL calculation or complete safety assessment.'})
write('public/research/safety-common-cause-example-2026-11-10.json',{'kind':'illustrative-qualitative-fault-tree','topEvent':'Both monitors unavailable','basicEvents':['supply','monitor-a','monitor-b'],'minimalCutSets':[['supply'],['monitor-a','monitor-b']],'states':[{'supplyLost':s,'monitorAFailed':a,'monitorBFailed':b,'bothUnavailable':s or (a and b)} for s in [False,True] for a in [False,True] for b in [False,True]],'assumptions':'Two fictional monitors share one supply. Supply loss disables both; otherwise each local fault disables only its own monitor. Persistent Boolean availability states, no temporal sequencing or probabilities. No other faults, diagnostics, recovery or robot stopping behavior modeled. This is an availability example, not a complete safety function or real design assessment.'})
print(json.dumps({'reviewed':len(reviewed),'salaryN':len(obs),'employers':len({o['employerId'] for o in obs}),'median':exact,'estimate':estimate}))
