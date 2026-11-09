import type { CareerGuideContent } from './types';
import { mechanicalEngineerGuide } from '@/lib/career-paths/mechanical-engineer-guide';
import { robotLearningEngineerGuide } from '@/lib/career-paths/robot-learning-engineer-guide';
import { roboticsSimulationEngineerGuide } from '@/lib/career-paths/robotics-simulation-engineer-guide';
import { roboticsIntegrationEngineerGuide } from '@/lib/career-paths/robotics-integration-engineer-guide';
import { electricalEngineerGuide } from '@/lib/career-paths/electrical-engineer-guide';
// Add researched guides here after editorial review. No empty profession pages enter navigation or the sitemap.
export const careerGuides: CareerGuideContent[] = [mechanicalEngineerGuide, robotLearningEngineerGuide, roboticsSimulationEngineerGuide, roboticsIntegrationEngineerGuide, electricalEngineerGuide];
export const isPublishedCareerGuide = (guide: CareerGuideContent) => guide.status === 'published' && guide.sections.length > 0 && guide.sections.every(section => section.paragraphs.length > 0 || (section.blocks?.length || 0) > 0) && guide.citations.length > 0;
export const publishedCareerGuides = careerGuides.filter(isPublishedCareerGuide);
export const guidePath = (guide: CareerGuideContent) => `/career-paths/${guide.familyId}/${guide.slug}`;
export const guideForOccupation = (id: string) => publishedCareerGuides.find(guide => guide.occupationId === id);
export const assessmentGuideLinks = Object.fromEntries(publishedCareerGuides.map(guide => [guide.occupationId,guidePath(guide)]));
