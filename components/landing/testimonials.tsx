import { Quote } from 'lucide-react'
import { SectionHeading } from './buy-button'

const placeholders = [1, 2, 3]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="From parents" title="What Families Are Saying" />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {placeholders.map((n) => (
            <li key={n} className="flex flex-col gap-4 rounded-3xl border-2 border-dashed border-primary/40 bg-card p-6">
              <Quote className="size-8 text-primary/40" aria-hidden="true" />
              <p className="text-lg font-semibold italic leading-relaxed text-muted-foreground">
                Replace with real customer testimonial.
              </p>
              <p className="mt-auto text-sm font-bold">{`Parent name · City (placeholder ${n})`}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
