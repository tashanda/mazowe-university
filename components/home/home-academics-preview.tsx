import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ActionLink } from '@/components/action-link'
import { StatusBadge } from '@/components/status-badge'

const areas = [
  {
    title: 'Crop & Soil Science',
    description:
      'Proposed studies in crop production, agronomy, soil health, and sustainable land management.',
  },
  {
    title: 'Animal & Livestock Science',
    description:
      'Planned programs covering animal husbandry, nutrition, and livestock systems.',
  },
  {
    title: 'Agricultural Engineering',
    description:
      'Intended focus on irrigation, mechanisation, and appropriate farm technology.',
  },
  {
    title: 'Agribusiness & Enterprise',
    description:
      'Proposed pathways linking agricultural science with markets and entrepreneurship.',
  },
  {
    title: 'Food Science & Security',
    description:
      'Planned study of food systems, processing, and national food security.',
  },
  {
    title: 'Agricultural Data & Technology',
    description:
      'Intended coursework applying data and AI tools responsibly within agriculture.',
  },
]

export function HomeAcademicsPreview() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6">
          <StatusBadge
            tone="gold"
            className="w-fit border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground"
          >
            Planned areas of study
          </StatusBadge>
          <div className="flex flex-col gap-4">
            <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl">
              Proposed faculties and areas of study
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-pretty text-primary-foreground/80">
              The following academic areas are planned and remain subject to
              development and formal approval. They reflect our agricultural
              focus and long-term vision.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area.title}
              className="flex flex-col gap-3 bg-primary p-7"
            >
              <h3 className="text-lg font-semibold tracking-tight text-primary-foreground">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/75">
                {area.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ActionLink href="/academics" variant="gold">
            View all planned programs
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
