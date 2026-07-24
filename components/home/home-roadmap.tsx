import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { StatusBadge } from '@/components/status-badge'

const phases = [
  {
    phase: 'Phase 1',
    label: 'In progress',
    tone: 'green' as const,
    title: 'Vision & planning',
    description:
      'Defining the academic vision, proposed programs, and institutional framework for the university.',
  },
  {
    phase: 'Phase 2',
    label: 'Planned',
    tone: 'gold' as const,
    title: 'Approvals & partnerships',
    description:
      'Pursuing the necessary regulatory approvals and building partnerships with government, industry, and academia.',
  },
  {
    phase: 'Phase 3',
    label: 'Future',
    tone: 'clay' as const,
    title: 'Campus & facilities',
    description:
      'Developing proposed teaching facilities, laboratories, greenhouses, and research farmland.',
  },
  {
    phase: 'Phase 4',
    label: 'Future',
    tone: 'clay' as const,
    title: 'Intended first intake',
    description:
      'Welcoming a first cohort of students, subject to accreditation and readiness.',
  },
]

export function HomeRoadmap() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Where we are"
              title="A university being built in phases"
              description="We are transparent about our stage of development. The following phases outline our intended path — timelines and outcomes are subject to approvals and available resources."
            />

            <ol className="flex flex-col gap-6">
              {phases.map((phase) => (
                <li
                  key={phase.phase}
                  className="flex gap-5 border-l-2 border-border pl-5"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                        {phase.phase}
                      </span>
                      <StatusBadge tone={phase.tone}>{phase.label}</StatusBadge>
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {phase.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {phase.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border lg:aspect-[4/4.6]">
            <Image
              src="/images/greenhouse-research.png"
              alt="Interior of a modern research greenhouse with rows of healthy seedlings"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
