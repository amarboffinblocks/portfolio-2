import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type FormFieldProps = {
  label: string
  children: ReactNode
  className?: string
}

export const FormField = ({ label, children, className }: FormFieldProps) => {
  return (
    <label className={cn('block space-y-3', className)}>
      <span className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </span>
      {children}
    </label>
  )
}
