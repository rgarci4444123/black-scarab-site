"""Reproduce Perception Engineer guide evidence from the preserved Intelligence snapshot."""
import argparse, hashlib, json
from pathlib import Path
from statistics import median
from decimal import Decimal, ROUND_HALF_UP
parser=argparse.ArgumentParser();parser.add_argument('--archive-root',required=True,type=Path);args=parser.parse_args()
root=Path(__file__).resolve().parents[1];archive=args.archive_root/'research/physical-ai/2026-11-02'
rows=[json.loads(s) for s in (archive/'postings.jsonl').read_text().splitlines()];by_id={r['id']:r for r in rows}
cohort=[r for r in rows if r['screening']['primaryRoleId']=='perception-engineer']
aggregate_file=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_file.read_text());digest=hashlib.sha256(aggregate_file.read_bytes()).hexdigest()
def write(path,value):
 p=root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256']
 assert hashlib.sha256((args.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
excluded_ids={
 'applied-intuition:ashby:5f15c171-ae5a-496b-a8eb-c6a351d55b6b':'Primarily generative world-model and 3D-generation research, rather than operational perception engineering.',
 'applied-intuition:ashby:8da87c90-49ff-4b75-97c5-337882f63a00':'Primarily generative world-model and neural-simulation research.',
 'apptronik:greenhouse:5988546004':'Sensor hardware engineering rather than perception software.',
 'fieldai:lever:0c026e5f-99c5-419d-9458-1f2db08fcb8f':'Sensor hardware architecture, characterization and integration.',
 'fieldai:lever:bb127cde-930c-446f-908d-52e2c6f24cc9':'Full source describes verification, validation and perception evaluation despite the title.',
 'zoox:lever:87877cf4-3ac8-45d5-90fb-2ef7f223c068':'Data science for perception verification and validation rather than perception implementation.',
}
text_ranges={
 'apptronik:greenhouse:6225394004':(220000,250000),
 'boston-dynamics:workday:R2564':(134399.06,184798.70),
 'boston-dynamics:workday:R3239':(115000,135000),
 'boston-dynamics:workday:R3260':(150000,190000),
 'figure:greenhouse:4007375006':(200000,400000),
 'nuro:greenhouse:6516915':(193930,291150),
 'nuro:greenhouse:7389868':(193930,291150),
 'skydio:ashby:3fbd5cc0-36df-4d21-a88b-04e0932109d6':(170000,277500),
 'tri:lever:fcfe4b57-d1a0-47f6-b14f-98a4d30313eb':(180000,258750),
}
observations=[];excluded=[]
for r in cohort:
 if not (r['compensation'] or r['compensationClauses']):continue
 reason=excluded_ids.get(r['id'])
 if r['countries']!=['United States']:reason=reason or 'Not an exclusively U.S. advertisement.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[p for p in r['compensation'] if p['currency']=='USD' and p['period']=='year' and p['minimum']>0 and p['maximum']>=p['minimum']]
 if len(pay)==1:
  o={**provenance(r),**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured','seniority':r['seniority']}
 elif r['id'] in text_ranges:
  low,high=text_ranges[r['id']];clause=next(c for c in r['compensationClauses'] if any(term in c.lower() for term in ['annual','per year','/year']))
  for value in [low,high]:assert f'{value:,.2f}' in clause or f'{value:,.0f}' in clause
  start=r['sourceText'].index(clause)
  o={**provenance(r),'minimum':low,'maximum':high,'currency':'USD','period':'year','basis':'explicit annual salary; base pay where stated in source','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)},'seniority':r['seniority']}
 else:
  excluded.append({**provenance(r),'reason':'No unambiguous annual USD range in structured fields or the selected explicit-period text review.'});continue
 o['midpoint']=(o['minimum']+o['maximum'])/2;observations.append(o)
exact=median(o['midpoint'] for o in observations);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/perception-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-09','roleId':'perception-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'currency':'USD','period':'year','label':'Black Scarab estimated compensation','basis':'advertised annual salary, excluding bonus and equity','postingCount':len(observations),'employerCount':len({o['employerId'] for o in observations}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'One midpoint per eligible distinct requisition, then the median of those midpoints. Mixed experience levels; no career-level pay ladder inferred.','eligibility':'U.S. individual-contributor perception software, geometry, sensor fusion and learned perception in the pinned cohort. Structured annual USD ranges or selected explicit annual salary clauses.','limitations':'Selected employers and mixed levels, including senior/staff roles and tactile perception. Not an entry-level or representative industry salary. Distinct requisitions count separately. Sensor hardware, primarily generative-world-model research, dedicated evaluation/data-science roles and unverified annual periods are excluded. Structured advertised salary does not consistently identify base pay.','observations':observations,'excludedObservations':excluded})
selected={
 'figure:greenhouse:4007375006':('Humanoid perception including geometric vision, localization and visuomotor systems.','Strong mathematical foundation in probability, optimization, and linear algebra.'),
 'apptronik:greenhouse:6225394004':('Humanoid perception and SLAM, model evaluation and embedded deployment.','MS/PhD in Computer Science, Robotics, Computer Engineering, or related field.'),
 'agility:greenhouse:6210999004':('Human and hazard detection, embedded inference and validation.','5+ years of experience in machine learning/perception for robotics'),
 'path-robotics:greenhouse:8925919002':('Weld perception, point clouds, seam detection and production ROS services.',"Master's or Ph.D. in CS, Robotics, or related field (Computer Vision, ML, or Perception); Bachelor's with strong production ML experience also considered."),
 'pickle-robot:lever:403803e1-68a0-4225-b657-a46e72b64d73':('Warehouse grasp perception: problem formulation, training data and model evaluation; runtime integration owned by partner teams.','5+ Years of Experience in Machine Learning and Computer Vision, including models you personally carried from problem statement to measured outcome.'),
 'fieldai:lever:95c1d7a7-f2b4-45ca-9888-2196b14afa77':('Field perception, sensor fusion, localization and on-robot deployment.','PhD degree in Robotics, Computer Science, Electrical Engineering, or a related field or MS degree in a related field with 2+ years of industry or applied research experience, or BS degree in a related field with 4+ years of relevant experience.'),
 'rhoda:ashby:5096d04e-0bb8-4fe1-b8bf-e8901a9d013f':('Humanoid sensor integration, object understanding and reliable perception pipelines.','4+ years of experience in robotics perception, computer vision, or a closely related field'),
 'one-x:ashby:8065ae1f-697e-4b73-9ae2-cc55a5373991':('Geometric vision, depth, object/human pose, calibration and robot-scene interpretation.','5+ years of relevant industry experience, or an advanced degree plus equivalent hands-on experience'),
 'boston-dynamics:workday:R2564':('Tactile perception: processing touch signals into representations for manipulation.','MS or PhD in Electrical Engineering, Computer Science, Robotics, or related field. BS with significant relevant experience will also be considered'),
}
records=[]
for id,(scope,qualification) in selected.items():
 r=by_id[id];start=r['sourceText'].index(qualification)
 records.append({**provenance(r),'reviewedAt':'2026-11-09','reviewMethod':'Selected stored full-source contextual review; original cohort classifications and flags retained.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':qualification,'qualificationSpans':[{'text':qualification,'start':start,'end':start+len(qualification)}]})
examples=[]
for id in ['pickle-robot:lever:403803e1-68a0-4225-b657-a46e72b64d73','apptronik:greenhouse:6225394004','figure:greenhouse:4007375006']:
 o=next(o for o in observations if o['id']==id)
 examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':id,'location':{'figure:greenhouse:4007375006':'San Jose, CA','apptronik:greenhouse:6225394004':'Austin, TX / Sunnyvale, CA'}.get(id,', '.join(o['locations']))})
write('public/research/perception-engineer-evidence-2026-11-09.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-09','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Separate contextual review layer; original research unchanged.','roles':{'perception-engineer':{'recordIds':list(selected),'auditPath':'research/career-guides/perception-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Broad cohort includes sensor hardware, evaluation, generative research and overlapping localization work. No clean perception-only skill-frequency claim.'}},'records':records})
write('research/career-guides/perception-engineer/evidence-audit.json',{'reviewedAt':'2026-11-09','snapshotId':aggregate['snapshotId'],'scope':'Software that interprets sensor observations into objects, geometry, motion and scene representations. Distinguish from selecting actions, localization/map ownership and data infrastructure.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':records,'salaryExclusions':excluded,'technicalSources':['https://docs.opencv.org/4.13.0/dc/dbb/tutorial_py_calibration.html','https://docs.pytorch.org/tutorials/intermediate/torchvision_tutorial.html'],'liveEmployerChecks':['https://job-boards.greenhouse.io/figureai/jobs/4007375006','https://job-boards.greenhouse.io/apptronik/jobs/6225394004'],'editorialExamples':'The obscured-carton scenario and recorded-video portfolio are hypothetical teaching examples.'})
print(json.dumps({'postings':len(observations),'employers':len({o['employerId'] for o in observations}),'exactMedian':exact,'estimate':estimate}))
