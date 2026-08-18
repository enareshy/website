import Link from 'next/link';
import Image from 'next/image';
import { ButtonLink, SectionHeading, CheckItem } from '@/components/ui/primitives';
import { IconCard, StatusBadge } from '@/components/ui/cards';
import { Icon, type IconName } from '@/components/ui/icon';
import { DigitalThreadVisualization } from '@/components/viz/digital-thread';
import { HeroVisual } from '@/components/viz/hero-visual';
import { CtaBand } from '@/components/sections/page-header';
import { siteConfig } from '@/lib/site-config';
import { content } from '@/content';

const gap = [
  { title: 'Legacy systems', summary: 'Aging platforms that hold core knowledge but resist change and integration.' },
  { title: 'Data silos', summary: 'PLM, ERP, MES and IoT each hold a fragment of the truth — disconnected.' },
  { title: 'Disconnected processes', summary: 'Engineering, manufacturing and service run on separate tracks.' },
  { title: 'Complex BOMs', summary: 'Uncontrolled structures, variants and changes that travel into production.' },
  { title: 'Manual work', summary: 'Engineers and planners buried in administration, checks and re-entry.' },
  { title: 'Technical debt', summary: 'Slow engineering and manufacturing cycles that compound over time.' },
];

const capabilities = content.transform.map((t) => ({
  title: t.name,
  summary: t.summary,
  href: `/transform/${t.slug}`,
  icon: t.icon as IconName,
}));

const aiUseCases = [
  { title: 'Engineering', summary: 'Insight into designs, BOMs and change patterns to accelerate decisions.' },
  { title: 'BOM & Change', summary: 'Intelligence that surfaces impact and risk before change is released.' },
  { title: 'Manufacturing', summary: 'ML on MES and IIoT data to detect failures and improve productivity.' },
  { title: 'Quality', summary: 'Predictive signals that catch quality issues earlier on the line.' },
  { title: 'Maintenance & Service', summary: 'Preventive and predictive maintenance from product telemetry.' },
  { title: 'Knowledge', summary: 'Fast access to engineering and manufacturing knowledge across the enterprise.' },
];

const why = [
  {
    title: 'Verified experience',
    summary:
      'Delivery experience at leading global enterprises across automotive, aerospace and defence, energy and industrial manufacturing.',
    icon: 'briefcase' as IconName,
    tile: 'from-signal-500 to-signal-700',
  },
  {
    title: 'Engineering expertise',
    summary:
      'Deep PDM/PLM, CAD, digital manufacturing, MES/MOM and MRO capability built over years of hands-on delivery.',
    icon: 'compass' as IconName,
    tile: 'from-data-500 to-data-700',
  },
  {
    title: 'Enterprise transformation',
    summary:
      'Process-first, roadmap-driven, agile delivery with techno-functional experts and PMP-managed programs.',
    icon: 'layers' as IconName,
    tile: 'from-signal-600 to-data-600',
  },
  {
    title: 'Technology depth',
    summary:
      'Siemens, Dassault, Aras and SAP ecosystem expertise, plus IIoT and machine learning in production.',
    icon: 'system' as IconName,
    tile: 'from-signal-400 to-signal-600',
  },
  {
    title: 'AI & product thinking',
    summary:
      'Practical AI applied to engineering and manufacturing — and a product ecosystem built from real delivery experience.',
    icon: 'brain' as IconName,
    tile: 'from-data-400 to-data-600',
  },
];

