import type { InsightItem, CaseStudy } from '../lib/content-types';

export const insightItems: InsightItem[] = [
  {
    slug: 'digital-thread-plm-mes-erp',
    title: 'The Digital Thread: Connecting PLM, ERP and MES',
    category: 'articles',
    excerpt:
      'Why the digital thread — not any single system — is the backbone of the intelligent enterprise, and how PLM, ERP and MES fit together.',
    seo: {
      title: 'The Digital Thread: Connecting PLM, ERP and MES | Hiindsight',
      description:
        'An enterprise guide to the digital thread: how PLM, ERP, MES, IoT and AI connect data across the product lifecycle.',
    },
    publishedAt: '2026-06-10',
    featured: true,
    sections: [
      {
        heading: 'Beyond the point solution',
        paragraphs: [
          'Most enterprises do not lack tools. They lack a connected way of working. Product data lives in PLM, manufacturing execution in MES, and commercial truth in ERP — and the seams between them decide how fast an organization can move.',
          'Hiindsight designs the digital thread so that data created at concept flows through design, engineering, BOM, change, manufacturing and service without being re-entered or reinterpreted.',
        ],
      },
      {
        heading: 'Data becomes decisions',
        paragraphs: [
          'A connected thread turns data into context, context into intelligence, intelligence into automation, and automation into better decisions. That is the pattern that matters more than any single platform.',
          'In practice this means consistent data schemas, disciplined integration processes and a clear roadmap — the foundations Hiindsight has delivered across PLM, ERP and MES programs.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Start with a single trusted object — typically the BOM — and extend outward. Get one handoff right, then the next. The thread is built one verified connection at a time.',
        ],
      },
    ],
  },
  {
    slug: 'digital-twin-product-production-performance',
    title: 'Digital Twin: Product, Production and Performance',
    category: 'articles',
    excerpt:
      'Three connected twins digitize the supply chain from product design to services. A practical view of what each twin delivers.',
    seo: {
      title: 'Digital Twin: Product, Production and Performance | Hiindsight',
      description:
        'The Hiindsight digital twin family — product, production and performance — digitizing the supply chain from design to service.',
    },
    publishedAt: '2026-05-22',
    featured: true,
    sections: [
      {
        heading: 'The connected twin family',
        paragraphs: [
          'Hiindsight delivers a digital enterprise suite that digitizes the entire supply chain: product design, process planning, process validation, production planning and execution, and product services.',
          'The Digital Twin Product covers design and BOM; the Digital Twin Production covers process planning and simulation; the Digital Twin Performance connects MES/MOM and IIoT with machine learning.',
        ],
      },
      {
        heading: 'Maintenance as a twin',
        paragraphs: [
          'Digital maintenance extends the twin to MRO — IIoT telemetry, machine learning for predictive plans, service management workflows and product digital twin context.',
        ],
      },
    ],
  },
  {
    slug: 'ai-in-manufacturing-predictive-maintenance',
    title: 'Practical AI in Manufacturing: From Telemetry to Predictive Maintenance',
    category: 'articles',
    excerpt:
      'Machine learning on IIoT and MES data is the most practical entry point to AI for manufacturers. How Hiindsight applies it.',
    seo: {
      title: 'Practical AI in Manufacturing | Hiindsight',
      description:
        'Machine learning on MES and IIoT data for predictive maintenance and productivity intelligence — practical AI for manufacturing.',
    },
    publishedAt: '2026-04-14',
    sections: [
      {
        heading: 'Start with the data you already stream',
        paragraphs: [
          'IIoT sensors and MES systems already transmit the key parameters of products and production. The opportunity is to analyze that data continuously with machine learning to identify and rectify failures immediately.',
          'Hiindsight applies ML to shop-floor data to generate preventive and predictive maintenance plans, improving serviceability and increasing customer productivity.',
        ],
      },
      {
        heading: 'AI for engineering too',
        paragraphs: [
          'The same discipline applies to engineering data: BOMs, changes and knowledge. AI turns engineering data into insight that accelerates decisions.',
        ],
      },
    ],
  },
  {
    slug: 'bom-management-single-source-of-truth',
    title: 'BOM Management: The Single Source of Truth',
    category: 'articles',
    excerpt:
      'Controlling the BOM is controlling the enterprise. Why BOM management underpins engineering, manufacturing and service.',
    seo: {
      title: 'BOM Management: The Single Source of Truth | Hiindsight',
      description:
        'Why BOM management underpins the intelligent enterprise — controlling structure, revisions, effectivity and change.',
    },
    publishedAt: '2026-03-08',
    sections: [
      {
        heading: 'One BOM, many systems',
        paragraphs: [
          'Engineering, manufacturing and service each hold a version of the BOM. When they diverge, errors travel all the way to the shop floor and the field.',
          'Hiindsight implements structured BOM management on proven PLM platforms with controlled revisions, effectivity and change workflows.',
        ],
      },
    ],
  },
  {
    slug: 'digital-transformation-roadmap-priorities',
    title: 'Building a Digital Transformation Roadmap That Executes',
    category: 'whitepapers',
    excerpt:
      'AS IS mapping, gap analysis, TO BE definition, vendor selection and POC — a roadmap method that survives contact with reality.',
    seo: {
      title: 'Digital Transformation Roadmap Whitepaper | Hiindsight',
      description:
        'A method for digital transformation roadmaps: AS IS mapping, gap analysis, TO BE definition, vendor selection and proof of concepts.',
    },
    publishedAt: '2026-02-20',
    sections: [
      {
        heading: 'Process first, technology second',
        paragraphs: [
          'Hiindsight starts every transformation with AS IS process mapping, gap analysis against industry best practices, and requirements gathering before any technology is proposed.',
          'The TO BE process is defined with the client, then solution strategy, vendor selection and proof-of-concept pilots reduce risk before full implementation.',
        ],
      },
    ],
  },
  {
    slug: 'teamcenter-training-journey',
    title: 'The Teamcenter Training Journey: From Basics to BMIDE',
    category: 'videos',
    excerpt:
      'Hiindsight University offers a structured Teamcenter learning path — Basics, Engineering, MPP Manufacturing and BMIDE administration.',
    seo: {
      title: 'Teamcenter Training Journey | Hiindsight',
      description:
        'Teamcenter training from basics to BMIDE administration, MPP manufacturing and engineering — via Hiindsight University and TechPLM.',
    },
    publishedAt: '2026-01-30',
    sections: [
      {
        heading: 'A verified learning path',
        paragraphs: [
          'Hiindsight University delivers online Teamcenter courses: Teamcenter Basics, Teamcenter Engineering, Teamcenter MPP Manufacturing and Teamcenter Configuration (BMIDE), with further training available.',
        ],
      },
    ],
  },
  {
    slug: 'mro-digital-maintenance',
    title: 'Digital Maintenance and MRO: Keeping Assets Productive',
    category: 'articles',
    excerpt:
      'IIoT-enabled products, remote diagnostics and machine learning are reshaping maintenance, repair and overhaul.',
    seo: {
      title: 'Digital Maintenance and MRO | Hiindsight',
      description:
        'Digital maintenance for MRO: IIoT telemetry, machine learning preventive and predictive plans, and service management workflows.',
    },
    publishedAt: '2025-12-11',
    sections: [
      {
        heading: 'From reactive to predictive',
        paragraphs: [
          'IIoT devices help OEMs build products with integrated automation, transmitting key usage parameters to remote diagnostic centers.',
          'Machine learning algorithms generate preventive and predictive maintenance plans, improving serviceability and customer productivity.',
        ],
      },
    ],
  },
  {
    slug: 'enterprise-integration-legacy-data-migration',
    title: 'Enterprise Integration and Data Migration: Preserving Legacy Knowledge',
    category: 'whitepapers',
    excerpt:
      'Legacy systems hold core business knowledge. Integration and migration must preserve it — with consistent schemas and clean data.',
    seo: {
      title: 'Enterprise Integration and Data Migration Whitepaper | Hiindsight',
      description:
        'Enterprise integration and data migration: preserve legacy knowledge with consistent schemas, integration plans and proven migration tools.',
    },
    publishedAt: '2025-11-05',
    sections: [
      {
        heading: 'Knowledge in the seams',
        paragraphs: [
          'Single solutions never fit the requirements of all supply chain partners, and legacy systems hold core business knowledge vital to success.',
          'Hiindsight analyses the IT systems portfolio, defines the integration process and plan, and delivers seamless integration with consistent database schemas and data migration tools.',
        ],
      },
    ],
  },
  {
    slug: 'plm-vendor-selection-poc',
    title: 'Selecting a PLM Platform: A Decision Method',
    category: 'articles',
    excerpt:
      'From Teamcenter to Enovia, ARAS and web PLM — how to structure vendor selection and proof of concepts that produce the right choice.',
    seo: {
      title: 'Selecting a PLM Platform | Hiindsight',
      description:
        'A decision method for PLM vendor selection and proof of concepts across Teamcenter, Enovia, ARAS and web-based PLM.',
    },
    publishedAt: '2025-10-18',
    sections: [
      {
        heading: 'Criteria before demos',
        paragraphs: [
          'Define the TO BE process first, then evaluate platforms against process fit, integration cost, data migration effort and total cost of ownership.',
          'Proof-of-concept pilots validate fit before commitment — a step Hiindsight builds into every selection process.',
        ],
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'aerospace-pdm-change-control',
    title: 'Disciplined PDM and Change Control for a Complex Aerospace Program',
    industry: 'Aerospace & Defence',
    client: 'Aerospace engineering program (engagement reference — details to be confirmed)',
    challenge:
      'Multiple versions of CAD data, uncontrolled releases and unmanaged change across a large multi-discipline engineering program.',
    transformation:
      'A structured PDM foundation with controlled check-in/check-out, release states and approval workflows.',
    solution: 'Product Data Management and Engineering Change Management built on a leading PLM platform.',
    technology: 'Siemens Teamcenter (engagement reference), CAD toolchain, workflow automation.',
    implementation:
      'Agile implementation with techno-functional experts, phased rollout and on-site training for users and administrators.',
    businessImpact: [
      'Controlled release and approval states across the program',
      'Trusted single source of product data',
      'Managed engineering change impact',
    ],
    publishedAt: '2026-02-01',
    featured: true,
  },
  {
    slug: 'manufacturing-digital-twin-production',
    title: 'Validating a Production Line with the Digital Twin of Production',
    industry: 'Industrial Manufacturing',
    client: 'Manufacturing operations program (engagement reference — details to be confirmed)',
    challenge:
      'Processes planned in isolation from product and plant, leading to sub-optimal lines and late validation.',
    transformation:
      'A connected production process plan with operations sequences, resources and simulation, validated before ramp-up.',
    solution: 'Digital Twin Production with process planning, simulation and line balancing.',
    technology: 'Siemens MPP, Process Simulate, Plant Simulate, MTM time management.',
    implementation:
      'Process mapping, resource modeling and simulation workshops delivered with rapid development team support.',
    businessImpact: [
      'Validated, balanced production scenarios',
      'Shorter ramp-up time',
      'Processes connected to the product BOM',
    ],
    publishedAt: '2025-11-20',
    featured: true,
  },
  {
    slug: 'mes-iiot-machine-learning-uptime',
    title: 'Improving Uptime with MES, IIoT and Machine Learning',
    industry: 'Energy & Industrial Manufacturing',
    client: 'Operations improvement program (engagement reference — details to be confirmed)',
    challenge:
      'Reactive maintenance and productivity losses on an IIoT-connected shop floor generating continuous data.',
    transformation:
      'Machine learning applied to IIoT and MES data to detect failures early and generate predictive maintenance plans.',
    solution: 'Digital Twin Performance with MES/MOM, IIoT integration and ML dashboards.',
    technology: 'IIoT sensors and systems, machine learning algorithms, MES/MOM, reporting and dashboards.',
    implementation:
      'Data pipeline from IIoT to analytics, model development, and operations dashboards delivered iteratively.',
    businessImpact: [
      'Preventive and predictive maintenance plans',
      'Immediate failure detection',
      'Productivity intelligence for operations',
    ],
    publishedAt: '2025-09-15',
  },
];
