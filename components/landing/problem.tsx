import Image from 'next/image'
import { SectionHeading } from './buy-button'

const cards = [
  { img: '/images/bored-child.png', quote: '“Mom, I’m bored!”', alt: 'Bored boy lying upside down on a sofa' },
  { img: '/images/tablet-child.png', quote: '“Can I watch the tablet?”', alt: 'Young girl holding a tablet on the sofa' },
  { img: '/images/two-kids.png', quote: 'Nothing keeps them busy for more than 10 minutes.', alt: 'Two young children at a table' },
  { img: '/images/tired-parent.png', quote: 'Finding new activities every day is exhausting.', alt: 'Tired mother searching for activity ideas on her phone' },
]

export function Problem() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Sound familiar?" title="Does This Sound Familiar?" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <figure key={c.quote} className="overflow-hidden rounded-3xl bg-card shadow-md ring-1 ring-border">
              <Image src={c.img} alt={c.alt} width={600} height={600} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-5 font-heading text-xl font-semibold leading-snug">{c.quote}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
