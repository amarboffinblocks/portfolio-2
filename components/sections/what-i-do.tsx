import { ArrowUpRight, Mail, MonitorSmartphone, PencilSparkles, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'GenAI Solutions',
    tagline: 'Intelligence with purpose.',
    description:
      'I design and integrate AI workflows, chat experiences, and automation systems that feel useful, reliable, and production-ready.',
    icon: Sparkles,
    iconClassName: 'bg-primary text-primary-foreground',
  },
  {
    title: 'Full-Stack Apps',
    tagline: 'Build with clarity.',
    description:
      'From frontend systems to APIs and data layers, I ship scalable web products with clean architecture and strong performance.',
    icon: MonitorSmartphone,
    iconClassName: 'bg-foreground text-background',
  },
  {
    title: 'Product UX',
    tagline: 'Design that converts.',
    description:
      'I craft interfaces that stay simple, polished, and intentional — helping users move faster with less friction.',
    icon: PencilSparkles,
    iconClassName: 'bg-primary/15 text-primary',
  },
]

export const WhatIDo = () => {
  return (
    <section className="py-10 sm:py-14">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col justify-between gap-8 rounded-xl bg-background p-2 lg:py-4">
          <div className="space-y-4">
            <h2 className="font-heading text-4xl font-semibold tracking-[0.08em] text-primary uppercase sm:text-5xl">
              What I Do
            </h2>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
              I help teams turn ideas into polished digital products — combining GenAI,
              full-stack engineering, and thoughtful UX into one clear build process.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            Contact Me
            <Mail className="size-4" />
          </a>
        </div>

        <div className="rounded-xl bg-accent p-6 sm:p-8 lg:col-span-2">
          <div className="mb-6 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="size-5" />
          </div>
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            {services[0].title}{' '}
            <span className="font-heading text-base font-normal italic text-muted-foreground sm:text-lg">
              ({services[0].tagline})
            </span>
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {services[0].description}
          </p>
        </div>

        {services.slice(1).map((service) => {
          const Icon = service.icon

          return (
            <div key={service.title} className="rounded-xl bg-accent p-6 sm:p-8">
              <div
                className={`mb-6 flex size-11 items-center justify-center rounded-full ${service.iconClassName}`}
              >
                <Icon className="size-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}{' '}
                <span className="font-heading text-base font-normal italic text-muted-foreground">
                  ({service.tagline})
                </span>
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
            </div>
          )
        })}

        <div className="flex min-h-[240px] flex-col justify-between rounded-xl bg-foreground p-6 text-background sm:p-8">
          <div className="flex size-11 items-center justify-center rounded-full bg-background text-foreground">
            <ArrowUpRight className="size-5" />
          </div>
          <p className="max-w-[18ch] text-lg leading-8 font-semibold tracking-wide uppercase sm:text-xl">
            Effortless experiences built through clarity, intention, and simplicity.
          </p>
        </div>
      </div>
    </section>
  )
}
