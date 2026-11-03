import Link from 'next/link';
import type { CareerFamily } from '@/lib/career-paths/types';
import { Arrow } from './arrow';

export function CareerFamilyCard({ family }: { family: CareerFamily }) {
  return <Link className="family-card" href={`/career-paths/${family.slug}`}>
    <div className="card-content"><h2>{family.name}</h2><p>{family.shortDescription}</p></div>
    <span className="card-arrow"><Arrow /></span>
  </Link>;
}
