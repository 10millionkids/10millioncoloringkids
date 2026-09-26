import Image from 'next/image'
import { worksheets } from '@/lib/product'
import { BuyButton, SectionHeading } from './buy-button'

export function PeekInside() {
  return (
    <section id="peek" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Peek inside"
          title="Real Pages Your Child Will Love"
          subtitle="A small sample of the printable activity pages included in the bundle."
        />
      </div>
      <ul
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 md:mx-auto md:grid md:max-w-6xl md:grid-cols-4 md:gap-6 md:overflow-visible"
        aria-label="Worksheet previews"
      >
        {worksheets.map((w, i) => (
          <li key={w.src} className="w-[70%] shrink-0 snap-center sm:w-[40%] md:w-auto">
            <figure className={`transition-transform hover:-translate-y-1 hover:rotate-0 ${i % 2 ? 'md:rotate-1' : 'md:-rotate-1'}`}>
              <div className="overflow-hidden rounded-xl bg-card p-2 shadow-[0_10px_30px_-10px_oklch(0.3_0.05_265/0.35)] ring-1 ring-border">
                <Image src={w.src} alt={`${w.caption} printable worksheet`} width={600} height={800} className="rounded-md" />
              </div>
              <figcaption className="mt-3 text-center font-heading text-lg font-semibold">{w.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="px-4 text-center text-sm font-semibold text-muted-foreground md:hidden">{'Swipe to see more →'}</p>
      <div className="mt-8 flex justify-center px-4">
        <BuyButton className="w-full sm:w-auto" />
      </div>
    </section>
  )
}
