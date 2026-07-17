const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

/** Same top-left badge scoop pattern used across the sections. */
const scoopClass =
  'before:pointer-events-none before:absolute before:-right-8 before:top-0 before:size-8 before:rounded-tl-3xl before:shadow-[-8px_-8px_0_0_var(--background)] after:pointer-events-none after:absolute after:left-0 after:-bottom-8 after:size-8 after:rounded-tl-3xl after:shadow-[-8px_-8px_0_0_var(--background)]'

export const PortfolioChatbot = () => {
  return (
    <aside className="flex min-h-[40dvh] flex-col rounded-2xl bg-accent lg:sticky lg:top-0 lg:h-full lg:min-h-0">
      <header
        className={`relative z-20 w-auto self-start bg-background px-6 py-2   rounded-br-3xl ${scoopClass}`}
      >
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1   text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}

        </nav>
      </header>

      {/* Chatbot UI placeholder — empty for now */}
      <div className="min-h-0 flex-1" />
    </aside>
  )
}
