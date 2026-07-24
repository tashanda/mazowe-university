import type { Metadata } from 'next'
import { GraduationCap, Sprout, Beaker, Tractor, LineChart } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore the planned faculties, programs, and areas of study at Mazowe University of Agricultural Science. All programs are proposed and subject to development and approval.',
}

const faculties = [
  {
    icon: Sprout,
    name: 'Faculty of Crop & Soil Sciences',
    description:
      'Proposed programs in agronomy, crop production, soil health, plant science, and sustainable land management.',
    programs: [
      'Crop Science',
      'Soil Science',
      'Horticulture',
      'Plant Health & Protection',
    ],
  },
  {
    icon: Tractor,
    name: 'Faculty of Animal & Agricultural Engineering',
    description:
      'Planned study of livestock systems, animal nutrition, irrigation, mechanisation, and appropriate farm technology.',
    programs: [
      'Animal Science',
      'Livestock Production',
      'Agricultural Engineering',
      'Irrigation & Water Management',
    ],
  },
  {
    icon: LineChart,
    name: 'Faculty of Agribusiness & Food Systems',
    description:
      'Intended pathways linking agricultural science with markets, enterprise, food processing, and food security.',
    programs: [
      'Agribusiness Management',
      'Agricultural Economics',
      'Food Science & Technology',
      'Rural Enterprise',
    ],
  },
  {
    icon: Beaker,
    name: 'Faculty of Agricultural Data & Technology',
    description:
      'Proposed coursework applying data, digital tools, and AI responsibly to support agricultural research and practice.',
    programs: [
      'Agricultural Data Science',
      'Precision Agriculture',
      'Applied AI in Agriculture',
      'Farm Information Systems',
    ],
  },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        badge="Planned — subject to approval"
        eyebrow="Academics"
        title="Proposed faculties and programs"
        description="The academic structure below reflects our intended direction. All faculties and programs are planned, under development, and subject to accreditation and formal approval."
      />

      <Section>
        <SectionHeading
          eyebrow="Areas of study"
          title="Four proposed faculties, one agricultural mission"
          description="Each planned faculty is designed to reinforce our agricultural focus, from foundational science to enterprise and supporting technology."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {faculties.map((faculty) => (
            <article
              key={faculty.name}
              className="flex flex-col gap-5 rounded-lg border border-border bg-card p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <faculty.icon className="size-6" aria-hidden="true" />
                </span>
                <StatusBadge tone="gold">Proposed</StatusBadge>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {faculty.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {faculty.description}
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-5">
                <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Planned programs
                </span>
                <ul className="flex flex-wrap gap-2">
                  {faculty.programs.map((program) => (
                    <li
                      key={program}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {program}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-secondary/30">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Learning approach"
            title="Practical, applied, and grounded in the field"
            description="Our intended teaching philosophy combines classroom learning with hands-on experience, so that graduates are prepared for real agricultural work."
          />
          <ul className="flex flex-col gap-4">
            {[
              {
                title: 'Field-based learning',
                body: 'Planned access to research farmland, greenhouses, and laboratories for practical training.',
              },
              {
                title: 'Applied research projects',
                body: 'Intended opportunities for students to contribute to research that addresses real farming challenges.',
              },
              {
                title: 'Enterprise & extension',
                body: 'Proposed pathways connecting students with agribusiness and community extension work.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-1.5 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="pl-8 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaSection
        title="Interested in a future program?"
        description="Program details, entry requirements, and start dates are still being developed. Register your interest to receive updates as academic plans progress."
      />
    </>
  )
}
