import { ArrowUpRight } from '@/components/icons'
import { FormField } from '@/components/common/form-field'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type ContactFormProps = {
  badgeLabel?: string
  className?: string
}

export const ContactForm = ({
  badgeLabel = 'Send Message',
  className,
}: ContactFormProps) => {
  return (
    <div
      className={cn(
        'relative overflow-visible rounded-2xl bg-accent p-8 sm:p-10 lg:rounded-l-none lg:rounded-r-2xl',
        className
      )}
    >
      <div className="corner-badge-tr">{badgeLabel}</div>

      <form className="mt-8 space-y-8" action="#" method="post">
        <div className="grid gap-8 sm:grid-cols-2">
          <FormField label="Name">
            <Input name="name" placeholder="Your name" required />
          </FormField>
          <FormField label="Email">
            <Input
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </FormField>
        </div>

        <FormField label="Subject">
          <Input name="subject" placeholder="Project inquiry" />
        </FormField>

        <FormField label="Message">
          <Textarea
            name="message"
            placeholder="Tell me about your project, timeline, and goals..."
            className="min-h-32"
            required
          />
        </FormField>

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
  )
}
