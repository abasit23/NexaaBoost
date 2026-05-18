export interface Service {
  id: string
  title: string
  shortDesc: string
  fullDesc: string
  icon: string
  features: string[]
  gradient: string
  shadowColor: string
  image: string
}

export const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Lightning-fast, beautiful websites that turn visitors into paying customers.',
    fullDesc:
      'We engineer modern, SEO-optimized websites using Next.js, React, and cutting-edge tech. From sleek landing pages to full-scale e-commerce platforms — designed to perform, built to convert.',
    icon: 'Code2',
    features: ['Next.js & React', 'Mobile-First Design', 'Core Web Vitals Optimized', 'CMS & E-Commerce'],
    gradient: 'from-blue-500 to-cyan-400',
    shadowColor: 'rgba(59,130,246,0.4)',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
  },
  {
    id: 'ai-development',
    title: 'AI Development',
    shortDesc: 'Custom AI solutions, chatbots & automation that give you a competitive edge.',
    fullDesc:
      'Harness GPT-4, LangChain, and advanced ML pipelines to build intelligent chatbots, recommendation engines, document automation, and data intelligence tools tailored to your business.',
    icon: 'BrainCircuit',
    features: ['Custom AI Chatbots', 'LLM Integration', 'Process Automation', 'Data Intelligence'],
    gradient: 'from-purple-500 to-pink-500',
    shadowColor: 'rgba(168,85,247,0.4)',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    shortDesc: 'Rank #1 on Google with proven on-page, off-page & technical SEO.',
    fullDesc:
      'Comprehensive SEO audits, deep keyword research, content strategy, technical fixes, and authority-building. We drive sustainable organic traffic that compounds over time.',
    icon: 'TrendingUp',
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO Audit', 'Content Strategy'],
    gradient: 'from-green-500 to-emerald-400',
    shadowColor: 'rgba(34,197,94,0.4)',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    shortDesc: 'High-ROI PPC campaigns that maximize every rupee of your ad spend.',
    fullDesc:
      'Expert Google Ads management covering Search, Display, Shopping, and YouTube. We engineer data-driven campaigns that minimize CPC and maximize conversions with tight attribution.',
    icon: 'Target',
    features: ['Search & Display Campaigns', 'Shopping & YouTube Ads', 'Conversion Tracking', 'Bid Optimization'],
    gradient: 'from-yellow-400 to-orange-500',
    shadowColor: 'rgba(251,146,60,0.4)',
    image: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&q=80',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    shortDesc: 'Facebook & Instagram ads that reach your ideal audience and convert.',
    fullDesc:
      'Precision Meta advertising with laser-sharp targeting, scroll-stopping creatives, A/B testing frameworks, and multi-touch retargeting funnels built to scale.',
    icon: 'Share2',
    features: ['Audience Targeting', 'Creative Ad Design', 'A/B Testing', 'Retargeting Funnels'],
    gradient: 'from-blue-600 to-indigo-500',
    shadowColor: 'rgba(99,102,241,0.4)',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
  },
  {
    id: 'backlinks',
    title: 'Backlink Building',
    shortDesc: 'High-authority white-hat backlinks that boost your domain rating fast.',
    fullDesc:
      'Strategic white-hat link acquisition through guest posting, digital PR, niche edits, and broken-link building to elevate your site\'s authority, rankings, and referral traffic.',
    icon: 'Link2',
    features: ['Guest Posting', 'Digital PR', 'Niche Edits', 'Authority Link Acquisition'],
    gradient: 'from-rose-500 to-red-500',
    shadowColor: 'rgba(244,63,94,0.4)',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
  },
]
