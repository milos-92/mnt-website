'use client'

import { motion, useReducedMotion } from 'framer-motion'

const stats = [
  { value: '8+', label: 'Years in Business' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '24', label: 'Team Members' },
]

const values = ['Strategic Thinking', 'Deep Craft', 'Real Outcomes', 'Long-term Partnership']

export default function About() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 bg-[#080b14] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7c6ff7]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-8 h-px bg-[#7c6ff7]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#7c6ff7]">Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 sm:mb-6">
            Architects of<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #7c6ff7, #60d9ff)' }}>
              Sustainable Growth.
            </span>
          </h2>
          <p className="text-[#8892a4] text-base sm:text-lg leading-relaxed mb-4">
            MNT Consult is a full-service business consulting and creative agency. Since 2016, we&apos;ve
            helped startups, scale-ups, and enterprise brands unlock their potential through strategic
            thinking and exceptional execution.
          </p>
          <p className="text-[#6b7280] leading-relaxed mb-8 sm:mb-10">
            We don&apos;t just deliver deliverables — we embed ourselves in your business, understand your
            market deeply, and build solutions that create lasting competitive advantage.
          </p>

          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            {values.map((v, i) => (
              <motion.span
                key={v}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="flex items-center gap-2 text-sm px-3 sm:px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#8892a4]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7c6ff7] shrink-0" />
                {v}
              </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i + 0.2 }}
                className="p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-[#0d1220] group hover:border-[#7c6ff7]/30 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c6ff7]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[#8892a4]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="relative"
        >
          <div
            className="relative rounded-3xl overflow-hidden bg-[#0d1220] border border-white/[0.06] aspect-[4/3] lg:aspect-[4/5]"
            style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
          >
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse at 30% 20%, rgba(124,111,247,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(96,217,255,0.1) 0%, transparent 60%)',
            }} />
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Orbital rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={prefersReduced ? {} : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-dashed border-white/[0.07]"
              />
              <motion.div
                animate={prefersReduced ? {} : { rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-dashed border-[#7c6ff7]/20"
              />
              <div className="text-5xl sm:text-6xl font-black text-white/[0.06] select-none">MNT</div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={prefersReduced ? {} : { y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-5 sm:top-8 left-5 sm:left-8 bg-[#0a0e18]/90 backdrop-blur-sm border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3"
            >
              <div className="text-[10px] sm:text-xs text-[#8892a4]">Founded</div>
              <div className="text-white font-bold text-base sm:text-lg">2016</div>
            </motion.div>
            <motion.div
              animate={prefersReduced ? {} : { y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-5 sm:top-8 right-5 sm:right-8 bg-[#0a0e18]/90 backdrop-blur-sm border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3"
            >
              <div className="text-[10px] sm:text-xs text-[#8892a4]">Avg. ROI</div>
              <div className="text-[#7c6ff7] font-bold text-base sm:text-lg">4.2×</div>
            </motion.div>
            <motion.div
              animate={prefersReduced ? {} : { y: [-5, 8, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 bg-[#0a0e18]/90 backdrop-blur-sm border border-white/10 rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3"
            >
              <div className="flex -space-x-1.5">
                {['SC', 'MR', 'PN'].map((av) => (
                  <div key={av} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#7c6ff7] to-[#a78bfa] border-2 border-[#0a0e18] flex items-center justify-center text-[8px] sm:text-[9px] text-white font-bold">
                    {av}
                  </div>
                ))}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border-2 border-[#0a0e18] flex items-center justify-center text-[8px] sm:text-[9px] text-white font-bold">+</div>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">24 Experts</div>
                <div className="text-[#8892a4] text-[10px]">Ready to help</div>
              </div>
            </motion.div>

            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-[14%] w-2 h-2 rounded-full bg-[#7c6ff7]" style={{ boxShadow: '0 0 10px #7c6ff7' }} />
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-[30%] right-[14%] w-1.5 h-1.5 rounded-full bg-[#60d9ff]" style={{ boxShadow: '0 0 8px #60d9ff' }} />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#7c6ff7]/15 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
