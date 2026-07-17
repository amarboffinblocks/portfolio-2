import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
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
  },
  {
    title: 'AI Workflow Agent',
    category: 'Automation',
    description:
      'An AI-powered workflow system that automates repetitive tasks and improves team productivity.',
    href: '#',
  },
  {
    title: 'Marketing Landing System',
    category: 'Web Design',
    description:
      'Conversion-focused landing pages built for speed, clarity, and strong brand presentation.',
    href: '#',
  },
  {
    title: 'Internal Admin Portal',
    category: 'Enterprise',
    description:
      'Secure internal portal with admin controls, reporting tools, and a scalable enterprise-ready architecture.',
    href: '#',
  },
]

export const FeaturedWork = () => {
  return (
    <section className="py-16">
      <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Portfolio
            </p>
          </div>
          <h2 className="font-heading text-4xl leading-tight font-semibold text-primary lg:text-5xl">
            Featured Work
          </h2>

        </div>

        <Button
          className="rounded-md"
          nativeButton={false}
          render={<a href="#projects" />}
          variant="outline"
        >
          View All Projects
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-accent transition-all duration-300 hover:-translate-y-1 "
          >
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src={projectImage}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />

              {/* <div className="absolute top-0 left-0 z-10 bg-background px-4 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-foreground uppercase rounded-br-xl before:pointer-events-none before:absolute before:-right-5 before:top-0 before:size-5 before:rounded-tl-xl before:shadow-[-5px_-5px_0_0_var(--background)] after:pointer-events-none after:absolute after:bottom-0 after:-left-5 after:size-5 after:rounded-tl-xl after:shadow-[-5px_-5px_0_0_var(--background)]">
                {project.category}
              </div> */}
            </div>

            <div className="flex flex-1 flex-col p-5 pb-16 sm:p-6 sm:pb-16">
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
            </div>

            <span className="absolute right-0 bottom-0 z-10 inline-flex items-center gap-2 bg-background px-4 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-foreground uppercase rounded-tl-xl before:pointer-events-none before:absolute before:-left-5 before:bottom-0 before:size-5 before:rounded-br-xl before:shadow-[5px_5px_0_0_var(--background)] after:pointer-events-none after:absolute after:right-0 after:-top-5 after:size-5 after:rounded-br-xl after:shadow-[5px_5px_0_0_var(--background)]">
              View Project
              <ArrowUpRight className="size-3.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
