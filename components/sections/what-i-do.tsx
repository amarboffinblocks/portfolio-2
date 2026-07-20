import {
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Gauge,
  Palette,
} from '@/components/icons'
import { SectionHeading } from '@/components/common/section-heading'
import { ServiceCard, ServiceHighlightCard } from '@/components/common/service-card'
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
    <section className="py-16">
      <SectionHeading
        eyebrow="Capabilities"
        title="What I Build"
        action={
          <Button
            className="rounded-md"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Start a Project
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}

        <ServiceHighlightCard
          title="From idea to production."
          description="Built with clarity, intention, and modern engineering practices."
          href="#contact"
        />
      </div>
    </section>
  )
}
