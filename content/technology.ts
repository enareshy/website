import type { TechnologyItem } from '../lib/content-types';

export const technologyItems: TechnologyItem[] = [
  {
    slug: 'plm-pdm',
    name: 'PLM / PDM',
    category: 'Product Lifecycle',
    summary:
      'Product Lifecycle and Product Data Management across Siemens Teamcenter, Dassault Enovia, ARAS and web-based PLM — supported by a deep CAD toolchain.',
    seo: {
      title: 'PLM / PDM Technology | Hiindsight',
      description:
        'PLM and PDM expertise across Siemens Teamcenter, Dassault Enovia, ARAS and web-based PLM, with CAD support for NX, Solid Edge, Catia, SolidWorks and AutoCAD.',
    },
    icon: 'cube',
    applications: [
      'Product Data Management',
      'BOM Management and variant handling',
      'Engineering change management',
      'Requirements and program management',
      'Process workflows and approvals',
    ],
    ecosystem: ['Siemens Teamcenter', 'Dassault Enovia', 'ARAS', 'Siemens NX', 'Solid Edge', 'Catia', 'SolidWorks', 'AutoCAD'],
  },
  {
    slug: 'mes-mom',
    name: 'MES / MOM',
    category: 'Manufacturing Operations',
    summary:
      'Manufacturing Execution and Manufacturing Operations Management to connect planning with shop-floor execution and improve productivity.',
    seo: {
      title: 'MES / MOM Technology | Hiindsight',
      description:
        'MES/MOM capabilities including Siemens SIMATIC IT and shop floor control — connecting production schedules, line balancing and execution.',
    },
    icon: 'factory',
    applications: [
      'Production scheduling',
      'Line balancing and time management (MTM)',
      'Logistics scheduling',
      'Shop floor control',
      'MOM / MES implementation and integration',
    ],
    ecosystem: ['Siemens SIMATIC IT', 'Shop Floor Control', 'Custom MES / MOM platforms'],
  },
  {
    slug: 'erp-integration',
    name: 'ERP Integration',
    category: 'Enterprise',
    summary:
      'Seamless integration between PLM, MES and ERP systems with consistent data schemas and reliable data migration from legacy systems.',
    seo: {
      title: 'ERP Integration | Hiindsight',
      description:
        'Enterprise ERP integration: connect PLM, MES and ERP with consistent data schemas and proven data migration from legacy systems.',
    },
    icon: 'diagram',
    applications: [
      'PLM-to-ERP integration',
      'MES-to-ERP integration',
      'Consistent data schemas',
      'Data migration from legacy systems',
      'Supply chain integration',
    ],
    ecosystem: ['SAP', 'Siemens Teamcenter', 'MES / MOM systems', 'Legacy systems'],
  },
  {
    slug: 'digital-manufacturing',
    name: 'Digital Manufacturing',
    category: 'Manufacturing Operations',
    summary:
      'Digital manufacturing solutions for process planning, simulation, robotics, logistics and plant simulation — from a verified Siemens/Dassault background.',
    seo: {
      title: 'Digital Manufacturing | Hiindsight',
      description:
        'Digital manufacturing with Hiindsight: Teamcenter MPP, Process Simulate, Robotics, Plant Simulate, Easy Plan and Delmia for validated production planning.',
    },
    icon: 'robotic',
    applications: [
      'Process planning and routing',
      'Process simulation',
      'Robotics and plant simulation',
      'Line balancing and MTM time management',
      'Logistics planning',
    ],
    ecosystem: ['Siemens Teamcenter MPP', 'Siemens Process Simulate', 'Siemens Robotics', 'Siemens Plant Simulate', 'Siemens Easy Plan (Active Workspace)', 'Dassault Delmia'],
  },
  {
    slug: 'digital-twin',
    name: 'Digital Twin',
    category: 'Connected Engineering',
    summary:
      'A connected family of digital twins — product, production and performance — supported by digital maintenance for MRO and service.',
    seo: {
      title: 'Digital Twin Technology | Hiindsight',
      description:
        'Digital twin technology spanning product, production and performance twins, with predictive maintenance for MRO and service operations.',
    },
    icon: 'twin',
    applications: [
      'Digital Twin of the Product',
      'Digital Twin of Production',
      'Digital Twin of Performance',
      'Digital maintenance and predictive service',
      'Reports and dashboards',
    ],
    ecosystem: ['Siemens Teamcenter', 'Siemens MPP', 'IIoT platforms', 'Machine Learning'],
  },
  {
    slug: 'mbse',
    name: 'MBSE',
    category: 'Systems Engineering',
    summary:
      'Model-Based Systems Engineering capability for requirements-to-design continuity in complex engineered products.',
    seo: {
      title: 'MBSE | Hiindsight',
      description:
        'Model-Based Systems Engineering (MBSE) capability for engineering and manufacturing enterprises. Capability scope to be confirmed with Hiindsight.',
    },
    icon: 'system',
    applications: [
      'Requirements modeling',
      'System architecture definition',
      'Traceability from requirements to design',
      'Engineering transformation programs',
    ],
    ecosystem: ['PLM platforms', 'Systems engineering tooling'],
  },
  {
    slug: 'ai-genai',
    name: 'AI / GenAI',
    category: 'Artificial Intelligence',
    summary:
      'Applied AI and generative AI for engineering and manufacturing — practical use cases from design to decisions. Scope confirmed with Hiindsight.',
    seo: {
      title: 'AI / GenAI | Hiindsight',
      description:
        'AI and generative AI for engineering and manufacturing: practical applications across design, BOM, engineering changes, manufacturing, quality and knowledge.',
    },
    icon: 'brain',
    applications: [
      'AI in engineering and design',
      'BOM and change intelligence',
      'Manufacturing and quality analytics',
      'Service and knowledge assistants',
      'Decision support',
    ],
    ecosystem: ['Machine Learning', 'Generative AI platforms', 'Enterprise data'],
  },
  {
    slug: 'machine-learning',
    name: 'Machine Learning',
    category: 'Artificial Intelligence',
    summary:
      'Machine learning applied to MES, IIoT and service data — detecting failures early, predicting maintenance and improving productivity.',
    seo: {
      title: 'Machine Learning for Manufacturing | Hiindsight',
      description:
        'Machine learning solutions for manufacturing: predictive and preventive maintenance, operations analytics and intelligence dashboards on MES and IIoT data.',
    },
    icon: 'ml',
    applications: [
      'Predictive and preventive maintenance',
      'Failure detection on IIoT data',
      'Productivity analytics',
      'Quality monitoring',
      'Intelligence dashboards',
    ],
    ecosystem: ['IIoT platforms', 'MES / MOM data', 'Custom ML pipelines'],
  },
  {
    slug: 'iot',
    name: 'IoT / IIoT',
    category: 'Connected Operations',
    summary:
      'Industrial Internet of Things platforms and custom IIoT solutions that continuously capture and transmit product and shop-floor data.',
    seo: {
      title: 'IoT / IIoT | Hiindsight',
      description:
        'Industry 4.0 and IIoT capabilities: Siemens MindSphere, PTC ThingWorx and custom IIoT platforms connecting machines, sensors and analytics.',
    },
    icon: 'iot',
    applications: [
      'Shop floor sensor connectivity',
      'Product usage telemetry',
      'Remote diagnostics',
      'IIoT-enabled predictive maintenance',
      'Industry 4.0 programs',
    ],
    ecosystem: ['Siemens MindSphere', 'PTC ThingWorx', 'Custom IIoT platforms'],
  },
  {
    slug: 'intelligent-automation',
    name: 'Intelligent Automation',
    category: 'Automation',
    summary:
      'Digital process automation across the enterprise — combining business process automation with machine learning for intelligent operations.',
    seo: {
      title: 'Intelligent Automation | Hiindsight',
      description:
        'Intelligent automation services combining digital process automation, workflow management and machine learning to optimize business processes.',
    },
    icon: 'automation',
    applications: [
      'Digital process automation',
      'Workflow process management',
      'Business process optimization',
      'ML-augmented automation',
      'Service management automation',
    ],
    ecosystem: ['Digital Process Automation', 'Machine Learning', 'Workflow platforms'],
  },
  {
    slug: 'enterprise-integration',
    name: 'Enterprise Integration',
    category: 'Enterprise',
    summary:
      'Analyze your IT systems portfolio, define integration processes and deliver seamless integration with consistent data schemas.',
    seo: {
      title: 'Enterprise Integration | Hiindsight',
      description:
        'Enterprise integration services: analyze IT systems portfolios, define integration processes and deliver seamless PLM-ERP-MES integration with consistent schemas.',
    },
    icon: 'diagram',
    applications: [
      'IT systems portfolio analysis',
      'Integration process and plan definition',
      'Seamless PLM-ERP-MES integration',
      'Consistent database schemas',
      'Data migration tools and process',
    ],
    ecosystem: ['PLM', 'ERP', 'MES / MOM', 'IIoT', 'ML / AI'],
  },
];
