import type { IndustryItem } from '../lib/content-types';

export const industryItems: IndustryItem[] = [
  {
    slug: 'automotive',
    name: 'Automotive',
    summary:
      'Speed product programs, manage complex BOMs and variants, and connect engineering to manufacturing across the vehicle lifecycle.',
    seo: {
      title: 'Automotive Industry Solutions | Hiindsight',
      description:
        'Automotive PLM, BOM and manufacturing transformation: manage complex variants, engineering changes and vehicle programs with Hiindsight.',
    },
    icon: 'car',
    challenges: [
      'Rapid program cycles and platform complexity',
      'Exploding BOM and variant complexity',
      'Engineering-manufacturing synchronization',
      'Supply chain and quality pressure',
    ],
    opportunities: [
      'Program and project management',
      'BOM and variant management',
      'Engineering change control',
      'MES / MOM execution',
      'AI for quality and productivity',
    ],
    relatedSolutions: ['bom-management', 'variant-management', 'engineering-change-management', 'digital-manufacturing'],
  },
  {
    slug: 'aerospace-defence',
    name: 'Aerospace & Defence',
    summary:
      'Rigorous, traceable engineering in certified environments — requirements, change control, MRO and digital thread for complex programs.',
    seo: {
      title: 'Aerospace & Defence Solutions | Hiindsight',
      description:
        'Aerospace and defence PLM, engineering change, MRO and digital thread solutions with rigorous traceability for complex programs.',
    },
    icon: 'airplane',
    challenges: [
      'Complex multi-discipline programs',
      'Rigorous certification and traceability',
      'Long lifecycle MRO and configuration control',
      'Security and data sovereignty',
    ],
    opportunities: [
      'Requirements and change management',
      'Configuration and variant control',
      'Digital twin of product and service',
      'MRO and digital maintenance',
      'Digital thread traceability',
    ],
    relatedSolutions: ['engineering-change-management', 'product-data-management', 'digital-thread', 'digital-manufacturing'],
  },
  {
    slug: 'energy',
    name: 'Energy',
    summary:
      'Extend asset life and operational uptime with digital twins, IIoT telemetry, predictive maintenance and intelligent operations.',
    seo: {
      title: 'Energy Industry Solutions | Hiindsight',
      description:
        'Energy sector digital transformation: IIoT telemetry, predictive maintenance, digital twins and intelligent operations with Hiindsight.',
    },
    icon: 'energy',
    challenges: [
      'Asset-intensive operations with high downtime cost',
      'Remote and distributed sites',
      'Data scattered across plants',
      'Maintenance cost and safety pressure',
    ],
    opportunities: [
      'IIoT sensor and telemetry programs',
      'Predictive and preventive maintenance',
      'Digital twin of assets and operations',
      'Operations intelligence dashboards',
    ],
    relatedSolutions: ['ai-for-manufacturing', 'digital-manufacturing', 'digital-thread'],
  },
  {
    slug: 'heavy-machinery',
    name: 'Heavy Machinery',
    summary:
      'Manage complex machine configurations, large assemblies and long service lifecycles with disciplined PLM and service data.',
    seo: {
      title: 'Heavy Machinery Solutions | Hiindsight',
      description:
        'Heavy machinery PLM and manufacturing transformation: large assemblies, configurable machines and long service lifecycles with Hiindsight.',
    },
    icon: 'crane',
    challenges: [
      'Large, configurable machine assemblies',
      'Long lifecycle and aftermarket complexity',
      'Engineering-manufacturing coordination',
      'Field service and warranty data',
    ],
    opportunities: [
      'BOM and variant management',
      'Engineering change control',
      'Digital manufacturing and line balancing',
      'Service and MRO data',
    ],
    relatedSolutions: ['bom-management', 'variant-management', 'digital-manufacturing', 'engineering-change-management'],
  },
  {
    slug: 'industrial-manufacturing',
    name: 'Industrial Manufacturing',
    summary:
      'Optimize production operations end to end: digital manufacturing, MES/MOM, IIoT and AI for productivity and quality.',
    seo: {
      title: 'Industrial Manufacturing Solutions | Hiindsight',
      description:
        'Industrial manufacturing transformation: digital manufacturing, MES/MOM, IIoT and AI solutions for productivity and quality with Hiindsight.',
    },
    icon: 'factory',
    challenges: [
      'Production inefficiency and downtime',
      'Disconnected planning and execution',
      'Manual, reactive quality processes',
      'Legacy systems and data silos',
    ],
    opportunities: [
      'Digital manufacturing and simulation',
      'MES / MOM implementation',
      'IIoT and ML analytics',
      'Predictive maintenance and quality',
      'Enterprise integration',
    ],
    relatedSolutions: ['digital-manufacturing', 'ai-for-manufacturing', 'enterprise-integration', 'digital-thread'],
  },
];
