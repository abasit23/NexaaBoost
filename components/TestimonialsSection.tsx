'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const TESTIMONIALS = [
  {
    text: "NexaBoost scaled our organic traffic by 320% in just 4 months. Their SEO strategy is surgical — keyword mapping, technical fixes, content clusters. Everything we needed.",
    name: 'Ahmed Khan',
    role: 'CEO, ShopPK',
    rating: 5,
    metric: '+320% Traffic',
  },
  {
    text: "Our Google Ads ROAS jumped from 1.8× to 4.5× in three weeks. The team is fast, data-driven, and genuinely cares about our results — not just the monthly retainer.",
    name: 'Sara Malik',
    role: 'CMO, Elevate Beauty',
    rating: 5,
    metric: '4.5× ROAS',
  },
  {
    text: "The AI chatbot they built cut our support tickets by 60% and our response time from hours to seconds. Best investment we've made for our business this year.",
    name: 'Usman Raza',
    role: 'Founder, TechFlow',
    rating: 5,
    metric: '-60% Support Tickets',
  },
  {
    text: "Our new website built by NexaBoost loads in under 1.5s and our conversion rate doubled. Beautiful design, clean code, and ranked on Google in weeks.",
    name: 'Fatima Tariq',
    role: 'Director, LuxeStore',
    rating: 5,
    metric: '2× Conversion Rate',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((i) => (i + 1) % TESTIMONIALS.length), 5500)
    return () => clearInterval(t)
  }, [])

  const t = TESTIMONIALS[current]

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.015] border-y border-white/5">
      <div className="orb orb-purple absolute w-[400px] h-[400px] -top-32 left-1/2 -translate-x-1/2 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-3">
            Client Stories
          </span>
          <h2 className="section-heading text-white">
            Tested &amp; <span className="gradient-text">Proven</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
            Real results from real brands. No vanity metrics.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="glass-card rounded-3xl p-10 md:p-12 relative overflow-hidden"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl pointer-events-none" />

              {/* Metric badge */}
              <div className="absolute top-6 right-6 glass-card px-3 py-1.5 rounded-full text-xs font-bold text-cyan-400 border border-cyan-500/20">
                {t.metric}
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <Quote size={36} className="text-cyan-400/20 mb-4" />

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-black"
                  style={{ background: 'linear-gradient(135deg,#00eaff,#ec4899)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2.5 mt-7">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-cyan-400' : 'w-2 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
