import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from './icon';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: IconName;
  children: ReactNode;
}

export function ButtonLink({ href, variant = 'primary', icon, children, className = '', ...props }: ButtonLinkProps) {
  const variantClass =
    variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-ghost';
  return (
    <Link href={href} className={`${variantClass} ${className}`} {...props}>
      {children}
      {icon ? <Icon name={icon} className="h-4 w-4" /> : null}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="h-section mt-3 text-balance">{title}</h2>
      {lead ? <p className="lead mt-4">{lead}</p> : null}
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-data-500" />
      <span className="text-sm leading-relaxed text-ink-500">{children}</span>
    </li>
  );
}
