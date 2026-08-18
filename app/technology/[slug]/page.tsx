import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { CheckItem } from '@/components/ui/primitives';
import { content, getBySlug } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return content.technology.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getBySlug(content.technology, params.slug);
  if (!item) return {};
  return buildMetadata(item.seo, `/technology/${item.slug}`);
}

export default function TechnologyDetailPage({ params }: Props) {
  const item = getBySlug(content.technology, params.slug);
  if (!item) notFound();

  const relatedSolutions = content.solutions
    .map((s) => ({ s, score: s.technologies.filter((t) => item.ecosystem.some((e) => e.toLowerCase().includes(t.toLowerCase().split(' ')[0]))).length }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((r) => r.s);

  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title={item.name}
        lead={item.summary}
        crumbs={[{ name: 'Technology', href: '/technology' }, { name: item.name, href: `/technology/${item.slug}` }]}
        visual={pageVisual(`technology/${item.slug}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="h-section">Applications</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.applications.map((a) => (
                    <CheckItem key={a}>{a}</CheckItem>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="h-section">Ecosystem & platforms</h2>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {item.ecosystem.map((e) => (
                    <span key={e} className="rounded-md border border-ink-200 bg-ink-50 px-3 py-1.5 font-mono text-sm text-ink-700">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <aside className="space-y-6">
              {relatedSolutions.length > 0 ? (
                <div className="card">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-400">Related solutions</h2>
                  <ul className="mt-4 space-y-3">
                    {relatedSolutions.slice(0, 5).map((s) => (
                      <li key={s.slug}>
                        <a href={`/solutions/${s.slug}`} className="text-sm font-medium text-signal-600 hover:text-signal-700">
                          {s.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="relative overflow-hidden rounded-lg bg-callout p-6 text-white">
                <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative">
                  <h2 className="text-base font-semibold">{item.name} in your enterprise?</h2>
                  <p className="mt-2 text-sm text-white/80">
                    Discuss how this technology fits your transformation.
                  </p>
                  <a href="/contact" className="btn-primary mt-5 w-full bg-white text-signal-700 hover:bg-white/90">
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
