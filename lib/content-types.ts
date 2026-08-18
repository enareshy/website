export type ProductStatus = 'available' | 'in-development' | 'coming-soon';

export interface Seo {
  title: string;
  description: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface TransformItem {
  slug: string;
  name: string;
  summary: string;
  seo: Seo;
  body: string[];
  highlights: string[];
  related: string[];
  icon: string;
}

export interface TechnologyItem {
  slug: string;
  name: string;
  category: string;
  summary: string;
  seo: Seo;
  applications: string[];
  ecosystem: string[];
  icon: string;
}

export interface SolutionItem {
  slug: string;
  name: string;
  summary: string;
  seo: Seo;
  challenge: string;
  approach: string;
  outcomes: string[];
  technologies: string[];
  icon: string;
}

export interface ProductItem {
  slug: string;
  name: string;
  status: ProductStatus;
  summary: string;
  seo: Seo;
  modules: string[];
  roadmapNote?: string;
  icon: string;
}

export interface IndustryItem {
  slug: string;
  name: string;
  summary: string;
  seo: Seo;
  challenges: string[];
  opportunities: string[];
  relatedSolutions: string[];
  icon: string;
}

export type InsightCategory =
  | 'articles'
  | 'case-studies'
  | 'whitepapers'
  | 'videos'
  | 'podcasts'
  | 'webinars'
  | 'research';

export interface InsightItem {
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  seo: Seo;
  publishedAt: string;
  featured?: boolean;
  sections: { heading: string; paragraphs: string[] }[];
}

export interface AboutItem {
  slug: string;
  name: string;
  summary: string;
  seo: Seo;
  body: string[];
  icon: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  client: string;
  challenge: string;
  transformation: string;
  solution: string;
  technology: string;
  implementation: string;
  businessImpact: string[];
  publishedAt: string;
  featured?: boolean;
}
