import { Mail, MapPin, Phone } from '@/components/icons'
import { ContactForm } from '@/components/common/contact-form'
import { ContactInfoPanel } from '@/components/common/contact-info-panel'
import { SectionHeading } from '@/components/common/section-heading'

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
    icon: MapPin,
  },
]

export const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Great"
        className="mb-12 pb-0"
      />

      <div className="grid gap-4 rounded-2xl lg:grid-cols-[0.9fr_1.1fr]">
        <ContactInfoPanel
          title="Ready when you are."
          description="Open to freelance projects, product collaborations, and interesting GenAI / full-stack opportunities."
          items={contactDetails}
        />

        <ContactForm />
      </div>
    </section>
  )
}
