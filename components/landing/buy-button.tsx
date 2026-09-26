import { ArrowRight } from 'lucide-react'
import { product } from '@/lib/product'
import { cn } from '@/lib/utils'

export function BuyButton({ className, label }: { className?: string; label?: string }) {
  return (
    <a
      href={product.checkoutUrl}
      className={cn(
        'group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-center font-heading text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[0_6px_0_0_oklch(0.5_0.18_30)] transition-all hover:translate-y-0.5 hover:shadow-[0_4px_0_0_oklch(0.5_0.18_30)] active:translate-y-1.5 active:shadow-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 sm:px-8 sm:text-lg',
        className,
      )}
    >
      {label ?? 'Get the Full Bundle'}
      <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-secondary">{eyebrow}</p>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
