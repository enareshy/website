import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';
import type { InsightCategory } from '@/lib/content-types';

const categories: InsightCategory[] = [
  'articles',
  'case-studies',
  'whitepapers',
  'videos',
  'podcasts',
  'webinars',
  'research',
];

const labels: Record<InsightCategory, string> = {
  articles: 'Articles',
  'case-studies': 'Case Studies',
  whitepapers: 'Whitepapers',
  videos: 'Videos',
  podcasts: 'Podcasts',
  webinars: 'Webinars',
  research: 'Research',
};

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return categories.map((category) => ({ category }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (!categories.includes(params.category as InsightCategory)) return {};
  const label = labels[params.category as InsightCategory];
  return buildMetadata(
    {
      title: `${label} — Insights`,
      description: `${label} on engineering and manufacturing transformation from Hiindsight.`,
    },
    `/insights/${params.category}`
  );
}

export default function InsightCategoryPage({ params }: Props) {
  const category = params.category as InsightCategory;
  if (!categories.includes(category)) notFound();

  const isCaseStudy = category === 'case-studies';
  const items = isCaseStudy
    ? content.caseStudies.map((cs) => ({
        slug: cs.slug,
        title: cs.title,
        excerpt: cs.challenge,
        publishedAt: cs.publishedAt,
        href: `/insights/case-studies/${cs.slug}`,
        industry: cs.industry,
      }))
    : content.insights
        .filter((i) => i.category === category)
        .map((i) => ({
          slug: i.slug,
          title: i.title,
          excerpt: i.excerpt,
          publishedAt: i.publishedAt,
          href: `/insights/${category}/${i.slug}`,
          industry: null,
        }));

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={labels[category]}
        lead={`${labels[category]} on engineering, manufacturing and AI transformation from Hiindsight.`}
        crumbs={[{ name: 'Insights', href: '/insights' }, { name: labels[category], href: `/insights/${category}` }]}
        visual={pageVisual(`insights/${category}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          {items.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <article key={item.slug} className="card group flex h-full flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className={`icon-tile ${i % 2 === 0 ? '' : 'bg-gradient-to-br from-data-500 to-data-700 shadow-data-500/25'}`}>
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
                        <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5M8 7h8m-8 4h8" />
                      </svg>
                    </span>
                    <span className="font-mono text-xs text-ink-300">0{i + 1}</span>
                  </div>
                  {item.industry ? (
                    <p className="mt-4 font-mono text-xs uppercase tracking-widest text-data-600">{item.industry}</p>
                  ) : (
                    <p className="mt-4 font-mono text-xs uppercase tracking-widest text-signal-500">{labels[category]}</p>
                  )}
                  <h3 className="mt-1 text-base font-semibold text-ink-900">
                    <Link href={item.href} className="transition-colors group-hover:text-signal-600">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{item.excerpt}</p>
                  <p className="mt-4 font-mono text-xs text-ink-400">{item.publishedAt}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="card max-w-xl">
              <h2 className="text-lg font-semibold">Coming soon</h2>
              <p className="mt-2 text-sm text-ink-500">
                Hiindsight {labels[category].toLowerCase()} are being published. Check back soon, or get in touch to discuss
                your challenge.
              </p>
              <Link href="/contact" className="btn-primary mt-6">
                Talk to an Expert
              </Link>
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
