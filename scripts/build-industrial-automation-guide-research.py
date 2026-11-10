#!/usr/bin/env python3
"""Reproduce the Industrial Automation guide's reviewed evidence and salary estimate."""
import argparse
import hashlib
import json
import re
from pathlib import Path
from statistics import median
from decimal import Decimal, ROUND_HALF_UP

parser = argparse.ArgumentParser()
parser.add_argument('--archive-root', type=Path, required=True)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
aggregate_path = root / 'public/research/physical-ai-careers-2026-11-02.json'
aggregate = json.loads(aggregate_path.read_text())
digest = hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
records = [json.loads(line) for line in (args.archive_root / 'research/physical-ai/2026-11-02/postings.jsonl').read_text().splitlines()]
by_id = {r['id']: r for r in records}
role_id = 'industrial-automation-engineer'
cohort = [r for r in records if r['screening']['primaryRoleId'] == role_id]

def write(path, value):
    p = root / path
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(value, indent=2, ensure_ascii=False) + '\n')

def provenance(r):
    assert hashlib.sha256(r['sourceText'].encode()).hexdigest() == r['sourceTextSha256']
    assert hashlib.sha256((args.archive_root / r['rawSourceFile']).read_bytes()).hexdigest() == r['rawSourceFileSha256']
    return {k: r[k] for k in ['id', 'employerId', 'employer', 'title', 'locations', 'countries', 'url', 'verifiedAt', 'sourceTextSha256', 'rawSourceFile', 'rawSourceFileSha256']}

selected = {
    'agile-robots:greenhouse:4964865101': ('PLC development, HMI integration, commissioning and field diagnosis. German source reviewed in context.', 'Technischer Hintergrund:'),
    'anduril:greenhouse:5234512007': ('Sustaining manufacturing automation: PLC debugging, operator interfaces, networks and root-cause improvement.', "Bachelor's degree"),
    'anduril:greenhouse:5234563007': ('Production equipment controls: Siemens ladder/Structured Text, commissioning, drives, SCADA and maintainable code.', "Bachelor's degree"),
    'intrinsic:greenhouse:6223613004': ('End-to-end robotic workcells, component selection, electrical design, robot/PLC/HMI programming and acceptance.', 'Degree in Controls'),
    'nomagic:lever:13cdf1ca-7e42-44b2-92dd-0f13598eeeaf': ('Robotized production-line integration, PLC code, schematics, commissioning and cross-discipline collaboration.', 'Engineering degree'),
    'osaro:lever:c2137e2f-3e01-4eb4-b635-0c97fddc8c57': ('PLC and HMI programming for AI robotic material-handling cells; integration and commissioning.', '3+'),
    'saronic:ashby:9c3baa1f-ae9f-44b0-a74a-31440fa556a2': ('Manufacturing automation equipment projects, vendor specifications, acceptance tests and production handoff.', 'Bachelor'),
    'saronic:ashby:a62ce18c-8048-4a80-b368-96f7e4585a9c': ('Industrial PLC/DCS/SCADA, I/O documentation, cause/effect matrices and commissioning; broad process-control scope.', 'Bachelor'),
    'skydio:ashby:b36773da-5e82-4d16-b926-186ba78fafa3': ('Drone manufacturing equipment: PLCs, HMI/SCADA, robotic assembly, production troubleshooting and data collection. Original primary classifier assigned robot controls; contextual review assigns factory automation for this guide.', 'Bachelor'),
    'formic:greenhouse:4670196006': ('Experienced fleet-level controls/automation problem solving, PLC/robot programming, reliability and documentation.', "Bachelor's degree"),
}
reviewed = []
for record_id, (scope, needle) in selected.items():
    r = by_id[record_id]
    line = next(line for line in r['sourceText'].splitlines() if needle in line)
    start = r['sourceText'].index(line)
    reviewed.append({**provenance(r), 'reviewedAt': '2026-11-09', 'reviewMethod': 'Full stored-source contextual review; original archive and classifications unchanged.', 'originalReviewStatus': r['reviewStatus'], 'scope': scope, 'qualification': line, 'qualificationSpans': [{'text': line, 'start': start, 'end': start + len(line)}]})

