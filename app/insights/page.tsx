import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';
import type { InsightCategory } from '@/lib/content-types';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Insights — Articles, Case Studies, Whitepapers & Research',
    description:
      'Perspectives on PLM, digital thread, digital twin, AI in engineering and manufacturing, and enterprise transformation.',
  },
  '/insights'
);

const categories: { key: InsightCategory; label: string }[] = [
  { key: 'articles', label: 'Articles' },
  { key: 'case-studies', label: 'Case Studies' },
  { key: 'whitepapers', label: 'Whitepapers' },
  { key: 'videos', label: 'Videos' },
  { key: 'podcasts', label: 'Podcasts' },
  { key: 'webinars', label: 'Webinars' },
  { key: 'research', label: 'Research' },
];

export default function InsightsHubPage() {
  const featured = [
    ...content.insights
      .filter((i) => i.featured)
      .map((i) => ({ slug: i.slug, title: i.title, excerpt: i.excerpt, publishedAt: i.publishedAt, href: `/insights/${i.category}/${i.slug}`, kind: 'Featured' as const })),
    ...content.caseStudies
      .filter((cs) => cs.featured)
      .map((cs) => ({ slug: cs.slug, title: cs.title, excerpt: cs.challenge, publishedAt: cs.publishedAt, href: `/insights/case-studies/${cs.slug}`, kind: 'Case Study' as const })),
  ].slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Perspectives on the intelligent enterprise"
        lead="Articles, case studies, whitepapers, videos, podcasts, webinars and research on engineering, manufacturing and AI transformation."
        crumbs={[{ name: 'Insights', href: '/insights' }]}
        visual={pageVisual('insights')}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="flex flex-wrap items-center gap-2.5">
            <Link href="/insights" className="btn-secondary px-4 py-2 text-xs">
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.key}
                href={`/insights/${c.key}`}
                className="rounded-md border border-ink-200 px-4 py-2 text-xs font-medium text-ink-500 transition-colors hover:border-signal-500 hover:text-signal-600"
              >
                {c.label}
              </Link>
            ))}
          </div>

          {featured.length > 0 ? (
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {featured.map((item, i) => (
                <article key={item.slug} className="card group flex h-full flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="-mx-6 -mt-6 mb-5 bg-gradient-to-r from-signal-500 to-data-500 px-6 py-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-white/90">{item.kind}</p>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900">
                    <Link href={item.href} className="transition-colors group-hover:text-signal-600">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{item.excerpt}</p>
                  <p className="mt-4 font-mono text-xs text-ink-400">{item.publishedAt}</p>
                </article>
              ))}
            </div>
          ) : null}

          <div className="mt-12">
            <h2 className="h-section">Latest insights</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.insights.slice(0, 6).map((item, i) => (
                <article key={item.slug} className="card group transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className={`icon-tile ${i % 2 === 0 ? 'bg-gradient-to-br from-signal-500 to-signal-700 shadow-signal-500/25' : 'bg-gradient-to-br from-data-500 to-data-700 shadow-data-500/25'}`}>
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
                        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5M8 7h8m-8 4h8" />
                      </svg>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-ink-300">{item.category}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">
                    <Link href={`/insights/${item.category}/${item.slug}`} className="transition-colors group-hover:text-signal-600">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.excerpt}</p>
                  <p className="mt-4 font-mono text-xs text-ink-400">{item.publishedAt}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
