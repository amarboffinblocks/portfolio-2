import { SectionHeading } from '@/components/common/section-heading'
import { TestimonialCard } from '@/components/common/testimonial-card'

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
      <SectionHeading
        eyebrow="What Clients Say"
        title="Feedback That Fuels Me"
        className="mb-12 pb-0"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}
