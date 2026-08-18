import Link from 'next/link';
import { Icon, type IconName } from '@/components/ui/icon';

export function IconCard({
  title,
  summary,
  href,
  icon,
  tag,
}: {
  title: string;
  summary: string;
  href: string;
  icon: IconName;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="card group flex h-full flex-col transition-all hover:-translate-y-1 hover:border-signal-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span className="icon-tile">
          <Icon name={icon} className="h-6 w-6" />
        </span>
        {tag ? <span className="font-mono text-xs text-ink-300">{tag}</span> : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink-900 transition-colors group-hover:text-signal-600">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{summary}</p>
    </Link>
  );
}

export function StatusBadge({ status }: { status: 'available' | 'in-development' | 'coming-soon' }) {
  const config = {
    available: { label: 'Available', className: 'bg-data-50 text-data-700 border border-data-200' },
    'in-development': { label: 'In Development', className: 'bg-signal-50 text-signal-700 border border-signal-200' },
    'coming-soon': { label: 'Coming Soon', className: 'bg-ink-50 text-ink-500 border border-ink-200' },
  }[status];
  return <span className={`badge ${config.className}`}>{config.label}</span>;
}
