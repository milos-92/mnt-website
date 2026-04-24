'use client'

import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Brand Strategy',
    description: 'Positioning frameworks and messaging architectures that give your brand a razor-sharp identity.',
    tags: ['Positioning', 'Messaging', 'Identity'],
    color: '#7c6ff7',
    glow: 'rgba(124,111,247,0.15)',
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'UX & Design',
    description: 'From wireframes to pixel-perfect interfaces that convert visitors into loyal customers.',
    tags: ['UI/UX', 'Design Systems', 'Prototyping'],
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Development',
    description: 'High-performance web and mobile applications built with modern stacks, engineered to scale.',
    tags: ['Web Apps', 'Mobile', 'APIs'],
    color: '#60d9ff',
    glow: 'rgba(96,217,255,0.15)',
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Growth Marketing',
    description: 'Data-driven campaigns across paid, organic, and social channels designed to maximise ROI.',
    tags: ['SEO', 'Paid Media', 'Analytics'],
    color: '#34d399',
    glow: 'rgba(52,211,153,0.15)',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 bg-[#080b14] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7c6ff7]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-xl mb-12 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="w-8 h-px bg-[#7c6ff7]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#7c6ff7]">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            End-to-End Solutions<br />
            <span className="text-[#8892a4] font-normal">for ambitious brands.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-6 sm:p-7 border border-white/[0.06] bg-[#0d1220] cursor-default overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${s.glow}, transparent 70%)` }}
              />
              <div className="absolute top-0 left-6 right-6 h-px rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${s.color}40, transparent)` }} />

              <div className="text-xs font-bold text-white/10 mb-5">{s.number}</div>
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ color: s.color, background: `${s.color}15`, boxShadow: `0 0 0 1px ${s.color}20` }}
              >
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2">{s.title}</h3>
              <p className="text-[#8892a4] text-sm leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-medium border"
                    style={{ color: s.color, background: `${s.color}10`, borderColor: `${s.color}20` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0" style={{ color: s.color }}>→</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
