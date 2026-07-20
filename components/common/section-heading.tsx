import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 pb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12',
        className
      )}
    >
      <div className="max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-heading text-4xl leading-tight font-semibold text-primary lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
