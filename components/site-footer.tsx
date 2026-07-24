import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'
import { mainNav, siteConfig } from '@/lib/site'

const resourceLinks = [
  { label: 'Proposed Vision', href: '/about' },
  { label: 'Planned Programs', href: '/academics' },
  { label: 'Research Themes', href: '/research' },
  { label: 'Community Extension', href: '/community' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5 lg:col-span-1">
            <BrandMark variant="inverted" />
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              A proposed university in {siteConfig.location}, being established
              to advance agricultural education, applied research, and community
              development.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-primary-foreground uppercase">
              Explore
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-primary-foreground uppercase">
              Resources
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-primary-foreground uppercase">
              Contact
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-primary-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="max-w-xl text-pretty">
            This website represents a proposed institution under development.
            Programs, facilities, and partnerships described are planned and
            subject to relevant approvals.
          </p>
        </div>
      </div>
    </footer>
  )
}
