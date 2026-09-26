import Image from 'next/image'
import { Check, ShieldCheck } from 'lucide-react'
import { discountPercent, product } from '@/lib/product'
import { BuyButton } from './buy-button'

const included = [
  'Full worksheet bundle (10M+ pages)',
  'Printable activities across 12 skill areas',
  'Instant digital access after payment',
  'Re-download and reprint anytime',
  '5 bonus packs included',
]

export function ValueSection() {
  return (
    <section id="buy" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="overflow-hidden rounded-[2rem] bg-card shadow-2xl ring-4 ring-primary">
          <div className="bg-primary px-6 py-4 text-center font-heading text-lg font-bold text-primary-foreground">
            {`Special Launch Price · Save ${discountPercent}%`}
          </div>
          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            <Image
              src="/images/bundle-stack.png"
              alt="Preview of the complete worksheet bundle"
              width={1200}
              height={900}
              className="w-full rounded-2xl object-cover shadow-md"
            />
            <div className="flex flex-col">
              <div className="flex items-end gap-6">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">Regular value</p>
                  <p className="font-heading text-3xl font-bold text-muted-foreground line-through">{`₹${product.originalPrice}`}</p>
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-primary">Today</p>
                  <p className="font-heading text-6xl font-bold leading-none text-primary">{`₹${product.price}`}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-semibold">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <Check className="size-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 border-t border-border px-6 pb-8 pt-6">
            <BuyButton label="Yes! I Want the Learning Bundle" className="w-full md:w-auto" />
            <p className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <ShieldCheck className="size-4 text-secondary" aria-hidden="true" />
              Secure checkout · Instant download
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
