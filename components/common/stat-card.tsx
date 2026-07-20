import { cn } from '@/lib/utils'

export type StatItem = {
  value: string
  label: string
}

type StatCardProps = StatItem & {
  className?: string
}

export const StatCard = ({ value, label, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl bg-background px-5 py-5',
        className
      )}
    >
      <span
        aria-hidden
        className="absolute top-0 left-0 h-full w-1 bg-primary"
      />
      <p className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  )
}

type StatsGridProps = {
  items: StatItem[]
  className?: string
}

export const StatsGrid = ({ items, className }: StatsGridProps) => {
  return (
    <div className={cn('grid grid-cols-1 gap-3 sm:grid-cols-3', className)}>
      {items.map((item) => (
        <StatCard key={item.label} value={item.value} label={item.label} />
      ))}
    </div>
  )
}

type StatsStripProps = {
  items: StatItem[]
  className?: string
}

/** Bordered inline stats row — used in About */
export const StatsStrip = ({ items, className }: StatsStripProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-3 rounded-md bg-background/80 px-2 py-5 sm:px-4 sm:py-6',
        className
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className={cn(
            'space-y-2 px-4 sm:px-6',
            index > 0 && 'border-l border-border'
          )}
        >
          <p className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            {item.value}
          </p>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}
