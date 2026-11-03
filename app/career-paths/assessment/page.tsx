import type {Metadata} from 'next';
import Link from 'next/link';
import {SectionHero} from '@/components/section-hero';
import {CareerAssessment} from '@/components/career-assessment';
import {assessmentQuestions} from '@/lib/career-paths/assessment-questions';
import {assessmentGuideLinks} from '@/lib/career-paths/guides';
export const metadata:Metadata={title:'Find Your Physical AI Career Path',description:'Explore robotics career fields through ten everyday questions about your interests, experience and learning goals. Discover relevant fields and careers to explore.',alternates:{canonical:'/career-paths/assessment'},openGraph:{title:'Find Your Physical AI Career Path',description:'An interest-based starting point for exploring robotics careers.',url:'/career-paths/assessment'}};
export default function Page(){return <div id="main-content" className="career-section guide-main discovery-assessment"><CareerAssessment guideLinks={assessmentGuideLinks}><SectionHero section="career-paths" title="Find your career path" description="Start with what you enjoy. Discover where it could lead in robotics."/><nav className="breadcrumbs" aria-label="Breadcrumb"><Link className="back-link" href="/career-paths">← Career Paths</Link><span aria-hidden="true">/</span><span aria-current="page">Find your path</span></nav><p className="assessment-intro-note">{assessmentQuestions.length} questions · No robotics knowledge needed</p></CareerAssessment></div>;}
