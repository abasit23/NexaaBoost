'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const METRICS = [
  { value: '4.5×', label: 'Avg ROAS Increase' },
  { value: '12 Days', label: 'Faster to First Sale' },
  { value: '68%', label: 'Creative Win Rate' },
  { value: '94%', label: 'Client Retention' },
]

const BARS = [
  { label: 'SEO Traffic Growth', pct: 92, color: 'from-cyan-400 to-cyan-600' },
  { label: 'Ad Conversion Rate', pct: 78, color: 'from-purple-400 to-purple-600' },
  { label: 'ROI vs Baseline', pct: 85, color: 'from-pink-400 to-pink-600' },
  { label: 'Client Satisfaction', pct: 97, color: 'from-green-400 to-green-600' },
]

function AnimatedBar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  return (
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
      />
    </div>
  )
}

export default function WhySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb orb-cyan absolute w-80 h-80 top-0 -right-20 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy + metric cards */}
          <AnimatedSection direction="left">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 block">
              Why NexaBoost
            </span>
            <h2 className="section-heading text-white mb-5">
              Data-backed decisions<br />
              at <span className="gradient-text">every step.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We don&apos;t guess. Every campaign is underpinned by real-time analytics, creative
              testing frameworks, and attribution modeling that shows you exactly where every rupee
              goes — and what it returns.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {METRICS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="glass-card-hover rounded-xl p-5"
                >
                  <div className="font-orbitron text-2xl font-black text-cyan-400 mb-1">{value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — fake analytics dashboard */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="glass-card rounded-3xl p-7 relative overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Campaign Overview</div>
                  <div className="font-orbitron text-sm font-bold text-white">Live Analytics</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Live
                </div>
              </div>

              {/* Fake line chart */}
              <div className="mb-6 relative h-28 overflow-hidden rounded-xl bg-white/[0.02] border border-white/5 flex items-end px-3 pb-3 gap-2">
                {[40, 55, 38, 70, 65, 82, 60, 90, 78, 95, 88, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/80 to-cyan-400/30"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }}
                  />
                ))}
                {/* Glow under chart */}
                <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none" />
              </div>

              {/* Bar metrics */}
              <div className="space-y-4">
                {BARS.map(({ label, pct, color }, i) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                      <span>{label}</span>
                      <span className="text-white font-semibold">{pct}%</span>
                    </div>
                    <AnimatedBar pct={pct} color={color} delay={0.3 + i * 0.1} />
                  </div>
                ))}
              </div>

              {/* Bottom badges */}
              <div className="flex gap-3 mt-6">
                {['Google', 'Meta', 'SEO'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-bold text-gray-400 border border-white/10 px-2.5 py-1 rounded-full bg-white/[0.02]"
                  >
                    {badge}
                  </span>
                ))}
                <span className="ml-auto text-[10px] text-cyan-400 font-semibold">↑ 38% MoM</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
