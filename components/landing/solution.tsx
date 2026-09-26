import Image from 'next/image'
import { worksheets } from '@/lib/product'
import { SectionHeading } from './buy-button'

const labels = ['ABC', 'Numbers', 'Tracing', 'Coloring', 'Matching', 'Puzzles', 'Shapes', 'Fine Motor', 'Cut & Paste', 'Early Learning']
const labelColors = ['bg-primary', 'bg-secondary', 'bg-sunny text-foreground', 'bg-foreground']

export function Solution() {
  const collage = worksheets.slice(0, 6)
  return (
    <section className="bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The solution"
          title="One Bundle. Hundreds of Little Learning Moments."
          subtitle="A ready-to-use collection of printable activities. Download once, print what you need, and pull out something new whenever they need it."
          className="[&_p:last-child]:text-background/75 [&_p:first-child]:text-sunny"
        />
        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
          {labels.map((l, i) => (
            <li
              key={l}
              className={`rounded-full px-4 py-2 text-sm font-extrabold text-background ${labelColors[i % labelColors.length]} ${i % 4 === 3 ? 'ring-2 ring-background/30' : ''}`}
            >
              {l}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4">
          {collage.map((w, i) => (
            <div
              key={w.src}
              className={`overflow-hidden rounded-lg bg-card p-1 shadow-2xl ${i % 2 ? 'rotate-2 md:translate-y-6' : '-rotate-2'}`}
            >
              <Image src={w.src} alt={`${w.caption} worksheet preview`} width={300} height={400} className="rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
