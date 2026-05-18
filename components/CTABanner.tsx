import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient fade-in from bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20 pointer-events-none" />
      {/* Orbs */}
      <div className="orb orb-cyan   absolute w-[500px] h-[500px] top-0 left-1/2 -translate-x-1/2 opacity-20" />
      <div className="orb orb-purple absolute w-96 h-96 bottom-0 right-0 opacity-15" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-6">
            Ready to Scale?
          </span>
          <h2
            className="font-orbitron font-black text-white mb-6 leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Stop Wasting Ad Spend.
            <br />
            <span className="gradient-text">Start Growing.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Let our elite team audit your current state and architect your next breakthrough campaign — completely free.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 h-16 px-12 text-xl font-bold rounded-none bg-white text-black hover:bg-gray-200 transition-all group w-full md:w-auto"
          >
            Start Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
