import { Button, buttonVariants } from '@/components/ui/button'
import { PortraitCard } from '@/components/common/portrait-card'
import { StatsGrid } from '@/components/common/stat-card'
import { Instagram, Linkedin, X } from '@/components/icons'
import Link from 'next/link'

const socialLinks = [
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: Instagram,
    },
    {
        label: 'X',
        href: 'https://x.com',
        icon: X,
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: Linkedin,
    },

]

const stats = [
    { value: '03+', label: 'Years Experience' },
    { value: '12+', label: 'Projects Shipped' },
    { value: '08+', label: 'Tech Stack' },
]

export const Hero = () => {
    return (
        <section>
            <div className="grid w-full grid-cols-3 gap-4">
                <PortraitCard
                    src="/images/amar.webp"
                    alt="Amarjeet Singh"
                    badge="About us"
                    priority
                    sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="relative col-span-2 space-y-8 rounded-xl bg-accent p-10">
                    <div className="space-y-2">
                        <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
                            Hi, I&apos;m Amarjeet Singh
                        </p>
                        <h1 className="max-w-2xl font-heading text-4xl leading-tight font-semibold text-primary ">
                            GenAI &amp; Full-Stack Developer
                        </h1>
                        <p className="max-w-xl text-base leading-7 text-muted-foreground">
                            I build scalable AI-powered products and polished web experiences with
                            a strong focus on performance, usability, and clean architecture.
                        </p>
                    </div>

                    <StatsGrid items={stats} />

                    <div className="flex flex-wrap gap-3">
                        <Button className="rounded-md">Get in Touch</Button>
                        <Button variant="outline" className="rounded-md">
                            Download CV
                        </Button>
                    </div>

                    <div className=" flex items-center corner-badge-br gap-1">
                        {socialLinks.map((item) => {
                            const Icon = item.icon

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className={buttonVariants({ variant: 'ghost', size: "icon", className: "rounded-sm" })}
                                >
                                    <Icon className="size-4" aria-hidden />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
