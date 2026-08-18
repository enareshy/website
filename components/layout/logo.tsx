import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export function Logo({
  variant = 'dark',
  className = '',
}: {
  variant?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label={`${siteConfig.name} — home`}>
      <Image
        src={variant === 'light' ? '/logos/hiindsight-white-640.webp' : '/logos/hiindsight-primary-640.webp'}
        alt={`${siteConfig.name} logo`}
        width={640}
        height={214}
        priority
        className="h-10 w-auto sm:h-12 lg:h-14"
        style={{ objectFit: 'contain' }}
      />
    </Link>
  );
}
