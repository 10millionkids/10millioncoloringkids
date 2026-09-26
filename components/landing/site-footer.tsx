import { product } from '@/lib/product'

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-border px-4 pb-28 pt-8 md:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
        <p>{`© ${new Date().getFullYear()} ${product.domain} · All rights reserved`}</p>
        <p>Digital product · Instant PDF download · For personal &amp; classroom use</p>
      </div>
    </footer>
  )
}
