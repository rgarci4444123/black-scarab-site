"""Derive the electrical guide's evidence from the preserved Intelligence archive."""
import argparse
import hashlib
import json
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path
from statistics import median

parser = argparse.ArgumentParser()
parser.add_argument('--archive-root', required=True, type=Path)
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
archive = args.archive_root / 'research/physical-ai/2026-11-02'
postings = [json.loads(line) for line in (archive / 'postings.jsonl').read_text().splitlines()]
cohort = [r for r in postings if r['screening']['primaryRoleId'] == 'electrical-engineer']
aggregate_path = root / 'public/research/physical-ai-careers-2026-11-02.json'
aggregate = json.loads(aggregate_path.read_text())
aggregate_hash = hashlib.sha256(aggregate_path.read_bytes()).hexdigest()
date = '2026-11-09'

def write(path, value):
    target = root / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(value, indent=2, ensure_ascii=False) + '\n')

def provenance(r):
    assert hashlib.sha256(r['sourceText'].encode()).hexdigest() == r['sourceTextSha256']
    assert hashlib.sha256((args.archive_root / r['rawSourceFile']).read_bytes()).hexdigest() == r['rawSourceFileSha256']
    return {k: r[k] for k in ['id', 'employerId', 'employer', 'title', 'locations', 'countries', 'url', 'verifiedAt', 'sourceTextSha256', 'rawSourceFile', 'rawSourceFileSha256']}

# Explicit textual observations, checked in their full stored source. No missing
# pay period is imputed. Structured values take precedence only when consistent.
text_ranges = {
    'figure:greenhouse:4313470006': (120000, 250000),
    'figure:greenhouse:4333397006': (150000, 250000),
    'figure:greenhouse:4688381006': (120000, 250000),
    'gram:greenhouse:4364452009': (155000, 195000),
    'gram:greenhouse:4364453009': (150000, 190000),
    'skydio:ashby:9cb4555e-4fd1-410b-921b-cc17d56ba5df': (127500, 240000),
    'skydio:ashby:eb2f4124-9bd6-49f9-9636-03152c573f7d': (147500, 210000),
    'skydio:ashby:f0c26a3c-d999-4dc2-8812-b3835f633ded': (127500, 240000),
}
exclusion_titles = ['thermal engineer', 'manufacturing electrical', 'hardware test', 'test equipment', 'fleet support', 'sustaining/validation']
explicit_exclusions = {
    'one-x:ashby:14a3f92c-24ec-4722-8754-d0d1366c9ed7': 'Structured minimum conflicts with the compensation clause; omitted pending reconciliation.',
    'shield-ai:lever:e1b78ed6-0a52-49e1-9014-735873dab5a5': 'Includes people leadership and performance management.',
    'standard-bots:ashby:9cc89fce-b6bb-4b9c-8695-5692071adbdf': 'Mixed hardware team leadership role; omitted from individual-contributor design estimate.',
    'zoox:lever:013b341d-8019-431d-bfda-8be411a14d84': 'Diagnostics integration rather than product circuit or board design.',
}
observations, excluded = [], []
for r in cohort:
    if not (r['compensation'] or r['compensationClauses']):
        continue
    reason = explicit_exclusions.get(r['id'])
    if not reason and any(term in r['title'].lower() for term in exclusion_titles):
        reason = 'Primary work is adjacent testing, manufacturing, thermal engineering or sustainment.'
    if not reason and r['countries'] != ['United States']:
        reason = 'Not an exclusively U.S. advertisement.'
    annual = [p for p in r['compensation'] if p['currency'] == 'USD' and p['period'] == 'year' and p['minimum'] > 0 and p['maximum'] >= p['minimum']]
    if reason:
        excluded.append({**provenance(r), 'reason': reason})
        continue
    if len(annual) == 1:
        pay = annual[0]
        observation = {**provenance(r), **{k: pay[k] for k in ['minimum', 'maximum', 'currency', 'period', 'basis']}, 'extraction': 'official-ats-structured', 'seniority': r['seniority']}
    elif r['id'] in text_ranges:
        low, high = text_ranges[r['id']]
        clause = next(c for c in r['compensationClauses'] if 'annual' in c.lower() or 'per year' in c.lower())
        for amount in [low, high]:
            assert f'{amount:,}' in clause
        observation = {**provenance(r), 'minimum': low, 'maximum': high, 'currency': 'USD', 'period': 'year', 'basis': 'explicit annual base salary', 'extraction': 'full-source-text', 'seniority': r['seniority'], 'sourceClause': clause, 'sourceSpan': {'start': r['sourceText'].index(clause), 'end': r['sourceText'].index(clause) + len(clause)}}
    else:
        excluded.append({**provenance(r), 'reason': 'No unambiguous annual USD range in structured fields or the selected explicit annual-text review.'})
        continue
    observation['midpoint'] = (observation['minimum'] + observation['maximum']) / 2
    observations.append(observation)

