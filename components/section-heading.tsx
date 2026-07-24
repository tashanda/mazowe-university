import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  as?: 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-clay uppercase">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <Heading className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
