import type { Metadata } from 'next';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { pageVisual } from '@/lib/visual';
import { IconCard } from '@/components/ui/cards';
import type { IconName } from '@/components/ui/icon';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Technology — PLM, MES, Digital Manufacturing, AI & Integration',
    description:
      'Technology capabilities: PLM/PDM, MES/MOM, ERP integration, digital manufacturing, digital twin, MBSE, AI/GenAI, ML, IoT, intelligent automation and enterprise integration.',
  },
  '/technology'
);

const categories = [...new Set(content.technology.map((t) => t.category))];

export default function TechnologyHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="Technology depth across the enterprise"
        lead="Deep expertise across the platforms engineering and manufacturing organizations actually run — and the intelligent technology connecting them."
        crumbs={[{ name: 'Technology', href: '/technology' }]}
        actions={[{ label: 'Explore Solutions', href: '/solutions' }]}
        visual={pageVisual('technology')}
      />
      {categories.map((cat) => (
        <section key={cat} className="section-pad first:pt-0">
          <div className="container-site">
            <h2 className="h-section">{cat}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.technology
                .filter((t) => t.category === cat)
                .map((t) => (
                  <IconCard key={t.slug} title={t.name} summary={t.summary} href={`/technology/${t.slug}`} icon={t.icon as IconName} />
                ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand
        title="Need a technology partner with real depth?"
        lead="From PLM to AI, Hiindsight delivers within the platforms you already run."
        primary={{ label: 'Explore Solutions', href: '/solutions' }}
      />
    </>
  );
}
