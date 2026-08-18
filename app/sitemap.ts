import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { content } from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    '',
    '/transform',
    '/technology',
    '/solutions',
    '/products',
    '/industries',
    '/insights',
    '/about',
    '/careers',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookie-policy',
  ];

  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.map((r) => ({
      url: `${base}${r}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1 : 0.7,
    })),
    ...content.transform.map((i) => ({
      url: `${base}/transform/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...content.technology.map((i) => ({
      url: `${base}/technology/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...content.solutions.map((i) => ({
      url: `${base}/solutions/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...content.products.map((i) => ({
      url: `${base}/products/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...content.industries.map((i) => ({
      url: `${base}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...content.insights.map((i) => ({
      url: `${base}/insights/${i.category}/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...content.caseStudies.map((i) => ({
      url: `${base}/insights/case-studies/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...content.about.map((i) => ({
      url: `${base}/about/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  return routes;
}
