#!/usr/bin/env python3
"""Reproduce Manufacturing Engineer evidence, salary and illustrative yield arithmetic."""
import argparse, hashlib, json
from pathlib import Path
from statistics import median
from decimal import Decimal, ROUND_HALF_UP
parser=argparse.ArgumentParser()
parser.add_argument('--archive-root',type=Path,required=True)
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json'
aggregate=json.loads(aggregate_path.read_text())
digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
records=[json.loads(line) for line in (args.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()]
by_id={r['id']:r for r in records}
role_id='manufacturing-engineer'
cohort=[r for r in records if r['screening']['primaryRoleId']==role_id]
def write(path,value):
 p=root/path;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256']
 assert hashlib.sha256((args.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
selected={
 'fieldai:lever:61d53082-301f-4a1a-9439-180d10d4ebc0':('Robot hardware assembly, DFM/DFA, fixtures, yield and process documentation.',"Bachelor's degree"),
 'one-x:ashby:e350ff0d-dd7f-4299-8415-dc8e6da051ac':('Humanoid machining/assembly, tooling, inspection, NPI, production process controls and traceable documentation.','Bachelor’s degree'),
 'standard-bots:ashby:7ea413c0-82ad-48c2-a706-2fa8d6dba91a':('Robot PCBA manufacturability and SMT process ownership. Associate degree or equivalent experience accepted.','Associate'),
 'cobot:ashby:c54fa946-dd6b-4f0a-8957-4370b7d62e25':('Hands-on technical architecture of robot production sequence, fixtures, defect closure and manufacturing metrics. Staff technical role; no direct-report management stated.','9+ years'),
 'figure:greenhouse:4375064006':('Humanoid build-line development, manual/automated assembly, fixtures, MES and inspection. Related degree is a bonus qualification.','Bachelor’s or Master’s Degree'),
 'skydio:ashby:ab193d47-71aa-4110-af25-b7f6335d16aa':('Drone NPI, validated assembly processes, tooling, production capacity and measurement systems.','Bachelor’s degree'),
 'skydio:ashby:ffbc31a1-c7dc-4083-9fc2-08dca7b79619':('Manufacturing process engineering, time studies, line balancing, capacity, standard work and continuous improvement.','7+ years'),
 'apptronik:greenhouse:5809796004':('Supplier-side manufacturing process engineering, component qualification, electromechanical assemblies and supplier production readiness. Degree expressly required.',"Bachelor's degree"),
 'apptronik:greenhouse:6237444004':('Precision electromechanical assembly, manufacturing BOMs, work instructions, qualified tooling, yield and engineering changes.','Education:'),
 'anybotics:lever:41220f43-53f8-4336-94a1-eaed97c34784':('Swiss robot production support, NPI implementation, tooling, calibration, test procedures and yield monitoring; technical diploma or degree.','Bachelor’s degree or technical diploma'),
}
reviewed=[]
for record_id,(scope,needle) in selected.items():
 r=by_id[record_id];line=next(line for line in r['sourceText'].splitlines() if needle in line);start=r['sourceText'].index(line)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-10','reviewMethod':'Full stored-source contextual review; original archive and classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':line,'qualificationSpans':[{'text':line,'start':start,'end':start+len(line)}]})
exclusions={
 'one-x:ashby:873f836f-a4b6-4ef8-9500-b960cb1198f9':'Conflicting source amounts: structured annual USD 155000–215000; body USD 155250–215050. Do not silently prefer a version.',
 'one-x:ashby:e83e6f5b-0c56-4b50-ad2a-5d51a5f3219a':'Conflicting source amounts: structured annual USD 148000–181000; body USD 141000–181000.',
 'one-x:ashby:f6a1ed96-2328-44da-acf7-db4ea8d1476e':'Despite manufacturing title, body primarily owns battery architecture, cell characterization, validation and product-system design.',
 'one-x:ashby:3e482524-9e68-47dd-a3e8-6b2fd53a8055':'Technician role with hourly pay; not annual engineer compensation.',
 'skydio:ashby:b622c8f9-451f-466a-864e-d78489b61200':'Primary quality-engineering/NPI quality role; kept distinct from ownership of manufacturing processes.',
 'zoox:lever:6320b978-abf4-483b-a09f-bfba0c44c485':'Primary manufacturing test-infrastructure engineering role; distinct from manufacturing-process ownership.',
 'zoox:lever:99113e00-d810-47e5-bb31-997eb6d9afaa':'Primary manufacturing test engineering role; distinct from manufacturing-process ownership.',
 'zoox:lever:e0d46302-6fa2-45a7-927d-cd11ccf1843e':'Primary manufacturing test engineering role; distinct from manufacturing-process ownership.',
}
text_ranges={
 'cobot:ashby:c54fa946-dd6b-4f0a-8957-4370b7d62e25':(205000,240000,'annual base salary'),
 'figure:greenhouse:4375064006':(115000,250000,'per year'),
 'skydio:ashby:ab193d47-71aa-4110-af25-b7f6335d16aa':(145000,219000,'annual base salary'),
 'skydio:ashby:ffbc31a1-c7dc-4083-9fc2-08dca7b79619':(145000,219000,'annual base salary'),
}
observations=[];excluded=[]
for r in cohort:
 reason=exclusions.get(r['id'])
 if r['countries']!=['United States']:reason=reason or 'Not verified as an exclusively U.S. advertisement.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 structured=[p for p in r['compensation'] if p['currency']=='USD' and p['period']=='year' and p['minimum']>0 and p['maximum']>=p['minimum']]
 if len(structured)==1:
  p=structured[0];pay={**{k:p[k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured'}
 elif r['id'] in text_ranges:
  low,high,needle=text_ranges[r['id']];clause=next(c for c in r['compensationClauses'] if needle in c.lower());assert f'{low:,}' in clause and f'{high:,}' in clause;start=r['sourceText'].index(clause)
  pay={'minimum':low,'maximum':high,'currency':'USD','period':'year','basis':'base salary','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)}}
 else:excluded.append({**provenance(r),'reason':'No complete explicitly annual USD salary range verified. A salary amount or annual bonus does not establish the salary frequency.'});continue
 assert r['id'] in selected,'Full duties must be reviewed before salary admission'
 observations.append({**provenance(r),**pay,'midpoint':(pay['minimum']+pay['maximum'])/2,'seniority':r['seniority'],'scope':selected[r['id']][0]})
exact=median(o['midpoint'] for o in observations)
estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/manufacturing-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-10','roleId':role_id,'sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary, excluding bonus and equity','postingCount':len(observations),'employerCount':len({o['employerId'] for o in observations}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'Median of one annual salary-range midpoint per distinct eligible requisition.','eligibility':'Reviewed U.S. engineering roles owning robot/autonomy manufacturing processes, tooling, production systems or electronics manufacturing, with complete verified annual USD ranges.','limitations':'Small purposive experienced-role sample, including senior/staff technical positions; concentrated in California, with two Skydio requisitions. Not an entry-level rate or representative market median. Structured fields do not consistently identify base pay. No seniority premium inferred.','observations':observations,'excludedObservations':excluded})
examples=[]
for rid,location in [('standard-bots:ashby:7ea413c0-82ad-48c2-a706-2fa8d6dba91a','Glen Cove, NY'),('one-x:ashby:e350ff0d-dd7f-4299-8415-dc8e6da051ac','Hayward, CA'),('skydio:ashby:ab193d47-71aa-4110-af25-b7f6335d16aa','Hayward, CA')]:
 o=next(o for o in observations if o['id']==rid);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':rid,'location':location})
write('public/research/manufacturing-engineer-evidence-2026-11-10.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-10','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; original dated research unchanged.','roles':{role_id:{'recordIds':list(selected),'auditPath':'research/career-guides/manufacturing-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Broad original cohort includes adjacent quality, test, technician and product-design roles. Do not treat counts as clean current vacancies or skill prevalence.'}},'records':reviewed})
technical=['https://asq.org/quality-resources/quality-glossary','https://www.itl.nist.gov/div898/handbook/pmc/section1/pmc16.htm','https://www.sme.org/training/robotics-in-manufacturing-fundamentals-rmf-certification/']
write('research/career-guides/manufacturing-engineer/evidence-audit.json',{'reviewedAt':'2026-11-10','snapshotId':aggregate['snapshotId'],'scope':'Manufacturing-process development, NPI, DFM/DFA, assembly fixtures, yield, work instructions, controlled changes and supplier readiness for robots and autonomous hardware.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'additionalFullSourceBoundaryReviews':[{**provenance(by_id[rid]),'decision':exclusions[rid]} for rid in ['one-x:ashby:873f836f-a4b6-4ef8-9500-b960cb1198f9','one-x:ashby:e83e6f5b-0c56-4b50-ad2a-5d51a5f3219a','one-x:ashby:f6a1ed96-2328-44da-acf7-db4ea8d1476e']],'liveEmployerChecks':['https://job-boards.greenhouse.io/figureai/jobs/4375064006'],'technicalSources':technical,'editorialExample':'Illustrative single batch, no employer benchmark. 100 assemblies: 82 pass on first attempt, 15 additional assemblies pass after rework, 3 are scrapped. All 15 reworked assemblies meet the same acceptance criteria after rework. First-pass yield 82%; final accepted yield 97%. No extra units enter the batch and categories are mutually exclusive. Portfolio small-batch exercise demonstrates process documentation, not statistical process capability.'})
write('public/research/manufacturing-yield-example-2026-11-10.json',{'kind':'illustrative-batch','total':100,'firstPass':82,'reworkedPass':15,'scrapped':3,'firstPassYieldPercent':82,'finalYieldPercent':97,'assumptions':'One batch, identical acceptance criteria, no new units added, mutually exclusive final categories; no employer measurements. All reworked units counted here ultimately pass.'})
print(json.dumps({'selectedFullSources':len(reviewed),'originalCohort':len(cohort),'salaryObservations':len(observations),'salaryEmployers':len({o['employerId'] for o in observations}),'exactMedian':exact,'estimate':estimate}))
