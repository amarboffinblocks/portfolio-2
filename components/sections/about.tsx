import { ArrowDownToLine } from '@/components/icons'
import { BadgePanel } from '@/components/common/badge-panel'
import { ExperienceTimeline } from '@/components/common/experience-timeline'
import { PortraitCard } from '@/components/common/portrait-card'
import { StatsGrid } from '@/components/common/stat-card'
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

export const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="grid gap-4 lg:grid-cols-3">
        <PortraitCard
          src="/images/amar.webp"
          alt="Amarjeet Singh"
          badge="About us"
          sizes="(max-width: 1024px) 100vw, 33vw"
          mediaClassName="lg:aspect-auto lg:h-full"
        />

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
            <StatsGrid items={highlights} />
            <Button className="rounded-md">
              Download CV
              <ArrowDownToLine data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <BadgePanel badge="Previous Life">
          <ExperienceTimeline items={experience} />
        </BadgePanel>
      </div>
    </section>
  )
}
