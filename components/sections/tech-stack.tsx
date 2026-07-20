import { SectionHeading } from '@/components/common/section-heading'
import { TechCategoryCard } from '@/components/common/tech-category-card'

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
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I Work With"
        className="mb-12 pb-0"
      />

      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {categories.map((category) => (
          <TechCategoryCard
            key={category.title}
            title={category.title}
            tools={category.tools}
          />
        ))}
      </div>
    </section>
  )
}
