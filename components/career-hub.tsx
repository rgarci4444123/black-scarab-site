import { publishedFamilies } from '@/lib/career-paths/families';
import { SectionHero } from './section-hero';
import { CareerFamilyCard } from './career-family-card';
export function CareerHub() {
  return <div id="main-content" className="career-section hub-main">
    <SectionHero section="career-paths" />
    <section className="families-section" aria-label="Explore the four career families"><div className="family-grid">{publishedFamilies.map(family => <CareerFamilyCard family={family} key={family.id} />)}</div></section>
  </div>;
}
