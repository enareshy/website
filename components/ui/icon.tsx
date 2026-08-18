import type { SVGProps } from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

export const icons = {
  layers: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="m2 12 10 5 10-5" />
      <path d="m2 17 10 5 10-5" />
    </svg>
  ),
  compass: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z" />
    </svg>
  ),
  factory: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M2 20V8l7 5V8l7 5V4h4v16H2Z" />
      <path d="M6 20v-3m4 3v-3m4 3v-3m4 3v-3" />
    </svg>
  ),
  cube: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
  link: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  brain: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M9.5 2a2.5 2.5 0 0 0-2.5 2.5v.5A2.5 2.5 0 0 0 5 7.5v.2A2.5 2.5 0 0 0 4 12a2.5 2.5 0 0 0 1 4.3v.2a2.5 2.5 0 0 0 2 2.45V19.5A2.5 2.5 0 0 0 9.5 22" />
      <path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5v.5A2.5 2.5 0 0 1 19 7.5v.2A2.5 2.5 0 0 1 20 12a2.5 2.5 0 0 1-1 4.3v.2a2.5 2.5 0 0 1-2 2.45V19.5A2.5 2.5 0 0 1 14.5 22" />
      <path d="M9.5 2h5v6.2L12 10 9.5 8.2V2ZM9.5 22v-6.2L12 14l2.5 1.8V22" />
    </svg>
  ),
  twin: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" />
    </svg>
  ),
  diagram: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="2" y="4" width="6" height="6" rx="1" />
      <rect x="16" y="4" width="6" height="6" rx="1" />
      <rect x="2" y="14" width="6" height="6" rx="1" />
      <rect x="16" y="14" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M8 7h8M8 17h8M12 15v-3" />
    </svg>
  ),
  robotic: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M12 6V3" />
      <circle cx="12" cy="12" r="3" />
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M6 8V6h12v2M8 20v2M16 20v2" />
    </svg>
  ),
  system: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M7.5 7.5 5.8 16M16.5 7.5 18.2 16M12 8v11" />
    </svg>
  ),
  ml: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <path d="M7 6h10M3 12h18M7 18h10M5 18h2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M5 8v8m14-8v8" />
    </svg>
  ),
  iot: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M12 15v6M6 12H2m20 0h-4M6.3 6.3 3.5 3.5m14.2 2.8 2.8-2.8M6.3 17.7l-2.8 2.8m14.2-2.8 2.8 2.8" />
    </svg>
  ),
  automation: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  ),
  bom: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 4h16v16H4z" />
      <path d="M8 4v16M16 4v16M4 12h4m8 0h4" />
    </svg>
  ),
  database: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  branch: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="12" cy="18" r="3" />
      <path d="M9 8v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8M9 6h6" />
    </svg>
  ),
  change: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 4h7a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H4m16 6v-7a5 5 0 0 0-5-5v0" />
      <path d="m6 8 3 3 3-3" />
    </svg>
  ),
  university: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
      <path d="M22 10v6" />
    </svg>
  ),
  copilot: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a5 5 0 0 1 10 0v2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  analytics: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" />
    </svg>
  ),
  car: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M5 12 7 6a2 2 0 0 1 1.9-1.5h6.2A2 2 0 0 1 17 6l2 6M5 12h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a2 2 0 0 1 2-2Z" />
      <circle cx="7.5" cy="14" r="1" />
      <circle cx="16.5" cy="14" r="1" />
    </svg>
  ),
  airplane: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 1 0-3-3L13 8 4.8 6.2a1 1 0 0 0-1 1.7l5.9 4.3-3.4 3.4-2.3.8.7 2.2 2.2.7.8-2.3 3.4-3.4 4.3 5.9a1 1 0 0 0 1.7-1Z" />
    </svg>
  ),
  energy: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M13 2 3 14h8l-1 8 11-13h-8l0-7Z" />
    </svg>
  ),
  crane: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 6h12v4M4 22V6m12 0h4v16M4 22h16" />
      <path d="M8 10h6v2H8zM14 14h4v2h-4zM8 14h3v2H8z" />
    </svg>
  ),
  building: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14M10 5V3h4v2" />
      <path d="M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1" />
    </svg>
  ),
  target: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  users: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="4" />
      <path d="M3 21v-1a6 6 0 0 1 12 0v1M16 4.5a4 4 0 0 1 0 7M17 21v-1a6 6 0 0 0-3-5.2" />
    </svg>
  ),
  book: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5M8 7h8m-8 4h8" />
    </svg>
  ),
  star: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  ),
  briefcase: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" />
    </svg>
  ),
  handshake: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2l-3-3a1.4 1.4 0 0 0-2 0l-3 3a1.4 1.4 0 0 0 2 2l2-2" />
      <path d="M13 12 4.6 7.6a2 2 0 0 1 2.1-3.4L13 9l6.3-4.8a2 2 0 0 1 2.1 3.4L15 12" />
      <path d="M15 12 6 7.6M15 12v9" />
    </svg>
  ),
  arrowRight: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  ),
  arrowUpRight: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  check: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  ),
  chevronDown: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  menu: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  mail: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  pin: ({ ...p }: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = icons[name];
  return <Cmp className={className} />;
}
