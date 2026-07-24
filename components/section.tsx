import { cn } from '@/lib/utils'

type SectionProps = {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  as?: 'section' | 'div'
}

export function Section({
  children,
  className,
  containerClassName,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag className={cn('py-16 md:py-24', className)}>
      <div
        className={cn(
          'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
          containerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  )
}
