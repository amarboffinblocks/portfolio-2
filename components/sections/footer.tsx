import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'X', href: 'https://x.com' },
]

export const Footer = () => {
  return (
    <footer className="pb-4 pt-8">
      <div className="relative overflow-hidden rounded-2xl bg-foreground p-6 text-background sm:p-8">
        <div className="absolute -right-16 -bottom-20 size-48 rounded-full bg-primary/25 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.22em] text-background/45 uppercase">
              Amarjeet Singh
            </p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Building useful products with clarity.
            </h2>
          </div>

          <nav className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md bg-background/10 px-3 py-2 text-xs font-semibold tracking-[0.14em] text-background/70 uppercase transition-colors hover:bg-background hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative mt-8 flex flex-col gap-4 border-t border-background/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-background/45">
            © 2026 Amarjeet Singh. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-background/55 uppercase transition-colors hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
