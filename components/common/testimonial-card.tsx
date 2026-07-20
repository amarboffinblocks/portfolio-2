import Image from 'next/image'
import { cn } from '@/lib/utils'

export type TestimonialItem = {
  quote: string
  name: string
  role: string
  image: string
}

type TestimonialCardProps = TestimonialItem & {
  className?: string
}

export const TestimonialCard = ({
  quote,
  name,
  role,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <figure className={cn('relative pt-7', className)}>
      <div className="absolute top-0 left-6 z-20 size-14 overflow-hidden rounded-full bg-background ring-4 ring-background">
        <Image
          src={image}
          alt={name}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>

      <blockquote className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl bg-accent px-6 pt-14 pb-24 sm:px-7 sm:pt-16">
        <span
          className="mb-4 block font-heading text-3xl leading-none text-muted-foreground/30"
          aria-hidden
        >
          &ldquo;
        </span>

        <p className="flex-1 pb-2 text-base leading-7 text-foreground">{quote}</p>

        <figcaption className="corner-badge-bl">
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{role}</p>
        </figcaption>
      </blockquote>
    </figure>
  )
}
