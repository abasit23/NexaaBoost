import type { Metadata } from 'next'
import ServicesGrid from '@/components/ServicesGrid'
import CTABanner from '@/components/CTABanner'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Our Services | NexaBoost',
  description:
    'SEO, Web Development, AI Development, Google Ads, Meta Ads & Backlink Building. Full-service digital growth agency.',
}

const PROCESS = [
  { step: '01', title: 'Discovery Call', desc: 'We audit your current state and understand your goals.' },
  { step: '02', title: 'Custom Strategy', desc: 'We build a data-backed roadmap unique to your business.' },
  { step: '03', title: 'Execution', desc: 'Our team executes with speed and precision.' },
  { step: '04', title: 'Report & Scale', desc: 'We track results, optimize, and scale what works.' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 grid-bg overflow-hidden">
        <div className="orb orb-cyan absolute w-96 h-96 -top-32 right-0 opacity-30" />
        <div className="orb orb-purple absolute w-72 h-72 bottom-0 left-0 opacity-25" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-4">
              What We Offer
            </span>
            <h1 className="section-heading text-white mb-5">
              Full-Stack <span className="neon-text">Digital Growth</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              From organic search to paid ads, from beautiful websites to intelligent AI systems — we
              cover every channel that grows your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All 6 services */}
      <ServicesGrid showHeading={false} />

      {/* Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-3">
              How It Works
            </span>
            <h2 className="section-heading text-white">
              Our <span className="neon-text">Process</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-6 relative overflow-hidden group">
                  <div className="font-orbitron text-5xl font-black text-cyan-400/10 group-hover:text-cyan-400/20 transition-colors mb-4 leading-none">
                    {step}
                  </div>
                  <h3 className="font-orbitron text-sm font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                  {/* Step connector */}
                  {i < PROCESS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-cyan-500/30 z-10" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
