import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { content, getBySlug } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return content.about.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getBySlug(content.about, params.slug);
  if (!item) return {};
  return buildMetadata(item.seo, `/about/${item.slug}`);
}

export default function AboutDetailPage({ params }: Props) {
  const item = getBySlug(content.about, params.slug);
  if (!item) notFound();

  const engagementReferences =
    item.slug === 'experience'
      ? [
          'General Electric', 'BAE Systems', 'BE Aerospace', 'Turkish Aerospace Industries', 'AVIC', 'Alenia',
          'DRDO', 'Siemens', 'Volvo', 'Magna', 'Nissan', 'Alta', 'Tatra', 'Mauser', 'Kamaz', 'LM Wind Power', 'Rolls-Royce',
        ]
      : [];

  return (
    <>
      <PageHeader
        eyebrow="About"
        title={item.name}
        lead={item.summary}
        crumbs={[{ name: 'About', href: '/about' }, { name: item.name, href: `/about/${item.slug}` }]}
        visual={pageVisual(`about/${item.slug}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-6">
            {item.body.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-ink-500">
                {p}
              </p>
            ))}
            {engagementReferences.length > 0 ? (
              <div className="card mt-8">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">Published engagement references</h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {engagementReferences.map((ref) => (
                    <li key={ref} className="rounded-md border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm text-ink-700">
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
