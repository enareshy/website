import type { Metadata } from 'next';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { pageVisual } from '@/lib/visual';
import { IconCard } from '@/components/ui/cards';
import type { IconName } from '@/components/ui/icon';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Transform — Engineering & Manufacturing Transformation',
    description:
      'Digital, engineering, manufacturing, PLM, AI and digital twin transformation for engineering and manufacturing enterprises.',
  },
  '/transform'
);

export default function TransformHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transform"
        title="Transformation for engineering and manufacturing"
        lead="From a single process to an entire enterprise — Hiindsight transforms the way products, processes, data and technology work together."
        crumbs={[{ name: 'Transform', href: '/transform' }]}
        actions={[{ label: 'Start Your Transformation', href: '/contact' }]}
        visual={pageVisual('transform')}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.transform.map((t) => (
              <IconCard key={t.slug} title={t.name} summary={t.summary} href={`/transform/${t.slug}`} icon={t.icon as IconName} />
            ))}
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink-100 bg-ink-100 sm:grid-cols-3">
            {[
              { k: 'Process-first', v: 'Every transformation starts with AS IS mapping and a roadmap.' },
              { k: 'Lifecycle-wide', v: 'From engineering and PLM to manufacturing, service and AI.' },
              { k: 'Outcome-driven', v: 'PMP-managed, agile delivery with techno-functional experts.' },
            ].map((s) => (
              <div key={s.k} className="bg-white p-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-signal-600">{s.k}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Which transformation is next for your enterprise?"
        lead="We'll assess where you are and build a roadmap that executes."
      />
    </>
  );
}
