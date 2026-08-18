import type { Metadata } from 'next';
import { PageHeader, CtaBand } from '@/components/sections/page-header';
import { content, careersIntro } from '@/content';
import { buildMetadata } from '@/lib/seo';
import { pageVisual } from '@/lib/visual';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Careers — Join the Hiindsight Expert Network',
    description:
      "Join Hiindsight's expert global network: PLM consultants, digital manufacturing experts, AI/ML engineers and integration specialists.",
  },
  '/careers'
);

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join an expert global network"
        lead={careersIntro}
        crumbs={[{ name: 'Careers', href: '/careers' }]}
        actions={[{ label: 'Talk to an Expert', href: '/contact' }]}
        visual={pageVisual('careers')}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.careers.map((c, i) => (
              <article key={c.slug} className="card group flex h-full flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="9" cy="8" r="4" />
                      <path d="M3 21v-1a6 6 0 0 1 12 0v1M16 4.5a4 4 0 0 1 0 7M17 21v-1a6 6 0 0 0-3-5.2" />
                    </svg>
                  </span>
                  <span className="font-mono text-xs text-ink-300">0{i + 1}</span>
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-widest text-data-600">{c.department}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-400">
                  {c.location} · {c.employmentType}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{c.description}</p>
                <a href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-600 hover:text-signal-700">
                  Apply via contact <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Don't see your role?"
        lead="Hiindsight hires exceptional PLM, manufacturing and AI talent continuously. Get in touch."
      />
    </>
  );
}
