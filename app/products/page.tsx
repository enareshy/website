import type { Metadata } from 'next';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { StatusBadge } from '@/components/ui/cards';
import { Icon, type IconName } from '@/components/ui/icon';
import { content } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';
import type { ProductStatus } from '@/lib/content-types';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Products — Enterprise Technology Product Ecosystem',
    description:
      'Hiindsight product ecosystem: from the Digital Twin Suite and Hiindsight University to in-development products like BOM and variant management, engineering and manufacturing intelligence, and coming-soon AI copilots.',
  },
  '/products'
);

const statusOrder: { status: ProductStatus; label: string }[] = [
  { status: 'available', label: 'Available' },
  { status: 'in-development', label: 'In Development' },
  { status: 'coming-soon', label: 'Coming Soon' },
];

export default function ProductsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="A product ecosystem built from delivery experience"
        lead="Hiindsight is turning years of engineering and manufacturing delivery into products. Every product is labeled honestly — we never present a concept as a shipped product."
        crumbs={[{ name: 'Products', href: '/products' }]}
        actions={[{ label: 'Discuss Your Challenge', href: '/contact' }]}
        visual={pageVisual('products')}
      />
      {statusOrder.map((group) => {
        const items = content.products.filter((p) => p.status === group.status);
        if (items.length === 0) return null;
        return (
          <section key={group.status} className="section-pad first:pt-0">
            <div className="container-site">
              <h2 className="h-section">{group.label}</h2>
              <p className="mt-2 text-sm text-ink-500">
                {group.status === 'available'
                  ? 'Live offerings you can access today.'
                  : group.status === 'in-development'
                  ? 'Being productized from verified delivery experience. Not yet generally available.'
                  : 'Future roadmap concepts. Not yet products.'}
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <article key={p.slug} className="card group flex h-full flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="icon-tile">
                        <Icon name={p.icon as IconName} className="h-6 w-6" />
                      </span>
                      <StatusBadge status={p.status} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-ink-900">
                      <a href={`/products/${p.slug}`} className="transition-colors group-hover:text-signal-600">
                        {p.name}
                      </a>
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{p.summary}</p>
                    <a href={`/products/${p.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-600 hover:text-signal-700">
                      View details <Icon name="arrowRight" className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <CtaBand
        title="Want early access to a product?"
        lead="Tell us which product ecosystem capability matters most to your enterprise."
      />
    </>
  );
}
