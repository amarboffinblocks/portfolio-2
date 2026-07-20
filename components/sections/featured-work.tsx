import { ArrowUpRight } from '@/components/icons'
import { ProjectCard } from '@/components/common/project-card'
import { SectionHeading } from '@/components/common/section-heading'
import { Button } from '@/components/ui/button'

const projectImage = '/images/boffinblocks-project.png'

const projects = [
  {
    title: 'Boffinblocks',
    category: 'Generative AI',
    description:
      'Agentic AI and automation platform helping modern businesses streamline operations with intelligent workflows.',
    href: '#',
  },
  {
    title: 'SaaS Analytics Dashboard',
    category: 'Full-Stack',
    description:
      'A scalable analytics dashboard with real-time metrics, role-based access, and clean data visualization.',
    href: '#',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Frontend',
    description:
      'High-performance storefront with optimized checkout flows, SEO-ready pages, and responsive product experiences.',
    href: '#',
  }

]

export const FeaturedWork = () => {
  return (
    <section id="projects" className="py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Work"
        className="pb-10"
        action={
          <Button
            className="rounded-md"
            nativeButton={false}
            render={<a href="#projects" />}
            variant="link"
          >
            View All Projects
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
            imageSrc={projectImage}
          />
        ))}
      </div>
    </section>
  )
}
