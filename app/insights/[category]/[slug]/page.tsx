import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { CheckItem } from '@/components/ui/primitives';
import { content, getBySlug } from '@/content';
import { buildMetadata, articleSchema } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';

interface Props {
  params: { category: string; slug: string };
}

export function generateStaticParams() {
  const fromInsights = content.insights.map((i) => ({ category: i.category, slug: i.slug }));
  const fromCaseStudies = content.caseStudies.map((cs) => ({ category: 'case-studies', slug: cs.slug }));
  return [...fromInsights, ...fromCaseStudies];
}

export function generateMetadata({ params }: Props): Metadata {
  const { category, slug } = params;
  if (category === 'case-studies') {
    const cs = getBySlug(content.caseStudies, slug);
    if (!cs) return {};
    return buildMetadata(
      { title: `${cs.title} | Case Study`, description: cs.challenge },
      `/insights/case-studies/${slug}`
    );
  }
  const item = getBySlug(content.insights, slug);
  if (!item) return {};
  return buildMetadata(item.seo, `/insights/${category}/${slug}`);
}

export default function InsightDetailPage({ params }: Props) {
  const { category, slug } = params;

  if (category === 'case-studies') {
    const cs = getBySlug(content.caseStudies, slug);
    if (!cs) notFound();
    const related = content.solutions.filter((s) =>
      cs.solution.toLowerCase().split(' ').some((w) => w.length > 4 && s.name.toLowerCase().includes(w))
    );
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(cs.title, cs.challenge, cs.publishedAt)) }} />
        <PageHeader
          eyebrow={cs.industry}
          title={cs.title}
          lead={cs.client}
          crumbs={[{ name: 'Insights', href: '/insights' }, { name: 'Case Studies', href: '/insights/case-studies' }, { name: cs.title, href: `/insights/case-studies/${cs.slug}` }]}
          actions={[{ label: 'Talk to an Expert', href: '/contact' }]}
          visual={pageVisual(`insights/case-studies/${cs.slug}`)}
        />
        <section className="section-pad">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                {[
                  { label: 'Challenge', text: cs.challenge },
                  { label: 'Transformation', text: cs.transformation },
                  { label: 'Solution', text: cs.solution },
                  { label: 'Technology', text: cs.technology },
                  { label: 'Implementation', text: cs.implementation },
                ].map((b) => (
                  <div key={b.label} className="card">
                    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">{b.label}</h2>
                    <p className="mt-3 text-base leading-relaxed text-ink-700">{b.text}</p>
                  </div>
                ))}
                <div>
                  <h2 className="h-section">Business impact</h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {cs.businessImpact.map((b) => (
                      <CheckItem key={b}>{b}</CheckItem>
                    ))}
                  </ul>
                </div>
              </div>
              <aside className="space-y-6">
                <div className="card">
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-400">Published</p>
                  <p className="mt-2 text-sm text-ink-700">{cs.publishedAt}</p>
                  {related.length > 0 ? (
                    <>
                      <h2 className="mt-6 text-sm font-semibold uppercase tracking-widest text-ink-400">Related solutions</h2>
                      <ul className="mt-3 space-y-2">
                        {related.slice(0, 4).map((s) => (
                          <li key={s.slug}>
                            <Link href={`/solutions/${s.slug}`} className="text-sm font-medium text-signal-600 hover:text-signal-700">
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
                <div className="relative overflow-hidden rounded-lg bg-callout p-6 text-white">
                  <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
                  <div className="relative">
                    <h2 className="text-base font-semibold">Facing a similar challenge?</h2>
                    <p className="mt-2 text-sm text-white/80">Discuss it with a Hiindsight transformation expert.</p>
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

  const item = getBySlug(content.insights, slug);
  if (!item) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(item.title, item.excerpt, item.publishedAt)) }} />
      <PageHeader
        eyebrow={item.category}
        title={item.title}
        lead={item.excerpt}
        crumbs={[{ name: 'Insights', href: '/insights' }, { name: item.category, href: `/insights/${item.category}` }, { name: item.title, href: `/insights/${item.category}/${item.slug}` }]}
        actions={[{ label: 'Talk to an Expert', href: '/contact' }]}
        visual={pageVisual(`insights/${item.category}/${item.slug}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-8">
            {item.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="h-section">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-base leading-relaxed text-ink-500">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <div className="flex flex-wrap gap-3 border-t border-ink-100 pt-8">
              <Link href="/contact" className="btn-primary">
                Discuss Your Challenge
              </Link>
              <Link href="/insights" className="btn-secondary">
                Back to Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
