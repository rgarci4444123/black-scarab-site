#!/usr/bin/env python3
"""Reproduce the Robot Operations guide's dated evidence and hourly-pay estimate."""
import argparse,hashlib,json
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
p=argparse.ArgumentParser();p.add_argument('--archive-root',type=Path,required=True);a=p.parse_args();root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_path.read_text());digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
records=[json.loads(l) for l in (a.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()];cohort=[r for r in records if r['screening']['primaryRoleId']=='robot-operations-specialist']
def write(path,value):
 f=root/path;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256'];assert hashlib.sha256((a.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
selected={
0:('Onsite palletizing operation, customer support, approved routine maintenance and incident reporting; temporary part-time.','Product support engineering experience'),
12:('Robot monitoring, prechecks, intervention within procedures, incident records and coordination; Bellevue pay band.','Associate or Bachelor'),
14:('Teleoperation and demonstration collection, annotation and performance reporting.','Associates or Bachelor'),
15:('Robot monitoring and approved recovery; distinct New York hourly band, not a seniority tier.','Associate or Bachelor'),
20:('Humanoid operation, bring-up/shutdown, procedures, troubleshooting and Jira reports; contract-to-hire morning shift.','Excellent communication skills'),
24:('Commercial-site humanoid operation and feedback; contract-to-hire Reno posting.','Excellent communication skills'),
30:('Autonomous vehicle test operation, checks, data collection and mission coordination; temporary Los Angeles PM shift.','Stay calm, solve problems'),
33:('Autonomous vehicle operation, checks and clear reports; temporary San Francisco AM/PM base rate separated from differentials.','Stay calm, solve problems'),
37:('Onsite robotic-arm teleoperation, consistent task demonstrations, annotation and quality/quantity targets.','Experience with hands-on technical work'),
38:('Robot test operation through touchscreens, defined scenarios, limited routine maintenance and feedback to V&V.','Relevant experience in similar'),
39:('Part-time delivery-robot field operations, deployment/recovery, escalation, charging and end-of-shift accounting.','1 year of experience'),
55:('Teleoperation and data collection, following instructions and baseline technical literacy; salary period not established.','Baseline technical literacy'),
}
reviewed=[]
for i,(scope,needle) in selected.items():
 r=cohort[i];line=next(l for l in r['sourceText'].splitlines() if needle in l);start=r['sourceText'].index(line)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-10','reviewMethod':'Contextual full stored-source review; original research and classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':line,'qualificationSpans':[{'text':line,'start':start,'end':start+len(line)}]})
text_ranges={20:(30,30,'per hour'),24:(26,30,'per hour'),30:(26,26,'PM shift pay: $26 per hour'),33:(27,27,'AM and PM shift pay: $27.00 per hour'),37:(25,25,'$25/hour')}
obs=[]
for i in [0,12,14,15,20,24,30,33,37,38,39]:
 r=cohort[i];pay=[v for v in r['compensation'] if v['currency']=='USD' and v['period']=='hour'];assert r['countries']==['United States']
 if len(pay)==1:salary={**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured'}
 else:
  low,high,needle=text_ranges[i];clause=next(l for l in r['sourceText'].splitlines() if needle in l and ('$' in l));start=r['sourceText'].index(clause)
  assert str(low) in clause and str(high) in clause
  salary={'minimum':low,'maximum':high,'currency':'USD','period':'hour','basis':'advertised hourly pay excluding shift/weekend differentials','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)}}
 obs.append({**provenance(r),**salary,'midpoint':(salary['minimum']+salary['maximum'])/2,'annualizedMidpoint':(salary['minimum']+salary['maximum'])/2*2080,'scope':selected[i][0]})
duplicates={**{i:12 for i in [13,16,17,18,19]},21:20,22:20,25:24,31:33,32:30,34:30,35:33,**{i:39 for i in range(41,52)}}
boundaries={23:'Vehicle transport and delivery logistics; not primary hands-on robot operation.',26:'Commercial deployment strategy and program ownership, not robot shift operation.',31:'Overnight variant of San Francisco operator; higher rate includes shift premium. Base AM/PM rate comes from the separate source 8104145.',36:'Service-heavy cell support, repairs and component replacement; adjacent to field service.',55:'Amounts are shown without a verified pay period. No hourly or annual inference.',63:'Specialist flight-test operator with piloting/certification and repair scope; excluded from the ground-robot/vehicle-operator estimate.'}
excluded=[]
for i,r in enumerate(cohort):
 if any(o['id']==r['id'] for o in obs):continue
 reason=boundaries.get(i)
 if i in duplicates:reason=reason or 'Same employer/function/pay band as selected representative, or premium-only shift variant.'
 reason=reason or 'Outside the selected hands-on ground-robot/vehicle operator sample or no contextually verified hourly pay. Includes flight specialists, leads, management, business operations, dedicated hardware technicians and adjacent repair roles.'
 row={**provenance(r),'reason':reason}
 if i in duplicates:row['representativeRecordId']=cohort[duplicates[i]]['id']
 excluded.append(row)
exact=median(o['midpoint'] for o in obs);annual=exact*2080;estimate=int((Decimal(str(annual))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/robot-operations-specialist-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-10','roleId':'robot-operations-specialist','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation, full-time equivalent','currency':'USD','period':'year','sourcePeriod':'hour','annualHours':2080,'basis':'Annualized advertised hourly pay, excluding differentials, overtime, bonus and equity','postingCount':len(obs),'employerCount':len({o['employerId'] for o in obs}),'exactMedianHourlyMidpoint':exact,'exactAnnualizedMedian':annual,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'Median hourly range midpoint across reviewed employer/function/pay bands, multiplied by 40 hours × 52 weeks. Flat hourly rates contribute their stated amount.','eligibility':'Hands-on ground-robot operation, teleoperation/data collection, test operations and autonomous-vehicle operation; one representative per employer/function/pay band. Distinct geography pay bands retained.','limitations':'Purposive U.S. sample, not a representative market median or entry-level guarantee. Includes part-time, temporary and contract-to-hire advertisements. Annualization normalizes hourly pay and does not establish actual hours, annual earnings, benefits or permanent employment. Multiple Dyna, Figure and Nuro bands remain.','observations':obs,'excludedObservations':excluded})
examples=[]
for i in [24,37,38,39]:
 r=cohort[i];o=next(o for o in obs if o['id']==r['id']);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':r['id'],'location':', '.join(r['locations'])})
write('public/research/robot-operations-specialist-evidence-2026-11-10.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-10','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; immutable source classifications preserved.','roles':{'robot-operations-specialist':{'recordIds':[r['id'] for r in reviewed],'auditPath':'research/career-guides/robot-operations-specialist/evidence-audit.json','compensation':[],'hourlyCompensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Original cohort mixes hands-on operations, flights, business operations, leads and technicians. No current vacancy or skill-frequency claim.'}},'records':reviewed})
write('research/career-guides/robot-operations-specialist/evidence-audit.json',{'reviewedAt':'2026-11-10','snapshotId':aggregate['snapshotId'],'scope':'Hands-on operation, monitoring, teleoperation, data collection, checks, approved intervention, logs and shift handoffs.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'additionalBoundaryFullSourceReviews':[{**provenance(cohort[i]),'decision':reason} for i,reason in boundaries.items() if i!=55],'liveEmployerCheck':{'checkedAt':'2026-11-10','urls':[cohort[37]['url'],cohort[38]['url'],cohort[55]['url']],'result':'Pickle official posting confirms operator duties and 30 USD/hour. Skild confirms duties but no pay period. Physical Intelligence page requires JavaScript; dated archive retained. No current vacancy count.'},'editorialVisual':'Invented matched 100-mission runs, equal completed totals but different assisted-completion counts. Does not model total interventions, intervention duration, unfinished-mission assistance or staffing ratios.'})
write('public/research/robot-operations-mission-outcomes-2026-11-10.json',{'kind':'illustrative-mission-outcomes','totalPerRun':100,'runs':[{'label':'Fleet A','independent':85,'assisted':5,'notCompleted':10},{'label':'Fleet B','independent':60,'assisted':30,'notCompleted':10}],'assumptions':'Invented comparison, not employer data. Each mission belongs to exactly one outcome. Assisted means a completed mission that needed human help, not intervention count. No duration, staffing, task difficulty or assistance on unfinished missions is modeled. Completion alone cannot establish autonomy, productivity or support workload.'})
print(json.dumps({'reviewed':len(reviewed),'hourlyN':len(obs),'employers':len({o['employerId'] for o in obs}),'hourlyMedian':exact,'annualized':annual,'estimate':estimate}))
