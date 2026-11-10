#!/usr/bin/env python3
"""Reproduce Robotics Platform evidence and salary derivation from the preserved archive."""
import argparse,hashlib,json,re
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
p=argparse.ArgumentParser();p.add_argument('--archive-root',type=Path,required=True);a=p.parse_args();root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_path.read_text());digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
cohort=[r for r in map(json.loads,(a.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()) if r['screening']['primaryRoleId']=='robotics-platform-engineer']
def write(path,value):
 f=root/path;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256'];assert hashlib.sha256((a.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
selected={
1:('Vehicle platform middleware, C++ concurrency, DDS/SOME-IP communication, system management and diagnostics.','BS in Computer Science'),
3:('Cross-embodiment robotics platform, versioned APIs, runtime/middleware, capability abstractions, profiling and edge deployment.','Education: B.S.'),
4:('Robot middleware framework and developer infrastructure; C++, Linux userspace/kernel interactions and timing-sensitive production software.','At least 7 years'),
5:('Humanoid Linux platform software, networks, sensor/compute integration, build systems and performance-critical applications.','5+ years of experience'),
6:('Robot-facing backend services, multi-agent/cloud interfaces, orchestration, state management, observability and production tooling.','Bachelors, Masters'),
7:('On-robot edge services, fleet connectivity, OTA updates, telemetry, buffering and infrastructure reliability.','3+ years of relevant'),
8:('Onboard developer platform with shared architecture, simulation/evaluation infrastructure, profiling and reproducible software workflows.','BS in Comp Sci'),
9:('Robot OS platform, Linux CI/validation, system services, kernel/drivers and hardware-portable production releases.','4+ years delivering'),
10:('Senior individual-contributor robot OS infrastructure, Linux images, CI/validation, kernel/drivers and cross-team releases.','8+ years delivering'),
}
reviewed=[]
for i,(scope,needle) in selected.items():
 r=cohort[i];line=next(l for l in r['sourceText'].splitlines() if needle in l);start=r['sourceText'].index(line)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-10','reviewMethod':'Contextual full stored-source review; original classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':line,'qualificationSpans':[{'text':line,'start':start,'end':start+len(line)}]})
obs=[];excluded=[]
for i,r in enumerate(cohort):
 reason=None
 if i==0:reason='Primary teleoperation/data-collection quality and ingestion tooling, rather than shared robot runtime or platform ownership.'
 if r['countries']!=['United States']:reason='Not an exclusively U.S. advertisement.'
 if i not in selected:reason=reason or 'Outside selected contextual platform review.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[v for v in r['compensation'] if v['currency']=='USD' and v['period']=='year' and v['minimum']>0 and v['maximum']>=v['minimum']]
 if len(pay)==1:salary={**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured'}
 elif i in [4,5,6]:
  clause=next(l for l in r['sourceText'].splitlines() if '$' in l and ('per year' in l or 'a year' in l));values=[float(v.replace(',',''))*(1000 if k else 1) for v,k in re.findall(r'\$([\d,]+(?:\.\d+)?)(K)?',clause)];start=r['sourceText'].index(clause)
  salary={'minimum':values[0],'maximum':values[1],'currency':'USD','period':'year','basis':'advertised annual base salary' if i in [4,5] else 'advertised annual salary','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)}}
 else:excluded.append({**provenance(r),'reason':'Salary range lacks an explicit annual pay period; full-time status or annual-bonus wording does not establish salary frequency.'});continue
 obs.append({**provenance(r),**salary,'midpoint':(salary['minimum']+salary['maximum'])/2,'seniority':r['seniority'],'scope':selected[i][0]})
exact=median(o['midpoint'] for o in obs);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/robotics-platform-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-10','roleId':'robotics-platform-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary excluding bonus and equity','postingCount':len(obs),'employerCount':len({o['employerId'] for o in obs}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'Median of one explicitly annual USD salary-range midpoint per distinct requisition.','eligibility':'Individual-contributor robot/autonomous-vehicle shared runtime, middleware, Linux platform, developer framework and robot-facing infrastructure roles. Experienced/senior/staff positions included.','limitations':'Selected U.S. sample spans on-robot platform and robot-facing services, concentrated in experienced roles. Two distinct seniority requisitions at Zoox contribute. Not an entry-level rate or representative market median. Structured salary fields do not consistently establish base pay.','observations':obs,'excludedObservations':excluded})
examples=[]
for i in [3,4,6]:
 r=cohort[i];o=next(o for o in obs if o['id']==r['id']);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':r['id'],'location':r['locations'][0].replace(' Office (POST)','').replace(', United States','')})
write('public/research/robotics-platform-engineer-evidence-2026-11-10.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-10','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; immutable source archive and original classifications preserved.','roles':{'robotics-platform-engineer':{'recordIds':[r['id'] for r in reviewed],'auditPath':'research/career-guides/robotics-platform-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Shared robot runtime, middleware, OS/release tooling, developer infrastructure and robot-facing services. No current-vacancy or skill-frequency claims.'}},'records':reviewed})
write('research/career-guides/robotics-platform-engineer/evidence-audit.json',{'reviewedAt':'2026-11-10','snapshotId':aggregate['snapshotId'],'scope':'Shared robot/autonomous-vehicle software foundations: middleware, runtime, Linux platform, deployment, developer tooling, observability and robot-facing cloud services. Primary dataset collection tooling excluded.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'additionalBoundaryFullSourceReviews':[{**provenance(cohort[0]),'decision':'Primary collection-data tooling rather than core robot platform.'}],'technicalSources':['https://design.ros2.org/articles/ros_middleware_interface.html','https://github.com/ros2/ros2_documentation/blob/rolling/source/ROS-Framework/interfaces/topics/About-Quality-of-Service-Settings.rst','https://github.com/ros2/ros2_tracing','https://opentelemetry.io/docs/concepts/signals/traces/'],'editorialVisual':'Invented subscriber-side queue snapshot, all three messages already arrived before a single FIFO dequeue at 50ms. Retained history depths 3 and 1 illustrate freshness versus retained intermediate samples. No transport, reliability or real-time guarantee; not for commands or durable events.'})
write('public/research/platform-message-history-example-2026-11-10.json',{'kind':'illustrative-subscriber-history','unit':'ms','arrivalTimes':[0,20,40],'dequeueAt':50,'depths':[3,1],'assumptions':'Invented single-topic example; timestamp equals arrival time, all messages already arrived and none consumed before time 50ms. Each finite queue evicts its oldest sample at capacity. One FIFO dequeue happens at 50ms. No network delay, packet loss, retransmission, callback processing or cross-topic scheduling modeled. Smaller retained history favors freshness while discarding intermediate samples; not a command or durable-event delivery design.'})
print(json.dumps({'reviewed':len(reviewed),'salaryN':len(obs),'employers':len({o['employerId'] for o in obs}),'median':exact,'estimate':estimate}))
