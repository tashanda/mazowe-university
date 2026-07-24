import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Building2 } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'
import { ContactForm } from '@/components/contact-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach the development team behind the proposed Mazowe University of Agricultural Science for partnership, academic, and community enquiries.',
}

const channels = [
  {
    icon: Mail,
    label: 'General enquiries',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: 'Development office',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Proposed location',
    value: siteConfig.location,
  },
]

const offices = [
  {
    name: 'Partnerships & Collaboration',
    detail:
      'Government bodies, agricultural organisations, and academic institutions exploring formal collaboration.',
  },
  {
    name: 'Academic Development',
    detail:
      'Curriculum advisors, prospective faculty, and subject-matter experts contributing to planned programs.',
  },
  {
    name: 'Community & Extension',
    detail:
      'Farmer cooperatives, extension networks, and community groups interested in future outreach.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with the development team"
        description="Mazowe University of Agricultural Science is in active planning. We welcome enquiries from partners, educators, and community members who share our commitment to advancing agriculture."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Reach us"
              title="Ways to connect"
              description="During this development phase, all enquiries are handled by the planning and partnerships office."
            />
            <ul className="mt-8 space-y-6">
              {channels.map((channel) => {
                const Icon = channel.icon
                const content = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="font-medium text-foreground">
                        {channel.value}
                      </span>
                    </span>
                  </>
                )
                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="flex items-center gap-4 rounded-md transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 rounded-lg border border-border bg-muted/40 p-6">
              <div className="flex items-center gap-2">
                <Building2
                  className="size-4 text-muted-foreground"
                  aria-hidden="true"
                />
                <h3 className="font-serif text-lg text-foreground">
                  Directing your enquiry
                </h3>
              </div>
              <ul className="mt-4 space-y-4">
                {offices.map((office) => (
                  <li key={office.name}>
                    <p className="text-sm font-medium text-foreground">
                      {office.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {office.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              <StatusBadge className="mr-1 align-middle">Note</StatusBadge>
              Contact details shown are placeholders for the proposed
              institution and will be finalised as the university is
              established.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-2xl text-foreground">
              Send a message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Complete the form and the development team will respond as the
              project progresses.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
