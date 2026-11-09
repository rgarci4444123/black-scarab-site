#!/usr/bin/env python3
"""Reproduce embedded-software evidence and annual salary observations."""
import argparse,hashlib,json
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
parser=argparse.ArgumentParser();parser.add_argument('--archive-root',type=Path,required=True);args=parser.parse_args()
root=Path(__file__).resolve().parents[1];ap=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(ap.read_text());digest=hashlib.sha256(ap.read_bytes()).hexdigest()
records=[json.loads(line) for line in (args.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()];by_id={r['id']:r for r in records};cohort=[r for r in records if r['screening']['primaryRoleId']=='embedded-software-engineer']
def write(path,value):
 p=root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256']
 assert hashlib.sha256((args.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
excluded_scope={
 'applied-intuition:ashby:3a79b874-e530-4e58-a55a-fa2364c42663':'Primarily aircraft/autonomy-stack integration, field testing and customer demonstrations rather than low-level embedded software ownership.',
 'applied-intuition:ashby:b7a499d8-d2a3-4458-baf6-4b43c2165558':'Primarily aircraft/autonomy-stack integration and live-test work rather than low-level embedded software ownership.',
 'applied-intuition:ashby:b352b349-8300-4f41-817d-952d044fb38a':'Primarily in-vehicle infotainment/Android services, outside this guide’s robot-control and hardware-interface focus.',
 'one-x:ashby:4cb3ef10-8755-4050-b5f1-309591626d1c':'Owns firmware release qualification, HIL rigs and test automation rather than production firmware development.',
 'anduril:greenhouse:4797357007':'Manufacturing-test firmware specialization; excluded from the production robot-firmware salary subset.',
}
text_ranges={
 'boston-dynamics:workday:R2655':(160000,200000),
 'gram:greenhouse:4364454009':(165000,205000),
 'nimble:greenhouse:4277741009':(180000,250000),
 'nimble:greenhouse:4384912009':(180000,230000),
 'skydio:ashby:71033170-d9d0-474b-b712-a11e4f11c146':(170000,277500),
 'skydio:ashby:d415cf2b-616c-459e-9c5f-58a1b2c4a1bb':(127500,210000),
}
observations=[];excluded=[]
for r in cohort:
 reason=excluded_scope.get(r['id'])
 if r['countries']!=['United States']:reason=reason or 'Not an exclusively U.S. advertisement; mixed or unverified geography is not assigned a U.S. salary.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[p for p in r['compensation'] if p['currency']=='USD' and p['period']=='year' and p['minimum']>0 and p['maximum']>=p['minimum']]
 if len(pay)==1:
  o={**provenance(r),**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured','seniority':r['seniority']}
 elif r['id'] in text_ranges:
  low,high=text_ranges[r['id']];clause=next(c for c in r['compensationClauses'] if any(term in c.lower() for term in ['annual base salary','annually','/year']))
  assert f'{low:,}' in clause and f'{high:,}' in clause
  start=r['sourceText'].index(clause);o={**provenance(r),'minimum':low,'maximum':high,'currency':'USD','period':'year','basis':'advertised annual salary; base pay where expressly stated','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)},'seniority':r['seniority']}
 else:excluded.append({**provenance(r),'reason':'No complete annual USD range verified in structured data or an explicit annual salary clause. Annual bonus wording alone does not establish the salary period.'});continue
 o['midpoint']=(o['minimum']+o['maximum'])/2;observations.append(o)
exact=median(o['midpoint'] for o in observations);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/embedded-software-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-09','roleId':'embedded-software-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary, excluding bonus and equity','postingCount':len(observations),'employerCount':len({o['employerId'] for o in observations}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'One annual salary-range midpoint per distinct eligible requisition, then the median. No seniority pay bands inferred.','eligibility':'U.S. roles developing production robot/vehicle firmware, hardware drivers, embedded Linux/BSPs, actuation/power firmware or embedded avionics, with complete explicit annual USD ranges.','limitations':'Purposive employer sample with uneven coverage and mixed seniority, including a new-graduate advertisement and senior/staff roles. Excludes primarily integration, infotainment, test-only work, mixed geography and unverified annual salary periods. Structured salary fields do not consistently identify base pay. Not an entry-level estimate or representative market median.','observations':observations,'excludedObservations':excluded})
selected={
 'applied-intuition:ashby:6971d533-1536-448b-96b8-544ad5383f44':('New-graduate production C/C++, RTOS applications, board bring-up and low-level communications.','BS/BA, MS, or PhD in Computer Engineering'),
 'apptronik:greenhouse:6107174004':('Humanoid actuator firmware, hard real-time motor control, fault detection and HIL/SIL.','Bachelor\'s degree in Electrical Engineering'),
 'apptronik:greenhouse:6216214004':('Robot compute BSP, boot chain, kernel/device-tree work, drivers and recoverable OS updates.','Bachelor\'s degree in Electrical Engineering'),
 'gram:greenhouse:4364454009':('MCU and Linux runtime software, deterministic communication, timing, observability and fault recovery.','Bachelor’s degree in computer science'),
 'fieldai:lever:7a0d12c7-957b-42f6-a9c9-9605fab6d2a4':('Mixed embedded compute hardware/software role with firmware, Linux, drivers, sensor integration and field diagnostics.','Education: B.S., M.S., or Ph.D.'),
 'zoox:lever:46c23963-2be1-4037-8f1a-ce87bdccde6d':('Production embedded vehicle body/thermal/lighting/closure software and sensor/actuator integration.','Bachelor\'s or Master\'s degree in Electrical and Computer Engineering'),
 'sunday:ashby:788d2c63-f5b7-447e-9d4d-7ab1a92e10f1':('Embedded Linux bootloaders, BSPs, drivers, system images and OTA updates for home robots.','BS or MS in CS, Computer Engineering'),
 'skydio:ashby:d415cf2b-616c-459e-9c5f-58a1b2c4a1bb':('Bare-metal/RTOS microcontrollers, embedded Linux, sensors, board bring-up and real-time C++.','Practical experience writing firmware/embedded code for a physical device'),
 'boston-dynamics:workday:R2655':('Atlas firmware lifecycle, C/C++, microcontrollers, memory/state machines and debugging.','Bachelor\'s degree in Computer Science'),
 'rhoda:ashby:9372a5ff-6b6d-4e02-900a-939beb901110':('Distributed real-time control firmware, EtherCAT synchronization, scheduling, diagnostics and regression testing.','Bachelor\'s or higher in Electrical Engineering'),
}
reviewed=[]
for id,(scope,needle) in selected.items():
 r=by_id[id];qualification=next(line for line in r['sourceText'].splitlines() if needle in line);start=r['sourceText'].index(qualification)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-09','reviewMethod':'Selected stored full-source contextual review; original classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':qualification,'qualificationSpans':[{'text':qualification,'start':start,'end':start+len(qualification)}]})
examples=[]
for id,location in [('applied-intuition:ashby:6971d533-1536-448b-96b8-544ad5383f44','Sunnyvale, CA'),('gram:greenhouse:4364454009','San Francisco Bay Area, CA'),('sunday:ashby:788d2c63-f5b7-447e-9d4d-7ab1a92e10f1','Redwood City, CA')]:
 o=next(o for o in observations if o['id']==id);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':id,'location':location})
write('public/research/embedded-software-engineer-evidence-2026-11-09.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-09','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review layer; original dated research remains unchanged.','roles':{'embedded-software-engineer':{'recordIds':list(selected),'auditPath':'research/career-guides/embedded-software-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Broad cohort includes systems integration, infotainment and firmware testing. Do not present raw mentions as clean firmware-development prevalence or opening totals.'}},'records':reviewed})
write('research/career-guides/embedded-software-engineer/evidence-audit.json',{'reviewedAt':'2026-11-09','snapshotId':aggregate['snapshotId'],'scope':'Production software at the hardware boundary: firmware, real-time services, drivers, BSPs, embedded OS, updates and fault handling. Distinguish from electrical circuit design, control-algorithm design and shared high-level robot middleware.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'liveEmployerChecks':['https://job-boards.greenhouse.io/gram/jobs/4364454009'],'technicalSources':['https://docs.zephyrproject.org/latest/develop/getting_started/index.html','https://docs.zephyrproject.org/latest/kernel/services/scheduling/index.html','https://www.raspberrypi.com/documentation/microcontrollers/c_sdk.html','https://docs.aws.amazon.com/freertos/latest/userguide/dev-guide-freertos-kernel.html'],'editorialExamples':'The 10 ms deadline graphic is illustrative arithmetic, not employer performance data. The sensor project tests software with a simulated clock before optional hardware measurement.'})
print(json.dumps({'salaryPostings':len(observations),'salaryEmployers':len({o['employerId'] for o in observations}),'exactMedian':exact,'estimate':estimate,'selectedFullSources':len(reviewed)}))
