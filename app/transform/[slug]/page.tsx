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
  return content.transform.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getBySlug(content.transform, params.slug);
  if (!item) return {};
  return buildMetadata(item.seo, `/transform/${item.slug}`);
}

export default function TransformDetailPage({ params }: Props) {
  const item = getBySlug(content.transform, params.slug);
  if (!item) notFound();

  const related = content.transform.filter((r) => item.related.includes(r.slug));

  return (
    <>
      <PageHeader
        eyebrow="Transform"
        title={item.name}
        lead={item.summary}
        crumbs={[{ name: 'Transform', href: '/transform' }, { name: item.name, href: `/transform/${item.slug}` }]}
        visual={pageVisual(`transform/${item.slug}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              {item.body.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
              <div>
                <h2 className="h-section">What this includes</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((h) => (
                    <CheckItem key={h}>{h}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="space-y-6">
              {related.length > 0 ? (
                <div className="card">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-400">Related</h2>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <a href={`/transform/${r.slug}`} className="text-sm font-medium text-signal-600 hover:text-signal-700">
                          {r.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="relative overflow-hidden rounded-lg bg-callout p-6 text-white">
                <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative">
                  <h2 className="text-base font-semibold">Ready to transform?</h2>
                  <p className="mt-2 text-sm text-white/80">
                    Discuss your challenge with a Hiindsight transformation expert.
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
      <CtaBand
        title={`Explore ${item.name}`}
        lead="Tell us where your enterprise is stuck and we'll map the path forward."
      />
    </>
  );
}
