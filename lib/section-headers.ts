export const sections = [
  {
    id: 'news', label: 'News', href: '/news',
    title: 'Physical AI News',
    description: 'Timely, sourced reporting on the companies, machines, and markets shaping physical AI.',
  },
  {
    id: 'insights', label: 'Insights', href: '/insights',
    title: 'Deep analysis and practical guides',
    description: 'Evergreen perspectives on physical AI, industrial deployment, and the systems shaping real world operations.',
  },
  {
    id: 'markets', label: 'Markets', href: '/markets',
    title: 'Physical AI through a market lens',
    description: 'The businesses, capital spending and economic forces shaping physical AI in public markets.',
  },
  {
    id: 'events', label: 'Events', href: '/events',
    title: 'Physical AI Events',
    description: 'Conferences shaping robotics, autonomy, and embodied intelligence.',
  },
  {
    id: 'career-paths', label: 'Career Paths', href: '/career-paths',
    title: 'Find your place in Physical AI.',
    description: 'Explore the professions, skills, and career opportunities behind the next generation of intelligent machines.',
  },
] as const;
export type SectionId = typeof sections[number]['id'];
export const getSection = (id: string) => sections.find(section => section.id === id);
