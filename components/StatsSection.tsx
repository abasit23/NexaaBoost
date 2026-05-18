'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: '$5M+',  label: 'Ad Spend Managed',    color: 'text-cyan-400'   },
  { value: 100,     label: 'Happy Clients',        color: 'text-pink-400',   suffix: '+'  },
  { value: 380,     label: 'Average ROI',          color: 'text-purple-400', suffix: '%'  },
  { value: 250,     label: 'Projects Completed',   color: 'text-green-400',  suffix: '+'  },
]

function Counter({
  target,
  suffix = '',
  color,
}: {
  target: number | string
  suffix?: string
  color: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || typeof target !== 'number') return
    let start = 0
    const step = target / 60
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 18)
    return () => clearInterval(timer)
  }, [inView, target])

  if (typeof target === 'string') {
    return (
      <span ref={ref} className={`font-orbitron text-4xl md:text-5xl font-black ${color}`}>
        {target}
      </span>
    )
  }

  return (
    <span ref={ref} className={`font-orbitron text-4xl md:text-5xl font-black ${color} tabular-nums`}>
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.03] via-transparent to-pink-500/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label, color, suffix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <Counter target={value} suffix={suffix} color={color} />
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
