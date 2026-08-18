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
  return content.industries.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getBySlug(content.industries, params.slug);
  if (!item) return {};
  return buildMetadata(item.seo, `/industries/${item.slug}`);
}

export default function IndustryDetailPage({ params }: Props) {
  const item = getBySlug(content.industries, params.slug);
  if (!item) notFound();

  const relatedSolutions = content.solutions.filter((s) => item.relatedSolutions.includes(s.slug));
  const relatedCaseStudies = content.caseStudies.filter((cs) => cs.industry.toLowerCase() === item.name.toLowerCase());

  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={item.name}
        lead={item.summary}
        crumbs={[{ name: 'Industries', href: '/industries' }, { name: item.name, href: `/industries/${item.slug}` }]}
        visual={pageVisual(`industries/${item.slug}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="h-section">What we solve here</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.challenges.map((c) => (
                    <CheckItem key={c}>{c}</CheckItem>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="h-section">Where we create value</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.opportunities.map((o) => (
                    <CheckItem key={o}>{o}</CheckItem>
                  ))}
                </ul>
              </div>
              {relatedCaseStudies.length > 0 ? (
                <div>
                  <h2 className="h-section">Case studies</h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {relatedCaseStudies.map((cs) => (
                      <article key={cs.slug} className="card">
                        <h3 className="text-base font-semibold text-ink-900">
                          <a href={`/insights/case-studies/${cs.slug}`} className="hover:text-signal-600">
                            {cs.title}
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-500">{cs.challenge}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <aside className="space-y-6">
              {relatedSolutions.length > 0 ? (
                <div className="card">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-400">Relevant solutions</h2>
                  <ul className="mt-4 space-y-3">
                    {relatedSolutions.map((s) => (
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
                  <h2 className="text-base font-semibold">{item.name} transformation?</h2>
                  <p className="mt-2 text-sm text-white/80">
                    Discuss your {item.name.toLowerCase()} challenge with an expert.
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
