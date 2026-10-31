import { getSection, type SectionId } from '@/lib/section-headers';
interface SectionHeroProps {
  section: SectionId;
  title?: string;
  description?: string;
  headingId?: string;
}
export function SectionHero({ section, title, description, headingId = `${section}-title` }: SectionHeroProps) {
  const content = getSection(section)!;
  return <section className="section-hero" data-section={section} aria-labelledby={headingId}>
    <p className="section-eyebrow">{content.label}</p>
    <h1 id={headingId}>{title ?? content.title}</h1>
    <p className="section-description">{description ?? content.description}</p>
  </section>;
}
