import { Boxes, Cloud, Code2, Database, Layers, Sparkles } from 'lucide-react'

const stack = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layers,
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Boxes,
    items: ['Node.js', 'Express', 'REST APIs', 'tRPC'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Prisma'],
  },
  {
    title: 'Generative AI',
    icon: Sparkles,
    items: ['OpenAI', 'LangChain', 'RAG', 'AI SDK'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    items: ['Vercel', 'Docker', 'GitHub Actions', 'AWS'],
  },
]

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16">
      <div className="mb-10 max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Tech Stack
          </p>
        </div>
        <h2 className="font-heading text-4xl leading-tight font-semibold text-primary lg:text-5xl">
          Tools I Work With
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stack.map((group) => {
          const Icon = group.icon

          return (
            <article
              key={group.title}
              className="group rounded-xl bg-accent p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgb(0_0_0/0.06)] sm:p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-background text-foreground ring-1 ring-border/60 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/20">
                  <Icon className="size-5 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
