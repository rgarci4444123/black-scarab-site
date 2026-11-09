"""Reproduce Robotics Data Engineer evidence from the preserved Intelligence archive."""
import argparse, hashlib, json
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path
from statistics import median
parser=argparse.ArgumentParser();parser.add_argument('--archive-root',required=True,type=Path);args=parser.parse_args()
root=Path(__file__).resolve().parents[1];archive=args.archive_root/'research/physical-ai/2026-11-02'
rows=[json.loads(s) for s in (archive/'postings.jsonl').read_text().splitlines()];by_id={r['id']:r for r in rows}
cohort=[r for r in rows if r['screening']['primaryRoleId']=='robotics-data-engineer']
aggregate_file=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_file.read_text());digest=hashlib.sha256(aggregate_file.read_bytes()).hexdigest()
def write(path,value):
 p=root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256']
 assert hashlib.sha256((args.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
excluded_ids={
 'boston-dynamics:workday:R3241':'Controls reliability diagnostics and failure-analysis pipelines, rather than reusable ML datasets.',
 'fieldai:lever:8a92d84f-7512-4d64-8d3a-c29b304358d6':'Mixed collection operations, people management and demonstration support.',
 'shield-ai:lever:2f1b420a-125f-4b25-bf1d-0e8605932480':'Fleet-performance analysis and reporting rather than reusable training-data supply.',
 'shield-ai:lever:e2e44212-0cdb-4dde-b7c4-a981cc28ec43':'Enterprise supply-chain and manufacturing business analytics.',
 'zoox:lever:17b2714f-5454-48a4-bb76-d14157575498':'Enterprise analytics rather than robot sensor-data engineering.',
 'zoox:lever:fd30da7a-d7ec-49a0-b4bd-ed3a193a1e07':'Enterprise data platform rather than robot-data supply.',
 'agility:greenhouse:6144405004':'Salary range appears in full text but no unambiguous annual period was verified.',
 'anduril:greenhouse:5185965007':'Salary range appears in full text but no unambiguous annual period was verified.',
}
text_ranges={
 'figure:greenhouse:4345915006':(150000,400000),
 'gram:greenhouse:4377780009':(170000,220000),
 'gram:greenhouse:4377781009':(190000,240000),
 'nuro:greenhouse:7736012':(193930,291150),
 'skydio:ashby:134f29cc-da9f-4214-9d9c-d044f93af39e':(170000,240000),
 'tri:lever:5b1a4365-272b-4541-8f7d-46f0bf0d3e4f':(180000,258750),
}
observations=[];excluded=[]
for r in cohort:
 if not (r['compensation'] or r['compensationClauses'] or r['id'] in excluded_ids):continue
 reason=excluded_ids.get(r['id'])
 if r['countries']!=['United States']:reason=reason or 'Not an exclusively U.S. advertisement.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[p for p in r['compensation'] if p['currency']=='USD' and p['period']=='year' and p['minimum']>0 and p['maximum']>=p['minimum']]
 if len(pay)==1:
  o={**provenance(r),**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured','seniority':r['seniority']}
 elif r['id'] in text_ranges:
  low,high=text_ranges[r['id']];clause=next(c for c in r['compensationClauses'] if any(term in c.lower() for term in ['annual','per year','/year']))
  for v in [low,high]:assert f'{v:,.2f}' in clause or f'{v:,.0f}' in clause
  start=r['sourceText'].index(clause)
  o={**provenance(r),'minimum':low,'maximum':high,'currency':'USD','period':'year','basis':'explicit annual salary; base pay where stated in source','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)},'seniority':r['seniority']}
 else:
  excluded.append({**provenance(r),'reason':'No complete annual USD range in the structured fields or selected explicit-period text review.'});continue
 o['midpoint']=(o['minimum']+o['maximum'])/2;observations.append(o)
exact=median(o['midpoint'] for o in observations);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/robotics-data-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-09','roleId':'robotics-data-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary, excluding bonus and equity','postingCount':len(observations),'employerCount':len({o['employerId'] for o in observations}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'One salary-range midpoint per distinct eligible requisition, then the median. No career-level pay bands inferred.','eligibility':'U.S. engineering roles building robot-data capture, ingestion, storage, curation, annotation tooling or reusable ML datasets; complete annual USD ranges from structured ATS data or explicit annual source clauses.','limitations':'Small selected-employer sample with mixed experienced roles. Excludes enterprise analytics, primarily fleet diagnostics/analysis, mixed people-management operations and unverified annual periods. Structured salary fields do not consistently identify base pay. Not a representative industry or entry-level salary.','observations':observations,'excludedObservations':excluded})
selected={
 'agile-robots:greenhouse:5006103101':('Multimodal capture, temporal alignment, dataset health, curation and episode schemas.','Degree in Computer Science, Robotics, Electrical Engineering, or a related field, or equivalent qualification plus professional experience building comparable data or robotics software systems.'),
 'figure:greenhouse:4345915006':('Robot-data offload, storage, access and researcher workflows.',"Bachelor's or Master's degree in Computer Science, Robotics, Engineering, or a related field."),
 'gram:greenhouse:4377781009':('Versioned schemas, data lineage, quality controls, ingestion and reproducible dataset construction.',"Bachelor's degree in computer science, electrical engineering, applied mathematics, or a related field, or equivalent practical experience."),
 'dyna:ashby:43dcc186-62b1-4641-9365-3cb9767fc653':('Multimodal pipelines, annotation tools, geometric signal extraction and researcher interfaces.','5+ years of professional software experience, ideally with a focus on data-intensive or "human-in-the-loop" platforms.'),
 'fieldai:lever:e3b7bac7-5410-44bb-964c-02815fbd0c97':('Production robot telemetry, log and sensor-data pipelines.',"Bachelor's or Master's degree in Computer Science, Engineering, or a related technical field."),
 'nuro:greenhouse:7736012':('Vehicle sensor data, calibration validation and annotation/ground-truth tooling.','BS/MS in Computer Science, Software Engineering, Robotics, or a related quantitative field.'),
 'skydio:ashby:134f29cc-da9f-4214-9d9c-d044f93af39e':('Drone-log curation, dataset discovery, quality and versioning.','5+ years of professional software engineering experience (or equivalent), with significant ownership of production systems.'),
 'tri:lever:5b1a4365-272b-4541-8f7d-46f0bf0d3e4f':('Autonomous-driving fleet and simulation data, labeling, metadata and feature stores.','Bachelor’s or Master’s degree in Computer Science, Data Engineering, or a related field.'),
 'physical-intelligence:ashby:c01b0e18-5eb8-4255-a10a-7e9a171676b7':('Data-quality tooling, acceptance rubrics and vendor audit workflows.','~5 years of experience across building customer facing software.'),
}
records=[]
for id,(scope,qualification) in selected.items():
 r=by_id[id];start=r['sourceText'].index(qualification)
 records.append({**provenance(r),'reviewedAt':'2026-11-09','reviewMethod':'Selected stored full-source review; original role flags and classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':qualification,'qualificationSpans':[{'text':qualification,'start':start,'end':start+len(qualification)}]})
examples=[]
for id in ['fieldai:lever:e3b7bac7-5410-44bb-964c-02815fbd0c97','gram:greenhouse:4377781009','figure:greenhouse:4345915006']:
 o=next(o for o in observations if o['id']==id)
 examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':id,'location':{'gram:greenhouse:4377781009':'San Francisco Bay Area, CA','figure:greenhouse:4345915006':'San Jose, CA'}.get(id,', '.join(o['locations']))})
write('public/research/robotics-data-engineer-evidence-2026-11-09.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-09','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review layer; original dated research remains unchanged.','roles':{'robotics-data-engineer':{'recordIds':list(selected),'auditPath':'research/career-guides/robotics-data-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Broad cohort includes enterprise analytics, fleet diagnostics and mixed collection management. Guide focuses on robot-data supply; no clean skill-frequency or opening totals inferred.'}},'records':records})
write('research/career-guides/robotics-data-engineer/evidence-audit.json',{'reviewedAt':'2026-11-09','snapshotId':aggregate['snapshotId'],'scope':'Own usable robotics data: capture, alignment, schemas, ingestion, quality, curation and reproducible datasets. Distinguish from modeling, compute/training infrastructure and enterprise BI.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':records,'salaryExclusions':excluded,'liveEmployerChecks':['https://job-boards.greenhouse.io/agilerobotsse/jobs/5006103101','https://job-boards.greenhouse.io/figureai/jobs/4345915006'],'technicalSources':['https://huggingface.co/docs/lerobot/main/lerobot-dataset-v3','https://mcap.dev/spec','https://parquet.apache.org/docs/overview/'],'editorialExamples':'The shifted-camera recording and episode-quality pipeline are educational examples, not implemented employer systems.'})
print(json.dumps({'postings':len(observations),'employers':len({o['employerId'] for o in observations}),'exactMedian':exact,'estimate':estimate}))
