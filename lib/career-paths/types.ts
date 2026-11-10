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

// Profession summaries stay separate from publishable, long-form guides.
export type CareerGuideBlock =
  | { type: 'fault-tree'; id: string; title: string; model: { topEvent: string; basicEvents: string[]; minimalCutSets: string[][] } }
  | { type: 'message-history'; id: string; title: string; model: { unit: string; arrivalTimes: number[]; dequeueAt: number; depths: number[] } }
  | { type: 'loop-closure'; id: string; title: string; model: { unit: string; before: number[][]; after: number[][] } }
  | { type: 'measurement-comparison'; id: string; title: string; model: { reference: number; unit: string; minimum: number; maximum: number; ticks: number[]; setups: { label: string; description: string; readings: number[] }[] } }
  | { type: 'mission-outcomes'; id: string; title: string; total: number; runs: { label: string; independent: number; assisted: number; notCompleted: number }[] }
  | { type: 'requirements-matrix'; id: string; title: string; model: { tests: { id: string; label: string; result: string }[]; requirements: { id: string; label: string; testIds: string[] }[] } }
  | { type: 'planning-clearance'; id: string; title: string; model: { width: number; height: number; robotRadius: number; clearance: number; obstacles: {x:number;y:number;width:number;height:number}[]; start: number[]; goal: number[]; directRoute: number[][]; detourRoute: number[][]; gap: number; requiredGap: number } }
  | { type: 'yield-comparison'; id: string; title: string; total: number; firstPass: number; reworkedPass: number; scrapped: number; note: string }
  | { type: 'state-sequence'; id: string; title: string; states: { id: string; label: string; description: string }[]; transitions: { from: string; to: string; condition: string }[]; fault: { from: string; trigger: string; description: string; recovery: string; returnTo: string }; explanation?: string; note: string }
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; caption: string; columns: string[]; rows: string[][]; variant?: 'numeric' | 'hourly-pay' }
  | { type: 'figure'; src: string; alt: string; caption: string; width: number; height: number; fullSizeHref?: string }
  | { type: 'control-response'; id: string; title: string; durationSeconds: number; naturalFrequencyRadPerSec: number; curves: { label: string; dampingRatio: number }[]; note: string }
  | { type: 'timing-budget'; id: string; title: string; deadlineMs: number; scaleMs: number; rows: { label: string; segments: { label: string; kind: 'read' | 'process' | 'send' | 'wait'; durationMs: number }[] }[]; note: string }
  | { type: 'diagnostic-map'; id: string; title: string; symptom: string; branches: { system: string; evidence: string; investigation: string }[]; conclusion: string }
  | { type: 'workflow'; id: string; title: string; stages: { title: string; description: string }[]; review: { stage: number; title: string; description: string } }
  | { type: 'summary-list'; items: { title: string; text: string }[] }
  | { type: 'calculation'; title: string; formula: string; example: string; note: string }
  | { type: 'skill-mentions'; title: string; denominator: number; note: string; detailNote: string;
      rows: { label: string; count: number; required: number; preferred: number; contextual: number }[] }
  | { type: 'compensation'; caption: string; note: string;
      examples: { employer: string; title: string; location: string; minimum: number; maximum: number; currency: string; period: string; basis: string }[] }
  | { type: 'resources'; items: { title: string; href: string; description: string }[] };
export interface CareerGuideSection extends EditorialSection {
  id: string; navLabel?: string; blocks?: CareerGuideBlock[];
}
export interface CareerGuideContent {
  id: string; occupationId: string; familyId: FamilyId; slug: string;
  title: string; seoTitle: string; description: string; deck?: string;
  status: 'draft' | 'published' | 'archived'; publishedAt?: string; reviewedAt: string;
  research: { snapshotId: string; roleId: string; evidencePath: string };
  illustration?: { src: string; alt: string; width: number; height: number };
  introduction?: string[];
  overview?: { label: string; value: string; detail?: string; sourceIds: string[] }[];
  overviewNote?: string;
  nextSteps?: CareerGuideSection;
  researchNotes?: string[];
  sections: CareerGuideSection[]; citations: Citation[];
}
