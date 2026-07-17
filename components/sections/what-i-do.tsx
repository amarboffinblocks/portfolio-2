import {
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Gauge,
  Palette,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'End-to-end web applications with scalable architecture, secure APIs, and maintainable systems built for long-term growth.',
    icon: Code2,
    items: [
      'Production-Ready Web Apps',
      'REST APIs & Backend Systems',
      'Auth & Database Design',
      'Admin Dashboards & CMS',
      'Payment & Third-Party APIs',
    ],
  },
  {
    number: '02',
    title: 'Frontend Engineering',
    description:
      'Responsive, accessible interfaces with strong usability, performance, and polished interaction design.',
    icon: Palette,
    items: [
      'Responsive Web Applications',
      'Design Systems & UI Components',
      'Motion & Micro-Interactions',
      'SEO-Friendly Frontends',
      'Accessibility (WCAG)',
    ],
  },
  {
    number: '03',
    title: 'Generative AI Solutions',
    description:
      'Practical AI products using LLMs, agents, RAG, and modern AI SDKs to automate workflows and ship intelligent experiences.',
    icon: Bot,
    items: [
      'AI Chat Applications',
      'AI Agents & RAG Systems',
      'LLM & AI SDK Integration',
      'Prompt Engineering',
      'MCP & Workflow Automation',
    ],
  },
  {
    number: '04',
    title: 'Performance & SEO',
    description:
      'Speed, discoverability, and accessibility baked in — strong Core Web Vitals and inclusive experiences across devices.',
    icon: Gauge,
    items: [
      'Core Web Vitals',
      'Image & Code Optimization',
      'Technical SEO & Metadata',
      'Semantic HTML & Schema',
      'Lighthouse Optimization',
    ],
  },
  {
    number: '05',
    title: 'Deployment & DevOps',
    description:
      'Reliable cloud releases with CI/CD, environment setup, and production monitoring for confident shipping.',
    icon: Cloud,
    items: [
      'Vercel Deployment',
      'CI/CD & GitHub Actions',
      'Docker Environments',
      'Monitoring & Logging',
      'Production Builds',
    ],
  },
]

export const WhatIDo = () => {
  return (
    <section className="py-16 ">
      <div className=" flex flex-col gap-8 pb-10  lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-primary" aria-hidden />
            <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Capabilities
            </p>
          </div>
          <h2 className="font-heading text-4xl leading-tight font-semibold text-primary lg:text-5xl">
            What I Build
          </h2>
          {/* <p className="max-w-xl text-base leading-7 text-muted-foreground">
            Scalable web applications, AI-powered experiences, and high-performance
            interfaces — from architecture to deployment.
          </p> */}
        </div>

        <Button
          className="rounded-md"
          nativeButton={false}
          render={<a href="#contact" />}
        >
          Start a Project
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon

          return (
            <article
              key={service.title}
              className="relative flex flex-col overflow-hidden rounded-xl border border-transparent bg-accent p-6 transition-all duration-300   sm:p-8"
            >

              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-300">
                  <Icon className="size-4 stroke-[1.5]" />
                </div>
                <span className="font-heading text-xs font-semibold tracking-[0.2em] text-muted-foreground transition-colors ">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-8 flex-1 border-t border-border/60">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 border-b border-border/60 py-3 text-sm text-foreground/90 transition-colors duration-300 group-hover:text-foreground group cursor-pointer"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 " />
                  </li>
                ))}
              </ul>
            </article>
          )
        })}

        <article className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-xl bg-foreground p-6 text-background shadow-[0_18px_60px_rgb(0_0_0/0.08)] sm:p-8 md:col-span-2 xl:col-span-1">
          <div className="absolute -right-10 -bottom-10 size-44 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-background/35 to-transparent" />

          <div className="relative flex size-11 items-center justify-center rounded-full bg-background text-foreground">
            <ArrowUpRight className="size-4" />
          </div>

          <div className="relative space-y-5">
            <p className="max-w-[15ch] font-heading text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
              From idea to production.
            </p>
            <p className="max-w-xs text-sm leading-6 text-background/65">
              Built with clarity, intention, and modern engineering practices.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-background transition-opacity hover:opacity-80"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
