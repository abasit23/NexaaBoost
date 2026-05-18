import type { Metadata } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NexaBoost | SEO, AI & Web Agency',
  description:
    'Expert SEO, Web Development, AI Development, Google Ads & Meta Ads. We help businesses in Pakistan and worldwide grow online with data-driven strategies.',
  keywords: 'SEO Agency Pakistan, Web Development, AI Development, Google Ads, Meta Ads, Digital Marketing',
  openGraph: {
    title: 'NexaBoost | SEO, AI & Web Agency',
    description: 'Grow your business with expert SEO, AI solutions & high-converting ad campaigns.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
