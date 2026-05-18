import HeroBanner from '@/components/HeroBanner'
import MarqueeSection from '@/components/MarqueeSection'
import StatsSection from '@/components/StatsSection'
import ServicesGrid from '@/components/ServicesGrid'
import WhySection from '@/components/WhySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen hero with typewriter & particles */}
      <HeroBanner />

      {/* 2. Scrolling services ticker */}
      <MarqueeSection />

      {/* 3. Stats band (border-y) */}
      <StatsSection />

      {/* 4. Service cards (3 featured) */}
      <ServicesGrid limit={3} showHeading />

      {/* 5. Why RankGrow — 2-col with dashboard visual */}
      <WhySection />

      {/* 6. Testimonials carousel */}
      <TestimonialsSection />

      {/* 7. FAQ accordion */}
      <FAQSection />

      {/* 8. Cinematic CTA */}
      <CTABanner />
    </>
  )
}
