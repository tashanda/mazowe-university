'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mainNav } from '@/lib/site'
import { BrandMark } from '@/components/brand-mark'
import { ActionLink } from '@/components/action-link'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandMark />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  active
                    ? 'text-primary'
                    : 'text-foreground/75 hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ActionLink href="/admissions" size="sm" variant="primary">
            Explore Admissions
          </ActionLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {mainNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3 py-3 text-base font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    active
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <ActionLink
              href="/admissions"
              variant="primary"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Explore Admissions
            </ActionLink>
          </nav>
        </div>
      )}
    </header>
  )
}
