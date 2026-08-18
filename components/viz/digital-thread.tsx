'use client';

import { useEffect, useState } from 'react';

const lifecycle = ['Concept', 'Design', 'Engineering', 'BOM', 'Change', 'Manufacturing', 'Service'];
const systems = ['PLM', 'ERP', 'MES', 'IoT', 'AI', 'Digital Twin'];
const value = ['Data', 'Context', 'Intelligence', 'Automation', 'Decisions'];

export function DigitalThreadVisualization() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-ink-100 bg-white shadow-card">
      {/* Lifecycle row */}
      <div className="bg-gradient-to-r from-signal-50 via-white to-data-50 p-6 sm:p-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-signal-600">
          The product digital thread
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-y-4">
          {lifecycle.map((node, i) => (
            <div key={node} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-signal-500 bg-signal-500 text-xs font-bold text-white shadow-md shadow-signal-500/30">
                  {node}
                </div>
              </div>
              {i < lifecycle.length - 1 ? (
                <div className="relative mx-2 flex items-center sm:mx-3">
                  <div className="h-0.5 w-6 bg-gradient-to-r from-signal-400 to-data-400 sm:w-10" />
                  {!reduced ? (
                    <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-data-500" />
                  ) : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Systems row */}
      <div className="border-b border-t border-ink-100 bg-ink-900 p-6 sm:p-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-data-300">
          Connected systems
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {systems.map((s, i) => (
            <span
              key={s}
              className={`rounded-md border px-3 py-1.5 font-mono text-sm font-medium ${
                i % 2 === 0
                  ? 'border-signal-400/40 bg-signal-500/15 text-signal-200'
                  : 'border-data-400/40 bg-data-500/15 text-data-200'
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Value chain */}
      <div className="bg-gradient-to-r from-white via-data-50/50 to-signal-50/50 p-6 sm:p-8">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-data-600">
          Data to decisions
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-y-3">
          {value.map((step, i) => (
            <div key={step} className="flex items-center">
              <div className="rounded-md bg-gradient-to-br from-signal-600 to-data-600 px-3 py-1.5 text-sm font-semibold text-white shadow-md shadow-signal-500/25">
                {step}
              </div>
              {i < value.length - 1 ? (
                <span className="mx-2 text-data-500 sm:mx-3" aria-hidden="true">
                  &rarr;
                </span>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-ink-500">
          Hiindsight connects product and process data end to end so that it becomes context,
          intelligence, automation — and better decisions.
        </p>
      </div>
    </div>
  );
}