exact = median(o['midpoint'] for o in observations)
estimate = int((Decimal(str(exact)) / 1000).quantize(Decimal('1'), rounding=ROUND_HALF_UP) * 1000)
comp_path = 'public/research/electrical-engineer-compensation-2026-11-02.json'
write(comp_path, {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'derivedAt': date,
    'roleId': 'electrical-engineer', 'sourceAggregate': '/research/physical-ai-careers-2026-11-02.json', 'sourceAggregateSha256': aggregate_hash,
    'label': 'Black Scarab estimated compensation', 'currency': 'USD', 'period': 'year',
    'basis': 'advertised annual salary, excluding bonus and equity',
    'postingCount': len(observations), 'employerCount': len({o['employerId'] for o in observations}),
    'exactMedianMidpoint': exact, 'estimate': estimate, 'rounding': 'nearest 1000 USD, halves rounded upward',
    'method': 'One midpoint per eligible distinct advertisement, then the median of those midpoints. No experience-level salary bands are inferred.',
    'eligibility': 'U.S. individual-contributor electrical product design in the pinned cohort, including robot electronics, autonomous-vehicle compute, power, sensing and PCB layout. Complete structured annual USD ranges and selected full-source explicit annual base-salary clauses.',
    'limitations': 'Selected employers, locations and mixed experience levels; not a probability sample or entry-level salary. Similar but distinct requisitions count separately. Structured advertised salary fields do not always explicitly identify base pay. Excludes thermal, dedicated test-equipment, manufacturing, sustainment, diagnostics and people-management roles, conflicting pay fields and unverified pay periods.',
    'observations': observations, 'excludedObservations': excluded,
})

selected = {
    'figure:greenhouse:4313470006': ('Robot compute, camera, sensing and power board design.', 'Bachelor or graduate degree in Electrical Engineering or related field.', '2+ years of industry experience.'),
    'apptronik:greenhouse:6150041004': ('Apollo power electronics, distribution and battery subsystem design.', 'Bachelors, Masters, or PhD degree in Electrical Engineering or related field.', 'At least 5 years of experience in Electrical Engineering.'),
    'shield-ai:lever:1b229cdc-9a0b-4704-b39b-b3b4c6e3fa89': ('Entry-level autonomous-aircraft avionics and circuit design with senior mentorship.', 'Have a degree in Electrical Engineering or equivalent', 'Have been part of an engineering team/club'),
    'agility:greenhouse:6103178004': ('Production-ready Digit electronics, board bring-up and verification.', "A Bachelor's or Master's degree in Electrical Engineering (or equivalent).", '7 or more years of electrical design experience'),
    'standard-bots:ashby:05715409-54f5-4e14-ba35-67f47b30d845': ('Industrial robot motor, compute, power and sensor electronics from concept to production.', "Experience: You have a bachelor's or graduate degree in Electrical Engineering (or a related field) and 5+ years designing, building, and testing PCBAs, including designs you've taken through production release", "We don't require a background in robotics — but we do require deep, hands-on electronics experience."),
    'skydio:ashby:9cb4555e-4fd1-410b-921b-cc17d56ba5df': ('Autonomous-drone compute, camera and power system design.', '', 'Experience shipping high-volume consumer electronic products in a senior or architect-level role'),
    'skydio:ashby:f0c26a3c-d999-4dc2-8812-b3835f633ded': ('Autonomous-drone electronics, all-levels title; source still describes senior/architect product experience.', '', 'Experience shipping high-volume consumer electronic products in a senior or architect-level role'),
    'one-x:ashby:14a3f92c-24ec-4722-8754-d0d1366c9ed7': ('Humanoid electrical architecture, bring-up and production; pay-field conflict excluded from estimate.', "Bachelor's or Master's degree in Electrical Engineering or a related field", '5+ years of professional experience designing and shipping complex electrical systems'),
}
by_id = {r['id']: r for r in postings}
records = []
for id, (scope, education, experience) in selected.items():
    r = by_id[id]
    spans = []
    for kind, text in [('education', education), ('experience', experience)]:
        if text:
            start = r['sourceText'].index(text)
            spans.append({'kind': kind, 'text': text, 'start': start, 'end': start + len(text)})
    records.append({**provenance(r), 'reviewedAt': date, 'reviewMethod': 'Full stored source read for guide context and qualifications; original role-review flag unchanged.', 'originalReviewStatus': r['reviewStatus'], 'scope': scope, 'education': education, 'experience': experience, 'qualificationSpans': spans})

