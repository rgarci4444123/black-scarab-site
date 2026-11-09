#!/usr/bin/env python3
"""Reproduce the ML infrastructure guide's evidence, salary and scaling example."""
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
role_id = 'machine-learning-infrastructure-engineer'
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
    'agility:greenhouse:6148969004': ('Humanoid ML platform, orchestration, experiment tracking, model management and deployment lifecycle.', '5+ years of software engineering experience'),
    'apptronik:greenhouse:6176116004': ('Humanoid data/model platform, reproducible training, simulation evaluation and model qualification.', "Bachelor's or Master's degree"),
    'physical-intelligence:ashby:1f6cf3eb-f70f-480b-9fff-befd56c7fd07': ('Training-time data access, sharding, caching and distributed storage. Boundary with robotics data engineering.', 'Experience building distributed systems'),
    'nuro:greenhouse:7351066': ('Broad AI Platform new-graduate opening spanning multiple teams including ML infrastructure; not a dedicated ML infrastructure placement or salary observation.', 'You are a current Bachelor’s Degree or Master’s Degree candidate'),
    'applied-intuition:ashby:091ed808-95c9-420b-8061-0ff2eb9342bc': ('Physical-AI research infrastructure, distributed training, evaluation and multimodal data pipelines.', 'Masters or PhD in machine learning'),
    'nimble:greenhouse:4373712009': ('Robot training/inference infrastructure, GPU performance, reproducibility, scheduling and data ingestion.', 'Bachelor’s, Master’s, or PhD'),
    'rhoda:ashby:643d697d-45c4-4505-8967-433df7873134': ('Hands-on multimodal training systems performance, communication, memory and scaling analysis.', 'Proven track record improving large-scale distributed training performance'),
    'skydio:ashby:b6be08f7-89c0-48dd-b427-f587f23dbf34': ('Drone ML lifecycle: data workflows, training, model delivery and monitoring.', 'Demonstrated hands-on experience with cloud-based ML platforms'),
    'zoox:lever:91ff6263-49fb-421e-860f-36e7b9bae784': ('ML training optimization, distributed execution, profiling and performance benchmarks.', '4+ years of total experience'),
    'zoox:lever:bc11276c-8db7-426e-9d00-d41c2097723a': ('ML inference and training performance optimization for autonomous vehicles.', '4+ years of total experience'),
    'zoox:lever:2ae1f38f-1b7e-4ec1-8a20-cc3816f96878': ('Senior/staff technical ownership of training optimization and custom kernels, alongside roadmap and mentoring.', '7+ years of total experience'),
    'zoox:lever:2ed8a665-cee8-4d70-bcb1-e96b6214b371': ('Senior/staff inference optimization with technical leadership. No explicit direct-report or hiring responsibility stated.', 'Strong experience with training frameworks like PyTorch'),
}
reviewed = []
for record_id, (scope, needle) in selected.items():
    r = by_id[record_id]
    line = next(line for line in r['sourceText'].splitlines() if needle in line)
    start = r['sourceText'].index(line)
    reviewed.append({**provenance(r), 'reviewedAt': '2026-11-09', 'reviewMethod': 'Full stored-source contextual review; original classification unchanged.', 'originalReviewStatus': r['reviewStatus'], 'scope': scope, 'qualification': line, 'qualificationSpans': [{'text': line, 'start': start, 'end': start + len(line)}]})

scope_exclusions = {
    'physical-intelligence:ashby:14586c10-d913-43c5-8f7c-c77b5c438e4c': 'Body describes an external API Product Engineer and expressly distinguishes it from traditional ML training infrastructure.',
    'nuro:greenhouse:7351066': 'Multi-team new-graduate software advertisement; no dedicated ML infrastructure placement or verified annual salary period.',
}
text_ranges = {
    'nimble:greenhouse:4373712009': (210000, 300000, '/year'),
    'skydio:ashby:b6be08f7-89c0-48dd-b427-f587f23dbf34': (170000, 277500, 'annual base salary'),
}
observations, excluded = [], []
for r in cohort:
    reason = scope_exclusions.get(r['id'])
    if r['countries'] != ['United States']:
        reason = reason or 'Not an exclusively U.S. advertisement.'
    if reason:
        excluded.append({**provenance(r), 'reason': reason})
        continue
    structured = [p for p in r['compensation'] if p['currency'] == 'USD' and p['period'] == 'year' and p['minimum'] > 0 and p['maximum'] >= p['minimum']]
    if len(structured) == 1:
        p = structured[0]
        pay = {**{k: p[k] for k in ['minimum', 'maximum', 'currency', 'period', 'basis']}, 'extraction': 'official-ats-structured'}
    elif r['id'] in text_ranges:
        low, high, needle = text_ranges[r['id']]
        clause = next(c for c in r['compensationClauses'] if needle in c.lower())
        assert f'{low:,}' in clause and f'{high:,}' in clause
        start = r['sourceText'].index(clause)
        pay = {'minimum': low, 'maximum': high, 'currency': 'USD', 'period': 'year', 'basis': 'advertised annual salary; base pay where expressly stated', 'extraction': 'full-source-text', 'sourceClause': clause, 'sourceSpan': {'start': start, 'end': start + len(clause)}}
    else:
        excluded.append({**provenance(r), 'reason': 'No complete annual USD range verified in official structure or an explicit annual salary clause. Annual bonus wording alone does not establish the salary period.'})
        continue
    assert r['id'] in selected, 'Review full duties before admitting salary observation'
    observations.append({**provenance(r), **pay, 'midpoint': (pay['minimum'] + pay['maximum']) / 2, 'seniority': r['seniority'], 'scope': selected[r['id']][0]})
