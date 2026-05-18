const ITEMS = [
  'SEO Optimization',
  'Web Development',
  'AI Development',
  'Google Ads',
  'Meta Ads',
  'Backlink Building',
  'Conversion Rate Optimization',
  'Content Strategy',
  'Technical SEO',
  'AI Chatbots',
]

// Duplicate for seamless loop
const DOUBLED = [...ITEMS, ...ITEMS]

export default function MarqueeSection() {
  return (
    <section
      className="py-5 border-y border-cyan-500/10 overflow-hidden relative bg-black/50"
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#050510] to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#050510] to-transparent" />

      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-gray-400 text-sm font-medium uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
