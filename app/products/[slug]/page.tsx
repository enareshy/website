import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { StatusBadge } from '@/components/ui/cards';
import { CheckItem } from '@/components/ui/primitives';
import { content, getBySlug } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';
import type { ProductStatus } from '@/lib/content-types';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return content.products.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getBySlug(content.products, params.slug);
  if (!item) return {};
  return buildMetadata(item.seo, `/products/${item.slug}`);
}

export default function ProductDetailPage({ params }: Props) {
  const item = getBySlug(content.products, params.slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Products"
        title={item.name}
        lead={item.summary}
        crumbs={[{ name: 'Products', href: '/products' }, { name: item.name, href: `/products/${item.slug}` }]}
        actions={[{ label: 'Talk to an Expert', href: '/contact' }]}
        visual={pageVisual(`products/${item.slug}`)}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="h-section">What it covers</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.modules.map((m) => (
                    <CheckItem key={m}>{m}</CheckItem>
                  ))}
                </ul>
              </div>
              {item.roadmapNote ? (
                <div className="card border-data-200 bg-data-50">
                  <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-data-700">Status note</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.roadmapNote}</p>
                </div>
              ) : null}
            </div>
            <aside className="space-y-6">
              <div className="card">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-400">Status</h2>
                  <StatusBadge status={item.status as ProductStatus} />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-callout p-6 text-white">
                <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative">
                  <h2 className="text-base font-semibold">Interested in {item.name}?</h2>
                  <p className="mt-2 text-sm text-white/80">
                    Get in touch and we&rsquo;ll discuss how it fits your enterprise.
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
