import { ActionLink } from '@/components/action-link'

type CtaSectionProps = {
  title?: string
  description?: string
}

export function CtaSection({
  title = 'Be part of a university in the making',
  description = 'Mazowe University is currently under development. Prospective students, partners, and researchers are invited to register interest and help shape what comes next.',
}: CtaSectionProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start gap-8 rounded-lg border border-border bg-secondary/40 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-foreground md:text-3xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-pretty text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ActionLink href="/admissions" variant="primary">
              Register Interest
            </ActionLink>
            <ActionLink href="/contact" variant="outline">
              Contact the Team
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  )
}
