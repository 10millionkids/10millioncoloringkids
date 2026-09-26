import Image from 'next/image'
import { Sparkles, Star } from 'lucide-react'
import { product } from '@/lib/product'
import { BuyButton } from './buy-button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-6 md:grid-cols-2 md:gap-12 md:pb-24 md:pt-14">
        <div className="order-2 flex flex-col items-start md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
            <Sparkles className="size-4" aria-hidden="true" />
            Made for Little Learners
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] md:text-6xl">
            Turn Screen Time Into <span className="text-primary">Happy Learning</span> Time
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            A huge collection of fun, printable activities designed to keep little hands busy, curious and learning.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex text-sunny" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold">Parent-loved learning activities</span>
          </div>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto">
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-4xl font-bold text-primary">{`₹${product.price}`}</span>
              <span className="text-lg font-semibold text-muted-foreground line-through">{`₹${product.originalPrice}`}</span>
            </div>
            <BuyButton className="w-full sm:w-auto" />
            <p className="text-sm font-semibold text-muted-foreground">
              {'Instant Digital Access • Print Anytime • Use Again & Again'}
            </p>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-sunny/40 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-8 ring-card">
            <Image
              src="/images/hero-child.png"
              alt="Smiling girl coloring an alphabet worksheet at home while her mother watches"
              width={1122}
              height={1402}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 w-24 -rotate-6 overflow-hidden rounded-lg bg-card p-1 shadow-xl sm:-left-6 sm:w-32">
            <Image src="/images/ws/counting.png" alt="" width={300} height={400} className="rounded" />
          </div>
          <div className="absolute -right-2 top-8 w-20 rotate-6 overflow-hidden rounded-lg bg-card p-1 shadow-xl sm:-right-6 sm:w-28">
            <Image src="/images/ws/shapes.png" alt="" width={300} height={400} className="rounded" />
          </div>
          <div className="absolute -bottom-4 right-4 rounded-2xl bg-card px-4 py-2 shadow-xl">
            <p className="font-heading text-lg font-bold leading-none text-secondary">10M+</p>
            <p className="text-xs font-bold text-muted-foreground">printable pages</p>
          </div>
        </div>
      </div>
    </section>
  )
}
