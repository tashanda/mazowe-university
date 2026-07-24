import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const actionLinkVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-deep',
        gold: 'bg-accent text-accent-foreground hover:bg-accent/85',
        outline:
          'border border-border bg-transparent text-foreground hover:bg-muted',
        'outline-inverted':
          'border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 focus-visible:ring-primary-foreground/70 focus-visible:ring-offset-primary',
        ghost: 'text-primary hover:text-primary-deep hover:underline',
      },
      size: {
        default: 'h-11 px-6',
        lg: 'h-12 px-7 text-[0.95rem]',
        sm: 'h-9 px-4 text-[0.8rem]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

type ActionLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof actionLinkVariants>

export function ActionLink({
  className,
  variant,
  size,
  ...props
}: ActionLinkProps) {
  return (
    <Link
      className={cn(actionLinkVariants({ variant, size, className }))}
      {...props}
    />
  )
}
