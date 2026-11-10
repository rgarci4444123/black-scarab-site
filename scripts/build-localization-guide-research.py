#!/usr/bin/env python3
"""Reproduce Localization & Mapping guide evidence from the immutable archive."""
import argparse,hashlib,json,re
from pathlib import Path
from statistics import median
from decimal import Decimal,ROUND_HALF_UP
p=argparse.ArgumentParser();p.add_argument('--archive-root',type=Path,required=True);a=p.parse_args();root=Path(__file__).resolve().parents[1]
aggregate_path=root/'public/research/physical-ai-careers-2026-11-02.json';aggregate=json.loads(aggregate_path.read_text());digest=hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
cohort=[r for r in map(json.loads,(a.archive_root/'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()) if r['screening']['primaryRoleId']=='localization-mapping-engineer']
def write(path,value):
 f=root/path;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(json.dumps(value,indent=2,ensure_ascii=False)+'\n')
def provenance(r):
 assert hashlib.sha256(r['sourceText'].encode()).hexdigest()==r['sourceTextSha256'];assert hashlib.sha256((a.archive_root/r['rawSourceFile']).read_bytes()).hexdigest()==r['rawSourceFileSha256']
 return {k:r[k] for k in ['id','employerId','employer','title','locations','countries','url','verifiedAt','sourceTextSha256','rawSourceFile','rawSourceFileSha256']}
selected={
1:('Onboard live-map estimation, prior-map/perception fusion, change detection, uncertainty, C++ and real-time evaluation.','Bachelor\'s degree'),
3:('Construction-machine pose, motion and configuration estimation; GNSS/IMU/lidar fusion, timing, calibration and field validation.','A degree in Robotics'),
4:('Humanoid SLAM and state estimation, offline reconstruction, geometric/spatial research and production C++/Python.','PhD in Robotics'),
5:('LiDAR mapping, point-cloud processing, registration, production delivery and robot field evaluation.','Master’s degree'),
6:('Quadruped/humanoid calibration, localization and mapping, sensor fusion, ROS, timing and benchmarking.','Master’s or Ph.D.'),
8:('Humanoid online localization and ego-motion, offline pose tracking, multi-sensor calibration and evaluation.','Strong command of 3D'),
17:('Aircraft sensor-processing and state-estimation individual contributor: real-time multi-sensor fusion and field tests.','Typically requires a minimum'),
18:('Aircraft navigation and state-estimation individual contributor: GNSS-degraded sensor fusion, processing and field trials.','Typically requires a minimum'),
21:('Production estimation/navigation C++, visual-inertial navigation, graph optimization, calibration and validation.','M.S. in Aerospace'),
22:('Home-robot indoor SLAM, lidar/camera/IMU/odometry fusion, calibration, coordinate frames and synchronization.','Experience with vision-only'),
}
reviewed=[]
for i,(scope,needle) in selected.items():
 r=cohort[i];line=next(l for l in r['sourceText'].splitlines() if needle in l);start=r['sourceText'].index(line)
 reviewed.append({**provenance(r),'reviewedAt':'2026-11-10','reviewMethod':'Contextual full stored-source review; original classifications unchanged.','originalReviewStatus':r['reviewStatus'],'scope':scope,'qualification':line,'qualificationSpans':[{'text':line,'start':start,'end':start+len(line)}]})
obs=[];excluded=[]
boundary={9:'Wearable human full-body pose tracking and tactile data collection rather than robot navigation or environmental mapping.',19:'Primary learned-vision model/data/training role; contributes localization measurements but not primary estimator or mapping ownership.',20:'Senior-principal GNC, autopilot, technical roadmap and team-building scope spans flight controls beyond this estimator/mapping sample.'}
for i,r in enumerate(cohort):
 reason=boundary.get(i)
 if i not in selected:reason=reason or 'Outside selected contextual estimator/mapping review; no salary admitted.'
 if r['countries']!=['United States']:reason='Not an exclusively U.S. advertisement.'
 if reason:excluded.append({**provenance(r),'reason':reason});continue
 pay=[v for v in r['compensation'] if v['currency']=='USD' and v['period']=='year' and v['minimum']>0 and v['maximum']>=v['minimum']]
 if len(pay)==1:salary={**{k:pay[0][k] for k in ['minimum','maximum','currency','period','basis']},'extraction':'official-ats-structured'}
 elif i in [4,8]:
  clause=next(l for l in r['sourceText'].splitlines() if ('$177,000' in l or '$200,000' in l) and ('annually' in l or 'per year' in l));values=[float(v.replace(',','')) for v in re.findall(r'\$([\d,]+(?:\.\d+)?)',clause)];start=r['sourceText'].index(clause)
  salary={'minimum':values[0],'maximum':values[1],'currency':'USD','period':'year','basis':'advertised annual base salary','extraction':'full-source-text','sourceClause':clause,'sourceSpan':{'start':start,'end':start+len(clause)}}
 else:excluded.append({**provenance(r),'reason':'No complete explicitly annual USD range verified; frequency not inferred from salary magnitude or benefit wording.'});continue
 obs.append({**provenance(r),**salary,'midpoint':(salary['minimum']+salary['maximum'])/2,'seniority':r['seniority'],'scope':selected[i][0]})
exact=median(o['midpoint'] for o in obs);estimate=int((Decimal(str(exact))/1000).quantize(Decimal('1'),rounding=ROUND_HALF_UP)*1000)
write('public/research/localization-mapping-engineer-compensation-2026-11-02.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','derivedAt':'2026-11-10','roleId':'localization-mapping-engineer','sourceAggregate':'/research/physical-ai-careers-2026-11-02.json','sourceAggregateSha256':digest,'label':'Black Scarab estimated compensation','currency':'USD','period':'year','basis':'advertised annual salary excluding bonus and equity','postingCount':len(obs),'employerCount':len({o['employerId'] for o in obs}),'exactMedianMidpoint':exact,'estimate':estimate,'rounding':'nearest 1000 USD, halves rounded upward','method':'Median of one explicitly annual USD salary-range midpoint per distinct requisition.','eligibility':'Individual-contributor robot or autonomous-system localization, state estimation, calibration and environmental mapping. Senior/staff technical roles included.','limitations':'Selected U.S. experienced-engineering sample; three of eight observations are at Shield AI and include aircraft navigation. Broad employer ranges and mixed seniority do not define an entry-level offer or representative market median. Structured fields do not consistently establish base-pay status.','observations':obs,'excludedObservations':excluded})
examples=[]
for i in [4,8,22]:
 r=cohort[i];o=next(o for o in obs if o['id']==r['id']);examples.append({**{k:o[k] for k in ['employer','title','url','minimum','maximum','currency','period','basis']},'recordId':r['id'],'location':r['locations'][0].replace(' Office (POST)','').replace(', United States','')})
write('public/research/localization-mapping-engineer-evidence-2026-11-10.json',{'schemaVersion':1,'snapshotId':aggregate['snapshotId'],'collectedAt':'2026-11-02','reviewedAt':'2026-11-10','aggregatePath':'/research/physical-ai-careers-2026-11-02.json','aggregateSha256':digest,'rawArchive':{'relativeRoot':'research/physical-ai/2026-11-02','normalizedRecords':'postings.jsonl','manifestHash':aggregate['manifestHash']},'interpretation':'Contextual guide review; immutable source archive and original classifications preserved.','roles':{'localization-mapping-engineer':{'recordIds':[r['id'] for r in reviewed],'auditPath':'research/career-guides/localization-mapping-engineer/evidence-audit.json','compensation':examples,'skillPresentation':'qualitative-source-comparison','scopeNote':'Online pose/state estimation, mapping and calibration for robots and autonomous systems. No current-vacancy or skill-frequency claims.'}},'records':reviewed})
write('research/career-guides/localization-mapping-engineer/evidence-audit.json',{'reviewedAt':'2026-11-10','snapshotId':aggregate['snapshotId'],'scope':'Robot pose/state estimation, calibration, sensor fusion and environmental mapping; includes aircraft navigation but excludes principal GNC/team-building, primary learned-vision model training and human wearable motion capture.','cohort':{'postings':len(cohort),'employers':len({r['employerId'] for r in cohort})},'reviewedRecords':reviewed,'salaryExclusions':excluded,'additionalBoundaryFullSourceReviews':[{**provenance(cohort[i]),'decision':reason} for i,reason in boundary.items()],'displayNormalization':'First source location, repeated country and ATS Office (POST) label removed. Original arrays preserved.','technicalSources':['https://github.com/ros-infrastructure/rep/blob/master/rep-0105.rst','https://github.com/SteveMacenski/slam_toolbox','https://borglab.github.io/gtsam/slam/','https://docs.nav2.org/rolling/configuration_and_development/first_time_robot_setup_guide/sensors/mapping_localization/'],'editorialVisual':'Illustrative 2D pose-graph least-squares example. Start anchored; four equal-variance relative displacement measurements plus one explicit loop-closure observation. Fixed correspondences, translation only; no 3D rotations, data-association algorithm or accuracy claim.'})
# Solve the equal-weight translation-only chain plus closure analytically.
# Endpoint residual is distributed across four odometry factors and one closure factor.
measurements=[[6,0.2],[0.2,6],[-5.6,0.3],[0.6,-5.3]];before=[[0,0]]
for d in measurements:before.append([before[-1][j]+d[j] for j in range(2)])
residual=before[-1];correction=[-v/5 for v in residual];after=[[0,0]]
for d in measurements:after.append([round(after[-1][j]+d[j]+correction[j],8) for j in range(2)])
write('public/research/localization-loop-closure-example-2026-11-10.json',{'kind':'illustrative-translation-pose-graph','unit':'m','anchor':[0,0],'displacements':measurements,'closureMeasurement':[0,0],'factorWeights':{'odometry':1,'closure':1},'before':before,'after':after,'correctionPerEdge':correction,'assumptions':'Invented 2D positions with known correspondences and fixed orientation. Start anchored at zero; each x/y displacement and zero-displacement end-to-start closure have identical independent unit weights. Minimizes sum of squared displacement residuals plus squared endpoint residual. No real dataset, pose rotations, solver benchmark or robot accuracy claim. A finite-weight closure reduces but does not force endpoint error to zero.'})
print(json.dumps({'reviewed':len(reviewed),'salaryN':len(obs),'employers':len({o['employerId'] for o in obs}),'median':exact,'estimate':estimate,'before':before,'after':after}))
