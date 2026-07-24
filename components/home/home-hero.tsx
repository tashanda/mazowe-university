import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ActionLink } from '@/components/action-link'
import { StatusBadge } from '@/components/status-badge'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-maize-field.png"
          alt="Agricultural students and a researcher walking through a green maize field in Mazowe District"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-primary/85"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="flex max-w-3xl flex-col gap-6">
          <StatusBadge
            tone="gold"
            className="w-fit border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground"
          >
            Proposed institution — under development
          </StatusBadge>

          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-6xl">
            Cultivating knowledge for Zimbabwe&apos;s agricultural future
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-pretty text-primary-foreground/85 md:text-xl">
            Mazowe University of Agricultural Science is a proposed university
            being established in Mazowe District to connect agricultural
            education, applied research, and community extension — supported by
            responsible use of technology.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/about" variant="gold" size="lg">
              Explore the Vision
              <ArrowRight className="size-4" aria-hidden="true" />
            </ActionLink>
            <ActionLink
              href="/admissions"
              variant="outline-inverted"
              size="lg"
            >
              Register Interest
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
