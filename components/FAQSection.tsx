'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const FAQS = [
  {
    q: 'How soon can you start?',
    a: 'We typically onboard new clients within 48 hours of the initial consultation. For urgent projects, we can often begin within 24 hours.',
  },
  {
    q: 'What results can I realistically expect?',
    a: 'SEO results compound over 3–6 months. Paid ads (Google/Meta) can drive measurable traffic within 48–72 hours. We set transparent, realistic targets upfront and report monthly.',
  },
  {
    q: 'Do you offer monthly contracts or lock-in?',
    a: 'All services run on flexible monthly retainers. We earn your business every month — there is no lock-in after your first month.',
  },
  {
    q: 'Can you work with international clients?',
    a: 'Yes. We serve clients in the US, UK, UAE, and Europe. Our team operates across time zones and is fluent in English.',
  },
  {
    q: 'Do you create the ad creatives?',
    a: 'Yes — end-to-end creative production (copy, design, video scripts) is included in our Meta and Google Ads packages.',
  },
  {
    q: 'What makes NexaBoost different from other agencies?',
    a: 'We are a small, elite team obsessed with outcomes. You get direct access to your account manager, transparent reporting, and no vanity metrics — only revenue-focused KPIs.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-3">
            Questions
          </span>
          <h2 className="section-heading text-white">
            Intel &amp; <span className="gradient-text">Protocol</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">Common questions about our methodology.</p>
        </AnimatedSection>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div
                  className={`glass-card-hover rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-cyan-500/30' : ''
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isOpen ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
                      }`}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`shrink-0 transition-colors ${isOpen ? 'text-cyan-400' : 'text-gray-400'}`}
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
