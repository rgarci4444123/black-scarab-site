#!/usr/bin/env python3
"""Reproduce the controls guide's reviewed evidence and salary subset."""
import argparse
import hashlib
import json
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path
from statistics import median

parser = argparse.ArgumentParser()
parser.add_argument('--archive-root', type=Path, required=True)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
aggregate_path = root / 'public/research/physical-ai-careers-2026-11-02.json'
aggregate = json.loads(aggregate_path.read_text())
digest = hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
records = [json.loads(line) for line in (args.archive_root / 'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()]
by_id = {r['id']: r for r in records}
cohort = [r for r in records if r['screening']['primaryRoleId'] == 'robotics-controls-engineer']

def write(path, value):
    p = root / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(value, indent=2, ensure_ascii=False) + '\n')

def provenance(r):
    assert hashlib.sha256(r['sourceText'].encode()).hexdigest() == r['sourceTextSha256']
    assert hashlib.sha256((args.archive_root / r['rawSourceFile']).read_bytes()).hexdigest() == r['rawSourceFileSha256']
    return {k: r[k] for k in ['id', 'employerId', 'employer', 'title', 'locations', 'countries', 'url', 'verifiedAt', 'sourceTextSha256', 'rawSourceFile', 'rawSourceFileSha256']}

selected = {
    'apptronik:greenhouse:6188799004': ('Actuator modeling, system identification, closed-loop torque/current control, experimental validation and simulation integration.', 'BS in Robotics, ME, EE, CS,'),
    'apptronik:greenhouse:6135714004': ('Whole-body and mobile manipulation control; model-based and learned approaches, real-time implementation and hardware deployment.', 'MS or PhD in Robotics'),
    'one-x:ashby:7e9120d6-87d0-458b-b0ec-3b6ea5ea9dc7': ('Motor models, cascaded control, impedance, limits and hardware measurements.', 'Bachelor’s degree in Electrical Engineering'),
    'one-x:ashby:a02d07dc-851d-4246-bc1d-1f50412015c0': ('Control foundations: state estimation, robot models, identification, sensor conditioning and fault responses.', 'Proven track record of shipping state estimation'),
    'standard-bots:ashby:7a6d5b7f-9210-41c7-b7b5-c32bd7d95bc9': ('Servo performance, tracking, impedance, loop benchmarking, stability margins and disturbance rejection.', 'Experience:5+ years'),
    'path-robotics:greenhouse:8633173002': ('Sensor-guided manipulation, estimation, feedback/predictive control and real-time C++.', 'Deep, first-principles real-time control'),
    'physical-intelligence:ashby:c8f9e9aa-8801-4916-9b1f-2c0bd5f072f9': ('Model-based and feedback control, robot bring-up, simulation and real hardware.', 'Proficiency in Python and C++'),
    'kodiak:greenhouse:4312761009': ('Autonomous vehicle control, production C++, dynamics, modeling and hardware validation.', 'A strong background in robotics'),
    'figure:greenhouse:4671442006': ('Learned whole-body control, policy evaluation, simulation-to-hardware gaps and robustness. Boundary case with robot learning; included because direct controller development is central.', 'Strong background in dynamics and control'),
    'one-x:ashby:ea9614dd-94e8-4a3a-a714-645957a298d0': ('Motor-control firmware with direct control-loop development, tuning and validation. Boundary case with embedded software; included because controller ownership is explicit.', '5+ years of embedded firmware development'),
}
reviewed = []
for record_id, (scope, needle) in selected.items():
    r = by_id[record_id]
    line = next(line for line in r['sourceText'].splitlines() if needle in line)
    start = r['sourceText'].index(line)
    reviewed.append({**provenance(r), 'reviewedAt': '2026-11-09', 'reviewMethod': 'Full stored-source contextual review; original classification unchanged.', 'originalReviewStatus': r['reviewStatus'], 'scope': scope, 'qualification': line, 'qualificationSpans': [{'text': line, 'start': start, 'end': start + len(line)}]})

# Eligibility is based on duties, so two genuine controller roles outside the
# primary classifier cohort are included without changing the original taxonomy.
salary_ids = [
    'one-x:ashby:7e9120d6-87d0-458b-b0ec-3b6ea5ea9dc7',
    'one-x:ashby:a02d07dc-851d-4246-bc1d-1f50412015c0',
    'standard-bots:ashby:7a6d5b7f-9210-41c7-b7b5-c32bd7d95bc9',
    'figure:greenhouse:4671442006',
    'one-x:ashby:ea9614dd-94e8-4a3a-a714-645957a298d0',
]
observations = []
for record_id in salary_ids:
    r = by_id[record_id]
    assert r['countries'] == ['United States']
    if record_id == 'figure:greenhouse:4671442006':
        clause = next(c for c in r['compensationClauses'] if 'per year' in c)
        assert '$150,000' in clause and '$350,000' in clause
        start = r['sourceText'].index(clause)
        pay = {'minimum': 150000, 'maximum': 350000, 'currency': 'USD', 'period': 'year', 'basis': 'annual base salary', 'extraction': 'full-source-text', 'sourceClause': clause, 'sourceSpan': {'start': start, 'end': start + len(clause)}}
    else:
        p = next(p for p in r['compensation'] if p['currency'] == 'USD' and p['period'] == 'year' and p['minimum'] > 0 and p['maximum'] >= p['minimum'])
        pay = {**{k: p[k] for k in ['minimum', 'maximum', 'currency', 'period', 'basis']}, 'extraction': 'official-ats-structured'}
    observations.append({**provenance(r), **pay, 'midpoint': (pay['minimum'] + pay['maximum']) / 2, 'seniority': r['seniority'], 'originalPrimaryRoleId': r['screening']['primaryRoleId'], 'scope': selected[record_id][0]})

excluded_scope = {
    'applied-intuition:ashby:f55422c0-c807-4f35-935e-4ce089d926d7': 'Control Center application/interface role, not physical feedback control.',
    'generalist:ashby:ebace75d-6896-45f5-a12c-3c0699c9d7a6': 'Stored description contains company overview only; responsibilities cannot be verified beyond the title.',
    'formic:greenhouse:4670196006': 'Primarily cell controls and automation; separate industrial automation guide.',
    'skydio:ashby:b36773da-5e82-4d16-b926-186ba78fafa3': 'Manufacturing automation and equipment controls, outside robot motion-control scope.',
    'zoox:lever:6e2c1641-a814-43ad-a807-34f585a35fd9': 'Systems safety/requirements and assurance rather than controller development.',
    'shield-ai:lever:84ea353d-bd9b-4d1a-8e9c-3b4f31135a2f': 'Actuation hardware sizing, qualification and supplier ownership rather than algorithm development.',
    'shield-ai:lever:ac52c9b2-f18d-49e5-bb0b-9e82e7b03ac9': 'Actuation hardware sizing, qualification and supplier ownership rather than algorithm development.',
    'shield-ai:lever:71278ad9-359f-48dd-bad4-fc63ab6b9f1d': 'Primarily ship-relative recovery guidance and sequencing; adjacent to motion planning rather than this controller-design subset.',
    'gram:greenhouse:4396994009': 'Open upper bound ($250,000+) cannot provide a finite range midpoint.',
}
excluded = []
for r in cohort:
    if r['id'] in salary_ids:
        continue
    reason = excluded_scope.get(r['id'])
    if not reason and r['countries'] != ['United States']:
        reason = 'Not an exclusively U.S. advertisement.'
    reason = reason or 'No complete annual USD range verified in structured data or an explicit annual salary clause. Salary/bonus wording alone does not establish the annual period.'
    excluded.append({**provenance(r), 'reason': reason})
exact = median(o['midpoint'] for o in observations)
estimate = int((Decimal(str(exact)) / 1000).quantize(Decimal('1'), rounding=ROUND_HALF_UP) * 1000)
write('public/research/robotics-controls-engineer-compensation-2026-11-02.json', {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'derivedAt': '2026-11-09', 'roleId': 'robotics-controls-engineer', 'sourceAggregate': '/research/physical-ai-careers-2026-11-02.json', 'sourceAggregateSha256': digest,
    'label': 'Black Scarab estimated compensation', 'currency': 'USD', 'period': 'year', 'basis': 'advertised annual salary, excluding bonus and equity', 'postingCount': len(observations), 'employerCount': len({o['employerId'] for o in observations}), 'exactMedianMidpoint': exact, 'estimate': estimate,
    'rounding': 'nearest 1000 USD, halves rounded upward', 'method': 'Median of one annual range midpoint per distinct eligible requisition.',
    'eligibility': 'U.S. controller development, motor control, whole-body control or their estimation/modeling foundations. Duties reviewed across the full archive; original primary classifications remain unchanged.',
    'limitations': 'Small purposive sample of experienced roles; three of five observations are from 1X. Includes a learned whole-body controller and a motor-control firmware role with direct loop ownership. Not an entry-level estimate or representative market median. Structured salaries do not consistently identify base pay.',
    'observations': observations, 'excludedObservations': excluded,
})
examples = []
for record_id, location in [(salary_ids[2], 'Glen Cove, NY'), (salary_ids[0], 'San Carlos, CA'), (salary_ids[3], 'San Jose, CA')]:
    o = next(o for o in observations if o['id'] == record_id)
    examples.append({**{k: o[k] for k in ['employer', 'title', 'url', 'minimum', 'maximum', 'currency', 'period', 'basis']}, 'recordId': record_id, 'location': location})
write('public/research/robotics-controls-engineer-evidence-2026-11-09.json', {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'reviewedAt': '2026-11-09', 'aggregatePath': '/research/physical-ai-careers-2026-11-02.json', 'aggregateSha256': digest,
    'rawArchive': {'relativeRoot': 'research/physical-ai/2026-11-02', 'normalizedRecords': 'postings.jsonl', 'manifestHash': aggregate['manifestHash']},
    'interpretation': 'Contextual guide review layer; original dated research remains unchanged.',
    'roles': {'robotics-controls-engineer': {'recordIds': list(selected), 'auditPath': 'research/career-guides/robotics-controls-engineer/evidence-audit.json', 'compensation': examples, 'skillPresentation': 'qualitative-source-comparison', 'scopeNote': 'The primary cohort includes automation, control-center interfaces, guidance and safety assurance. Do not present raw counts as clean controller-development openings or skill prevalence.'}}, 'records': reviewed,
})
write('research/career-guides/robotics-controls-engineer/evidence-audit.json', {
    'reviewedAt': '2026-11-09', 'snapshotId': aggregate['snapshotId'], 'scope': 'Feedback and model-based physical control, actuator characterization, whole-body coordination, state estimation and hardware validation. Distinguish from planning, generic firmware, PLC integration and safety assurance.',
    'cohort': {'postings': len(cohort), 'employers': len({r['employerId'] for r in cohort})}, 'reviewedRecords': reviewed, 'salaryExclusions': excluded,
    'liveEmployerChecks': ['https://job-boards.greenhouse.io/apptronik/jobs/6188799004'],
    'technicalSources': ['https://underactuated.mit.edu/intro.html', 'https://python-control.readthedocs.io/en/latest/intro.html', 'https://python-control.readthedocs.io/en/latest/generated/control.step_response.html', 'https://python-control.readthedocs.io/en/latest/generated/control.step_info.html'],
    'editorialExamples': 'The response chart uses exact analytical unit-step solutions of two ideal second-order closed-loop systems, not robot measurements. Damping ratios 0.3 and 0.8, common natural frequency 6 rad/s, target 1, zero initial state. It illustrates overshoot and settling, not a gain recommendation. The project extends testing to changed inertia, friction, limits and delay.',
})
print(json.dumps({'salaryPostings': len(observations), 'salaryEmployers': len({o['employerId'] for o in observations}), 'exactMedian': exact, 'estimate': estimate, 'selectedFullSources': len(reviewed)}))