const featuredProducts = content.products.slice(0, 6);
const featuredCaseStudies = content.caseStudies.filter((cs) => cs.featured);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 opacity-40" aria-hidden="true">
          <Image
            src="/visuals/circuit-bg.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-site section-pad">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-data-400/40 bg-data-400/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-data-300">
                <span className="h-1.5 w-1.5 rounded-full bg-data-400" aria-hidden="true" />
                Enterprise Technology &amp; AI Transformation
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
                Build the <span className="gradient-text">Intelligent</span> Enterprise
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
                {siteConfig.description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/contact">{siteConfig.cta.primary}</ButtonLink>
                <ButtonLink
                  href="/transform"
                  variant="secondary"
                  className="border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/60 hover:bg-white/15"
                >
                  {siteConfig.cta.secondary}
                </ButtonLink>
              </div>
              <dl className="mt-10 grid max-w-xl grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4">
                {[
                  { k: 'Transform', v: 'Engineering & Mfg' },
                  { k: 'Connect', v: 'PLM · ERP · MES' },
                  { k: 'Twin', v: 'Product · Production · Performance' },
                  { k: 'Productize', v: 'Digital product ecosystem' },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-data-300">{s.k}</dt>
                    <dd className="mt-1 text-sm font-semibold text-white">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-signal-500/20 blur-[80px]" aria-hidden="true" />
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* THE TRANSFORMATION GAP */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="The Transformation Gap"
            title={
              <>
                Most enterprises don&rsquo;t need more tools. They need a{' '}
                <span className="gradient-text">connected way to work</span>.
              </>
            }
            lead="Legacy systems, data silos and disconnected processes keep engineering and manufacturing from moving at the speed the market demands."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gap.map((g, i) => (
              <div key={g.title} className="card group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                <span
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-10 transition-opacity group-hover:opacity-25"
                  style={{ background: i % 2 === 0 ? '#0066F5' : '#00C2A8' }}
                  aria-hidden="true"
                />
                <span className="font-mono text-sm font-semibold text-signal-500">0{i + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-ink-900">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{g.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DIGITAL THREAD */}
      <section className="relative overflow-hidden bg-signal-gradient py-16 text-white sm:py-20 lg:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative container-site">
          <SectionHeading
            eyebrow="The Digital Thread"
            title="Connect Concept to Service. Turn Data into Decisions."
            lead="A continuous, trusted flow of product and process data across the entire lifecycle — the backbone of the intelligent enterprise."
            align="center"
          />
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-white p-2 shadow-2xl shadow-signal-900/30">
            <DigitalThreadVisualization />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/transform/digital-thread" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white">
              Explore Digital Thread
            </ButtonLink>
            <ButtonLink href="/transform" variant="ghost" className="text-white hover:bg-white/10">
              View all Transform capabilities
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* INDUSTRIES IN ACTION */}
      <section className="relative section-pad overflow-hidden bg-ink-900 text-white">
        <div className="bg-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative container-site">
          <SectionHeading
            eyebrow="Industries in Action"
            title="Where the intelligent enterprise comes to life"
            lead="From automotive assembly lines to aerospace final assembly — the environments where Hiindsight transforms engineering and manufacturing."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: '/photos/automotive-assembly-line.webp', label: 'Automotive', href: '/industries/automotive' },
              { src: '/photos/a380-final-assembly.webp', label: 'Aerospace & Defence', href: '/industries/aerospace-defence' },
              { src: '/photos/robotic-manufacturing-4-0.webp', label: 'Industrial Manufacturing', href: '/industries/industrial-manufacturing' },
              { src: '/photos/oil-refinery-blue-hour.webp', label: 'Energy', href: '/industries/energy' },
              { src: '/photos/shipyard-construction.webp', label: 'Marine & Defence', href: '/industries/aerospace-defence' },
              { src: '/photos/data-center.webp', label: 'Enterprise Data', href: '/technology/erp-integration' },
            ].map((ph) => (
              <Link
                key={ph.src}
                href={ph.href}
                className="group relative block h-56 overflow-hidden rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-data-400/50"
              >
                <Image src={ph.src} alt={ph.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                  <span className="text-lg font-semibold text-white">{ph.label}</span>
                  <Icon name="arrowRight" className="h-5 w-5 text-data-400 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative section-pad overflow-hidden">
        <Image src="/visuals/light-bg.png" alt="" fill className="object-cover opacity-50" sizes="100vw" />
        <div className="relative container-site">
          <SectionHeading
            eyebrow="Capabilities"
            title="From PLM to AI — a full transformation toolkit"
            lead="Verified expertise across the lifecycle: engineering, manufacturing, integration and intelligent technology."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <IconCard key={c.href} title={c.title} summary={c.summary} href={c.href} icon={c.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* AI-FIRST FUTURE */}
      <section className="relative overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <Image src="/photos/robot-arm-manufacturing.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/50 to-ink-900/80" aria-hidden="true" />
        <div className="relative container-site section-pad">
          <SectionHeading
            eyebrow="AI-First Future"
            title={
              <>
                Put AI to work where the <span className="gradient-text">data already is</span>
              </>
            }
            lead="AI is practical before it is visionary. Hiindsight applies machine learning and generative AI to the data you already generate — in engineering, manufacturing, quality, service and knowledge."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiUseCases.map((ai, i) => (
              <div
                key={ai.title}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-data-400/50 hover:bg-white/[0.08]"
              >
                <span className="icon-tile from-data-500 to-data-700 shadow-data-500/25">
                  <Icon name="brain" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{ai.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{ai.summary}</p>
                <span className="absolute right-5 top-5 font-mono text-xs text-white/20">0{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/transform/ai-transformation">Explore AI Transformation</ButtonLink>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Products"
            title="A product ecosystem built from delivery experience"
            lead="Hiindsight is productizing the solutions it has delivered for years. Every product is labeled honestly: Available, In Development or Coming Soon."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <div key={p.slug} className="card group flex h-full flex-col transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <Icon name={p.icon as IconName} className="h-6 w-6" />
                  </span>
                  <StatusBadge status={p.status} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{p.summary}</p>
                <Link href="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-signal-600 transition-colors hover:text-signal-700">
                  Learn more <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/products" variant="secondary">
              Explore Products
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* WHY HIINSIGHT */}
      <section className="relative overflow-hidden bg-ink-50/60 py-16 sm:py-20 lg:py-28">
        <Image src="/visuals/light-bg.png" alt="" fill className="object-cover opacity-60" sizes="100vw" />
        <div className="relative container-site">
          <SectionHeading
            eyebrow="Why Hiindsight"
            title="An engineering company that thinks like a technology company"
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {why.map((w) => (
              <div key={w.title} className="card transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className={`icon-tile bg-gradient-to-br ${w.tile}`}>
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{w.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Case Studies"
            title="Transformation, delivered"
            lead="Challenge, transformation, solution, technology, implementation, business impact — the way Hiindsight works."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredCaseStudies.map((cs) => (
              <article key={cs.slug} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="-mx-6 -mt-6 mb-5 bg-gradient-to-r from-signal-500 to-data-500 px-6 py-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-white/90">{cs.industry}</p>
                </div>
                <h3 className="text-xl font-semibold text-ink-900">{cs.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  <strong className="font-semibold text-ink-700">Challenge:</strong> {cs.challenge}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  <strong className="font-semibold text-ink-700">Solution:</strong> {cs.solution}
                </p>
                <ul className="mt-4 space-y-2">
                  {cs.businessImpact.map((b) => (
                    <CheckItem key={b}>{b}</CheckItem>
                  ))}
                </ul>
                <Link href={`/insights/case-studies/${cs.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-signal-600 transition-colors hover:text-signal-700">
                  Read case study <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/insights/case-studies" variant="ghost">
              View all case studies
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
