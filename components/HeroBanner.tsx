'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'

const TYPING_TEXTS = [
  'Dominate The Algorithm',
  'Scale with AI',
  'Rank #1 on Google',
  'Convert & Win',
]

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 14 + 8,
  delay: Math.random() * 5,
  color: i % 3 === 0 ? '#00eaff' : i % 3 === 1 ? '#ec4899' : '#a855f7',
}))

export default function HeroBanner() {
  const [display, setDisplay] = useState('')
  const [txtIdx, setTxtIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  useEffect(() => {
    const target = TYPING_TEXTS[txtIdx]
    const speed  = deleting ? 55 : display === target ? 2400 : 95
    const t = setTimeout(() => {
      if (!deleting && display === target) {
        setDeleting(true)
      } else if (deleting && display === '') {
        setDeleting(false)
        setTxtIdx((n) => (n + 1) % TYPING_TEXTS.length)
      } else {
        setDisplay((s) => (deleting ? s.slice(0, -1) : target.slice(0, s.length + 1)))
      }
    }, speed)
    return () => clearTimeout(t)
  }, [display, deleting, txtIdx])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050510' }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050510]" />

      {/* Orbs */}
      <div className="orb orb-cyan  absolute w-[650px] h-[650px] -top-56 -right-56 opacity-30" />
      <div className="orb orb-purple absolute w-[500px] h-[500px] -bottom-32 -left-32 opacity-25" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,234,255,0.6), transparent 60%)' }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
            }}
            animate={{ y: [0, -50, 0], opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Scrolling neon lines (scanlines effect) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-x-0 h-px bg-cyan-400"
            style={{ top: `${(i + 1) * 8}%` }}
            animate={{ opacity: [0, 0.8, 0], scaleX: [0, 1, 0] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-xs font-medium text-white/80 mb-8 border border-white/10"
          >
            <Zap size={13} className="text-pink-400" fill="#ec4899" />
            The Digital Growth Command Center
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-orbitron font-black mb-6 leading-[1.05] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7.5vw, 5.8rem)' }}
          >
            <span className="gradient-text">{display}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, repeatType: 'reverse' }}
              className="text-cyan-400"
            >|</motion.span>
            <br />
            <span className="text-white">Your Business</span>
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            We engineer explosive growth for ambitious brands through data-driven SEO,
            AI-powered solutions, stunning web experiences, and high-converting ad campaigns.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <Link
              href="/contact"
              className="neon-button inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-base font-bold group"
            >
              Get Your Growth Plan
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="outline-button inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full text-base font-semibold"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-xs text-gray-600"
          >
            {['100+ Clients Served', '5★ Average Rating', '3+ Years Experience', 'Results Guaranteed'].map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 hover:text-cyan-400 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={17} />
        </motion.div>
      </motion.a>
    </section>
  )
}
