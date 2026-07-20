import { ArrowUpRight } from '@/components/icons'
import { cn } from '@/lib/utils'

export type FooterLink = {
  label: string
  href: string
}

type FooterNavChipProps = FooterLink & {
  className?: string
}

export const FooterNavChip = ({ label, href, className }: FooterNavChipProps) => {
  return (
    <a
      href={href}
      className={cn(
        'rounded-md bg-background/10 px-3 py-2 text-xs font-semibold tracking-[0.14em] text-background/70 uppercase transition-colors hover:bg-background hover:text-foreground',
        className
      )}
    >
      {label}
    </a>
  )
}

type FooterExternalLinkProps = FooterLink & {
  className?: string
}

export const FooterExternalLink = ({
  label,
  href,
  className,
}: FooterExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-background/55 uppercase transition-colors hover:text-primary',
        className
      )}
    >
      {label}
      <ArrowUpRight className="size-3" aria-hidden />
    </a>
  )
}

type SiteFooterProps = {
  name?: string
  tagline?: string
  navLinks?: FooterLink[]
  socialLinks?: FooterLink[]
  className?: string
}

const defaultNavLinks: FooterLink[] = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

const defaultSocialLinks: FooterLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'X', href: 'https://x.com' },
]

export const SiteFooter = ({
  name = 'Amarjeet Singh',
  tagline = 'Building useful products with clarity.',
  navLinks = defaultNavLinks,
  socialLinks = defaultSocialLinks,
  className,
}: SiteFooterProps) => {
  const year = new Date().getFullYear()

  return (
    <footer className={cn('pb-4 pt-8', className)}>
      <div className="relative overflow-hidden rounded-2xl bg-foreground p-6 text-background sm:p-8">
        <div className="absolute -right-16 -bottom-20 size-48 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-background/30 to-transparent" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.22em] text-background/45 uppercase">
              {name}
            </p>
            <h2 className="max-w-md font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {tagline}
            </h2>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-3"
          >
            {navLinks.map((link) => (
              <FooterNavChip key={link.label} {...link} />
            ))}
          </nav>
        </div>

        <div className="relative mt-8 flex flex-col gap-4 border-t border-background/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-background/45">
            © {year} {name}. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <FooterExternalLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
