import Image from 'next/image'
import { ArrowDownToLine } from '@/components/icons'
import { Button } from '@/components/ui/button'

const highlights = [
  { value: '03+', label: 'Years Experience' },
  { value: '12+', label: 'Projects Shipped' },
  { value: '08+', label: 'Tech Stack' },
]
const experience = [
  {
    period: '2024 — Present',
    role: 'GenAI & Full-Stack Developer',
    company: 'Independent',
  },
  {
    period: '2023 — 2024',
    role: 'Full-Stack Developer',
    company: 'Product Development',
  },
  {
    period: '2022 — 2023',
    role: 'Frontend Developer',
    company: 'Web Experiences',
  },
]

const cornerBadgeClass =
  'absolute top-0 left-0 z-10 bg-background px-6 py-2 text-xs font-semibold tracking-[0.16em] text-foreground uppercase rounded-br-xl before:pointer-events-none before:absolute before:-right-6 before:top-0 before:h-6 before:w-6 before:rounded-tl-xl before:shadow-[-6px_-6px_0_var(--background)] after:pointer-events-none after:absolute after:left-0 after:-bottom-6 after:h-6 after:w-6 after:rounded-tl-xl after:shadow-[-5px_-5px_0_var(--background)]'

export const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-xl">
          <div className="relative aspect-4/5 lg:aspect-auto lg:h-full">
            <Image
              src="/images/amar.webp"
              alt="Amarjeet Singh"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className={cornerBadgeClass}>
            About us
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-accent p-8 lg:col-span-2 lg:p-10">
          <div className="space-y-5">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I&apos;m a{' '}
              <span className="font-semibold text-foreground">
                GenAI &amp; Full-Stack Developer
              </span>{' '}
              with a passion for crafting intelligent, scalable products that
              combine clean architecture, exceptional usability, and modern
              engineering practices.
            </p>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              I enjoy collaborating with teams, solving real-world problems, and
              turning complex ideas into clear, engaging digital experiences —
              from early strategy through production.
            </p>
          </div>

          <div className="mt-auto space-y-8 pt-6">
            <div className="grid grid-cols-3 rounded-md bg-background/80 px-2 py-5 sm:px-4 sm:py-6">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`space-y-2 px-4 sm:px-6 ${index > 0 ? 'border-l border-border' : ''
                    }`}
                >
                  <p className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <Button className="rounded-md">
              Download CV
              <ArrowDownToLine data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <div className="relative overflow-hidden rounded-xl bg-accent p-8 pt-16 lg:p-10 lg:pt-16">
          <div className={cornerBadgeClass}>
            Previous Life
          </div>
          <div>
            {experience.map((item) => (
              <div
                key={`${item.period}-${item.role}`}
                className="group grid gap-1 border-b border-border py-5 transition-colors sm:grid-cols-[180px_1fr_0.8fr] sm:items-center sm:gap-8"
              >
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <p className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {item.role}
                </p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
