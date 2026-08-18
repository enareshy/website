import type { Metadata } from 'next';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { pageVisual } from '@/lib/visual';
import { IconCard } from '@/components/ui/cards';
import type { IconName } from '@/components/ui/icon';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Solutions — BOM, PDM, Digital Manufacturing, AI & Integration',
    description:
      'Solutions for engineering and manufacturing: BOM management, product data management, variant and change management, digital manufacturing, engineering automation, integration, and AI for engineering and manufacturing.',
  },
  '/solutions'
);

export default function SolutionsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Solutions that connect engineering, manufacturing and intelligence"
        lead="Reusable solutions built from years of verified delivery — each designed to remove a specific point of friction in the enterprise."
        crumbs={[{ name: 'Solutions', href: '/solutions' }]}
        actions={[{ label: 'Discuss Your Challenge', href: '/contact' }]}
        visual={pageVisual('solutions')}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.solutions.map((s) => (
              <IconCard key={s.slug} title={s.name} summary={s.summary} href={`/solutions/${s.slug}`} icon={s.icon as IconName} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Not sure which solution fits?"
        lead="Describe your challenge and we'll point you to the right path."
      />
    </>
  );
}
