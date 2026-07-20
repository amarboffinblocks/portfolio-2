export type ExperienceItem = {
  period: string
  role: string
  company: string
}

type ExperienceTimelineProps = {
  items: ExperienceItem[]
  className?: string
}

export const ExperienceTimeline = ({ items, className }: ExperienceTimelineProps) => {
  return (
    <div className={className}>
      {items.map((item) => (
        <div
          key={`${item.period}-${item.role}`}
          className="group grid gap-1 border-b border-border py-5 transition-colors sm:grid-cols-[180px_1fr_0.8fr] sm:items-center sm:gap-8"
        >
          <p className="text-sm text-muted-foreground">{item.period}</p>
          <p className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {item.role}
          </p>
          <p className="text-sm text-muted-foreground">{item.company}</p>
        </div>
      ))}
    </div>
  )
}
