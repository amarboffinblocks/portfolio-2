import Image from 'next/image'
import { cn } from '@/lib/utils'

type PortraitCardProps = {
  src: string
  alt: string
  badge?: string
  /** Defaults to the global top-left scoop badge */
  badgeClassName?: string
  /** Set true for above-the-fold / LCP images (e.g. Hero) */
  priority?: boolean
  sizes?: string
  className?: string
  mediaClassName?: string
  imageClassName?: string
}

export const PortraitCard = ({
  src,
  alt,
  badge,
  badgeClassName = 'corner-badge-tl',
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 33vw',
  className,
  mediaClassName,
  imageClassName,
}: PortraitCardProps) => {
  return (
    <div className={cn('relative overflow-hidden rounded-xl ', className)}>
      <div className={cn('relative aspect-4/5 w-full rounded-xl', mediaClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn('object-cover rounded-xl', imageClassName)}
        />
      </div>

      {badge ? <div className={badgeClassName}>{badge}</div> : null}
    </div>
  )
}
