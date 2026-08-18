import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/page-header';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Privacy Policy',
    description: 'How Hiindsight Technology Pvt Ltd collects, uses and protects information submitted through this website.',
  },
  '/legal/privacy'
);

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        crumbs={[{ name: 'Legal', href: '/legal/privacy' }, { name: 'Privacy Policy', href: '/legal/privacy' }]}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-ink-500">
            <p>
              {siteConfig.legalName} ({siteConfig.name}) respects your privacy. This policy describes how we handle
              information collected through this website.
            </p>
            <h2 className="h-section text-xl">Information we collect</h2>
            <p>
              When you use the contact form, we collect the information you provide: name, company, business email, role,
              industry, challenge and optionally phone. We do not collect or store sensitive personal data through this site.
            </p>
            <h2 className="h-section text-xl">How we use it</h2>
            <p>
              We use this information to respond to your inquiry, understand your challenge and provide relevant
              information about {siteConfig.name} services. We do not sell or rent personal information to third parties.
            </p>
            <h2 className="h-section text-xl">Analytics</h2>
            <p>
              If enabled, we may use privacy-respecting web analytics to understand site usage and improve the experience.
              This may include anonymized IP addresses.
            </p>
            <h2 className="h-section text-xl">Contact</h2>
            <p>
              For privacy inquiries, contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-signal-600">{siteConfig.contact.email}</a>.
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
