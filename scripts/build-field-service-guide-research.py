#!/usr/bin/env python3
"""Derive the Field Service Engineer guide from the immutable employer archive."""
import argparse,hashlib,json
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
parser=argparse.ArgumentParser();parser.add_argument('--archive-root',type=Path,required=True);args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_path.read_text());digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
all_records=[json.loads(line) for line in (args.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()]
cohort=[r for r in all_records if r['screening']['primaryRoleId']=='field-service-engineer'];by_id={r['id']:r for r in all_records}
def write(path,value):
 p=root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256']
 assert hashlib.sha256((args.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
ranges={
 'boston-dynamics:workday:R2895':(73670,90000),
 'boston-dynamics:workday:R3291':(90000,115000),
 'dexterity:lever:0630d2f1-586c-4819-a111-a6188462af3b':(80000,110000),
 'nimble:greenhouse:4204567009':(100000,130000),
 'nimble:greenhouse:4453394009':(100000,130000),
 'skydio:ashby:53bd205b-24a7-4a54-a196-6694a57b7983':(110000,135000),
 'skydio:ashby:8c9b9a1f-8a64-4a14-8a64-4c4d6af6e8f3':(110000,135000),
 'skydio:ashby:b053b0e2-005c-4e77-95f3-26c7354e6095':(100000,120000),
}
observations=[];excluded=[]
for r in cohort:
 id=r['id']
 if id not in ranges:
  if id=='shield-ai:lever:ee614940-c594-41da-8432-8a677e21520d':reason='Primarily Hivemind software sustainment, APIs, licensing and provisioning rather than hands-on equipment field service.'
  elif id.startswith('formic:'):reason='Hourly role; annualized employer examples include overtime and are not comparable annual salary observations.'
  elif any(p.get('period')=='hour' for p in r['compensation']) or any('hour' in c.lower() or '/hr' in c.lower() for c in r['compensationClauses']):reason='Hourly or short-term contract compensation; not annualized.'
  elif r['countries']!=['United States']:reason='Non-U.S. or unverified mixed geography.'
  else:reason='No complete explicit annual USD salary range verified for an eligible equipment field-service role.'
  excluded.append({**provenance(r),'reason':reason});continue
 low,high=ranges[id]
 clause=next(c for c in r['compensationClauses'] if any(term in c.lower() for term in ['annual','a year','/year']))
 assert f'{low:,}' in clause and f'{high:,}' in clause
 start=r['sourceText'].index(clause)
 o={**provenance(r),'minimum':low,'maximum':high,'currency':'USD','period':'year','basis':'advertised annual salary; base pay where expressly stated','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)},'seniority':r['seniority'],'midpoint':(low+high)/2}
 if id=='boston-dynamics:workday:R2895':
  location='This role will be located in Indianapolis, Indiana.';assert location in r['sourceText']
  o['originalCountries']=r['countries'];o['countries']=['United States'];o['geographyReview']={'reason':'Original country detector returned India and United States; full source explicitly locates the role in Indianapolis, Indiana and discusses U.S. work eligibility. Original archive unchanged.','sourceClause':location}
 else:assert r['countries']==['United States']
 observations.append(o)
exact=median(o['midpoint'] for o in observations);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/field-service-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-09','roleId':'field-service-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary, excluding overtime, bonus and equity','postingCount':len(observations),'employerCount':len({o['employerId'] for o in observations}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'One annual salary-range midpoint per distinct eligible requisition, then the median. No hourly-to-annual conversion or career-level bands.','eligibility':'Selected U.S. robot-equipment field service and drone field-support roles involving deployed hardware/software troubleshooting, maintenance, customer training or on-site support, with explicit annual USD salary ranges.','limitations':'Small purposive sample of salaried roles with mixed experience and equipment types. Separate location requisitions count separately. Excludes hourly wages, overtime-based annualized earnings and primarily software sustainment. Not an entry-level estimate or representative industry median.','observations':observations,'excludedObservations':excluded})
selected={
 'dexterity:lever:0630d2f1-586c-4819-a111-a6188462af3b':('Hands-on customer warehouse maintenance, mechanical/electrical/pneumatic diagnosis, Linux logs, commissioning and repair validation.','Education & Experience: BS or AAS in an engineering discipline related to robotics (CS, EE, ME, Mechatronics, etc.) or equivalent practical field service experience.'),
 'formic:greenhouse:4702865006':('Preventive/corrective maintenance, PLC/electromechanical faults, CMMS, customer support and safety at manufacturing sites.','3+ years of hands-on field service experience supporting robotic or industrial automation systems'),
 'boston-dynamics:workday:R3291':('Emergency repairs, installations, maintenance and customer-facing service for deployed warehouse robotics.','Field technicians with experience in other industries are encouraged to apply.'),
 'boston-dynamics:workday:R2895':('Customer-site Stretch service, mechanical repairs, service metrics and travel.','3+ years in a similar role.'),
 'nimble:greenhouse:4204567009':('Production fleet troubleshooting, log/SQL analysis, observability and operational support.','0-5 years of experience in a production environment supporting and improving complex robotics systems, or a minimum of 2 years of experience combined with a Bachelor of Science degree in Computer Science, Software Engineering, or Robotics.'),
 'skydio:ashby:53bd205b-24a7-4a54-a196-6694a57b7983':('Customer-site UAS and dock support, firmware/log/network diagnosis, maintenance training and regional travel.','At least 3 years of civilian, law enforcement or military UAS operations and flight experience.'),
 'agile-robots:greenhouse:5013112101':('Robots, teleoperation devices and recording systems: hardware/software diagnosis, preventive maintenance and documented R&D escalation.','Degree or vocational training in mechatronics, electrical engineering, robotics, computer science or a related field.'),
 'path-robotics:greenhouse:8470564002':('Welding-cell maintenance, pneumatics, electrical/mechanical components, operating duties and extensive customer travel.','Technical training, Trade School certification, Associate degree in Engineering Tech, or equivalent industry experience.'),
 'figure:greenhouse:4683847006':('Commercial humanoid service, whole-system diagnostics, schematics, mechanical components and engineering feedback.','3+ years experience working with complex systems.'),
 'serve:ashby:946fe8ed-7c4a-462c-97ca-6d7843a45fa3':('Delivery-robot mechanical, electrical and software fault diagnosis, repair validation, work-order traceability and quality.','2–4+ years of progressive technical experience in electro-mechanical, electronics, robotics, automotive, aerospace, or similar industries'),
}
records=[]
for id,(scope,qualification) in selected.items():
 r=by_id[id];start=r['sourceText'].index(qualification)
 records.append({**provenance(r),'reviewedAt':'2026-11-09','reviewMethod':'Selected stored full-source review; original classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':qualification,'qualificationSpans':[{'text':qualification,'start':start,'end':start+len(qualification)}]})
examples=[]
for id,location in [('dexterity:lever:0630d2f1-586c-4819-a111-a6188462af3b','Redwood City, CA'),('boston-dynamics:workday:R3291','Georgia (remote with customer-site travel)'),('nimble:greenhouse:4204567009','Haslet, TX')]:
 o=next(o for o in observations if o['id']==id);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':id,'location':location})
write('public/research/field-service-engineer-evidence-2026-11-09.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-09','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; original dated research remains unchanged.','roles':{'field-service-engineer':{'recordIds':list(selected),'auditPath':'research/career-guides/field-service-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Broad cohort mixes field engineers, service/repair technicians, lab roles, operators and support leaders. Present skills contextually; do not infer clean skill-frequency or opening totals.'}},'records':records})
write('research/career-guides/field-service-engineer/evidence-audit.json',{'reviewedAt':'2026-11-09','snapshotId':aggregate['snapshotId'],'scope':'Diagnose, maintain and restore deployed robotic equipment; customer communication, service documentation and engineering escalation. Distinguish from new-cell integration, routine fleet operation and software-only sustainment.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':records,'salaryExclusions':excluded,'geographyCorrection':'R2895 reviewed as Indianapolis, Indiana, United States; retain original mixed-country classifier output in the archive.','liveEmployerChecks':[{'url':'https://job-boards.greenhouse.io/formic/jobs/4702865006','status':'Read November 9: field-service scope, maintenance, CMMS and experience confirmed.'},{'url':'https://jobs.lever.co/dexterity/0630d2f1-586c-4819-a111-a6188462af3b','status':'Live access returned HTTP 403; guide uses pinned full source from November 2.'}],'technicalSources':['https://www.osha.gov/control-hazardous-energy','https://docs.python.org/3/howto/logging.html','https://documentation.ubuntu.com/desktop/en/latest/tutorial/the-linux-command-line-for-beginners/','https://www.wireshark.org/docs/wsug_html_chunked/'],'editorialExamples':'Stopped-robot diagnostic map and software-only service-ticket project are hypothetical educational examples, not employer incident reports or maintenance instructions.'})
print(json.dumps({'postings':len(observations),'employers':len({o['employerId'] for o in observations}),'exactMedian':exact,'estimate':estimate,'selectedFullSources':len(records)}))