# Review the entire original primary cohort plus explicit adjacent factory-controls roles.
# Do not admit electrical test, robot dynamics or general deployment merely for mentioning PLCs.
candidates = {r['id']: r for r in cohort}
for record_id in selected:
    candidates[record_id] = by_id[record_id]
observations, excluded = [], []
for r in candidates.values():
    if r['countries'] != ['United States']:
        excluded.append({**provenance(r), 'reason': 'Not an exclusively U.S. advertisement.'})
        continue
    structured = [p for p in r['compensation'] if p['currency'] == 'USD' and p['period'] == 'year' and p['minimum'] > 0 and p['maximum'] >= p['minimum']]
    if len(structured) == 1:
        p = structured[0]
        pay = {**{k: p[k] for k in ['minimum', 'maximum', 'currency', 'period', 'basis']}, 'extraction': 'official-ats-structured'}
    elif r['id'] == 'skydio:ashby:b36773da-5e82-4d16-b926-186ba78fafa3':
        clause = next(c for c in r['compensationClauses'] if 'annual base salary' in c.lower())
        assert '$145,000' in clause and '$219,000' in clause
        start = r['sourceText'].index(clause)
        pay = {'minimum': 145000, 'maximum': 219000, 'currency': 'USD', 'period': 'year', 'basis': 'base salary', 'extraction': 'full-source-text', 'sourceClause': clause, 'sourceSpan': {'start': start, 'end': start + len(clause)}}
    else:
        excluded.append({**provenance(r), 'reason': 'No complete annual USD range verified. Stored Greenhouse content and metadata checked where present; currency ranges or the word salary alone do not establish annual frequency.'})
        continue
    assert r['id'] in selected
    observations.append({**provenance(r), **pay, 'midpoint': (pay['minimum'] + pay['maximum']) / 2, 'seniority': r['seniority'], 'scope': selected[r['id']][0]})
exact = median(o['midpoint'] for o in observations)
estimate = int((Decimal(str(exact)) / 1000).quantize(Decimal('1'), rounding=ROUND_HALF_UP) * 1000)
write('public/research/industrial-automation-engineer-compensation-2026-11-02.json', {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'derivedAt': '2026-11-09', 'roleId': role_id, 'sourceAggregate': '/research/physical-ai-careers-2026-11-02.json', 'sourceAggregateSha256': digest,
    'label': 'Black Scarab estimated compensation', 'currency': 'USD', 'period': 'year', 'basis': 'advertised annual salary, excluding bonus and equity', 'postingCount': len(observations), 'employerCount': len({o['employerId'] for o in observations}), 'exactMedianMidpoint': exact, 'estimate': estimate,
    'rounding': 'nearest 1000 USD, halves rounded upward', 'method': 'Median of one annual salary-range midpoint per distinct eligible requisition.',
    'eligibility': 'U.S. factory/robotic-cell automation roles owning PLC/control systems, with reviewed duties and complete explicitly annual USD ranges.',
    'limitations': 'Only two eligible annual observations: an experienced OSARO role and senior Skydio role, both in California. A narrow editorial estimate, not an entry-level rate or representative market median. Structured salary fields do not consistently identify base pay. Other reviewed employers publish amounts without a verifiable annual period; no annual conversion assumed.',
    'screening': {'originalPrimaryCohort': len(cohort), 'originalPrimaryEmployers': len({r['employerId'] for r in cohort}), 'reviewedCandidateRecords': len(candidates), 'adjacentScopeAdditions': [key for key in selected if by_id[key]['screening']['primaryRoleId'] != role_id]},
    'observations': observations, 'excludedObservations': excluded,
})
examples = []
for record_id, location in [('osaro:lever:c2137e2f-3e01-4eb4-b635-0c97fddc8c57', 'San Francisco, CA'), ('skydio:ashby:b36773da-5e82-4d16-b926-186ba78fafa3', 'San Mateo, CA')]:
    o = next(o for o in observations if o['id'] == record_id)
    examples.append({**{k: o[k] for k in ['employer', 'title', 'url', 'minimum', 'maximum', 'currency', 'period', 'basis']}, 'recordId': record_id, 'location': location})
