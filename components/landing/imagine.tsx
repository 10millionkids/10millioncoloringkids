import Image from 'next/image'
import { BuyButton } from './buy-button'

export function Imagine() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/images/parent-coffee.png"
            alt="Parent enjoying a coffee while a child works on a worksheet at the table"
            width={1000}
            height={1000}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-sm font-extrabold uppercase tracking-widest text-secondary">Imagine this</p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight md:text-5xl">
            Imagine 20 Quiet Minutes That Actually Feel Productive.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Instead of another video, give your little learner something they can touch, practice and proudly finish.
          </p>
          <BuyButton className="mt-8 w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
