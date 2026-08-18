'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './logo';
import { navItems } from '@/lib/navigation';
import { Icon } from '@/components/ui/icon';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-ink-900 text-xs text-white">
        <div className="container-site flex h-9 items-center justify-between">
          <p className="hidden sm:block">{/* reserved for announcements */}</p>
          <nav aria-label="Utility" className="ml-auto flex items-center gap-5">
            <Link href="/about" className="text-white/80 transition-colors hover:text-white">
              About
            </Link>
            <Link href="/careers" className="text-white/80 transition-colors hover:text-white">
              Careers
            </Link>
            <Link href="/contact" className="text-white/80 transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div
        className={`border-b transition-all ${
          scrolled ? 'border-ink-100 bg-white/95 shadow-sm backdrop-blur' : 'border-transparent bg-white'
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between gap-4 sm:h-24 lg:h-24">
          <Logo />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:text-signal-600"
                  >
                    {item.label}
                    {item.children.length > 0 ? <Icon name="chevronDown" className="h-3.5 w-3.5" /> : null}
                  </Link>
                  {item.children.length > 0 ? (
                    <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="rounded-lg border border-ink-100 bg-white p-2 shadow-lg">
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-ink-900 transition-colors hover:bg-signal-50 hover:text-signal-600"
                        >
                          {item.label} overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-ink-500 transition-colors hover:bg-signal-50 hover:text-signal-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary hidden lg:inline-flex">
              Start Your Transformation
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 text-ink-700 lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 top-[116px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-site py-6">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-3 text-lg font-semibold text-ink-900"
                  >
                    {item.label}
                  </Link>
                  {item.children.length > 0 ? (
                    <ul className="mb-2 ml-4 border-l border-ink-100 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-base text-ink-500"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-ink-100 pt-6">
              <Link href="/contact" className="btn-primary w-full">
                Start Your Transformation
              </Link>
              <div className="mt-4 flex gap-6">
                <Link href="/about" className="text-sm font-medium text-ink-700">
                  About
                </Link>
                <Link href="/careers" className="text-sm font-medium text-ink-700">
                  Careers
                </Link>
                <Link href="/contact" className="text-sm font-medium text-ink-700">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
