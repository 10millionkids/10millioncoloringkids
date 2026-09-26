import { ChevronDown } from 'lucide-react'
import { SectionHeading } from './buy-button'

const faqs = [
  { q: 'What age is this for?', a: 'The activities are designed for children roughly 2 to 7 years old. Younger kids enjoy coloring and tracing; older kids enjoy puzzles, words and patterns.' },
  { q: 'How do I receive the worksheets?', a: 'After payment you get a download link on screen and by email. Download the PDF files to your phone or computer.' },
  { q: 'Is this a physical product?', a: 'No. This is a digital download. Nothing is shipped; you print the pages yourself.' },
  { q: 'Can I print them multiple times?', a: 'Yes. Print any page as many times as you like for your own family.' },
  { q: 'What paper size should I use?', a: 'The pages are formatted for standard A4 paper and also print well on US Letter.' },
  { q: 'Can I use a black-and-white printer?', a: 'Yes. Pages print clearly in black and white, and many kids enjoy coloring them in afterwards.' },
  { q: 'How quickly will I receive access?', a: 'Instantly. Your download link is available right after your payment is confirmed.' },
  { q: 'Do I need special software?', a: 'No. Any free PDF viewer on your phone, tablet or computer will open the files.' },
  { q: 'Can teachers use these?', a: 'Yes, teachers and play-schools can print the pages for their own classroom use.' },
  { q: 'What happens after payment?', a: 'You will be redirected to your download page and receive an email with your link so you can access it again later.' },
]

export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-card shadow-sm ring-1 ring-border open:ring-2 open:ring-primary/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
