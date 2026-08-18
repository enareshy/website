import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/page-header';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Cookie Policy',
    description: 'How the Hiindsight website uses cookies and similar technologies.',
  },
  '/legal/cookie-policy'
);

export default function CookiePolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        crumbs={[{ name: 'Legal', href: '/legal/cookie-policy' }, { name: 'Cookie Policy', href: '/legal/cookie-policy' }]}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-ink-500">
            <p>
              This website uses minimal cookies and similar technologies to function and, where enabled, to understand
              anonymous site usage.
            </p>
            <h2 className="h-section text-xl">Types of cookies</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Essential cookies required for site function and security.</li>
              <li>
                Analytics cookies (e.g., Google Analytics 4) used only when enabled, with anonymized IP addresses.
              </li>
            </ul>
            <h2 className="h-section text-xl">Managing cookies</h2>
            <p>
              You can control cookies through your browser settings. Disabling essential cookies may affect site behavior.
            </p>
            <p className="text-sm text-ink-400">
              This policy is a template for the new Hiindsight website. A cookie consent banner will be added when
              analytics are configured. {siteConfig.legalName} should review before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
