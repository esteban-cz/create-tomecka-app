'use client'

import type { CSSProperties } from 'react'
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon
} from 'lucide-react'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

import { cn } from '@/lib/utils'

function Toaster({
  position = 'top-center',
  closeButton = false,
  richColors = true,
  visibleToasts = 4,
  gap = 10,
  className,
  icons,
  toastOptions,
  style,
  ...props
}: ToasterProps) {
  const toastClassNames = toastOptions?.classNames

  return (
    <Sonner
      position={position}
      closeButton={closeButton}
      richColors={richColors}
      visibleToasts={visibleToasts}
      gap={gap}
      className={cn('toaster group z-9999', className)}
      icons={{
        success: (
          <CircleCheckIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
        ),
        info: <InfoIcon className="text-primary size-4" />,
        warning: (
          <TriangleAlertIcon className="size-4 text-amber-600 dark:text-amber-400" />
        ),
        error: <OctagonXIcon className="text-destructive size-4" />,
        loading: <Loader2Icon className="text-primary size-4 animate-spin" />,
        close: <XIcon className="size-3.5" />,
        ...icons
      }}
      toastOptions={{
        ...toastOptions,
        closeButtonAriaLabel: toastOptions?.closeButtonAriaLabel,
        className: cn(
          'bg-card/95 text-card-foreground border-border/80 rounded-xl shadow-lg backdrop-blur-md',
          'w-[min(420px,calc(100vw-2rem))] border p-4',
          'focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px]',
          'data-[type=success]:border-emerald-500/30 data-[type=success]:bg-[color-mix(in_oklch,var(--card)_88%,#10b981)]',
          'data-[type=info]:border-primary/30 data-[type=info]:bg-[color-mix(in_oklch,var(--card)_88%,var(--primary))]',
          'data-[type=warning]:border-amber-500/35 data-[type=warning]:bg-[color-mix(in_oklch,var(--card)_88%,#f59e0b)]',
          'data-[type=error]:border-destructive/35 data-[type=error]:bg-[color-mix(in_oklch,var(--card)_88%,var(--destructive))]',
          'dark:bg-card/95 dark:data-[type=success]:bg-[color-mix(in_oklch,var(--card)_84%,#10b981)] dark:data-[type=info]:bg-[color-mix(in_oklch,var(--card)_84%,var(--primary))] dark:data-[type=warning]:bg-[color-mix(in_oklch,var(--card)_84%,#f59e0b)] dark:data-[type=error]:bg-[color-mix(in_oklch,var(--card)_84%,var(--destructive))]',
          toastOptions?.className
        ),
        classNames: {
          ...toastClassNames,
          toast: cn('group/toast', toastClassNames?.toast),
          icon: cn(
            'mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary',
            'group-data-[type=success]/toast:bg-emerald-500/10',
            'group-data-[type=warning]/toast:bg-amber-500/10',
            'group-data-[type=error]/toast:bg-destructive/10',
            toastClassNames?.icon
          ),
          content: cn('grid min-w-0 gap-1 pr-2', toastClassNames?.content),
          title: cn(
            'text-sm leading-5 font-semibold tracking-normal',
            toastClassNames?.title
          ),
          description: cn(
            'text-muted-foreground text-sm leading-5',
            toastClassNames?.description
          ),
          closeButton: cn(
            'border-border bg-background/95 text-muted-foreground hover:bg-accent hover:text-foreground',
            'focus-visible:ring-ring/50 rounded-md shadow-sm transition-colors focus-visible:ring-[3px] focus-visible:outline-none',
            toastClassNames?.closeButton
          ),
          actionButton: cn(
            'bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium shadow-xs transition-colors',
            toastClassNames?.actionButton
          ),
          cancelButton: cn(
            'border-border bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-md border px-3 text-sm font-medium shadow-xs transition-colors',
            toastClassNames?.cancelButton
          )
        },
        descriptionClassName: cn(
          'text-muted-foreground',
          toastOptions?.descriptionClassName
        ),
        actionButtonStyle: {
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
          borderRadius: 'var(--radius-md)',
          height: '2rem',
          padding: '0 0.75rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          ...toastOptions?.actionButtonStyle
        },
        cancelButtonStyle: {
          backgroundColor: 'var(--background)',
          color: 'var(--foreground)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          height: '2rem',
          padding: '0 0.75rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          ...toastOptions?.cancelButtonStyle
        }
      }}
      style={
        {
          '--normal-bg': 'var(--card)',
          '--normal-border': 'var(--border)',
          '--normal-text': 'var(--card-foreground)',
          '--success-bg': 'color-mix(in oklch, #10b981 12%, var(--card))',
          '--success-border': 'color-mix(in oklch, #10b981 35%, var(--border))',
          '--success-text': 'var(--foreground)',
          '--info-bg': 'color-mix(in oklch, var(--primary) 10%, var(--card))',
          '--info-border':
            'color-mix(in oklch, var(--primary) 32%, var(--border))',
          '--info-text': 'var(--foreground)',
          '--warning-bg': 'color-mix(in oklch, #f59e0b 12%, var(--card))',
          '--warning-border': 'color-mix(in oklch, #f59e0b 35%, var(--border))',
          '--warning-text': 'var(--foreground)',
          '--error-bg':
            'color-mix(in oklch, var(--destructive) 12%, var(--card))',
          '--error-border':
            'color-mix(in oklch, var(--destructive) 35%, var(--border))',
          '--error-text': 'var(--foreground)',
          '--border-radius': 'var(--radius-xl)',
          ...style
        } as CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
export default Toaster
