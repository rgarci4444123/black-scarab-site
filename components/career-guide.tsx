import Link from 'next/link';
import {publishedFamilies,siteUrl} from '@/lib/career-paths/families';
import {occupationsFor} from '@/lib/career-paths/occupations';
import {guideForOccupation,guidePath} from '@/lib/career-paths/guides';
import {researchForFamily,researchDate} from '@/lib/career-paths/research';
import type {CareerFamily} from '@/lib/career-paths/types';

export function CareerGuide({family}:{family:CareerFamily}){
 const research=researchForFamily(family.id);
 const count=research.reduce((total,role)=>total+role.postingCount,0);
 const leading=[...research].sort((a,b)=>b.postingCount-a.postingCount).slice(0,2);
 const schema={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Career Paths',item:`${siteUrl}/career-paths`},{'@type':'ListItem',position:2,name:family.name,item:`${siteUrl}/career-paths/${family.slug}`}]};
 return <div id="main-content" className="career-section guide-main career-category-compact">
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
  <nav className="breadcrumbs" aria-label="Breadcrumb"><Link className="back-link" href="/career-paths">Career Paths</Link><span aria-hidden="true">/</span><span aria-current="page">{family.name}</span></nav>
  <header className="career-category-intro">
   <h1>{family.name}</h1><p>{family.shortDescription}</p>
   <Link href="/career-paths/assessment">Not sure where to begin? Find your career path <span aria-hidden="true">→</span></Link>
  </header>
  <section id="professions" className="career-category-professions" aria-labelledby="category-careers-heading">
   <h2 id="category-careers-heading">Explore careers</h2>
   <dl>{occupationsFor(family.id).map(role=>{const guide=guideForOccupation(role.id);return <div id={role.slug} className="career-category-role" key={role.id}>
    <dt>{role.title}</dt><dd><p>{role.summary}</p>{guide?<Link href={guidePath(guide)}>Read career guide <span aria-hidden="true">→</span><span className="sr-only"> for {role.title}</span></Link>:null}</dd>
   </div>;})}</dl>
  </section>
  <section id="research" className="career-category-snapshot" aria-labelledby="category-research-heading">
   <h2 id="category-research-heading">Hiring snapshot</h2>
   <p><strong>{count} advertisements</strong> across this field in our {researchDate} study. The sample includes {leading.map(role=>`${role.postingCount} ${role.title.toLowerCase()}`).join(' and ')} advertisements.</p>
   <p className="career-category-scope">Selected employer boards, with uneven coverage. Counts describe advertisements in the sample, not hires or live vacancies. <a href="/research/physical-ai-careers-2026-11-02.json">Research methodology and data <span aria-hidden="true">↗</span></a></p>
  </section>
  <nav className="career-category-other" aria-labelledby="category-other-heading">
   <h2 id="category-other-heading">Explore other fields</h2>
   <ul>{publishedFamilies.filter(other=>other.id!==family.id).map(other=><li key={other.id}><Link href={`/career-paths/${other.slug}`}>{other.name} <span aria-hidden="true">→</span></Link></li>)}</ul>
  </nav>
 </div>;
}
