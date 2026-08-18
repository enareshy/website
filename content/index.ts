import { transformItems } from './transform';
import { technologyItems } from './technology';
import { solutionItems } from './solutions';
import { productItems } from './products';
import { industryItems } from './industries';
import { insightItems, caseStudies } from './insights';
import { aboutItems } from './about';
import { careers, careersIntro } from './careers';

export const content = {
  transform: transformItems,
  technology: technologyItems,
  solutions: solutionItems,
  products: productItems,
  industries: industryItems,
  insights: insightItems,
  caseStudies,
  about: aboutItems,
  careers,
};

export { careersIntro };

export function getBySlug<T extends { slug: string }>(items: T[], slug: string): T | undefined {
  return items.find((item) => item.slug === slug);
}
