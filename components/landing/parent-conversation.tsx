import Image from 'next/image'
import { cn } from '@/lib/utils'

const messages = [
  { who: 'Mom', side: 'left', text: 'Anything fun for them to do without another screen?' },
  { who: 'Dad', side: 'right', text: 'What about something they can actually learn from?' },
  { who: 'Mom', side: 'left', text: 'Found it. Look at all these activities!' },
] as const

export function ParentConversation() {
  return (
    <section className="bg-accent/50 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-4" role="list" aria-label="Parent conversation">
          {messages.map((m, i) => (
            <div
              key={i}
              role="listitem"
              className={cn('flex max-w-[88%] flex-col gap-1', m.side === 'right' ? 'items-end self-end' : 'items-start')}
            >
              <span className="px-2 text-xs font-extrabold uppercase tracking-widest text-muted-foreground">{m.who}</span>
              <p
                className={cn(
                  'rounded-3xl px-5 py-3 text-lg font-semibold leading-snug shadow-sm',
                  m.side === 'right'
                    ? 'rounded-br-md bg-secondary text-secondary-foreground'
                    : 'rounded-bl-md bg-card text-foreground',
                  i === messages.length - 1 && 'bg-primary text-primary-foreground',
                )}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-card shadow-xl">
            <Image
              src="/images/bundle-stack.png"
              alt="A fanned-out stack of colorful printable preschool worksheets with crayons"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 w-32 overflow-hidden rounded-2xl shadow-xl ring-4 ring-card sm:w-44">
            <Image
              src="/images/child-alphabet.png"
              alt="Child practicing alphabet letters"
              width={400}
              height={400}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
