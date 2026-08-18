import type { ProductItem } from '../lib/content-types';

export const productItems: ProductItem[] = [
  {
    slug: 'hiindsight-university',
    name: 'Hiindsight University',
    status: 'available',
    summary:
      'A verified online training platform for Teamcenter and PLM — self-paced courses in Teamcenter Basics, BMIDE administration, engineering and manufacturing.',
    seo: {
      title: 'Hiindsight University | Teamcenter & PLM Training',
      description:
        'Hiindsight University delivers online Teamcenter and PLM training: Teamcenter Basics, BMIDE admin, engineering and manufacturing courses.',
    },
    icon: 'university',
    modules: [
      'Teamcenter Basics',
      'Teamcenter Admin — BMIDE',
      'Teamcenter MPP Manufacturing',
      'Teamcenter Engineering',
      'Online self-paced learning',
    ],
    roadmapNote:
      'Available today via Hiindsight University and the TechPLM YouTube channel. Contact us for access details.',
  },
  {
    slug: 'digital-twin-suite',
    name: 'Digital Twin Suite',
    status: 'available',
    summary:
      'A connected family of digital twin solutions — Product, Production and Performance — plus Digital Maintenance for MRO and service.',
    seo: {
      title: 'Digital Twin Suite | Hiindsight',
      description:
        'Hiindsight Digital Twin Suite: Digital Twin Product, Digital Twin Production, Digital Twin Performance and Digital Maintenance for MRO.',
    },
    icon: 'twin',
    modules: [
      'Digital Twin Product — design, BOM, change',
      'Digital Twin Production — process planning, simulation, line balancing',
      'Digital Twin Performance — MES/MOM, IIoT, ML dashboards',
      'Digital Maintenance — MRO, predictive service',
    ],
    roadmapNote:
      'Available as an integrated solution family delivered by Hiindsight experts. Contact us to scope an engagement.',
  },
  {
    slug: 'bom-management',
    name: 'BOM Management',
    status: 'in-development',
    summary:
      'A productized approach to controlling engineering and manufacturing BOMs — structure, revisions, effectivity and change in one place.',
    seo: {
      title: 'BOM Management Product | Hiindsight',
      description:
        'Hiindsight BOM Management product (in development): single source of truth for engineering and manufacturing BOMs with controlled revisions and change.',
    },
    icon: 'bom',
    modules: ['BOM structure management', 'Revision and effectivity control', 'Engineering-manufacturing handoff', 'Change integration'],
    roadmapNote: 'In development as a productized offering building on Hiindsight PLM delivery experience.',
  },
  {
    slug: 'variant-management',
    name: 'Variant Management',
    status: 'in-development',
    summary:
      'Configuration-aware variant and options management for complex product families.',
    seo: {
      title: 'Variant Management Product | Hiindsight',
      description:
        'Hiindsight Variant Management product (in development): configure and control variants and options across complex product lines.',
    },
    icon: 'branch',
    modules: ['Option-based architecture', 'Configured BOM generation', 'Variant change propagation', 'Product family modeling'],
    roadmapNote: 'In development for complex, highly configurable product lines.',
  },
  {
    slug: 'engineering-intelligence',
    name: 'Engineering Intelligence',
    status: 'in-development',
    summary:
      'Analytics and AI applied to engineering data — BOM, change and rework patterns that guide faster, better engineering decisions.',
    seo: {
      title: 'Engineering Intelligence | Hiindsight',
      description:
        'Hiindsight Engineering Intelligence (in development): machine learning on BOM, change and rework data to accelerate engineering decisions.',
    },
    icon: 'brain',
    modules: ['BOM analytics', 'Change impact intelligence', 'Rework pattern detection', 'Decision dashboards'],
    roadmapNote: 'In development; design follows Hiindsight ML delivery experience on PLM and MES data.',
  },
  {
    slug: 'manufacturing-intelligence',
    name: 'Manufacturing Intelligence',
    status: 'in-development',
    summary:
      'ML-powered intelligence on MES and IIoT data — predictive maintenance, quality and productivity analytics for the shop floor.',
    seo: {
      title: 'Manufacturing Intelligence | Hiindsight',
      description:
        'Hiindsight Manufacturing Intelligence (in development): machine learning on MES and IIoT data for predictive maintenance, quality and productivity.',
    },
    icon: 'ml',
    modules: ['Predictive maintenance', 'Quality analytics', 'Productivity intelligence', 'Shop-floor dashboards'],
    roadmapNote: 'In development, extending verified Hiindsight ML solutions for manufacturing operations.',
  },
  {
    slug: 'digital-thread',
    name: 'Digital Thread',
    status: 'in-development',
    summary:
      'A productized digital thread — connecting product, process, performance and maintenance data across the enterprise.',
    seo: {
      title: 'Digital Thread Product | Hiindsight',
      description:
        'Hiindsight Digital Thread product (in development): end-to-end product and process data connectivity across PLM, ERP, MES, IoT and AI.',
    },
    icon: 'link',
    modules: ['Lifecycle data connectivity', 'Context and intelligence layers', 'Automation triggers', 'Decision dashboards'],
    roadmapNote: 'In development; foundation from Hiindsight integration and digital twin engagements.',
  },
  {
    slug: 'ai-copilot',
    name: 'AI Copilot',
    status: 'coming-soon',
    summary:
      'A conversational AI assistant for engineering and manufacturing knowledge — answering questions across PLM, MES and enterprise data.',
    seo: {
      title: 'AI Copilot for Engineering & Manufacturing | Hiindsight',
      description:
        'Hiindsight AI Copilot (coming soon): conversational GenAI assistant across engineering and manufacturing knowledge and enterprise data.',
    },
    icon: 'copilot',
    modules: ['Knowledge assistant', 'Engineering data Q&A', 'Manufacturing data Q&A', 'Decision support'],
    roadmapNote: 'Coming soon. Concept only — not yet an available product.',
  },
  {
    slug: 'analytics',
    name: 'Analytics',
    status: 'coming-soon',
    summary:
      'Enterprise analytics and reporting across engineering, manufacturing, quality and service data.',
    seo: {
      title: 'Analytics Product | Hiindsight',
      description:
        'Hiindsight Analytics (coming soon): enterprise reporting and analytics across engineering, manufacturing, quality and service data.',
    },
    icon: 'analytics',
    modules: ['Enterprise reporting', 'Operational dashboards', 'Quality analytics', 'Service analytics'],
    roadmapNote: 'Coming soon. Concept only — not yet an available product.',
  },
];
