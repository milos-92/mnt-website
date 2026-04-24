'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "MNT Consult completely transformed how we present ourselves in the market. In six months, our inbound leads tripled. Their strategic clarity is unlike anything we've experienced with other agencies.",
    author: 'Sarah Chen',
    role: 'CEO',
    company: 'NovaPay',
    avatar: 'SC',
    metric: '+200% leads',
    color: '#7c6ff7',
  },
  {
    quote: "The design team at MNT doesn't just make things look great — they make things that work. Our new platform has an NPS score of 72, up from 31. These people understand product deeply.",
    author: 'Marcus Rivera',
    role: 'Chief Product Officer',
    company: 'Archetype',
    avatar: 'MR',
    metric: 'NPS 31 → 72',
    color: '#60d9ff',
  },
  {
    quote: "We came to MNT needing a growth strategy. What we got was a true business partner. They pushed back on our assumptions and helped us find a path we hadn't considered.",
    author: 'Priya Nair',
    role: 'Founder',
    company: 'Verde Co.',
    avatar: 'PN',
    metric: '3× revenue',
    color: '#34d399',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#0a0e18] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#7c6ff7]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="w-8 h-px bg-[#7c6ff7]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#7c6ff7]">Client Stories</span>
            <div className="w-8 h-px bg-[#7c6ff7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">
            Don&apos;t Take Our Word for It
          </h2>
          <p className="text-[#8892a4] text-base sm:text-lg max-w-md mx-auto">
            We measure success by the outcomes our clients achieve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl p-6 sm:p-7 border border-white/[0.06] bg-[#0d1220] overflow-hidden cursor-default"
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${t.color}12, transparent 70%)` }}
              />
              <div className="absolute top-0 left-6 right-6 h-px" style={{ background: `linear-gradient(90deg, transparent, ${t.color}40, transparent)` }} />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5 border"
                style={{ color: t.color, background: `${t.color}15`, borderColor: `${t.color}30` }}
              >
                <span>↑</span> {t.metric}
              </motion.div>

              <div className="text-5xl sm:text-6xl font-black leading-none mb-2 text-white/[0.06] select-none">&ldquo;</div>
              <blockquote className="text-[#8892a4] leading-relaxed text-sm mb-6 -mt-3">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-3 pt-4 sm:pt-5 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`, boxShadow: `0 0 0 3px ${t.color}20` }}
                >
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm truncate">{t.author}</div>
                  <div className="text-[#8892a4] text-xs truncate">{t.role}, {t.company}</div>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className="text-xs" style={{ color: t.color }}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[#8892a4] text-sm"
        >
          {['Trusted by 50+ Companies', '12 Industry Awards', 'Rated 4.9/5 Average'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c6ff7]" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
