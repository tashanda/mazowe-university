import type { Metadata } from 'next'
import { Compass, HeartHandshake, ShieldCheck, Target } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { FeatureSplit } from '@/components/feature-split'
import { CtaSection } from '@/components/cta-section'
import { StatusBadge } from '@/components/status-badge'

export const metadata: Metadata = {
  title: 'About & Vision',
  description:
    'Learn about the proposed vision, mission, and guiding values of Mazowe University of Agricultural Science, a university under development in Mazowe District, Zimbabwe.',
}

const values = [
  {
    icon: Target,
    title: 'Agricultural focus',
    description:
      'Agriculture is our primary identity. Every proposed activity is intended to strengthen farming, food systems, and rural livelihoods.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency',
    description:
      'As an institution under development, we clearly distinguish between what exists today and what is planned for the future.',
  },
  {
    icon: HeartHandshake,
    title: 'Community',
    description:
      'We intend to remain closely connected to farmers and communities across Mazowe District and the wider region.',
  },
  {
    icon: Compass,
    title: 'Practical rigour',
    description:
      'We aim to combine academic rigour with practical, applied outcomes that make a measurable difference on the ground.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Proposed institution"
        eyebrow="About the university"
        title="A university being built for agriculture and national development"
        description="Mazowe University of Agricultural Science is a proposed institution in Mazowe District, Zimbabwe. This page describes our intended vision and values as we work toward establishment."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Our vision"
              title="Advancing agriculture through knowledge and community"
            />
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                We envision a university where agricultural education, applied
                research, and community extension work together to strengthen
                food security and support Zimbabwe&apos;s long-term
                development.
              </p>
              <p>
                Technology, including artificial intelligence, is intended to
                serve as an enabler — a set of practical tools that support
                sound agricultural science rather than replace it.
              </p>
              <p>
                As a proposed institution, our programs, facilities, and
                partnerships are still under development and remain subject to
                relevant approvals.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-lg border border-border bg-secondary/40 p-8">
            <StatusBadge tone="green">Mission</StatusBadge>
            <p className="font-serif text-xl leading-relaxed text-pretty text-foreground md:text-2xl">
              To connect agricultural education, applied research, technology,
              and community extension in service of food security and national
              development.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-secondary/30">
        <SectionHeading
          eyebrow="What guides us"
          title="Our guiding values"
          description="These principles are intended to shape how the university is built and how it will operate once established."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li
              key={value.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <value.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <FeatureSplit
          eyebrow="Our location"
          title="Rooted in Mazowe District"
          description="Mazowe District is one of Zimbabwe's important agricultural regions. The proposed university is intended to draw on this agricultural heritage while contributing new knowledge, skills, and opportunities to the community around it."
          points={[
            'Situated within a productive agricultural landscape',
            'Intended to serve local farmers and rural communities',
            'Planned as a hub connecting research and practice',
          ]}
          imageSrc="/images/hero-maize-field.png"
          imageAlt="Green maize fields and rolling hills in Mazowe District, Zimbabwe"
        />
      </Section>

      <CtaSection
        title="Help shape the future of the university"
        description="We welcome interest from prospective students, partners, researchers, and supporters who share our commitment to agriculture and national development."
      />
    </>
  )
}
