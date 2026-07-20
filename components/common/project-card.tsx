import Image from 'next/image'
import { ArrowUpRight } from '@/components/icons'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

export type ProjectCardProps = {
  title: string
  category: string
  description: string
  href: string
  imageSrc: string
  imageAlt?: string
  ctaLabel?: string
  className?: string
}

export const ProjectCard = ({
  title,
  category,
  description,
  href,
  imageSrc,
  imageAlt,
  ctaLabel = 'View Project',
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-accent ',
        className
      )}
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />

        <div className="corner-badge-tl">{category}</div>
      </div>

      <div className="flex flex-1 flex-col p-5 pb-16 sm:p-6 sm:pb-16">
        <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="corner-badge-br ">
        <Button variant={"link"} size={"sm"}>
          {ctaLabel}
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Button>
      </div>
    </div>
  )
}
