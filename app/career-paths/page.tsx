import type { Metadata } from 'next';
import { CareerHub } from '@/components/career-hub';
export const metadata: Metadata = {
  title: 'Physical AI Careers: Find Your Path in Robotics',
  description: 'Explore 20 robotics career paths, compare skills and learning routes, and use our free assessment to find a direction in Physical AI.',
  alternates: { canonical: '/career-paths' },
  openGraph: { title: 'Find your place in Physical AI.', description: 'Explore career fields, learning resources and dated employer evidence, or take the free career discovery assessment.', url: '/career-paths' },
};
export default function Page() { return <CareerHub />; }
