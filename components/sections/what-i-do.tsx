'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
    ArrowUpRight,
    Bot,
    Cloud,
    Code2,
    Gauge,
    Palette,
} from '@/components/icons'
import { SectionHeading } from '@/components/common/section-heading'
import { ServiceCard, ServiceHighlightCard } from '@/components/common/service-card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CARD_CLASS = 'min-w-[85vw] shrink-0 sm:min-w-[380px] sm:max-w-[380px]'

const services = [
    {
        number: '01',
        title: 'Full-Stack Development',
        description:
            'End-to-end web applications with scalable architecture, secure APIs, and maintainable systems built for long-term growth.',
        icon: Code2,
        items: [
            'Production-Ready Web Apps',
            'REST APIs & Backend Systems',
            'Auth & Database Design',
            'Admin Dashboards & CMS',
            'Payment & Third-Party APIs',
        ],
    },
    {
        number: '02',
        title: 'Frontend Engineering',
        description:
            'Responsive, accessible interfaces with strong usability, performance, and polished interaction design.',
        icon: Palette,
        items: [
            'Responsive Web Applications',
            'Design Systems & UI Components',
            'Motion & Micro-Interactions',
            'SEO-Friendly Frontends',
            'Accessibility (WCAG)',
        ],
    },
    {
        number: '03',
        title: 'Generative AI Solutions',
        description:
            'Practical AI products using LLMs, agents, RAG, and modern AI SDKs to automate workflows and ship intelligent experiences.',
        icon: Bot,
        items: [
            'AI Chat Applications',
            'AI Agents & RAG Systems',
            'LLM & AI SDK Integration',
            'Prompt Engineering',
            'MCP & Workflow Automation',
        ],
    },
    {
        number: '04',
        title: 'Performance & SEO',
        description:
            'Speed, discoverability, and accessibility baked in — strong Core Web Vitals and inclusive experiences across devices.',
        icon: Gauge,
        items: [
            'Core Web Vitals',
            'Image & Code Optimization',
            'Technical SEO & Metadata',
            'Semantic HTML & Schema',
            'Lighthouse Optimization',
        ],
    },
    {
        number: '05',
        title: 'Deployment & DevOps',
        description:
            'Reliable cloud releases with CI/CD, environment setup, and production monitoring for confident shipping.',
        icon: Cloud,
        items: [
            'Vercel Deployment',
            'CI/CD & GitHub Actions',
            'Docker Environments',
            'Monitoring & Logging',
            'Production Builds',
        ],
    },
]

function getScrollContainer(element: HTMLElement | null): HTMLElement | null {
    if (!element) return null

    let parent = element.parentElement
    while (parent) {
        const { overflowY } = getComputedStyle(parent)
        if (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') {
            return parent
        }
        parent = parent.parentElement
    }

    return null
}

export const WhatIDo = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLElement | null>(null)
    const [scrollLength, setScrollLength] = useState(0)
    const prefersReducedMotion = useReducedMotion()

    useLayoutEffect(() => {
        const section = sectionRef.current
        const track = trackRef.current
        if (!section || !track) return

        scrollContainerRef.current = getScrollContainer(section)

        const updateMetrics = () => {
            const container = scrollContainerRef.current
            const visibleWidth = container ? container.clientWidth : window.innerWidth
            setScrollLength(Math.max(0, track.scrollWidth - visibleWidth))
        }

        updateMetrics()

        const resizeObserver = new ResizeObserver(updateMetrics)
        resizeObserver.observe(track)
        if (scrollContainerRef.current) resizeObserver.observe(scrollContainerRef.current)

        return () => resizeObserver.disconnect()
    }, [])

    const isPinned = scrollLength > 0 && !prefersReducedMotion

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        container: scrollContainerRef,
        offset: ['start start', 'end end'],
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollLength])

    return (
        <section ref={sectionRef}>
            <div
                className={cn(
                    'sticky top-0 py-16',
                    isPinned && 'overflow-hidden'
                )}
            >
                <SectionHeading
                    eyebrow="Capabilities"
                    title="What I Build"
                    action={
                        <Button
                            className="rounded-md"
                            nativeButton={false}
                            render={<a href="#contact" />}
                        >
                            Start a Project
                            <ArrowUpRight data-icon="inline-end" />
                        </Button>
                    }
                />

                <motion.div
                    ref={trackRef}
                    style={isPinned ? { x } : undefined}
                    className={cn(
                        'flex w-max gap-4 pr-4',
                        !isPinned && 'overflow-x-auto pb-2'
                    )}
                >
                    {services.map((service) => (
                        <ServiceCard key={service.title} className={CARD_CLASS} {...service} />
                    ))}

                    <ServiceHighlightCard
                        className={CARD_CLASS}
                        title="From idea to production."
                        description="Built with clarity, intention, and modern engineering practices."
                        href="#contact"
                    />
                </motion.div>
            </div>

            {isPinned ? (
                <div
                    aria-hidden
                    className="pointer-events-none"
                    style={{ height: scrollLength }}
                />
            ) : null}
        </section>
    )
}
