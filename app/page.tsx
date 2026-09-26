import { Bonuses } from '@/components/landing/bonuses'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'
import { Hero } from '@/components/landing/hero'
import { Imagine } from '@/components/landing/imagine'
import { ParentConversation } from '@/components/landing/parent-conversation'
import { PeekInside } from '@/components/landing/peek-inside'
import { PlaySection } from '@/components/landing/play-section'
import { Problem } from '@/components/landing/problem'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'
import { Solution } from '@/components/landing/solution'
import { StickyBuyBar } from '@/components/landing/sticky-buy-bar'
import { Testimonials } from '@/components/landing/testimonials'
import { ValueSection } from '@/components/landing/value-section'
import { WhatsInside } from '@/components/landing/whats-inside'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 md:pb-0">
        <Hero />
        <ParentConversation />
        <Problem />
        <Solution />
        <PeekInside />
        <PlaySection />
        <WhatsInside />
        <Imagine />
        <Bonuses />
        <ValueSection />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyBuyBar />
    </>
  )
}
