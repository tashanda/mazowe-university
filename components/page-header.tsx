import { StatusBadge } from '@/components/status-badge'

type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  badge?: string
}

export function PageHeader({
  eyebrow,
  title,
  description,
  badge,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-5">
          {badge && (
            <StatusBadge
              tone="gold"
              className="w-fit border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground"
            >
              {badge}
            </StatusBadge>
          )}
          {eyebrow && (
            <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg leading-relaxed text-pretty text-primary-foreground/80">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
