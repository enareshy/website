import type { SolutionItem } from '../lib/content-types';

export const solutionItems: SolutionItem[] = [
  {
    slug: 'bom-management',
    name: 'BOM Management',
    summary:
      'Single source of truth for your bills of material — engineering, manufacturing and service BOMs managed, controlled and connected.',
    seo: {
      title: 'BOM Management Solutions | Hiindsight',
      description:
        'BOM management solutions built on proven PLM platforms: control engineering and manufacturing BOMs, changes and variants across the product lifecycle.',
    },
    icon: 'bom',
    challenge:
      'BOMs live across disconnected systems, change uncontrolled, and engineering-to-manufacturing handoffs introduce errors that reach the shop floor.',
    approach:
      'We implement structured BOM management on your PLM backbone (Teamcenter, Enovia, ARAS) with defined part structures, revision control, effectivity and change workflows connecting engineering to manufacturing.',
    outcomes: [
      'Single trusted BOM across lifecycle',
      'Controlled revisions and effectivity',
      'Cleaner engineering-to-manufacturing handoff',
      'Faster, safer engineering changes',
    ],
    technologies: ['Siemens Teamcenter', 'Dassault Enovia', 'ARAS', 'Web-based PLM'],
  },
  {
    slug: 'product-data-management',
    name: 'Product Data Management',
    summary:
      'Streamline product design with disciplined product data management — CAD data, versions, releases and workflows under control.',
    seo: {
      title: 'Product Data Management | Hiindsight',
      description:
        'PDM solutions for product design: manage CAD data, versions, releases and workflows with Siemens Teamcenter, Dassault Enovia, ARAS and web PDM.',
    },
    icon: 'database',
    challenge:
      'Multiple versions of CAD data are created, managed, verified and changed throughout the product design lifecycle — without discipline, the wrong version ships.',
    approach:
      'We deploy PDM that captures CAD data in a controlled vault with check-in/check-out, versioning, release states and approval workflows — proven on leading PDM platforms.',
    outcomes: [
      'Trusted single source of product data',
      'Controlled release and approval states',
      'Reduced rework from wrong versions',
      'Prepared foundation for PLM',
    ],
    technologies: ['Siemens Teamcenter', 'Dassault Enovia', 'ARAS', 'Siemens NX', 'Catia', 'SolidWorks', 'Solid Edge', 'AutoCAD'],
  },
  {
    slug: 'variant-management',
    name: 'Variant Management',
    summary:
      'Configure and control product variants and options across complex product lines — without duplicate data or error-prone manual copies.',
    seo: {
      title: 'Variant Management Solutions | Hiindsight',
      description:
        'Variant and configuration management for complex engineered products: control options, variants and modular product structures on PLM platforms.',
    },
    icon: 'branch',
    challenge:
      'Complex product lines explode into duplicated variants, making BOMs hard to maintain and changes costly to propagate across configurations.',
    approach:
      'We structure modular, option-aware product architectures and manage variants in the PLM so a change propagates correctly across the configured product family.',
    outcomes: [
      'Reduced duplicate data',
      'Accurate configured BOMs',
      'Controlled change propagation across variants',
      'Scalable product family architecture',
    ],
    technologies: ['Siemens Teamcenter', 'Dassault Enovia', 'ARAS'],
  },
  {
    slug: 'engineering-change-management',
    name: 'Engineering Change Management',
    summary:
      'Control engineering change — requests, notices, impact, approvals and effectivity — across every phase of the product lifecycle.',
    seo: {
      title: 'Engineering Change Management | Hiindsight',
      description:
        'Engineering change management solutions: ECR/ECN workflows, impact analysis, approvals and effectivity control on your PLM platform.',
    },
    icon: 'change',
    challenge:
      'Engineering changes ripple across design, BOM, manufacturing and service. Without structured change control, impact is unmanaged and errors reach production.',
    approach:
      'We implement end-to-end change management — change requests, change notices, impact assessment, multi-discipline approvals and effectivity — on your PLM backbone.',
    outcomes: [
      'Full change traceability',
      'Managed impact across disciplines',
      'Controlled effectivity and release',
      'Fewer production errors from unapproved change',
    ],
    technologies: ['Siemens Teamcenter', 'Dassault Enovia', 'ARAS'],
  },
  {
    slug: 'digital-manufacturing',
    name: 'Digital Manufacturing',
    summary:
      'Validate production before you build: process planning, simulation, line balancing and plant simulation from verified Siemens/Dassault expertise.',
    seo: {
      title: 'Digital Manufacturing Solutions | Hiindsight',
      description:
        'Digital manufacturing solutions: process planning, simulation, line balancing and plant simulation with Teamcenter MPP, Process Simulate and Delmia.',
    },
    icon: 'robotic',
    challenge:
      'Processes are planned in isolation from the product and the plant, leading to sub-optimal lines, late validation and costly rebalancing.',
    approach:
      'Using digital manufacturing tooling, we build and validate the production process plan with operations sequences, resources, simulations and line balancing before production.',
    outcomes: [
      'Validated optimal production scenarios',
      'Shorter ramp-up times',
      'Balanced lines with MTM time management',
      'Processes connected to the product BOM',
    ],
    technologies: ['Teamcenter MPP', 'Siemens Process Simulate', 'Plant Simulate', 'Robotics', 'Dassault Delmia', 'Easy Plan (Active Workspace)'],
  },
  {
    slug: 'engineering-automation',
    name: 'Engineering Automation',
    summary:
      'Automate repetitive engineering work — workflows, data entry, checks and handoffs — so engineers focus on design, not administration.',
    seo: {
      title: 'Engineering Automation | Hiindsight',
      description:
        'Engineering automation: automate workflows, checks and data handoffs across CAD, PDM and PLM so engineers focus on design, not administration.',
    },
    icon: 'automation',
    challenge:
      'Engineers spend hours on manual workflows, data entry and handoffs — slowing the engineering cycle and introducing human error.',
    approach:
      'We automate engineering workflows across CAD, PDM and PLM — from automated checks and data propagation to triggered notifications and handoff automation.',
    outcomes: [
      'Faster engineering cycles',
      'Fewer manual errors',
      'Consistent process execution',
      'Engineers focused on value',
    ],
    technologies: ['Siemens Teamcenter', 'Active Workspace', 'CAD toolchain', 'Workflow platforms'],
  },
  {
    slug: 'enterprise-integration',
    name: 'Enterprise Integration',
    summary:
      'Connect PLM, ERP, MES, IoT and AI into one coherent enterprise — with consistent data schemas and proven data migration.',
    seo: {
      title: 'Enterprise Integration Solutions | Hiindsight',
      description:
        'Enterprise integration solutions connecting PLM, ERP, MES, IoT and AI with consistent data schemas and proven data migration from legacy systems.',
    },
    icon: 'diagram',
    challenge:
      'Systems hold core business knowledge in silos. Single solutions never fit the requirements of all supply chain partners, and legacy systems carry vital knowledge.',
    approach:
      'We analyze the IT systems portfolio, define integration processes and plans, and deliver seamless integration with consistent database schemas and data migration tools.',
    outcomes: [
      'Connected PLM-ERP-MES flow',
      'Consistent data across systems',
      'Legacy knowledge preserved in new platforms',
      'Foundation for digital thread and AI',
    ],
    technologies: ['SAP', 'Siemens Teamcenter', 'MES / MOM', 'IIoT', 'ML / AI'],
  },
  {
    slug: 'ai-for-engineering',
    name: 'AI for Engineering',
    summary:
      'Apply AI to engineering data — design insights, BOM analytics, change intelligence and knowledge access — to accelerate engineering.',
    seo: {
      title: 'AI for Engineering | Hiindsight',
      description:
        'AI for engineering: machine learning on BOM and change data, design insights, knowledge access and GenAI support across the engineering lifecycle.',
    },
    icon: 'brain',
    challenge:
      'Engineering data holds immense value but is under-used: patterns in BOMs, changes, rework and knowledge are hidden in disconnected systems.',
    approach:
      'We apply machine learning and GenAI to engineering data — detecting patterns, recommending actions, answering knowledge questions and supporting decisions in the engineering workflow.',
    outcomes: [
      'Faster engineering decisions',
      'Insights from BOM and change data',
      'Rapid access to engineering knowledge',
      'Reduced rework through predictive insight',
    ],
    technologies: ['Machine Learning', 'Generative AI', 'PLM / PDM data', 'Enterprise knowledge'],
  },
  {
    slug: 'ai-for-manufacturing',
    name: 'AI for Manufacturing',
    summary:
      'AI on the shop floor: predictive maintenance, quality analytics, productivity intelligence and ML on MES/IIoT data.',
    seo: {
      title: 'AI for Manufacturing | Hiindsight',
      description:
        'AI for manufacturing: predictive maintenance, quality and productivity analytics using machine learning on MES and IIoT data.',
    },
    icon: 'ml',
    challenge:
      'Shop-floor data from MES and IIoT devices is abundant but reactive — failures are found after impact, and quality issues surface late.',
    approach:
      'We build machine-learning solutions on MES and IIoT data to detect failures immediately, generate preventive and predictive maintenance plans, and surface productivity intelligence.',
    outcomes: [
      'Predictive and preventive maintenance',
      'Immediate failure detection',
      'Improved quality and productivity',
      'Intelligence dashboards for operations',
    ],
    technologies: ['Machine Learning', 'IIoT platforms', 'MES / MOM', 'Dashboards'],
  },
  {
    slug: 'digital-thread',
    name: 'Digital Thread',
    summary:
      'A continuous, trusted flow of data from concept to service — connecting product, process, performance and maintenance.',
    seo: {
      title: 'Digital Thread Solutions | Hiindsight',
      description:
        'Digital thread solutions connecting concept, design, engineering, BOM, change, manufacturing and service across PLM, ERP, MES, IoT, AI and Digital Twin.',
    },
    icon: 'link',
    challenge:
      'Product and process data break across lifecycle boundaries — engineering, manufacturing and service each hold fragmented versions of the truth.',
    approach:
      'We design and integrate the digital thread so data flows from concept to service, becomes context, then intelligence, then automation — enabling faster, better decisions.',
    outcomes: [
      'End-to-end lifecycle data continuity',
      'Context-rich intelligence',
      'Automation enabled by trusted data',
      'Faster, better enterprise decisions',
    ],
    technologies: ['PLM', 'ERP', 'MES / MOM', 'IoT', 'AI / ML', 'Digital Twin'],
  },
];
