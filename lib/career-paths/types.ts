export type FamilyId = 'hardware-manufacturing' | 'intelligence-autonomy' | 'platforms-simulation' | 'integration-operations';
export type EditorialStatus = 'draft' | 'foundation' | 'published' | 'archived';
export interface Citation { id: string; title: string; url: string; accessedAt: string; scope?: string; }
export interface EditorialSection { heading: string; paragraphs: string[]; sourceIds?: string[]; }
export interface ResearchContext {
  status: 'draft' | 'published'; geography: string; asOf: string;
  sourceIds: string[]; methodology: string;
}
export interface CompensationRecord extends ResearchContext {
  occupationId: string; seniority: 'entry' | 'midcareer' | 'senior' | 'all';
  currency: string; period: 'hour' | 'year';
  base?: { low?: number; median?: number; high?: number };
  bonus?: { low?: number; median?: number; high?: number };
  equity?: { description: string; valuationBasis: string };
}
export interface EmploymentResearch extends ResearchContext {
  occupationId?: string; summary: string; employmentCount?: number;
  growth?: { percentage: number; startYear: number; endYear: number };
}
export interface LearningResource {
  title: string; url: string; audience: 'student' | 'career-changer' | 'technician' | 'engineer';
  kind: 'course' | 'project' | 'credential' | 'documentation'; sourceIds: string[];
}
export interface Occupation {
  id: string; slug: string; title: string; aliases: string[];
  primaryFamilyId: FamilyId | null; track: 'technical' | 'cross-functional';
  summary: string; specializations: string[]; status: EditorialStatus;
  responsibilities?: string[]; technicalSkills?: string[];
  education?: { description: string; requirement: 'common' | 'role-dependent' | 'required'; sourceIds: string[] }[];
  certifications?: { name: string; requirement: 'optional' | 'role-dependent' | 'required'; geography: string; sourceIds: string[] }[];
  seniorityLevels?: string[]; compensation?: CompensationRecord[];
  industryApplications?: string[]; employers?: { name: string; sourceIds: string[] }[];
  trainingPathways?: LearningResource[]; citations?: Citation[]; lastReviewed?: string | null;
}
export interface CareerFamily {
  id: FamilyId; slug: FamilyId; number: string; name: string; shortDescription: string;
  introduction: string[]; primaryResponsibility: string; boundaries: string;
  specialties: string[]; occupationIds: string[];
  work: EditorialSection; example: { title: string; description: string };
  skills: { technical: string[]; professional: string[]; qualifications: string; sourceIds: string[] };
  gettingStarted: EditorialSection;
  compensation: CompensationRecord[]; employment: EmploymentResearch[];
  learningResources: LearningResource[]; relatedArticles: { title: string; path: string }[];
  citations: Citation[]; lastReviewed: string | null; status: EditorialStatus;
}
