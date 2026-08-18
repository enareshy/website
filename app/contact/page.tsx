import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/page-header';
import { pageVisual } from '@/lib/visual';
import { ContactForm } from '@/components/sections/contact-form';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = buildMetadata(
  {
    title: 'Contact — Talk to an Expert',
    description:
      'Contact Hiindsight to discuss your engineering and manufacturing transformation challenge. Simple form: name, company, email, role, industry and challenge.',
  },
  '/contact'
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discuss Your Challenge"
        lead="Tell us where your enterprise is stuck. A Hiindsight transformation expert will respond with a clear, practical path forward."
        crumbs={[{ name: 'Contact', href: '/contact' }]}
        visual={pageVisual('contact')}
      />
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div className="card">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-ink-400">Contact details</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 font-medium text-ink-700 hover:text-signal-600">
                      <Icon name="mail" className="h-5 w-5 text-signal-500" />
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 font-medium text-ink-700 hover:text-signal-600">
                      <Icon name="phone" className="h-5 w-5 text-signal-500" />
                      {siteConfig.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-ink-700">
                    <Icon name="pin" className="h-5 w-5 text-signal-500" />
                    {siteConfig.contact.location}
                  </li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-callout p-6 text-white">
                <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
                <div className="relative">
                  <h2 className="text-base font-semibold">What to expect</h2>
                  <ul className="mt-4 space-y-3 text-sm text-white/85">
                    <li>1. We listen to your challenge and context.</li>
                    <li>2. We respond with a clear assessment and proposed path.</li>
                    <li>3. If it fits, we start with a focused discovery workshop.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
