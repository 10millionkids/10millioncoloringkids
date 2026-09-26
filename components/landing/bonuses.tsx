import Image from 'next/image'
import { bonuses } from '@/lib/product'
import { SectionHeading } from './buy-button'

export function Bonuses() {
  return (
    <section id="bonuses" className="bg-accent/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Free with your order"
          title="Plus 5 Bonus Packs Included"
          subtitle="Extra printables to make learning time even more fun."
        />
        <ul className="mt-10 grid grid-cols-1 gap-5 min-[380px]:grid-cols-2 lg:grid-cols-5">
          {bonuses.map((b, i) => (
            <li key={b.title} className="flex flex-col items-center rounded-3xl bg-card p-4 text-center shadow-md">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary-foreground">
                {`Bonus #${i + 1}`}
              </span>
              <Image src={b.src} alt={`${b.title} cover`} width={400} height={533} className="mt-3 w-full rounded-xl" />
              <h3 className="mt-3 text-base font-bold leading-snug">{b.title}</h3>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">
                <span className="line-through">{`₹${b.value}`}</span> <span className="text-secondary">FREE</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
