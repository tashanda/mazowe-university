import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ActionLink } from '@/components/action-link'
import { SectionHeading } from '@/components/section-heading'

type FeatureSplitProps = {
  eyebrow?: string
  title: string
  description: string
  points?: string[]
  imageSrc: string
  imageAlt: string
  cta?: { label: string; href: string }
  reversed?: boolean
  className?: string
}

export function FeatureSplit({
  eyebrow,
  title,
  description,
  points,
  imageSrc,
  imageAlt,
  cta,
  reversed = false,
  className,
}: FeatureSplitProps) {
  return (
    <div
      className={cn(
        'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
        className,
      )}
    >
      <div className={cn('flex flex-col gap-6', reversed && 'lg:order-2')}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          as="h2"
        />
        {points && points.length > 0 && (
          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <div>
            <ActionLink href={cta.href} variant="outline">
              {cta.label}
            </ActionLink>
          </div>
        )}
      </div>

      <div
        className={cn(
          'relative aspect-[4/3] overflow-hidden rounded-lg border border-border',
          reversed && 'lg:order-1',
        )}
      >
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}
