import { cn } from '@/lib/utils'

export type TechTool = {
  name: string
  mark: string
  color: string
}

type TechToolTileProps = TechTool & {
  className?: string
}

export const TechToolTile = ({ name, mark, color, className }: TechToolTileProps) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center justify-center gap-3 rounded-xl bg-background/80 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:shadow-[0_12px_30px_rgb(0_0_0/0.05)]',
        className
      )}
    >
      <div
        className="flex size-12 items-center justify-center rounded-xl text-sm font-bold tracking-tight text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color }}
        aria-hidden
      >
        {mark}
      </div>
      <p className="text-sm font-semibold tracking-tight text-foreground">{name}</p>
    </div>
  )
}

type TechCategoryCardProps = {
  title: string
  tools: TechTool[]
  className?: string
}

export const TechCategoryCard = ({ title, tools, className }: TechCategoryCardProps) => {
  return (
    <article
      className={cn(
        'relative mb-6 h-fit w-full break-inside-avoid overflow-hidden rounded-xl bg-accent px-6 pt-16 pb-6 md:mb-8',
        className
      )}
    >
      <div className="corner-badge-tl">{title}</div>

      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool, index) => {
          const isWide = tools.length % 2 === 1 && index === tools.length - 1

          return (
            <TechToolTile
              key={tool.name}
              {...tool}
              className={isWide ? 'col-span-2' : undefined}
            />
          )
        })}
      </div>
    </article>
  )
}
