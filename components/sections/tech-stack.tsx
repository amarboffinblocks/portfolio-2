const cornerBadgeClass =
  'absolute top-0 left-0 z-10 bg-background px-6 py-2 text-xs font-semibold tracking-[0.16em] text-foreground uppercase rounded-br-xl before:pointer-events-none before:absolute before:-right-6 before:top-0 before:h-6 before:w-6 before:rounded-tl-xl before:shadow-[-6px_-6px_0_var(--background)] after:pointer-events-none after:absolute after:left-0 after:-bottom-6 after:h-6 after:w-6 after:rounded-tl-xl after:shadow-[-5px_-5px_0_var(--background)]'

const categories = [
  {
    title: 'Frontend',
    tools: [
      { name: 'TypeScript', mark: 'TS', color: '#3178c6' },
      { name: 'React', mark: 'R', color: '#149eca' },
      { name: 'Next.js', mark: 'N', color: '#111111' },
      { name: 'Tailwind CSS', mark: 'TW', color: '#06b6d4' },
      { name: 'Framer Motion', mark: 'FM', color: '#0055ff' },
    ],
  },
  {
    title: 'Backend',
    tools: [
      { name: 'Node.js', mark: 'JS', color: '#3c873a' },
      { name: 'Express', mark: 'EX', color: '#111111' },
      { name: 'REST APIs', mark: 'API', color: '#0f766e' },
      { name: 'tRPC', mark: 'TR', color: '#398ccb' },
    ],
  },
  {
    title: 'Database',
    tools: [
      { name: 'PostgreSQL', mark: 'PG', color: '#336791' },
      { name: 'Supabase', mark: 'SB', color: '#3ecf8e' },
      { name: 'MongoDB', mark: 'MG', color: '#47a248' },
      { name: 'Prisma', mark: 'PR', color: '#2d3748' },
    ],
  },
  {
    title: 'Generative AI',
    tools: [
      { name: 'OpenAI', mark: 'AI', color: '#10a37f' },
      { name: 'LangChain', mark: 'LC', color: '#1c3c3c' },
      { name: 'RAG', mark: 'RG', color: '#0d9488' },
      { name: 'AI SDK', mark: 'SDK', color: '#111111' },
      { name: 'MCP', mark: 'MC', color: '#7c3aed' },
    ],
  },
  {
    title: 'DevOps',
    tools: [
      { name: 'Vercel', mark: 'VC', color: '#111111' },
      { name: 'Docker', mark: 'DK', color: '#2496ed' },
      { name: 'GitHub', mark: 'GH', color: '#24292f' },
      { name: 'AWS', mark: 'AW', color: '#ff9900' },
    ],
  },
  {
    title: 'Design',
    tools: [
      { name: 'Figma', mark: 'FG', color: '#a259ff' },
      { name: 'Framer', mark: 'FR', color: '#0055ff' },
      { name: 'Webflow', mark: 'WF', color: '#4353ff' },
      { name: 'Rive', mark: 'RV', color: '#ff4d4d' },
    ],
  },
]

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16">
      <div className="mb-12 max-w-2xl space-y-3">
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

      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {categories.map((category) => (
          <article
            key={category.title}
            className="relative mb-6 h-fit w-full break-inside-avoid overflow-hidden rounded-xl bg-accent px-6 pb-6 pt-16 md:mb-8"
          >
            <div className={cornerBadgeClass}>{category.title}</div>

            <div className="grid grid-cols-2 gap-4">
              {category.tools.map((tool, index) => {
                const isWide =
                  category.tools.length % 2 === 1 &&
                  index === category.tools.length - 1

                return (
                  <div
                    key={tool.name}
                    className={`group flex flex-col items-center justify-center gap-3 rounded-xl bg-background/80 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-background hover:shadow-[0_12px_30px_rgb(0_0_0/0.05)] ${
                      isWide ? 'col-span-2' : ''
                    }`}
                  >
                    <div
                      className="flex size-12 items-center justify-center rounded-xl text-sm font-bold tracking-tight text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: tool.color }}
                    >
                      {tool.mark}
                    </div>
                    <p className="text-sm font-semibold tracking-tight text-foreground">
                      {tool.name}
                    </p>
                  </div>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
