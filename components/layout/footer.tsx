import Link from 'next/link';
import { Logo } from './logo';
import { siteConfig } from '@/lib/site-config';
import { Icon } from '@/components/ui/icon';
import { photoCredits } from '@/content/photo-credits';

const columns = [
  {
    title: 'Transform',
    links: [
      { label: 'Digital Transformation', href: '/transform/digital-transformation' },
      { label: 'Engineering Transformation', href: '/transform/engineering-transformation' },
      { label: 'Manufacturing Transformation', href: '/transform/manufacturing-transformation' },
      { label: 'PLM Transformation', href: '/transform/plm-transformation' },
      { label: 'AI Transformation', href: '/transform/ai-transformation' },
      { label: 'Digital Twin', href: '/transform/digital-twin' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'BOM Management', href: '/solutions/bom-management' },
      { label: 'Product Data Management', href: '/solutions/product-data-management' },
      { label: 'Variant Management', href: '/solutions/variant-management' },
      { label: 'Engineering Change', href: '/solutions/engineering-change-management' },
      { label: 'Enterprise Integration', href: '/solutions/enterprise-integration' },
      { label: 'AI for Manufacturing', href: '/solutions/ai-for-manufacturing' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'PLM / PDM', href: '/technology/plm-pdm' },
      { label: 'MES / MOM', href: '/technology/mes-mom' },
      { label: 'Digital Manufacturing', href: '/technology/digital-manufacturing' },
      { label: 'Digital Twin', href: '/technology/digital-twin' },
      { label: 'AI / GenAI', href: '/technology/ai-genai' },
      { label: 'IoT / IIoT', href: '/technology/iot' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Why Hiindsight', href: '/about/why-hiindsight' },
      { label: 'Experience', href: '/about/experience' },
      { label: 'Partnerships', href: '/about/partnerships' },
      { label: 'Careers', href: '/careers' },
      { label: 'Insights', href: '/insights' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-100 bg-ink-50 text-ink-500">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-signal-500 via-data-400 to-signal-500" aria-hidden="true" />
      <div className="container-site py-14">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 transition-colors hover:text-signal-600"
              >
                <Icon name="mail" className="h-4 w-4" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-signal-600"
              >
                <Icon name="phone" className="h-4 w-4" />
                {siteConfig.contact.phone}
              </a>
              <p className="flex items-center gap-2">
                <Icon name="pin" className="h-4 w-4" />
                {siteConfig.contact.location}
              </p>
            </div>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-900">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-signal-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-ink-100 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link href="/legal/privacy" className="transition-colors hover:text-signal-600">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="transition-colors hover:text-signal-600">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/legal/cookie-policy" className="transition-colors hover:text-signal-600">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="transition-colors hover:text-signal-600">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
        <details className="mt-4 text-xs leading-relaxed text-ink-400">
          <summary className="cursor-pointer select-none font-medium text-ink-500 transition-colors hover:text-signal-600">
            Photography credits
          </summary>
          <ul className="mt-3 space-y-1">
            {photoCredits.map((p) => (
              <li key={p.key}>
                <span className="italic">{p.title}</span> — {p.author} ({p.lic})
              </li>
            ))}
          </ul>
          <p className="mt-2">Photographs are used under their respective licenses and depict representative industrial settings, not Hiindsight facilities or clients.</p>
        </details>
      </div>
    </footer>
  );
}
