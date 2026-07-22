'use client'

import type { PromptInputMessage } from '@/components/ai-elements/prompt-input'
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputProvider,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input'
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation'
import {
  Message,
  MessageContent,
  MessageResponse,
} from '@/components/ai-elements/message'
import { cn } from '@/lib/utils'
import { Switch } from '../ui/switch'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  parts: { type: 'text'; text: string }[]
}

/** Static messages for UI work — replace with useChat later. */
const DUMMY_PAIRS: [string, string][] = [
  [
    'What do you build?',
    'Full-stack apps, AI products, and polished frontends — from idea to production.',
  ],
  [
    'Show featured work',
    'Check **Featured Work** on the right — Boffinblocks, analytics dashboards, and more.',
  ],
  [
    'What is your stack?',
    'Next.js, TypeScript, Tailwind, Framer Motion, and the Vercel AI SDK.',
  ],
  [
    'Do you do Generative AI?',
    'Yes — chat apps, agents, RAG systems, and LLM integrations for real workflows.',
  ],
  [
    'Can you help with SEO?',
    'Performance, Core Web Vitals, metadata, and technical SEO are part of what I ship.',
  ],
  [
    'How do you handle deployment?',
    'Vercel, CI/CD with GitHub Actions, Docker when needed, and production monitoring.',
  ],
  [
    'Are you available for freelance?',
    'Yes — open to clear scopes. Use **Start a Project** or the contact form.',
  ],
  [
    'Tell me about Boffinblocks',
    'An agentic AI platform for automation and intelligent business workflows.',
  ],
  [
    'Do you design UIs as well?',
    'I engineer frontends with strong UX, motion, and accessible components.',
  ],
  [
    'How can we work together?',
    'Share your idea, timeline, and goals — I will map a practical build plan.',
  ],
]

const DUMMY_MESSAGES: ChatMessage[] = DUMMY_PAIRS.flatMap(
  ([userText, assistantText], index) => [
    {
      id: String(index * 2 + 1),
      role: 'user' as const,
      parts: [{ type: 'text' as const, text: userText }],
    },
    {
      id: String(index * 2 + 2),
      role: 'assistant' as const,
      parts: [{ type: 'text' as const, text: assistantText }],
    },
  ]
)

/** Same top-left badge scoop pattern used across the sections. */
const scoopClass =
  'before:pointer-events-none before:absolute before:-right-8 before:top-0 before:size-8 before:rounded-tl-3xl before:shadow-[-8px_-8px_0_0_var(--background)] after:pointer-events-none after:absolute after:left-0 after:-bottom-8 after:size-8 after:rounded-tl-3xl after:shadow-[-8px_-8px_0_0_var(--background)]'

const promptInputClassName = cn(
  '[&_[data-slot=input-group]]:h-auto',
  '[&_[data-slot=input-group]]:flex-col',
  '[&_[data-slot=input-group]]:items-stretch',
  '[&_[data-slot=input-group]]:gap-1',
  '[&_[data-slot=input-group]]:rounded-2xl',
  '[&_[data-slot=input-group]]:border',
  '[&_[data-slot=input-group]]:border-primary/70',
  '[&_[data-slot=input-group]]:border-b-primary/70',
  '[&_[data-slot=input-group]]:bg-background',
  '[&_[data-slot=input-group]]:px-2.5',
  '[&_[data-slot=input-group]]:pt-2.5',
  '[&_[data-slot=input-group]]:pb-2',
  '[&_[data-slot=input-group]]:transition-[border-color,box-shadow]',
  '[&_[data-slot=input-group]]:has-[[data-slot=input-group-control]:focus-visible]:border-primary/45',
  '[&_[data-slot=input-group]]:has-[[data-slot=input-group-control]:focus-visible]:border-b-primary/45',
  '[&_[data-slot=input-group]]:has-[[data-slot=input-group-control]:focus-visible]:ring-3',
  '[&_[data-slot=input-group]]:has-[[data-slot=input-group-control]:focus-visible]:ring-primary/15'
)

const ChatMessages = ({ messages }: { messages: ChatMessage[] }) => (
  <>
    {messages.map((message) => (
      <Message from={message.role} key={message.id} className="max-w-[78%]">
        <MessageContent>
          {message.parts.map((part, index) => {
            if (part.type !== 'text') return null

            if (message.role === 'assistant') {
              return (
                <MessageResponse key={`${message.id}-${index}`}>
                  {part.text}
                </MessageResponse>
              )
            }

            return (
              <p key={`${message.id}-${index}`} className="whitespace-pre-wrap">
                {part.text}
              </p>
            )
          })}
        </MessageContent>
      </Message>
    ))}
  </>
)

export const PortfolioChatbot = () => {
  const handleSubmit = (_message: PromptInputMessage) => {
    // UI-only — no send / no fake reply yet
  }

  return (
    <aside className="flex min-h-[40dvh] flex-col rounded-2xl bg-accent lg:sticky lg:top-0 lg:h-full lg:min-h-0 shrink-1">
      <header
        className={`relative z-20 w-auto self-start rounded-br-3xl bg-background px-6 py-2 ${scoopClass}`}
      >
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Switch className={"rounded-full"} />
        </nav>
      </header>

      <PromptInputProvider>
        <div className="relative min-h-0 flex-1">
          <Conversation className="h-full">
            <ConversationContent className="gap-5 px-4 py-5">
              <ChatMessages messages={DUMMY_MESSAGES} />
            </ConversationContent>
            <ConversationScrollButton className="border-border/70 bg-background text-primary hover:bg-background hover:text-primary" />
          </Conversation>
        </div>

        <div className="shrink-0 p-3 pt-0">
          <PromptInput onSubmit={handleSubmit} className={promptInputClassName}>
            <PromptInputBody>
              <PromptInputTextarea
                placeholder="Ask about my work..."
                className="min-h-11 max-h-28 px-1.5 py-1.5 text-sm leading-relaxed placeholder:text-muted-foreground/70"
              />
            </PromptInputBody>
            <PromptInputFooter className="border-0 px-0.5 py-0.5">
              <PromptInputTools />
              <PromptInputSubmit
                status="ready"
                className="size-8 rounded-full shadow-none"
              />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </PromptInputProvider>
    </aside>
  )
}
