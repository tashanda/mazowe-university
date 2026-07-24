import {
  GraduationCap,
  FlaskConical,
  Sprout,
  Users,
  Wheat,
  Lightbulb,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Agricultural Education',
    description:
      'Practical, rigorous teaching rooted in crop science, soil science, livestock, and sustainable farming systems.',
  },
  {
    icon: FlaskConical,
    title: 'Applied Research',
    description:
      'Research designed to address real challenges facing Zimbabwean farmers and the wider region.',
  },
  {
    icon: Lightbulb,
    title: 'Technology & AI',
    description:
      'Technology, including artificial intelligence, applied responsibly as a tool to support agricultural decision-making.',
  },
  {
    icon: Sprout,
    title: 'Entrepreneurship',
    description:
      'Planned programs intended to help students turn agricultural knowledge into viable enterprises.',
  },
  {
    icon: Users,
    title: 'Community Extension',
    description:
      'Proposed outreach connecting the university with farmers and rural communities across the district.',
  },
  {
    icon: Wheat,
    title: 'Food Security',
    description:
      'A guiding priority: contributing to national food security and long-term development.',
  },
]

export function HomePillars() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Our purpose"
          title="One mission, connecting agriculture to national development"
          description="Agriculture is our primary identity. Every proposed pillar of the university is designed to strengthen it — with technology serving as an enabler, never the focus."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <li
              key={pillar.title}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <pillar.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
