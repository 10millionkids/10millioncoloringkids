import { Palette } from 'lucide-react'
import { product } from '@/lib/product'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="bg-foreground px-4 py-2 text-center text-xs font-bold text-background sm:text-sm">
        {'Today only: '}
        <span className="text-muted-foreground line-through">{`₹${product.originalPrice}`}</span>
        <span className="text-sunny">{` ₹${product.price}`}</span>
        {' · Instant download'}
      </div>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#" className="flex min-w-0 items-center gap-2">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Palette className="size-5" aria-hidden="true" />
          </span>
          <span className="truncate font-heading text-base font-bold leading-tight sm:text-lg">
            10M Kids <span className="text-primary">Learning</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-muted-foreground md:flex">
          <a href="#inside" className="hover:text-foreground">
            {"What's Inside"}
          </a>
          <a href="#bonuses" className="hover:text-foreground">
            Bonuses
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </div>
        <a
          href="#buy"
          className="shrink-0 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground hover:opacity-90"
        >
          {`Get it ₹${product.price}`}
        </a>
      </nav>
    </header>
  )
}
