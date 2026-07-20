import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type BadgePanelProps = {
  badge: string
  children: ReactNode
  badgeClassName?: string
  className?: string
}

export const BadgePanel = ({
  badge,
  children,
  badgeClassName = 'corner-badge-tl',
  className,
}: BadgePanelProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-accent p-8 pt-16 lg:p-10 lg:pt-16',
        className
      )}
    >
      <div className={badgeClassName}>{badge}</div>
      {children}
    </div>
  )
}
