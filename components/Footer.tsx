import Link from 'next/link'
import { Zap, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react'

const services = [
  { label: 'Web Development', href: '/services' },
  { label: 'AI Development', href: '/services' },
  { label: 'SEO Optimization', href: '/services' },
  { label: 'Google Ads', href: '/services' },
  { label: 'Meta Ads', href: '/services' },
  { label: 'Backlink Building', href: '/services' },
]

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#030308] border-t border-cyan-500/15 overflow-hidden">
      {/* Background orb */}
      <div className="orb orb-purple absolute w-96 h-96 -bottom-48 -right-48 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="font-orbitron text-xl font-black">
                <span className="text-white">Nexa</span>
                <span className="text-cyan-400">Boost</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Pakistan&apos;s leading digital growth agency — turning clicks into revenue through SEO, AI, and data-driven advertising.
            </p>
            <div className="space-y-2.5">
              <a
                href="https://wa.me/923314589220"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
              >
                <MessageCircle size={14} className="text-cyan-400 shrink-0" />
                +92 331 4589220
              </a>
              <a
                href="mailto:hello@nexaboost.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={14} className="text-cyan-400 shrink-0" />
                hello@nexaboost.com
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-cyan-400 shrink-0" />
                Peshawar, Pakistan
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white uppercase tracking-widest mb-5">
              Free Consultation
            </h4>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Ready to grow? Get a free audit and strategy session from our experts.
            </p>
            <Link
              href="/contact"
              className="neon-button inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm"
            >
              Get Started Free
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyan-500/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NexaBoost. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js · Designed for performance
          </p>
        </div>
      </div>
    </footer>
  )
}
