import Image from 'next/image'
import { SectionHeading } from './buy-button'

const photos = [
  { src: '/images/child-coloring.png', alt: 'Child happily coloring a worksheet', label: 'Color it' },
  { src: '/images/parent-helping.png', alt: 'Parent helping a child with a worksheet', label: 'Do it together' },
  { src: '/images/child-puzzle.png', alt: 'Child solving a simple puzzle worksheet', label: 'Solve it' },
]

export function PlaySection() {
  return (
    <section className="bg-sunny/25 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Learning Feels Different When It Feels Like Play."
          subtitle="Every page is designed to feel like a game: bright pictures, simple instructions and a satisfying finish that makes them want to do one more."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {photos.map((p) => (
            <figure key={p.src} className="relative overflow-hidden rounded-3xl shadow-lg">
              <Image src={p.src} alt={p.alt} width={800} height={1000} className="aspect-[4/5] w-full object-cover" />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-card px-4 py-2 font-heading text-base font-bold shadow">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