exact = median(o['midpoint'] for o in observations)
estimate = int((Decimal(str(exact)) / 1000).quantize(Decimal('1'), rounding=ROUND_HALF_UP) * 1000)
write('public/research/ml-infrastructure-engineer-compensation-2026-11-02.json', {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'derivedAt': '2026-11-09', 'roleId': role_id, 'sourceAggregate': '/research/physical-ai-careers-2026-11-02.json', 'sourceAggregateSha256': digest,
    'label': 'Black Scarab estimated compensation', 'currency': 'USD', 'period': 'year', 'basis': 'advertised annual salary, excluding bonus and equity', 'postingCount': len(observations), 'employerCount': len({o['employerId'] for o in observations}), 'exactMedianMidpoint': exact, 'estimate': estimate,
    'rounding': 'nearest 1000 USD, halves rounded upward', 'method': 'Median of one annual range midpoint per distinct eligible requisition.',
    'eligibility': 'U.S. roles building or optimizing robot/autonomy training, evaluation, model-delivery or ML inference infrastructure, with complete annual USD ranges and reviewed duties.',
    'limitations': 'Small purposive, experienced-role sample concentrated in California; four of eight observations are Zoox requisitions. Senior/staff technical roles included; no salary ladder inferred. Not an entry-level estimate or representative market median. Structured salary fields do not consistently identify base pay.',
    'observations': observations, 'excludedObservations': excluded,
})
examples = []
for record_id, location in [('nimble:greenhouse:4373712009', 'San Francisco, CA'), ('rhoda:ashby:643d697d-45c4-4505-8967-433df7873134', 'Mountain View, CA'), ('skydio:ashby:b6be08f7-89c0-48dd-b427-f587f23dbf34', 'San Mateo, CA')]:
    o = next(o for o in observations if o['id'] == record_id)
    examples.append({**{k: o[k] for k in ['employer', 'title', 'url', 'minimum', 'maximum', 'currency', 'period', 'basis']}, 'recordId': record_id, 'location': location})
write('public/research/ml-infrastructure-engineer-evidence-2026-11-09.json', {
    'schemaVersion': 1, 'snapshotId': aggregate['snapshotId'], 'collectedAt': '2026-11-02', 'reviewedAt': '2026-11-09', 'aggregatePath': '/research/physical-ai-careers-2026-11-02.json', 'aggregateSha256': digest,
    'rawArchive': {'relativeRoot': 'research/physical-ai/2026-11-02', 'normalizedRecords': 'postings.jsonl', 'manifestHash': aggregate['manifestHash']}, 'interpretation': 'Contextual guide review layer; original dated research remains unchanged.',
    'roles': {role_id: {'recordIds': list(selected), 'auditPath': 'research/career-guides/machine-learning-infrastructure-engineer/evidence-audit.json', 'compensation': examples, 'skillPresentation': 'qualitative-source-comparison', 'scopeNote': 'Broad cohort includes external model APIs, data-system specializations and a multi-team graduate opening. Do not treat raw counts as clean vacancies or skill prevalence.'}}, 'records': reviewed,
})
technical = ['https://docs.pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html', 'https://docs.pytorch.org/tutorials/recipes/recipes/profiler_recipe.html', 'https://docs.pytorch.org/tutorials/beginner/saving_loading_models.html', 'https://mlflow.org/docs/latest/ml/tracking/', 'https://docs.pytorch.org/docs/stable/notes/randomness.html', 'https://docs.cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning']
write('research/career-guides/machine-learning-infrastructure-engineer/evidence-audit.json', {
    'reviewedAt': '2026-11-09', 'snapshotId': aggregate['snapshotId'], 'scope': 'Reliable and efficient training, evaluation, experiment platforms, model lifecycle and inference infrastructure for robotics. Distinguish model research, robot-data quality, generic product APIs and onboard middleware.',
    'cohort': {'postings': len(cohort), 'employers': len({r['employerId'] for r in cohort})}, 'reviewedRecords': reviewed, 'salaryExclusions': excluded, 'liveEmployerChecks': ['https://job-boards.greenhouse.io/nimblerobotics/jobs/4373712009'], 'technicalSources': technical,
    'editorialExamples': 'The scaling comparison is an idealized arithmetic model, not a measured benchmark. One-GPU baseline 60 minutes, non-parallel fraction 10%, perfect scaling of remaining work, constant work and all allocated GPUs reserved throughout. Excludes communication, queueing and other overhead. The portfolio uses a small public image dataset as a systems exercise, not evidence of a deployable robot policy.',
})
baseline, serial_fraction = 60, 0.1
rows = []
for gpus in [1, 2, 4, 8]:
    elapsed = round(baseline * (serial_fraction + (1 - serial_fraction) / gpus), 6)
    rows.append({'gpus': gpus, 'elapsedMinutes': elapsed, 'allocatedGpuMinutes': gpus * elapsed})
write('public/research/ml-infrastructure-scaling-example-2026-11-09.json', {'kind': 'illustrative-model', 'baselineMinutes': baseline, 'nonParallelFraction': serial_fraction, 'formula': 'elapsed = baseline * (nonParallelFraction + (1 - nonParallelFraction) / gpus); allocatedGpuMinutes = gpus * elapsed', 'assumptions': 'Fixed work; remaining fraction scales perfectly; all GPUs reserved for full elapsed run; no extra communication, queueing, memory or storage overhead.', 'rows': rows})
print(json.dumps({'selectedFullSources': len(reviewed), 'salaryPostings': len(observations), 'salaryEmployers': len({o['employerId'] for o in observations}), 'exactMedian': exact, 'estimate': estimate, 'scalingExample': rows}))
