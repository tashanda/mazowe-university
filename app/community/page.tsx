import type { Metadata } from 'next'
import { BookOpen, Handshake, Radio, Users } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { FeatureSplit } from '@/components/feature-split'
import { StatusBadge } from '@/components/status-badge'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Community Extension',
  description:
    'Learn about the proposed community extension and outreach programs at Mazowe University of Agricultural Science, connecting research with farmers and rural communities.',
}

const programs = [
  {
    icon: BookOpen,
    title: 'Farmer Training',
    description:
      'Proposed short courses and workshops to share practical agricultural knowledge with local farmers.',
  },
  {
    icon: Radio,
    title: 'Advisory Services',
    description:
      'Intended advisory support to help farmers make informed decisions on crops, soil, and water.',
  },
  {
    icon: Users,
    title: 'Field Demonstrations',
    description:
      'Planned demonstration plots showing improved and sustainable farming practices in real conditions.',
  },
  {
    icon: Handshake,
    title: 'Community Partnerships',
    description:
      'Proposed collaboration with cooperatives, local organisations, and rural communities.',
  },
]

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        badge="Proposed programs"
        eyebrow="Community & extension"
        title="A university connected to its community"
        description="Extension and outreach are central to our proposed mission. These planned programs are intended to share knowledge directly with farmers and rural communities across Mazowe District and beyond."
      />

      <Section>
        <FeatureSplit
          eyebrow="Our intent"
          title="Bridging research and everyday farming"
          description="We believe agricultural knowledge should not stay within campus walls. The proposed extension model is designed to carry research and practical skills directly to the people who grow the nation's food."
          points={[
            'Planned knowledge-sharing with smallholder farmers',
            'Intended support for sustainable, locally-appropriate practices',
            'A future two-way exchange between researchers and communities',
          ]}
          imageSrc="/images/community-extension.png"
          imageAlt="An extension worker sharing agricultural information with a group of farmers in a field"
        />
      </Section>

      <Section className="border-y border-border bg-secondary/30">
        <SectionHeading
          eyebrow="Planned initiatives"
          title="How we intend to engage the community"
          description="These proposed programs will be developed as the university is established. Availability will depend on facilities, staffing, and partnerships."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <li
              key={program.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-md bg-clay/15 text-clay">
                <program.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>
              <StatusBadge tone="muted" className="mt-auto w-fit">
                Planned
              </StatusBadge>
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection
        title="Work with us on community programs"
        description="If you represent a farming cooperative, community organisation, or development partner, we would welcome an early conversation about future collaboration."
      />
    </>
  )
}
