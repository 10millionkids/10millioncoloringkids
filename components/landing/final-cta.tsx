import Image from 'next/image'
import { product } from '@/lib/product'
import { BuyButton } from './buy-button'

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/proud-child.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-foreground/70" aria-hidden="true" />
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center text-background md:py-32">
        <h2 className="text-balance text-4xl font-bold leading-tight md:text-6xl">Give Them Something Fun To Learn Today.</h2>
        <p className="mt-5 font-heading text-xl font-semibold text-sunny md:text-2xl">
          Print it. Play it. Practice it. Repeat it.
        </p>
        <p className="mt-6 font-heading text-3xl font-bold">
          {`₹${product.price}`}{' '}
          <span className="text-lg font-semibold text-background/70 line-through">{`₹${product.originalPrice}`}</span>
        </p>
        <BuyButton label="Get Instant Access" className="mt-6 w-full sm:w-auto" />
        <p className="mt-4 text-sm font-semibold text-background/85">
          {'Digital Download • No Waiting • Start Learning Today'}
        </p>
      </div>
    </section>
  )
}
