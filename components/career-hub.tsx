import Link from 'next/link';
import {publishedFamilies,siteUrl} from '@/lib/career-paths/families';
import {assessmentQuestions} from '@/lib/career-paths/assessment-questions';
import {SectionHero} from './section-hero';
import {CareerFamilyCard} from './career-family-card';

export function CareerHub(){
 const schema={'@context':'https://schema.org','@type':'CollectionPage',name:'Physical AI Career Paths',url:`${siteUrl}/career-paths`,description:'Explore robotics career fields, skills and learning routes.',hasPart:publishedFamilies.map(f=>({'@type':'WebPage',name:f.name,url:`${siteUrl}/career-paths/${f.slug}`}))};
 return <div id="main-content" className="career-section hub-main discovery-hub">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
  <SectionHero section="career-paths" description="Explore the careers, skills and learning routes behind robotics."/>
  <section className="discovery-assessment-intro" aria-labelledby="discovery-assessment-title">
   <div><h2 id="discovery-assessment-title">Not sure where to begin?</h2><p>Find a starting point through {assessmentQuestions.length} questions about what you enjoy.</p></div>
   <Link className="career-discovery-button" href="/career-paths/assessment">Find your career path <span aria-hidden="true">→</span></Link>
  </section>
  <section id="career-fields" className="families-section discovery-fields" aria-labelledby="career-fields-title">
   <div className="discovery-section-heading"><h2 id="career-fields-title">Explore the fields</h2></div>
   <div className="family-grid">{publishedFamilies.map(family=><CareerFamilyCard family={family} key={family.id}/>)}</div>
  </section>
 </div>;
}