salary_examples = []
display_locations = {'figure:greenhouse:4313470006': 'San Jose, CA', 'skydio:ashby:f0c26a3c-d999-4dc2-8812-b3835f633ded': 'San Mateo, CA'}
for id in ['shield-ai:lever:1b229cdc-9a0b-4704-b39b-b3b4c6e3fa89', 'figure:greenhouse:4313470006', 'standard-bots:ashby:05715409-54f5-4e14-ba35-67f47b30d845', 'skydio:ashby:f0c26a3c-d999-4dc2-8812-b3835f633ded']:
    o = next(o for o in observations if o['id'] == id)
    salary_examples.append({**{k: o[k] for k in ['employer', 'title', 'url', 'minimum', 'maximum', 'currency', 'period', 'basis']}, 'recordId': id, 'location': display_locations.get(id, ', '.join(o['locations']))})
write('public/research/electrical-engineer-evidence-2026-11-09.json', {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'reviewedAt': date,
    'aggregatePath': '/research/physical-ai-careers-2026-11-02.json', 'aggregateSha256': aggregate_hash,
    'rawArchive': {'relativeRoot': 'research/physical-ai/2026-11-02', 'normalizedRecords': 'postings.jsonl', 'manifestHash': aggregate['manifestHash']},
    'interpretation': 'Separate guide review layer; original aggregate, classifications and collection date unchanged.',
    'roles': {'electrical-engineer': {'recordIds': list(selected), 'auditPath': 'research/career-guides/electrical-engineer/evidence-audit.json', 'compensation': salary_examples, 'cohortSummaryPath': '/research/physical-ai-careers-2026-11-02.json#role=electrical-engineer', 'skillPresentation': 'qualitative-source-comparison', 'scopeNote': 'Broad electrical cohort includes adjacent testing, infrastructure, manufacturing and thermal roles. Guide uses selected electronics-design evidence; no robotics-only skill prevalence is inferred.'}},
    'records': records,
})
write('research/career-guides/electrical-engineer/evidence-audit.json', {
    'reviewedAt': date, 'snapshotId': aggregate['snapshotId'], 'roleId': 'electrical-engineer',
    'scope': 'Robot circuit/board design, power, sensing, electrical architecture and bring-up. Firmware, test engineering and industrial automation remain neighboring professions.',
    'cohort': {'postings': len(cohort), 'employers': len({r['employerId'] for r in cohort}), 'presentation': 'Background research only; no live-opening claim or broad skill-frequency graphic.'},
    'reviewedRecordIds': list(selected), 'qualificationEvidence': records,
    'compensationDerivation': '/' + comp_path.removeprefix('public/'),
    'researchSources': [
        {'url': 'https://job-boards.greenhouse.io/figureai/jobs/4313470006', 'checkedAt': date, 'finding': 'Torso electronics responsibilities, degree, experience and annual base range confirmed on employer page.'},
        {'url': 'https://job-boards.greenhouse.io/apptronik/jobs/6150041004', 'checkedAt': date, 'finding': 'Power electronics, battery, Altium and prototype-to-production ownership confirmed.'},
        {'url': 'https://jobs.ashbyhq.com/standardbots/05715409-54f5-4e14-ba35-67f47b30d845', 'checkedAt': date, 'finding': 'Industrial robot electronics title and advertised range confirmed; current listing is on-site rather than the archived hybrid wording.'},
        {'url': 'https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm', 'checkedAt': date, 'finding': 'Bachelor-level engineering preparation and practical lab/co-op experience; broad BLS wages not substituted for robotics compensation.'},
        {'url': 'https://docs.kicad.org/9.0/en/getting_started_in_kicad/getting_started_in_kicad.html', 'checkedAt': date, 'finding': 'Official schematic, PCB layout, rules-check and fabrication workflow.'},
        {'url': 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/', 'checkedAt': date, 'finding': 'Introductory undergraduate circuits course with lecture videos, problems and lab/design exercises.'},
        {'url': 'https://www.ti.com/en-us/design-development/educational-resources/video/series/precision-labs', 'checkedAt': date, 'finding': 'Manufacturer training in analog signal-chain and embedded electronics.'},
    ],
    'editorialInterpretation': 'A motor-start brownout scenario, portfolio sequence and career-transition advice are Black Scarab teaching examples, not employer case studies.',
})
print(json.dumps({'postings': len(observations), 'employers': len({o['employerId'] for o in observations}), 'medianMidpoint': exact, 'estimate': estimate, 'excludedPayRecords': len(excluded)}))
