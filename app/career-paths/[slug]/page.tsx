import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { publishedFamilies, getFamily } from '@/lib/career-paths/families';
import { CareerGuide } from '@/components/career-guide';
export const dynamicParams = false;
export function generateStaticParams() { return publishedFamilies.map(f => ({ slug: f.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const family = getFamily(slug); if (!family) return {};
  return { title: `${family.name} Careers`, description: family.shortDescription,
    alternates: { canonical: `/career-paths/${family.slug}` },
    openGraph: { title: `${family.name} Careers`, description: family.shortDescription, url: `/career-paths/${family.slug}` } };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const family = getFamily(slug); if (!family) notFound();
  return <CareerGuide family={family} />;
}
