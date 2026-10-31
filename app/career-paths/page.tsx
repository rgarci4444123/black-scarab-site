import type { Metadata } from 'next';
import { CareerHub } from '@/components/career-hub';
export const metadata: Metadata = {
  title: 'Career Paths in Physical AI',
  description: 'Find your place in Physical AI. Explore careers in hardware, autonomy, simulation, and real-world robotics operations.',
  alternates: { canonical: '/career-paths' },
  openGraph: { title: 'Find your place in Physical AI.', description: 'Explore four career families behind the next generation of intelligent machines.', url: '/career-paths' },
};
export default function Page() { return <CareerHub />; }
