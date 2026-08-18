export interface Career {
  slug: string;
  title: string;
  location: string;
  department: string;
  employmentType: string;
  description: string;
}

export const careers: Career[] = [
  {
    slug: 'plm-solution-architect',
    title: 'PLM Solution Architect',
    location: 'Hyderabad, India',
    department: 'Engineering',
    employmentType: 'Full-time',
    description:
      'Define and deliver PLM solutions on Siemens Teamcenter, Dassault Enovia or ARAS. Own solution design, technical leadership and delivery quality.',
  },
  {
    slug: 'teamcenter-techno-functional-consultant',
    title: 'Teamcenter Techno-Functional Consultant',
    location: 'Hyderabad, India',
    department: 'Engineering',
    employmentType: 'Full-time',
    description:
      'Bridge business process and Teamcenter configuration. Support implementation, data migration, integration and user training.',
  },
  {
    slug: 'digital-manufacturing-consultant',
    title: 'Digital Manufacturing Consultant',
    location: 'Hyderabad, India',
    department: 'Manufacturing',
    employmentType: 'Full-time',
    description:
      'Deliver process planning, simulation and line balancing programs using Teamcenter MPP, Process Simulate and Plant Simulate.',
  },
  {
    slug: 'ai-ml-engineer-manufacturing',
    title: 'AI / ML Engineer — Manufacturing',
    location: 'Hyderabad, India',
    department: 'AI & Data',
    employmentType: 'Full-time',
    description:
      'Build machine-learning solutions on MES and IIoT data for predictive maintenance, quality and productivity intelligence.',
  },
  {
    slug: 'integration-engineer',
    title: 'Integration & Data Migration Engineer',
    location: 'Hyderabad, India',
    department: 'Engineering',
    employmentType: 'Full-time',
    description:
      'Design and deliver PLM-ERP-MES integration and legacy data migration with consistent, trusted schemas.',
  },
];

export const careersIntro =
  'Join an expert global network delivering enterprise-grade engineering, manufacturing and AI transformation. Roles listed are indicative openings for the new website. Contact us to discuss opportunities.';
