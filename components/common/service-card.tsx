import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from '@/components/icons'
import { cn } from '@/lib/utils'

type ServiceCardProps = {
  number: string
  title: string
  description: string
  icon: LucideIcon
  items: string[]
  className?: string
}

export const ServiceCard = ({
  number,
  title,
  description,
  icon: Icon,
  items,
  className,
}: ServiceCardProps) => {
  return (
    <article
      className={cn(
        'relative flex flex-col overflow-hidden rounded-xl border border-transparent bg-accent p-6 transition-all duration-300 sm:p-8',
        className
      )}
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Icon className="size-4 stroke-[1.5]" aria-hidden />
        </div>
        <span className="font-heading text-xs font-semibold tracking-[0.2em] text-muted-foreground">
          {number}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>

      <ul className="mt-8 flex-1 border-t border-border/60">
        {items.map((item) => (
          <li
            key={item}
            className="group flex cursor-pointer items-center justify-between gap-4 border-b border-border/60 py-3 text-sm text-foreground/90 transition-colors duration-300 hover:text-foreground"
          >
            <span>{item}</span>
            <ArrowUpRight
              className="size-3.5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </li>
        ))}
      </ul>
    </article>
  )
}

type ServiceHighlightCardProps = {
  title: string
  description: string
  href: string
  linkLabel?: string
  className?: string
}

export const ServiceHighlightCard = ({
  title,
  description,
  href,
  linkLabel = "Let's talk",
  className,
}: ServiceHighlightCardProps) => {
  return (
    <article
      className={cn(
        'relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-xl bg-foreground p-6 text-background shadow-[0_18px_60px_rgb(0_0_0/0.08)] sm:p-8 md:col-span-2 xl:col-span-1',
        className
      )}
    >
      <div className="absolute -right-10 -bottom-10 size-44 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-background/35 to-transparent" />

      <div className="relative flex size-11 items-center justify-center rounded-full bg-background text-foreground">
        <ArrowUpRight className="size-4" aria-hidden />
      </div>

      <div className="relative space-y-5">
        <p className="max-w-[15ch] font-heading text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
          {title}
        </p>
        <p className="max-w-xs text-sm leading-6 text-background/65">{description}</p>
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-background transition-opacity hover:opacity-80"
        >
          {linkLabel}
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </div>
    </article>
  )
}
