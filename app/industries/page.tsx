import type { Metadata } from 'next';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { pageVisual } from '@/lib/visual';
import { IconCard } from '@/components/ui/cards';
import type { IconName } from '@/components/ui/icon';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Industries — Automotive, Aerospace & Defence, Energy & Manufacturing',
    description:
      'Industry-specific transformation for automotive, aerospace and defence, energy, heavy machinery and industrial manufacturing.',
  },
  '/industries'
);

export default function IndustriesHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Deep domain experience, industry by industry"
        lead="Engineering and manufacturing challenges differ by sector. Hiindsight brings verified experience across the industries that build the world."
        crumbs={[{ name: 'Industries', href: '/industries' }]}
        actions={[{ label: 'Discuss Your Challenge', href: '/contact' }]}
        visual={pageVisual('industries')}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.industries.map((i) => (
              <IconCard key={i.slug} title={i.name} summary={i.summary} href={`/industries/${i.slug}`} icon={i.icon as IconName} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
