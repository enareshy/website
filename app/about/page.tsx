import type { Metadata } from 'next';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { pageVisual } from '@/lib/visual';
import { IconCard } from '@/components/ui/cards';
import type { IconName } from '@/components/ui/icon';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata(
  {
    title: 'About — Hiindsight Technology Pvt Ltd',
    description:
      'Hiindsight Technology Pvt Ltd — enterprise technology and AI transformation for engineering and manufacturing, headquartered in Hyderabad, India.',
  },
  '/about'
);

export default function AboutHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An expert global network for the intelligent enterprise"
        lead="Hiindsight Technology Pvt Ltd helps engineering and manufacturing organizations transform products, processes, data and technology into intelligent digital enterprises."
        crumbs={[{ name: 'About', href: '/about' }]}
        visual={pageVisual('about')}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.about.map((a) => (
              <IconCard key={a.slug} title={a.name} summary={a.summary} href={`/about/${a.slug}`} icon={a.icon as IconName} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
