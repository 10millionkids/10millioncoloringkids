import Image from 'next/image'
import { worksheets } from '@/lib/product'
import { SectionHeading } from './buy-button'

export function WhatsInside() {
  return (
    <section id="inside" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={"What's inside"} title="12 Skill Areas, All in One Download" />
        <ul className="mt-10 grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 lg:grid-cols-4">
          {worksheets.map((w) => (
            <li key={w.category} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-md ring-1 ring-border">
              <div className="bg-muted p-4">
                <Image
                  src={w.src}
                  alt={`${w.category} worksheet example`}
                  width={400}
                  height={533}
                  className="mx-auto w-3/4 rounded-md shadow-md"
                />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <h3 className="text-lg font-bold">{w.category}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.benefit}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
