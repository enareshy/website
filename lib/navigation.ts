export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: 'Transform',
    href: '/transform',
    children: [
      { label: 'Digital Transformation', href: '/transform/digital-transformation' },
      { label: 'Engineering Transformation', href: '/transform/engineering-transformation' },
      { label: 'Manufacturing Transformation', href: '/transform/manufacturing-transformation' },
      { label: 'PLM Transformation', href: '/transform/plm-transformation' },
      { label: 'Digital Thread', href: '/transform/digital-thread' },
      { label: 'AI Transformation', href: '/transform/ai-transformation' },
      { label: 'Digital Twin', href: '/transform/digital-twin' },
    ],
  },
  {
    label: 'Technology',
    href: '/technology',
    children: [
      { label: 'PLM / PDM', href: '/technology/plm-pdm' },
      { label: 'MES / MOM', href: '/technology/mes-mom' },
      { label: 'ERP Integration', href: '/technology/erp-integration' },
      { label: 'Digital Manufacturing', href: '/technology/digital-manufacturing' },
      { label: 'Digital Twin', href: '/technology/digital-twin' },
      { label: 'MBSE', href: '/technology/mbse' },
      { label: 'AI / GenAI', href: '/technology/ai-genai' },
      { label: 'Machine Learning', href: '/technology/machine-learning' },
      { label: 'IoT / IIoT', href: '/technology/iot' },
      { label: 'Intelligent Automation', href: '/technology/intelligent-automation' },
      { label: 'Enterprise Integration', href: '/technology/enterprise-integration' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'BOM Management', href: '/solutions/bom-management' },
      { label: 'Product Data Management', href: '/solutions/product-data-management' },
      { label: 'Variant Management', href: '/solutions/variant-management' },
      { label: 'Engineering Change Management', href: '/solutions/engineering-change-management' },
      { label: 'Digital Manufacturing', href: '/solutions/digital-manufacturing' },
      { label: 'Engineering Automation', href: '/solutions/engineering-automation' },
      { label: 'Enterprise Integration', href: '/solutions/enterprise-integration' },
      { label: 'AI for Engineering', href: '/solutions/ai-for-engineering' },
      { label: 'AI for Manufacturing', href: '/solutions/ai-for-manufacturing' },
      { label: 'Digital Thread', href: '/solutions/digital-thread' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Aerospace & Defence', href: '/industries/aerospace-defence' },
      { label: 'Energy', href: '/industries/energy' },
      { label: 'Heavy Machinery', href: '/industries/heavy-machinery' },
      { label: 'Industrial Manufacturing', href: '/industries/industrial-manufacturing' },
    ],
  },
  {
    label: 'Insights',
    href: '/insights',
    children: [
      { label: 'Articles', href: '/insights/articles' },
      { label: 'Case Studies', href: '/insights/case-studies' },
      { label: 'Whitepapers', href: '/insights/whitepapers' },
      { label: 'Videos', href: '/insights/videos' },
      { label: 'Podcasts', href: '/insights/podcasts' },
      { label: 'Webinars', href: '/insights/webinars' },
      { label: 'Research', href: '/insights/research' },
    ],
  },
];
