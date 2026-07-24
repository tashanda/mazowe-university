import { cn } from '@/lib/utils'

type StatusBadgeProps = {
  children: React.ReactNode
  className?: string
  tone?: 'gold' | 'green' | 'clay' | 'muted'
  icon?: React.ReactNode
}

const toneStyles: Record<NonNullable<StatusBadgeProps['tone']>, string> = {
  gold: 'border-accent/50 bg-accent/15 text-accent-foreground',
  green: 'border-primary/25 bg-primary/10 text-primary',
  clay: 'border-clay/30 bg-clay/10 text-clay',
  muted: 'border-border bg-muted text-muted-foreground',
}

export function StatusBadge({
  children,
  className,
  tone = 'gold',
  icon,
}: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase',
        toneStyles[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}
