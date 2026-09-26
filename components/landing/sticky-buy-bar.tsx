import { product } from '@/lib/product'

export function StickyBuyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-border bg-card/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <p className="font-heading text-2xl font-bold text-primary">
            {`₹${product.price}`}{' '}
            <span className="text-sm font-medium text-muted-foreground line-through">{`₹${product.originalPrice}`}</span>
          </p>
          <p className="text-xs font-semibold text-muted-foreground">Instant download</p>
        </div>
        <a
          href={product.checkoutUrl}
          className="rounded-full bg-primary px-6 py-3 font-heading font-semibold text-primary-foreground"
        >
          Buy Now
        </a>
      </div>
    </div>
  )
}
