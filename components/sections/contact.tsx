import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@amarjeet.dev',
    href: 'mailto:hello@amarjeet.dev',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    icon: Phone,
  },
  {
    label: 'Location',
    value: 'India · Remote Worldwide',
    href: undefined,
    icon: MapPin,
  },
]

export const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="mb-12 max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Contact
          </p>
        </div>
        <h2 className="font-heading text-4xl leading-tight font-semibold text-primary lg:text-5xl">
          Let&apos;s Build Something Great
        </h2>
        {/* <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Have a project in mind or just want to say hello? Drop a message —
          I usually reply within 24 hours.
        </p> */}
      </div>

      <div className="grid gap-4 overflow-hidden rounded-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-foreground p-8 text-background sm:p-10 lg:rounded-r-none lg:rounded-l-2xl">
          <div className="absolute -right-16 -bottom-16 size-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-background/30 to-transparent" />

          <div className="relative space-y-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-background/50 uppercase">
              Get in Touch
            </p>
            <h3 className="max-w-[14ch] font-heading text-3xl leading-snug font-semibold tracking-tight sm:text-4xl">
              Ready when you are.
            </h3>
            <p className="max-w-sm text-sm leading-6 text-background/60">
              Open to freelance projects, product collaborations, and
              interesting GenAI / full-stack opportunities.
            </p>
          </div>

          <ul className="relative mt-12 space-y-5">
            {contactDetails.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background/10">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold tracking-[0.16em] text-background/45 uppercase">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-medium text-background">
                      {item.value}
                    </span>
                  </span>
                </>
              )

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </aside>

        <div className="relative overflow-hidden rounded-2xl bg-accent p-8 sm:p-10 lg:rounded-l-none lg:rounded-r-2xl">
          <div className="absolute top-0 right-0 z-10 bg-background px-5 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-foreground uppercase rounded-bl-xl before:pointer-events-none before:absolute before:-left-6 before:top-0 before:h-6 before:w-6 before:rounded-tr-xl before:shadow-[6px_-6px_0_0_var(--background)] after:pointer-events-none after:absolute after:right-0 after:-bottom-6 after:h-6 after:w-6 after:rounded-tr-xl after:shadow-[5px_-5px_0_0_var(--background)]">
            Send Message
          </div>

          <form className="mt-8 space-y-8" action="#" method="post">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block space-y-3">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Name
                </span>
                <Input name="name" placeholder="Your name" required />
              </label>
              <label className="block space-y-3">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Email
                </span>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>

            <label className="block space-y-3">
              <span className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Subject
              </span>
              <Input name="subject" placeholder="Project inquiry" />
            </label>

            <label className="block space-y-3">
              <span className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Message
              </span>
              <Textarea
                name="message"
                placeholder="Tell me about your project, timeline, and goals..."
                className="min-h-32"
                required
              />
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground">
                Prefer email? Reach me directly anytime.
              </p>
              <Button type="submit" className="rounded-md">
                Send Message
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
