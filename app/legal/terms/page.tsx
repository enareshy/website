import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/page-header';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Terms of Use',
    description: 'Terms of use for the Hiindsight website.',
  },
  '/legal/terms'
);

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        crumbs={[{ name: 'Legal', href: '/legal/terms' }, { name: 'Terms of Use', href: '/legal/terms' }]}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-ink-500">
            <p>
              These terms govern your use of the {siteConfig.name} website. By using this site, you agree to these terms.
            </p>
            <h2 className="h-section text-xl">Content</h2>
            <p>
              Website content about capabilities and services is provided for information purposes and does not constitute a
              contractual offer. Specific engagements are governed by separate agreements.
            </p>
            <h2 className="h-section text-xl">Products</h2>
            <p>
              Products labeled &ldquo;In Development&rdquo; or &ldquo;Coming Soon&rdquo; are not yet generally available. Availability and
              timelines are indicative only.
            </p>
            <h2 className="h-section text-xl">Intellectual property</h2>
            <p>
              All content, branding and trademarks on this site belong to {siteConfig.legalName} or their respective owners.
            </p>
            <p className="text-sm text-ink-400">
              This policy is a template for the new Hiindsight website and should be reviewed by Hiindsight before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
