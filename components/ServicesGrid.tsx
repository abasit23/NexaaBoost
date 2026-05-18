import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceCard from './ServiceCard'
import AnimatedSection from './AnimatedSection'
import { SERVICES } from '@/lib/services'

interface Props {
  limit?: number
  showHeading?: boolean
}

export default function ServicesGrid({ limit, showHeading = true }: Props) {
  const displayed = limit ? SERVICES.slice(0, limit) : SERVICES

  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-3 block">
                  What We Do
                </span>
                <h2 className="section-heading text-white">
                  Our <span className="gradient-text">Arsenal</span>
                </h2>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  Precision-engineered services designed to capture attention and convert at scale.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-cyan-400 transition-colors group shrink-0"
              >
                View All Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
