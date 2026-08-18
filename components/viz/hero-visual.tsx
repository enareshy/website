'use client';

import { useEffect, useState } from 'react';

const nodes = [
  { id: 'plm', label: 'PLM', x: 42, y: 100, group: 'sys' },
  { id: 'cad', label: 'CAD', x: 42, y: 210, group: 'sys' },
  { id: 'erp', label: 'ERP', x: 42, y: 320, group: 'sys' },
  { id: 'bom', label: 'BOM', x: 195, y: 70, group: 'data' },
  { id: 'twin', label: 'Digital Twin', x: 195, y: 300, group: 'data' },
  { id: 'design', label: 'Design', x: 340, y: 70, group: 'eng' },
  { id: 'eng', label: 'Engineering', x: 340, y: 210, group: 'eng' },
  { id: 'mfg', label: 'Manufacturing', x: 340, y: 320, group: 'eng' },
  { id: 'ai', label: 'AI', x: 470, y: 210, group: 'ai' },
];

const edges = [
  ['plm', 'bom'],
  ['cad', 'design'],
  ['erp', 'twin'],
  ['bom', 'design'],
  ['bom', 'eng'],
  ['bom', 'mfg'],
  ['twin', 'mfg'],
  ['design', 'eng'],
  ['eng', 'mfg'],
  ['eng', 'ai'],
  ['mfg', 'ai'],
];

const groupColor: Record<string, string> = {
  sys: '#00C2A8',
  data: '#7AAFFF',
  eng: '#54DCCB',
  ai: '#FFD166',
};

const groupLabel: Record<string, string> = {
  sys: 'PLM · CAD · ERP',
  data: 'Product Data',
  eng: 'Lifecycle',
  ai: 'Intelligence',
};

export function HeroVisual() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      <svg viewBox="0 0 520 400" className="w-full">
        <defs>
          <linearGradient id="edgegrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00C2A8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFD166" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="504" height="384" rx="16" fill="rgba(11,18,32,0.35)" stroke="rgba(255,255,255,0.08)" />
        {edges.map(([a, b]) => {
          const na = nodes.find((n) => n.id === a)!;
          const nb = nodes.find((n) => n.id === b)!;
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1.5"
            />
          );
        })}
        <line x1={nodes.find((n) => n.id === 'eng')!.x} y1={nodes.find((n) => n.id === 'eng')!.y} x2={nodes.find((n) => n.id === 'ai')!.x} y2={nodes.find((n) => n.id === 'ai')!.y} stroke="url(#edgegrad)" strokeWidth="2" />
        <line x1={nodes.find((n) => n.id === 'mfg')!.x} y1={nodes.find((n) => n.id === 'mfg')!.y} x2={nodes.find((n) => n.id === 'ai')!.x} y2={nodes.find((n) => n.id === 'ai')!.y} stroke="url(#edgegrad)" strokeWidth="2" />
        <circle cx={nodes.find((n) => n.id === 'ai')!.x} cy={nodes.find((n) => n.id === 'ai')!.y} r="52" fill="rgba(255,209,102,0.10)" stroke="rgba(255,209,102,0.35)" strokeWidth="1" strokeDasharray="3 5" />
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="27" fill="rgba(11,18,32,0.6)" stroke={groupColor[n.group]} strokeWidth="1.5" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={n.id === 'twin' || n.id === 'eng' || n.id === 'mfg' ? 9.5 : 11} fontWeight="600" fill="#fff">
              {n.label}
            </text>
            <circle cx={n.x} cy={n.y} r="4" fill={groupColor[n.group]} />
          </g>
        ))}
      </svg>
      <div className="mt-2 grid grid-cols-4 gap-2 text-center">
        {Object.keys(groupLabel).map((g) => (
          <div key={g} className="rounded-md bg-white/5 px-2 py-1.5">
            <span className="mx-auto mb-1 block h-1.5 w-1.5 rounded-full" style={{ background: groupColor[g] }} />
            <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/70">{groupLabel[g]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
