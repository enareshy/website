import type { ReactNode } from 'react';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { ButtonLink } from '@/components/ui/primitives';

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  actions,
  visual,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: { name: string; href: string }[];
  actions?: { label: string; href: string; variant?: 'primary' | 'secondary' }[];
  visual?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ink-50/70">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-signal-500 via-data-400 to-signal-500" aria-hidden="true" />
      <Image src="/visuals/light-bg.png" alt="" fill className="object-cover opacity-60" sizes="100vw" priority />
      <div className="relative container-site section-pad pb-10 pt-8 sm:pb-14 sm:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            {crumbs ? <Breadcrumbs items={crumbs} /> : null}
            <div className="mt-6 max-w-3xl">
              {eyebrow ? (
                <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-signal-200 bg-signal-50 px-3 py-1">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="h-display mt-3 text-balance">{title}</h1>
              {lead ? <p className="lead mt-5">{lead}</p> : null}
              {actions && actions.length > 0 ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {actions.map((a) => (
                    <ButtonLink key={a.href} href={a.href} variant={a.variant ?? 'primary'}>
                      {a.label}
                    </ButtonLink>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          {visual ? (
            <div className="relative hidden h-72 w-full overflow-hidden rounded-xl border border-ink-100 shadow-lg lg:block">
              <Image src={visual} alt="" fill className="object-cover" sizes="400px" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20" aria-hidden="true" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = 'Discuss Your Challenge',
  lead = 'Tell us where your enterprise is stuck. We will map the path from disconnected systems to an intelligent enterprise.',
  primary = { label: 'Talk to an Expert', href: '/contact' },
  secondary,
}: {
  title?: string;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-callout text-white">
      <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="container-site relative py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="h-section text-balance">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={primary.href} className="bg-white text-signal-700 hover:bg-white/90">
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink href={secondary.href} variant="secondary" className="border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/20">
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
