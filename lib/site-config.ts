export const siteConfig = {
  name: 'Hiindsight',
  legalName: 'Hiindsight Technology Pvt Ltd',
  tagline: 'Transform Engineering. Transform Manufacturing. Build the Intelligent Enterprise.',
  description:
    'Hiindsight helps engineering and manufacturing organizations transform products, processes, data and technology into intelligent digital enterprises.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hiindsight.com',
  contact: {
    email: 'contactus@hiindsight.com',
    phone: '+91 8008345672',
    location: 'Hyderabad, Telangana, India — 500048',
  },
  cta: {
    primary: 'Start Your Transformation',
    secondary: 'Explore Our Capabilities',
    expert: 'Talk to an Expert',
    challenge: 'Discuss Your Challenge',
  },
} as const;

export type SiteConfig = typeof siteConfig;
