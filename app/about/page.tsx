import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import StatsSection from '@/components/StatsSection'
import CTABanner from '@/components/CTABanner'
import { CheckCircle2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | NexaBoost',
  description:
    'Learn about NexaBoost — Pakistan\'s leading SEO, AI & digital marketing agency.',
}

const PRINCIPLES = [
  {
    title: 'Data Over Dogma',
    desc: 'Every creative decision is backed by mathematical modelling. If it doesn\'t convert, it dies.',
  },
  {
    title: 'Speed to Market',
    desc: 'Algorithms change daily. We execute with military speed to capture fleeting attention arbitrage.',
  },
  {
    title: 'Radical Candor',
    desc: 'We don\'t sell dreams. We report hard facts, even when they\'re ugly, to course-correct instantly.',
  },
]

const TEAM = [
  {
    name: 'Basit Afridi',
    role: 'Founder & SEO Lead',
    desc: '5+ years scaling Pakistani and global brands through technical SEO and data-driven content strategy.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'AI & Web Team',
    role: 'AI Development & Web Engineering',
    desc: 'Expert engineers building custom AI chatbots, LLM integrations, and high-performance Next.js sites.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'Ads Team',
    role: 'Google & Meta Ads',
    desc: 'Managed $5M+ in ad spend across Google Search, Display, and Meta platforms with consistent 4× ROAS.',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80',
  },
  {
    name: 'Content Team',
    role: 'SEO Content & Copywriting',
    desc: 'Crafting authority-building content that ranks, converts, and earns high-quality backlinks organically.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 grid-bg overflow-hidden">
        <div className="orb orb-purple absolute w-[500px] h-[500px] -top-32 -right-32 opacity-25" />
        <div className="orb orb-cyan   absolute w-80 h-80 bottom-0 left-1/4 opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <AnimatedSection>
              <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-4">
                Who We Are
              </span>
              <h1 className="section-heading text-white mb-6">
                The Architects of <span className="neon-text">Scale</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                We are NexaBoost. A collective of data scientists, creative directors, and
                performance marketers united by one obsession: ROI.
              </p>
            </AnimatedSection>
          </div>

          {/* 2-col: text + office image */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-orbitron text-2xl font-bold text-white mb-5">
                Not just another agency.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded on the principle that marketing should be mathematically predictable, we
                stripped away the vanity metrics and corporate fluff.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We operate as an extension of your elite internal teams. When brands want to tap into
                explosive organic reach or lock down search dominance, they call us. We build machines
                that print revenue.
              </p>
              <ul className="space-y-3">
                {[
                  'Google & Meta certified experts',
                  'Transparent monthly reporting',
                  'Dedicated account managers',
                  '2-hour average response time',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                  alt="NexaBoost office"
                  width={900}
                  height={506}
                  className="w-full object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-orbitron font-bold text-sm">NexaBoost</p>
                      <p className="text-cyan-400 text-xs">Est. 2022 · Peshawar, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Our Principles */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-3">
              What Drives Us
            </span>
            <h2 className="section-heading text-white">
              Our <span className="neon-text">Principles</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-8">
            {PRINCIPLES.map(({ title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl p-8 h-full">
                  <h3 className="font-orbitron text-base font-bold text-white mb-3">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-3">
              The People
            </span>
            <h2 className="section-heading text-white">
              Meet the <span className="neon-text">Team</span>
            </h2>
            <p className="text-gray-400 mt-3 text-sm">Elite operators who live and breathe growth.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map(({ name, role, desc, image }, i) => (
              <AnimatedSection key={name} delay={i * 0.1}>
                <div className="glass-card-hover rounded-2xl overflow-hidden group">
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">{role}</div>
                    <h3 className="font-orbitron text-sm font-bold text-white mb-2">{name}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 text-center">
        <AnimatedSection>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-orbitron font-bold text-sm px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(0,240,255,0.3)]"
          >
            Partner With Us
          </Link>
        </AnimatedSection>
      </section>

      <CTABanner />
    </>
  )
}
