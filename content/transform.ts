import type { TransformItem } from '../lib/content-types';

export const transformItems: TransformItem[] = [
  {
    slug: 'digital-transformation',
    name: 'Digital Transformation',
    summary:
      'A strategic, process-first approach to digitizing your engineering and manufacturing enterprise — from AS IS mapping to roadmap execution.',
    seo: {
      title: 'Digital Transformation Services | Hiindsight',
      description:
        'Hiindsight guides engineering and manufacturing enterprises through digital transformation: AS IS mapping, gap analysis, TO BE process design, solution strategy and roadmap.',
    },
    icon: 'layers',
    body: [
      'Digital transformation is a strategic decision that impacts the entire organization, including supply chain partners. A decision of this magnitude must be taken with input from professional business process consultants.',
      'Hiindsight partners with industry experts in Digital Process Automation to increase the success rate of transformation projects — starting with where you are today and ending with a roadmap you can execute.',
    ],
    highlights: [
      'AS IS Process Mapping',
      'Process Gap Analysis with industry best practices',
      'Requirements gathering and analysis',
      'Proposed TO BE process definition',
      'Solution strategy and roadmap',
      'Vendor selection process',
      'Proof of concepts and pilot projects',
      'Roadmap for solution implementation',
    ],
    related: ['engineering-transformation', 'manufacturing-transformation', 'plm-transformation', 'ai-transformation'],
  },
  {
    slug: 'engineering-transformation',
    name: 'Engineering Transformation',
    summary:
      'Modernize product engineering: disciplined product data management, BOM control, change management and connected workflows across the engineering lifecycle.',
    seo: {
      title: 'Engineering Transformation | Hiindsight',
      description:
        'Transform engineering with disciplined PDM/PLM: requirements management, BOM management, change management and process workflows that keep product data trusted.',
    },
    icon: 'compass',
    body: [
      'Product design engineers rely on the latest CAD solutions to create 3D models and products, and multiple versions of data are created, managed, verified and changed throughout the design lifecycle.',
      'Effective Product Data Management — with solutions such as Siemens Teamcenter, Dassault Enovia, ARAS and web-based PDM — plays a critical role in streamlining product design and building the digital thread of the product.',
    ],
    highlights: [
      'Requirements Management',
      'Program / Project Management',
      'Product Data Management',
      'BOM Management',
      'Engineering Change Management',
      'Process Workflows',
    ],
    related: ['plm-transformation', 'digital-thread', 'digital-twin'],
  },
  {
    slug: 'manufacturing-transformation',
    name: 'Manufacturing Transformation',
    summary:
      'Connect planning and execution: digital manufacturing, MES/MOM, line balancing, logistics planning and validated production processes.',
    seo: {
      title: 'Manufacturing Transformation | Hiindsight',
      description:
        'Transform manufacturing operations with digital manufacturing, MES/MOM, process simulation, line balancing and logistics planning that connect engineering to the shop floor.',
    },
    icon: 'factory',
    body: [
      'The Digital Twin of the plant, tools and resources — combined with the Digital Twin of the product — creates a detailed production process plan with a sequence of operations, validated to build the most optimal production scenario.',
      'Manufacturing operations management and manufacturing execution systems connect the shop floor, while Industry 4.0 / IIoT devices continuously transmit and analyze data to improve productivity.',
    ],
    highlights: [
      'Plant Management and Resource Management',
      'Process Planning & Routing',
      'Process Simulation and Line Balancing',
      'Time Management (MTM)',
      'Logistics Planning',
      'Plant Simulation',
      'MES / MOM execution',
    ],
    related: ['digital-transformation', 'digital-thread', 'digital-twin'],
  },
  {
    slug: 'plm-transformation',
    name: 'PLM Transformation',
    summary:
      'Transform your product lifecycle backbone: PLM strategy, implementation, integration and migration on the platforms your enterprise already runs.',
    seo: {
      title: 'PLM Transformation | Hiindsight',
      description:
        'PLM transformation with Hiindsight: strategy, implementation, integration and data migration across Siemens Teamcenter, Dassault Enovia, ARAS and web-based PLM.',
    },
    icon: 'cube',
    body: [
      'PLM is the backbone of the product digital thread. Hiindsight has deep, verified expertise across the leading PLM platforms — Siemens Teamcenter, Dassault Enovia and ARAS — plus web-based PLM solutions.',
      'We help you define the TO BE process, design the optimal solution, migrate data from legacy systems and integrate PLM with ERP, MES and the rest of the enterprise.',
    ],
    highlights: [
      'PLM strategy and solution roadmap',
      'Implementation with agile methodologies',
      'Integration with ERP, MES and IoT',
      'Data migration from legacy systems',
      'Techno-functional experts and solution architects',
      'Training and adoption support',
    ],
    related: ['engineering-transformation', 'digital-thread', 'enterprise-integration'],
  },
  {
    slug: 'digital-thread',
    name: 'Digital Thread',
    summary:
      'Connect Concept to Service: a continuous, trusted flow of product and process data across engineering, manufacturing and service.',
    seo: {
      title: 'Digital Thread | Hiindsight',
      description:
        'Build the digital thread connecting concept, design, engineering, BOM, change, manufacturing and service with PLM, ERP, MES, IoT, AI and Digital Twin.',
    },
    icon: 'link',
    body: [
      'The digital thread connects every phase of the product lifecycle — concept, design, engineering, BOM, change, manufacturing and service — into a single, trusted flow of data.',
      'Hiindsight connects PLM, ERP, MES, IoT, AI and Digital Twin technologies so that data becomes context, context becomes intelligence, intelligence becomes automation, and automation becomes better decisions.',
    ],
    highlights: [
      'Concept to Service continuity',
      'PLM + ERP + MES + IoT integration',
      'AI applied to product and process data',
      'Digital Twin of product, production and performance',
      'Data, context, intelligence, automation, decisions',
    ],
    related: ['digital-twin', 'ai-transformation', 'enterprise-integration'],
  },
  {
    slug: 'ai-transformation',
    name: 'AI Transformation',
    summary:
      'Put AI to work across engineering and manufacturing: machine learning on operations data, predictive maintenance, intelligence dashboards and practical GenAI.',
    seo: {
      title: 'AI Transformation | Hiindsight',
      description:
        'Practical AI for engineering and manufacturing: machine learning on MES/IIoT data, predictive and preventive maintenance, intelligence dashboards and decision support.',
    },
    icon: 'brain',
    body: [
      'AI in the enterprise is practical before it is visionary. Hiindsight applies machine learning to engineering and manufacturing data to detect failures early, improve productivity and turn data into decisions.',
      'From IIoT-connected shop floors to predictive maintenance and intelligence dashboards, AI is a transformation capability — embedded in the workflows where it delivers measurable value.',
    ],
    highlights: [
      'Machine learning on MES and IIoT data',
      'Predictive and preventive maintenance',
      'Quality and service intelligence',
      'Engineering and BOM analytics',
      'Intelligence dashboards and reporting',
      'GenAI for knowledge and decision support',
    ],
    related: ['digital-transformation', 'manufacturing-transformation', 'digital-thread'],
  },
  {
    slug: 'digital-twin',
    name: 'Digital Twin',
    summary:
      'Digital Twin of Product, Production and Performance — a connected suite that digitizes the supply chain from design to service.',
    seo: {
      title: 'Digital Twin | Hiindsight',
      description:
        'Hiindsight digital twin solutions span the product, production and performance twins — digitizing the supply chain from product design to services.',
    },
    icon: 'twin',
    body: [
      'The digital enterprise suite digitizes the entire supply chain — product design, process planning, process validation, production planning and execution, and product services.',
      'Hiindsight delivers a connected family of digital twins: the Digital Twin of the Product, the Digital Twin of Production, and the Digital Twin of Performance — supported by digital maintenance for MRO.',
    ],
    highlights: [
      'Digital Twin Product — design and BOM',
      'Digital Twin Production — process planning and simulation',
      'Digital Twin Performance — MES/MOM and IIoT',
      'Digital Maintenance — MRO and predictive service',
      'Reports and dashboards',
    ],
    related: ['digital-thread', 'manufacturing-transformation', 'ai-transformation'],
  },
];
