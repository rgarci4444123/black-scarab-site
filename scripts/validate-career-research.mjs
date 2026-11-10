import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createContentLoader} from './content-source-loader.mjs';

const read = file => JSON.parse(fs.readFileSync(file,'utf8'));
const sha = text => createHash('sha256').update(text).digest('hex');
const args = process.argv.slice(2);
const option = key => args.includes(key) ? args[args.indexOf(key)+1] : undefined;
const aggregateFile = 'public/research/physical-ai-careers-2026-11-02.json';
const snapshot = read(aggregateFile);
const evidence = read('public/research/career-guide-evidence-2026-11-02.json');
const {publishedCareerGuides,guidePath} = createContentLoader()('lib/career-paths/guides.ts');
const evidenceSets = new Map([['/research/career-guide-evidence-2026-11-02.json',evidence]]);
for(const guide of publishedCareerGuides) {
  if(!evidenceSets.has(guide.research.evidencePath)) {
    assert.match(guide.research.evidencePath,/^\/research\/[a-z0-9-]+\.json$/);
    evidenceSets.set(guide.research.evidencePath,read('public'+guide.research.evidencePath));
  }
}

function validateSnapshot(data) {
  assert.ok(data.snapshotId && data.manifestHash && /^\d{4}-\d{2}-\d{2}$/.test(data.date));
  assert.equal(new Set(data.roles.map(role=>role.id)).size,data.roles.length);
  assert.equal(data.roles.reduce((sum,role)=>sum+role.postingCount,0),data.postingCount,'Primary role assignment denominator');
  for(const role of data.roles) {
    for(const key of ['postingCount','employerCount','reviewedCount']) assert.ok(Number.isInteger(role[key])&&role[key]>=0,`${role.id}.${key}`);
    assert.ok(role.reviewedCount<=role.postingCount && role.employerCount<=data.employerCount);
    assert.equal(new Set(role.skills.map(skill=>skill.id)).size,role.skills.length);
    for(const skill of role.skills) {
      assert.ok([skill.count,skill.required,skill.preferred,skill.contextual].every(value=>Number.isInteger(value)&&value>=0));
      assert.ok(skill.count<=role.postingCount);
      assert.equal(skill.required+skill.preferred+skill.contextual,skill.count,`${role.id}.${skill.id}`);
    }
    for(const employer of role.topEmployers) assert.ok(employer.count<=role.postingCount);
  }
}

validateSnapshot(snapshot);
for(const selected of evidenceSets.values()) {
  assert.equal(selected.snapshotId,snapshot.snapshotId);
  assert.equal(selected.aggregateSha256,sha(fs.readFileSync(aggregateFile)),'Immutable aggregate hash');
  assert.equal(selected.rawArchive.manifestHash,snapshot.manifestHash);
  assert.equal(new Set(selected.records.map(record=>record.id)).size,selected.records.length);
  for(const record of selected.records) {
    assert.match(record.sourceTextSha256,/^[a-f0-9]{64}$/);
    assert.match(record.rawSourceFileSha256,/^[a-f0-9]{64}$/);
    assert.ok(record.url.startsWith('https://') && record.employerId && record.locations.length);
  }
}
const records = new Map([...evidenceSets.values()].flatMap(selected=>selected.records).map(record=>[record.id,record]));
for(const guide of publishedCareerGuides) {
  assert.equal(guide.research.snapshotId,snapshot.snapshotId);
  const selected=evidenceSets.get(guide.research.evidencePath);
  const role = selected.roles[guide.research.roleId]; assert.ok(role,guide.id);
  for(const id of role.recordIds) assert.ok(records.has(id),id);
  for(const pay of role.compensation) {
    assert.ok(records.has(pay.recordId));
    assert.ok(pay.minimum>0 && pay.minimum<=pay.maximum);
    assert.equal(pay.currency,'USD'); assert.equal(pay.period,'year');
    assert.equal(pay.url,records.get(pay.recordId).url);
  }
  for(const pay of role.hourlyCompensation || []) {
    assert.ok(role.recordIds.includes(pay.recordId));
    assert.ok(pay.minimum>0 && pay.minimum<=pay.maximum);
    assert.equal(pay.currency,'USD'); assert.equal(pay.period,'hour');
    assert.equal(pay.url,records.get(pay.recordId).url);
  }
}

// Optional local audit reads the existing archive; it never downloads or overwrites sources.
const archiveRoot = option('--archive-root');
if(archiveRoot) {
  const normalized = new Map(fs.readFileSync(path.join(archiveRoot,evidence.rawArchive.relativeRoot,evidence.rawArchive.normalizedRecords),'utf8').trim().split('\n').map(line=>{const record=JSON.parse(line);return [record.id,record];}));
  const checkedRaw = new Set();
  for(const record of records.values()) {
    const original = normalized.get(record.id); assert.ok(original,record.id);
    assert.equal(sha(original.sourceText),record.sourceTextSha256,record.id);
    assert.equal(original.employerId,record.employerId); assert.equal(original.url,record.url);
    if(!checkedRaw.has(record.rawSourceFile)) {
      assert.equal(sha(fs.readFileSync(path.join(archiveRoot,record.rawSourceFile))),record.rawSourceFileSha256);
      checkedRaw.add(record.rawSourceFile);
    }
  }
  console.log(`Archive audit passed: ${records.size} selected full-text records and ${checkedRaw.size} raw sources.`);
}

// Candidate comparisons are review reports only: no import, guide edits or publishing side effects.
const candidateFile = option('--candidate');
if(candidateFile) {
  const candidate = read(candidateFile); validateSnapshot(candidate);
  const methodologyChanged = JSON.stringify([snapshot.skillCoding,snapshot.methodology])!==JSON.stringify([candidate.skillCoding,candidate.methodology]);
  const coverageChanged = JSON.stringify(snapshot.coverage)!==JSON.stringify(candidate.coverage);
  const collectionPeriodChanged = snapshot.date!==candidate.date;
  const sourceManifestChanged = snapshot.manifestHash!==candidate.manifestHash;
  const impacts = publishedCareerGuides.flatMap(guide=>{
    const before=snapshot.roles.find(role=>role.id===guide.research.roleId);
    const after=candidate.roles.find(role=>role.id===guide.research.roleId);
    if(JSON.stringify(before)===JSON.stringify(after)&&!methodologyChanged&&!coverageChanged&&!collectionPeriodChanged&&!sourceManifestChanged) return [];
    return [{guide:guidePath(guide),pinnedSnapshot:guide.research.snapshotId,candidateSnapshot:candidate.snapshotId,roleMissing:!after,changedFields:after?Object.keys({...before,...after}).filter(key=>JSON.stringify(before[key])!==JSON.stringify(after[key])):['role'],action:'Review role scope, coverage, provenance, derived claims, qualification context and pay; approve a new explicit guide pin only after editorial review.'}];
  });
  console.log(JSON.stringify({mode:'review-only',candidate:candidate.snapshotId,methodologyChanged,coverageChanged,collectionPeriodChanged,sourceManifestChanged,comparability:'Not established. Differences are not hiring growth or demand trends.',affectedGuides:impacts},null,2));
}
console.log(`Research validation passed: ${snapshot.postingCount} advertisements, ${snapshot.roles.length} roles, ${publishedCareerGuides.length} pinned guides.`);
