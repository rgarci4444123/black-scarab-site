import snapshot from '@/public/research/physical-ai-careers-2026-11-02.json';
import evidence from '@/public/research/career-guide-evidence-2026-11-02.json';
import type { CareerGuideContent, FamilyId } from './types';

// Keep immutable snapshots registered here. Each guide selects reviewed research explicitly.
const snapshots: Record<string, typeof snapshot> = { [snapshot.snapshotId]: snapshot };
export const careerResearch = snapshot;
export const guideEvidence = evidence;
export const guideSnapshotId = 'physical-ai-2026-11-02-6b48026839dc';
export const guideEvidencePath = '/research/career-guide-evidence-2026-11-02.json';
const nativeId: Record<string, string> = {'localization-and-mapping-engineer':'localization-mapping-engineer','verification-and-validation-engineer':'verification-validation-engineer'};
export const marketId = (id: string) => nativeId[id] || id;
export function researchForRole(id: string, snapshotId = guideSnapshotId) {
  const selected = snapshots[snapshotId];
  if (!selected) throw new Error(`Unregistered career research snapshot: ${snapshotId}`);
  return selected.roles.find(role => role.id === marketId(id));
}
export function pinnedGuideResearch(roleId: string, snapshotId: string) {
  const role = researchForRole(roleId, snapshotId);
  if (!role || !(roleId in evidence.roles) || evidence.snapshotId !== snapshotId) throw new Error(`Missing reviewed guide evidence: ${roleId}`);
  return { role, evidence: evidence.roles[roleId as keyof typeof evidence.roles], reference: { snapshotId, roleId, evidencePath: guideEvidencePath } };
}
export function researchSnapshotForGuide(guide: CareerGuideContent) {
  const selected = snapshots[guide.research.snapshotId];
  if (!selected || !researchForRole(guide.research.roleId, guide.research.snapshotId)) throw new Error(`Invalid guide research pin: ${guide.id}`);
  return selected;
}
export const researchForFamily = (id: FamilyId) => snapshot.roles.filter(role => role.familyId === id);
export const researchDate = 'November 2, 2026';
// Full research remains server-side. Broad contaminated cohorts have no assessment skill-frequency callout.
export const assessmentEvidence = Object.fromEntries(snapshot.roles.map(role => [role.id, {
  postings: role.postingCount, employers: role.employerCount,
  ...(!['simulation-engineer','systems-integration-engineer'].includes(role.id) ? {skill: role.skills[0]?.label, mentions: role.skills[0]?.count} : {}),
}])) as Record<string, {postings: number; employers: number; skill?: string; mentions?: number}>;
