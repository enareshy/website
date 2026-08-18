import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/seo';

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: 'Home', href: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(all)) }} />
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-400">
        {all.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i === all.length - 1 ? (
              <span aria-current="page" className="font-medium text-ink-700">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-signal-600">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
