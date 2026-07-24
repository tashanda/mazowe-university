import type { Metadata } from 'next'
import { Droplets, Leaf, Microscope, Package, Sun, Wheat } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import { SectionHeading } from '@/components/section-heading'
import { FeatureSplit } from '@/components/feature-split'
import { StatusBadge } from '@/components/status-badge'
import { CtaSection } from '@/components/cta-section'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Discover the intended research themes at Mazowe University of Agricultural Science, focused on applied agricultural science, food security, and sustainable farming. Research priorities are proposed and under development.',
}

const themes = [
  {
    icon: Leaf,
    title: 'Soil Health & Fertility',
    description:
      'Proposed research into soil management, fertility, and sustainable land-use practices suited to local conditions.',
  },
  {
    icon: Wheat,
    title: 'Crop Improvement & Resilience',
    description:
      'Intended work on crop varieties, resilience to climate stress, and improved production methods.',
  },
  {
    icon: Droplets,
    title: 'Water & Irrigation',
    description:
      'Planned study of efficient irrigation, water conservation, and resilient water management for farming.',
  },
  {
    icon: Package,
    title: 'Post-Harvest & Food Systems',
    description:
      'Proposed research into storage, processing, and reducing post-harvest losses to strengthen food security.',
  },
  {
    icon: Sun,
    title: 'Climate-Smart Agriculture',
    description:
      'Intended focus on farming practices that adapt to a changing climate while protecting the environment.',
  },
  {
    icon: Microscope,
    title: 'Data & Applied Technology',
    description:
      'Planned responsible use of data and AI tools to support agricultural research and decision-making.',
  },
]

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        badge="Research agenda under development"
        eyebrow="Research"
        title="Applied research for real agricultural challenges"
        description="The research themes below represent our intended priorities. They are proposed, under development, and will depend on future faculty, facilities, funding, and partnerships."
      />

      <Section>
        <SectionHeading
          eyebrow="Proposed research themes"
          title="Six intended areas of applied focus"
          description="Each theme is chosen for its relevance to Zimbabwean agriculture and its potential to deliver practical benefits to farmers and communities."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <li
              key={theme.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <theme.icon className="size-6" aria-hidden="true" />
                </span>
                <StatusBadge tone="muted">Planned</StatusBadge>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {theme.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {theme.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-y border-border bg-secondary/30">
        <FeatureSplit
          eyebrow="Research to practice"
          title="Knowledge that reaches the field"
          description="The proposed research model is built around impact. Findings are intended to move beyond publications and into the hands of farmers through extension, training, and demonstration."
          points={[
            'Intended collaboration with farmers and local communities',
            'Planned partnerships with government and industry (subject to approval)',
            'A future emphasis on practical, measurable outcomes',
          ]}
          imageSrc="/images/research-soil-lab.png"
          imageAlt="Scientist studying soil and plant samples in an agricultural research laboratory"
          cta={{ label: 'See community extension plans', href: '/community' }}
        />
      </Section>

      <Section>
        <div className="rounded-lg border border-accent/40 bg-accent/10 p-8 md:p-10">
          <div className="flex flex-col gap-3">
            <StatusBadge tone="gold">Please note</StatusBadge>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              No research outputs to report yet
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-pretty text-muted-foreground">
              As a proposed institution, the university has not yet conducted
              research or produced findings. This page describes intended
              priorities only. We will not present planned work as completed,
              and any future results will be reported transparently.
            </p>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Partner with us on future research"
        description="We welcome early conversations with researchers, institutions, and organisations interested in collaborating as our research capacity develops."
      />
    </>
  )
}
