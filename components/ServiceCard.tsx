'use client'

import { motion } from 'framer-motion'
import {
  Code2, BrainCircuit, TrendingUp, Target, Share2, Link2,
  CheckCircle2, ArrowRight, type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { Service } from '@/lib/services'

const ICON_MAP: Record<string, LucideIcon> = {
  Code2, BrainCircuit, TrendingUp, Target, Share2, Link2,
}

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] ?? Code2

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-cyan-500/40 transition-colors duration-300 cursor-pointer"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      {/* Hover glow layer */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] bg-gradient-to-br ${service.gradient} transition-opacity duration-500 pointer-events-none`}
      />

      {/* Banner image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay so the card content blends in */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#090d1a] via-[#090d1a]/60 to-transparent`} />
        {/* Icon badge over image */}
        <div
          className={`absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
        </div>
        {/* Top accent line */}
        <div
          className={`absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-500`}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-orbitron text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {service.title}
        </h3>

        {/* Desc */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
              <CheckCircle2 size={12} className="text-cyan-400 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Learn more */}
        <Link
          href="/services"
          className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-cyan-400 transition-colors duration-200"
        >
          Learn more
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}
