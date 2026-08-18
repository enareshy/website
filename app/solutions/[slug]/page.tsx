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
  return content.solutions.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getBySlug(content.solutions, params.slug);
  if (!item) return {};
  return buildMetadata(item.seo, `/solutions/${item.slug}`);
}

export default function SolutionDetailPage({ params }: Props) {
  const item = getBySlug(content.solutions, params.slug);
  if (!item) notFound();

  const relatedIndustries = content.industries.filter((ind) => ind.relatedSolutions.includes(item.slug));

  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title={item.name}
        lead={item.summary}
        crumbs={[{ name: 'Solutions', href: '/solutions' }, { name: item.name, href: `/solutions/${item.slug}` }]}
        visual={pageVisual(`solutions/${item.slug}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div className="card">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">The challenge</h2>
                <p className="mt-3 lead">{item.challenge}</p>
              </div>
              <div className="card">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Our approach</h2>
                <p className="mt-3 lead">{item.approach}</p>
              </div>
              <div>
                <h2 className="h-section">Outcomes</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.outcomes.map((o) => (
                    <CheckItem key={o}>{o}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="card">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-400">Technologies</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((t) => (
                    <span key={t} className="rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1 font-mono text-xs text-ink-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {relatedIndustries.length > 0 ? (
                <div className="card">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-400">Industries</h2>
                  <ul className="mt-4 space-y-3">
                    {relatedIndustries.map((i) => (
                      <li key={i.slug}>
                        <a href={`/industries/${i.slug}`} className="text-sm font-medium text-signal-600 hover:text-signal-700">
                          {i.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="relative overflow-hidden rounded-lg bg-callout p-6 text-white">
                <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative">
                  <h2 className="text-base font-semibold">Discuss this solution</h2>
                  <p className="mt-2 text-sm text-white/80">
                    Let&rsquo;s talk about your {item.name.toLowerCase()} challenge.
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
        title={`Ready to address ${item.name}?`}
        lead="Share your challenge and we'll propose a path."
      />
    </>
  );
}
