import Image from 'next/image'

const testimonials = [
  {
    quote:
      'The designs were modern, intuitive, and perfectly aligned with our brand. One of the best developers we have hired!',
    name: 'James P.',
    role: 'Founder of SnapStudio',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    align: 'right' as const,
  },
  {
    quote:
      'Not only is the work visually stunning, but it is also grounded in real usability. A true professional.',
    name: 'Ananya Rames',
    role: 'Tech Lead at CoreUX Labs',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    align: 'left' as const,
  },
  {
    quote:
      'From idea to production — everything was delivered on time with clean architecture and excellent communication.',
    name: 'David K.',
    role: 'CEO of LaunchFoundry',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    align: 'center' as const,
  },
]

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="mb-14 max-w-2xl space-y-3">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            What Clients Say
          </p>
        </div>
        <h2 className="font-heading text-4xl leading-tight font-semibold text-primary lg:text-5xl">
          Feedback That Fuels Me
        </h2>
        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Words from founders, tech leads, and teams I have partnered with —
          building products that feel clear, polished, and production-ready.
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-10 sm:gap-12">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className={`relative w-full max-w-xl ${
              item.align === 'right'
                ? 'self-end'
                : item.align === 'left'
                  ? 'self-start'
                  : 'self-center'
            }`}
          >
            <div
              className={`absolute -top-5 z-10 size-12 overflow-hidden rounded-full ring-4 ring-background sm:size-14 ${
                item.align === 'left' ? '-right-2 sm:-right-4' : '-left-2 sm:-left-4'
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            <blockquote className="rounded-xl bg-accent px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-base leading-7 text-foreground sm:text-lg sm:leading-8">
                “{item.quote}”
              </p>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{item.name}</span>
                <span className="mx-1.5 text-border">·</span>
                {item.role}
              </figcaption>
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  )
}
