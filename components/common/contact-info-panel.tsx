import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ContactDetail = {
  label: string
  value: string
  href?: string
  icon: LucideIcon
}

type ContactInfoPanelProps = {
  eyebrow?: string
  title: string
  description: string
  items: ContactDetail[]
  className?: string
}

const ContactDetailItem = ({ label, value, href, icon: Icon }: ContactDetail) => {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background/10">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold tracking-[0.16em] text-background/45 uppercase">
          {label}
        </span>
        <span className="mt-1 block truncate text-sm font-medium text-background">
          {value}
        </span>
      </span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-center gap-4 transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-4">{content}</div>
}

export const ContactInfoPanel = ({
  eyebrow = 'Get in Touch',
  title,
  description,
  items,
  className,
}: ContactInfoPanelProps) => {
  return (
    <aside
      className={cn(
        'relative flex flex-col justify-between overflow-hidden rounded-2xl bg-foreground p-8 text-background sm:p-10 lg:rounded-r-none lg:rounded-l-2xl',
        className
      )}
    >
      <div className="absolute -right-16 -bottom-16 size-56 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-background/30 to-transparent" />

      <div className="relative space-y-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-background/50 uppercase">
          {eyebrow}
        </p>
        <h3 className="max-w-[14ch] font-heading text-3xl leading-snug font-semibold tracking-tight sm:text-4xl">
          {title}
        </h3>
        <p className="max-w-sm text-sm leading-6 text-background/60">{description}</p>
      </div>

      <ul className="relative mt-12 space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            <ContactDetailItem {...item} />
          </li>
        ))}
      </ul>
    </aside>
  )
}
