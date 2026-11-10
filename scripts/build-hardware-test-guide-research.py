#!/usr/bin/env python3
"""Reproduce Hardware Test evidence and compensation from the immutable employer archive."""
import argparse,hashlib,json
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
p=argparse.ArgumentParser();p.add_argument('--archive-root',type=Path,required=True);a=p.parse_args();root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_path.read_text());digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
records=[json.loads(l) for l in (a.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()];cohort=[r for r in records if r['screening']['primaryRoleId']=='hardware-test-engineer']
def write(path,value):
 f=root/path;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256'];assert hashlib.sha256((a.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
selected={
0:('Product hardware safety and EMC testing, instruments, lab setup, investigation and reports; Germany, not U.S. pay.','Bachelor’s degree'),
10:('Robotic-hand prototype testing across joints, actuators and sensors; fixtures, instrumentation and design feedback.','BS in Mechanical'),
11:('Electronics, sensors, harness and compute characterization; reliability, fixtures and production-test handoff.','BS in Electrical'),
12:('Individual-contributor staff ownership of electromechanical production-test equipment, software and fault isolation.','BS or MS'),
13:('Individual-contributor electrical production-test systems, PCBA/harness fixtures, instrumentation and root cause.','BS or MS'),
14:('Humanoid end-of-line tester design for compute, sensors, power and actuators; equipment, Python and debug.','5+ years of industry'),
15:('Vehicle component reliability and environmental tests, profiles, instrumentation and custom test equipment.','Bachelor\'s degree'),
19:('Robotics PCB validation, power/sensor interfaces, harness tests, fixtures, measurement quality and failure analysis.','Bachelor\'s degree'),
20:('Staff technical ownership of manufacturing test hardware/software, test readiness, data analysis and root cause.','10+ years engineering'),
21:('Senior technical ownership of electrical manufacturing test equipment, automation, debug and root cause.','5+ years engineering'),
22:('Motor and actuator characterization, dynamometers, thermal/torque-speed tests, reliability and field correlation.','Hands-on experience with electric motors'),
23:('Electrical/electromechanical validation, instrumentation, experimental design, measurement uncertainty and failure investigation.','Proven ownership of electrical'),
25:('Battery and power-system validation equipment, mechanical fixtures, environmental tests, automation and analysis.','Experience developing validation systems'),
26:('Manufacturing Test and Diagnostics team: electrical-component testers, ECU/vehicle bring-up, hardware/software integration and production debug.','Bachelor\'s degree'),
}
reviewed=[]
for i,(scope,needle) in selected.items():
 r=cohort[i];line=next(l for l in r['sourceText'].splitlines() if needle in l);start=r['sourceText'].index(line)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-10','reviewMethod':'Contextual full stored-source review; original research classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':line,'qualificationSpans':[{'text':line,'start':start,'end':start+len(line)}]})
text_ranges={12:(134399.06,184798.70,'annually'),13:(140000,185000,'annually'),14:(130000,300000,'per year'),20:(196000,257000,'annual base salary'),21:(147000,210000,'annual base salary')}
obs=[];excluded=[]
for i,r in enumerate(cohort):
 reason=None
 if r['countries']!=['United States']:reason='Not an exclusively U.S. advertisement.'
 if i==17:reason='Production Test Lead focused on manufacturing software architecture and guided workflows, not primary hardware instrumentation or tester design.'
 if i not in selected:reason=reason or 'Outside selected contextual hardware-test review; no verified annual observation admitted.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[v for v in r['compensation'] if v['currency']=='USD' and v['period']=='year' and v['minimum']>0 and v['maximum']>=v['minimum']]
 if len(pay)==1:salary={**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured'}
 elif i in text_ranges:
  import re
  low,high,needle=text_ranges[i];clause=next(l for l in r['sourceText'].splitlines() if needle in l and '$' in l);values=[float(v.replace(',','')) for v in re.findall(r'\$([\d,]+(?:\.\d+)?)',clause)];assert values[:2]==[low,high];start=r['sourceText'].index(clause)
  salary={'minimum':low,'maximum':high,'currency':'USD','period':'year','basis':'advertised annual salary','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)}}
 else:excluded.append({**provenance(r),'reason':'No complete explicitly annual USD range verified. Salary amounts, starting-cash ranges and annual-bonus language do not establish salary frequency.'});continue
 obs.append({**provenance(r),**salary,'midpoint':(salary['minimum']+salary['maximum'])/2,'seniority':r['seniority'],'scope':selected[i][0]})
exact=median(o['midpoint'] for o in obs);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/hardware-test-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-10','roleId':'hardware-test-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary excluding bonus and equity','postingCount':len(obs),'employerCount':len({o['employerId'] for o in obs}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'Median of one eligible annual USD salary-range midpoint per distinct requisition.','eligibility':'Technical engineering roles owning physical component/assembly test equipment, instrumentation, validation, production test or diagnostics. Senior/staff individual contributors included.','limitations':'Purposive U.S. sample is concentrated in experienced manufacturing/electrical-test positions at four employers, including two Boston Dynamics and two Skydio requisitions. Not an entry-level rate or representative market median. Core prototype and mechanical roles without an explicitly annual pay period do not contribute. Structured salary fields do not consistently establish base pay.','observations':obs,'excludedObservations':excluded})
examples=[]
for i in [13,14,21]:
 r=cohort[i];o=next(o for o in obs if o['id']==r['id']);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':r['id'],'location':r['locations'][0].replace(' Office (POST)','').replace(', United States','')})
write('public/research/hardware-test-engineer-evidence-2026-11-10.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-10','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; immutable source archive and original classifications preserved.','roles':{'hardware-test-engineer':{'recordIds':[r['id'] for r in reviewed],'auditPath':'research/career-guides/hardware-test-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Includes component validation and production-test engineering where instrumented test hardware and physical fault isolation are central. No current-vacancy or skill-frequency claims.'}},'records':reviewed})
write('research/career-guides/hardware-test-engineer/evidence-audit.json',{'reviewedAt':'2026-11-10','snapshotId':aggregate['snapshotId'],'scope':'Physical component and assembly testing, measurement quality, mechanical/electrical characterization, reliability, test equipment, automation and production-test handoff. Distinct from primary robot-behavior V&V and general manufacturing-process design.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'additionalBoundaryFullSourceReviews':[{**provenance(cohort[17]),'decision':'Manufacturing software architecture and workflow platform lead; adjacent test infrastructure rather than core physical hardware test.'}],'displayNormalization':'Salary examples use the first source location without repeated country or ATS Office (POST) label; original location arrays remain intact.', 'technicalSources':['https://www.itl.nist.gov/div898/handbook/mpc/section4/mpc45.htm','https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-d1-terminology','https://www.ni.com/en/shop/data-acquisition/measurement-fundamentals.html'],'liveEmployerCheck':{'checkedAt':'2026-11-10','urls':[cohort[10]['url'],cohort[14]['url']],'result':'Official Apptronik and Figure postings retrieved; dated source archive supplies editorial evidence. No current opening total claimed.'},'editorialVisual':'Invented repeated measurements of a known simulated reference. Tight spread and mean offset are different properties; no real instrument performance, confidence interval or full uncertainty budget inferred.'})
write('public/research/hardware-test-measurement-example-2026-11-10.json',{'kind':'illustrative-measurement-comparison','reference':5,'unit':'V','minimum':4.9,'maximum':5.3,'ticks':[4.9,5,5.1,5.2,5.3],'setups':[{'label':'Setup A','description':'Tight cluster, shifted','readings':[5.18,5.19,5.2,5.21,5.22]},{'label':'Setup B','description':'Wider cluster, centered','readings':[4.96,4.98,5,5.02,5.04]}],'assumptions':'Invented short-run example at one exact simulated reference value. Five readings per setup; no employer or instrument data. Reference uncertainty is zero only by construction in this simulation. Real evaluation includes reference uncertainty, range, conditions, drift, setup effects and sample size. Sample means at one point do not establish unbiasedness, calibration quality, overall accuracy or fitness for use.'})
print(json.dumps({'reviewed':len(reviewed),'salaryN':len(obs),'employers':len({o['employerId'] for o in obs}),'median':exact,'estimate':estimate}))
