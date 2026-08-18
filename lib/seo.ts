import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import type { Seo } from '@/lib/content-types';

export function buildMetadata(seo: Seo, path: string): Metadata {
  const url = new URL(path, siteConfig.url);
  const title = seo.title.replace(/\s*\|\s*Hiindsight\s*$/, '').trim();
  return {
    title,
    description: seo.description,
    alternates: { canonical: url.toString() },
    openGraph: {
      type: 'website',
      url: url.toString(),
      siteName: siteConfig.name,
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500048',
      addressCountry: 'IN',
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.href, siteConfig.url).toString(),
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function articleSchema(title: string, description: string, publishedAt: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    author: {
      '@type': 'Organization',
      name: siteConfig.legalName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };
}
