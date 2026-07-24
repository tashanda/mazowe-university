import Link from 'next/link'
import { Sprout } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/site'

type BrandMarkProps = {
  className?: string
  variant?: 'default' | 'inverted'
  showText?: boolean
}

export function BrandMark({
  className,
  variant = 'default',
  showText = true,
}: BrandMarkProps) {
  const inverted = variant === 'inverted'

  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        inverted
          ? 'focus-visible:ring-primary-foreground/70 focus-visible:ring-offset-primary'
          : 'focus-visible:ring-ring focus-visible:ring-offset-background',
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span
        className={cn(
          'flex size-10 shrink-0 items-center justify-center rounded-md',
          inverted
            ? 'bg-primary-foreground/10 text-primary-foreground'
            : 'bg-primary text-primary-foreground',
        )}
      >
        <Sprout className="size-6" aria-hidden="true" />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={cn(
              'font-serif text-[0.95rem] font-semibold tracking-tight',
              inverted ? 'text-primary-foreground' : 'text-foreground',
            )}
          >
            Mazowe University
          </span>
          <span
            className={cn(
              'text-[0.7rem] font-medium tracking-wide uppercase',
              inverted ? 'text-primary-foreground/70' : 'text-muted-foreground',
            )}
          >
            of Agricultural Science
          </span>
        </span>
      )}
    </Link>
  )
}
