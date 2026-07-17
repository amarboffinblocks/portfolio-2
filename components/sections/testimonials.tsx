import Image from 'next/image'

const testimonials = [
  {
    quote:
      'The designs were modern, intuitive, and perfectly aligned with our brand. One of the best developers we have hired!',
    name: 'James Parker',
    role: '@snapstudio',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'Not only is the work visually stunning, but it is also grounded in real usability. A true professional.',
    name: 'Ananya Rames',
    role: '@coreuxlabs',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'From idea to production — everything was delivered on time with clean architecture and excellent communication.',
    name: 'David Kim',
    role: '@launchfoundry',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="mb-12 max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            What Clients Say
          </p>
        </div>
        <h2 className="font-heading text-4xl leading-tight font-semibold text-primary lg:text-5xl">
          Feedback That Fuels Me
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <figure key={item.name} className="relative pt-7">
            <div className="absolute top-0 left-6 z-20 size-14 overflow-hidden rounded-full bg-background ring-4 ring-background">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            <blockquote className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl bg-accent px-6 pb-24 pt-14 sm:px-7 sm:pt-16">
              <span
                className="mb-4 block font-heading text-3xl leading-none text-muted-foreground/30"
                aria-hidden
              >
                &ldquo;
              </span>

              <p className="flex-1 pb-2 text-base leading-7 text-foreground">
                {item.quote}
              </p>

              <figcaption className="absolute bottom-0 left-0 z-10 bg-background px-6 py-2 rounded-tr-xl before:pointer-events-none before:absolute before:-right-5 before:bottom-0 before:size-5 before:rounded-bl-xl before:shadow-[-5px_5px_0_0_var(--background)] after:pointer-events-none after:absolute after:left-0 after:-top-5 after:size-5 after:rounded-bl-xl after:shadow-[-5px_5px_0_0_var(--background)]">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.role}</p>
              </figcaption>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