write('public/research/industrial-automation-engineer-evidence-2026-11-09.json', {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'reviewedAt': '2026-11-09', 'aggregatePath': '/research/physical-ai-careers-2026-11-02.json', 'aggregateSha256': digest,
    'rawArchive': {'relativeRoot': 'research/physical-ai/2026-11-02', 'normalizedRecords': 'postings.jsonl', 'manifestHash': aggregate['manifestHash']}, 'interpretation': 'Contextual guide review; original research unchanged.',
    'roles': {role_id: {'recordIds': list(selected), 'auditPath': 'research/career-guides/industrial-automation-engineer/evidence-audit.json', 'compensation': examples, 'skillPresentation': 'qualitative-source-comparison', 'scopeNote': 'Industrial production sequencing and equipment controls, distinct from robot motion algorithms. Skydio recovered by duties despite adjacent original classification. Counts are dated selected advertisements, not current vacancies.'}}, 'records': reviewed,
})
write('research/career-guides/industrial-automation-engineer/evidence-audit.json', {
    'reviewedAt': '2026-11-09', 'snapshotId': aggregate['snapshotId'], 'scope': 'PLC/HMI/SCADA, machine sequencing, industrial communication, commissioning and maintainable equipment control. Distinguish robot feedback algorithms, general integration, electrical design and test automation.',
    'cohort': {'postings': len(cohort), 'employers': len({r['employerId'] for r in cohort})}, 'reviewedRecords': reviewed, 'salaryExclusions': excluded,
    'adjacentSalarySignalScreen': {'method': 'Search all 1029 archived records for PLC or PLCs, exclusively U.S. geography, and structured salary or explicit annual salary wording. This is candidate discovery, not contextual admission.', 'recordIds': [r['id'] for r in records if r['countries'] == ['United States'] and re.search(r'\bPLCs?\b', r['sourceText']) and (r['compensation'] or any(re.search(r'annual|/year|per year', c, re.I) for c in r['compensationClauses']))]},
    'additionalFullSourceBoundaryReviews': [
        {**provenance(by_id['osaro:lever:ab8362cf-9932-4018-a8d4-3659fc188d4e']), 'decision': 'Exclude from automation salary: primary customer deployment, commissioning, project coordination and ongoing support; PLC programming is bonus exposure, not ownership of PLC sequence development.'},
        {**provenance(by_id['standard-bots:ashby:0f10edc9-c87b-4c9e-b0ab-f6cc5be6af91']), 'decision': 'Exclude from automation salary: broad customer-facing applications/integration role spanning proof of concept, fixtures, wiring, installation, sales demonstrations and training. PLC is one skill within broader solution delivery.'},
        {**provenance(by_id['standard-bots:ashby:f5fe4e60-21c4-4de7-8f21-e8cae48e7d63']), 'decision': 'Exclude from automation salary: robot PCBA/electrical architecture and safety-subsystem design rather than factory-equipment PLC logic.'},
    ],
    'technicalSources': ['https://www.codesys.com/', 'https://www.plcopen.org/', 'https://infosys.beckhoff.com/content/1033/tc3_plc_intro/7647315979.html', 'https://content.helpme-codesys.com/en/CODESYS%20Development%20System/_cds_testing_in_simulation_mode.html', 'https://www.docs.inductiveautomation.com/docs/8.3/getting-started/introducing-ignition', 'https://www.osha.gov/otm/section-4-safety-hazards/chapter-4'],
    'editorialExample': 'Illustrative software-only sequence. Idle -> Ready -> Running -> Complete -> Ready. Missing completion signal -> Fault. Clearing the cause plus a separate reset returns Fault -> Idle; a fresh start request and readiness checks are required before Running. Not a functional-safety architecture or a commissioning procedure. Safety functions require separate application-specific design and validation.',
})
print(json.dumps({'selectedFullSources': len(reviewed), 'candidateRecords': len(candidates), 'salaryPostings': len(observations), 'salaryEmployers': len({o['employerId'] for o in observations}), 'exactMedian': exact, 'estimate': estimate}))
