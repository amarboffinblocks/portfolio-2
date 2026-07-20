import { createLucideIcon } from 'lucide-react'

/** Lucide-compatible social icons (brand marks Lucide no longer ships). */

export const Instagram = createLucideIcon('Instagram', [
  [
    'rect',
    {
      width: '20',
      height: '20',
      x: '2',
      y: '2',
      rx: '5',
      ry: '5',
      key: 'frame',
    },
  ],
  ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: 'lens' }],
  ['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'dot' }],
])

export const X = createLucideIcon('XSocial', [
  [
    'path',
    {
      d: 'M3 3h4.5l5 6.8L17.5 3H21l-7.2 9.2L21.5 21H17l-5.2-7L6.5 21H3l7.4-8.8L3 3z',
      key: 'logo',
    },
  ],
])

export const Linkedin = createLucideIcon('Linkedin', [
  [
    'path',
    {
      d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      key: 'network',
    },
  ],
  ['rect', { width: '4', height: '12', x: '2', y: '9', key: 'bar' }],
  ['circle', { cx: '4', cy: '4', r: '2', key: 'dot' }],
])

export const WhatsApp = createLucideIcon('WhatsApp', [
  [
    'path',
    {
      d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z',
      key: 'bubble',
    },
  ],
  [
    'path',
    {
      d: 'M9.2 8.8c.4-.8 1.3-.9 1.8-.3l.7 1c.3.4.2.9-.1 1.2l-.4.4a7 7 0 0 0 2.8 2.8l.4-.4c.3-.3.8-.4 1.2-.1l1 .7c.6.5.5 1.4-.3 1.8-.7.5-1.8.7-2.9.2-2.4-1.1-4.3-3-5.4-5.4-.5-1.1-.3-2.2.2-2.9Z',
      key: 'handset',
    },
  ],
])

export const Github = createLucideIcon('Github', [
  [
    'path',
    {
      d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4',
      key: 'body',
    },
  ],
  ['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: 'tail' }],
])
