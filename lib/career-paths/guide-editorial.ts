import decisions from '@/research/seo/2026-11-03/decisions.json';
import { guideEvidence, guideEvidencePath } from '@/lib/career-paths/research';
import type { CareerGuideBlock, Citation } from '@/lib/career-paths/types';

export const paragraph = (text: string): CareerGuideBlock => ({type:'paragraph',text});
export const heading = (text: string): CareerGuideBlock => ({type:'heading',text});
export const list = (items: string[], ordered = false): CareerGuideBlock => ({type:'list',items,ordered});
export const comparison = (caption: string, columns: string[], rows: string[][]): CareerGuideBlock => ({type:'table',caption,columns,rows});
export const summaries = (items: {title: string; text: string}[]): CareerGuideBlock => ({type:'summary-list',items});
export function guideSeo(occupationId: string) {
  const decision = decisions.guides.find(item => item.occupationId === occupationId);
  if (!decision) throw new Error(`Missing researched SEO decision: ${occupationId}`);
  return {title:decision.h1,seoTitle:decision.seoTitle,description:decision.description};
}
export const citation = (id: string, title: string, url: string, scope: string): Citation => ({id,title,url,scope,accessedAt:'2026-11-03'});
export const studySource = citation('study','Black Scarab: November 2 employer research','/research/physical-ai-careers-2026-11-02.json','Dated selected-employer aggregate, role definitions, automated skill wording and coverage. Not live vacancies or an industry census.');
export const evidenceSource = citation('evidence','Reviewed posting evidence and source provenance',guideEvidencePath,'Selected full-source reviews, contextual qualifications, compensation observations, source IDs and hashes. Original source records remain in the Black Scarab research archive.');
export function postingSource(id: string, recordId: string): Citation {
  const record = guideEvidence.records.find(item => item.id === recordId);
  if (!record) throw new Error(`Missing reviewed posting: ${recordId}`);
  return citation(id,`${record.employer}: ${record.title}`,record.url,'Full stored employer source reviewed in context. Advertisement collected November 2, 2026; the live URL may change or close. Record and raw-source hashes are in the evidence export.');
}
