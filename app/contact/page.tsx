import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import AnimatedSection from '@/components/AnimatedSection'
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | NexaBoost',
  description: 'Get a free consultation with NexaBoost. Reach us on WhatsApp, email, or through our contact form.',
}

const CONTACT_INFO = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+92 331 4589220',
    href: 'https://wa.me/923314589220',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@nexaboost.com',
    href: 'mailto:hello@nexaboost.com',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Peshawar, Pakistan',
    href: null,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 2 hours',
    href: null,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
]

const FAQS = [
  { q: 'How soon can you start?', a: 'We typically onboard new clients within 48 hours of the initial consultation.' },
  { q: 'Do you offer monthly contracts?', a: 'Yes — all our services are available on flexible monthly retainers with no lock-in after the first month.' },
  { q: 'Can you work with international clients?', a: 'Absolutely. We serve clients in the US, UK, UAE, and Europe. We work across all time zones.' },
  { q: 'What results can I expect?', a: 'SEO results typically show in 3–6 months. Ads can drive traffic within days. We set realistic targets upfront.' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 grid-bg overflow-hidden">
        <div className="orb orb-cyan   absolute w-96 h-96 -top-32 right-0 opacity-25" />
        <div className="orb orb-purple absolute w-72 h-72 bottom-0 left-0 opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Let&apos;s Talk
            </span>
            <h1 className="section-heading text-white mb-4">
              Get a <span className="neon-text">Free Consultation</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Tell us about your project and we&apos;ll map out a custom growth strategy — no cost, no
              commitment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left info column */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="left">
                <h2 className="font-orbitron text-xl font-bold text-white mb-6">
                  Reach Us Directly
                </h2>
                <div className="space-y-4">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href, color, bg }) => {
                    const content = (
                      <div className="glass-card-hover rounded-2xl p-5 flex items-start gap-4">
                        <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center shrink-0 ${color}`}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                          <p className={`text-sm font-semibold ${href ? color : 'text-white'}`}>{value}</p>
                        </div>
                      </div>
                    )
                    return href ? (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={label}>{content}</div>
                    )
                  })}
                </div>
              </AnimatedSection>

              {/* FAQs */}
              <AnimatedSection direction="left" delay={0.15}>
                <h3 className="font-orbitron text-base font-bold text-white mb-4">Quick FAQs</h3>
                <div className="space-y-3">
                  {FAQS.map(({ q, a }) => (
                    <details
                      key={q}
                      className="glass-card rounded-xl p-4 group cursor-pointer"
                    >
                      <summary className="text-sm font-medium text-gray-200 list-none flex items-center justify-between gap-2">
                        {q}
                        <span className="text-cyan-400 text-lg leading-none group-open:rotate-45 transition-transform inline-block">+</span>
                      </summary>
                      <p className="text-xs text-gray-400 mt-3 leading-relaxed">{a}</p>
                    </details>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
