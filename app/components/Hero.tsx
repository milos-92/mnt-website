'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '50+', label: 'Projects', icon: '◈' },
  { value: '$40M', label: 'Revenue', icon: '◉' },
  { value: '98%', label: 'Retention', icon: '◍' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#080b14] px-4">

      {/* Gradient orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 400, height: 400, left: '-8%', top: '10%', background: 'rgba(124,111,247,0.15)', filter: 'blur(80px)' }}
        animate={prefersReduced ? {} : { y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 250, height: 250, right: '5%', bottom: '20%', background: 'rgba(96,217,255,0.1)', filter: 'blur(60px)' }}
        animate={prefersReduced ? {} : { y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Floating ornaments — hidden on mobile */}
      {!prefersReduced && (
        <>
          <motion.div
            className="absolute top-28 right-[8%] w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-[#7c6ff7]/20 pointer-events-none hidden sm:block"
            animate={{ rotate: [0, 360], y: [0, -12, 0] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 4, repeat: Infinity } }}
          />
          <motion.div
            className="absolute bottom-40 left-[6%] w-10 h-10 rounded-full border border-[#60d9ff]/20 pointer-events-none hidden sm:block"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 right-[3%] w-px h-20 bg-gradient-to-b from-transparent via-[#7c6ff7]/40 to-transparent pointer-events-none hidden lg:block"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-[38%] left-[10%] w-2 h-2 rounded-full bg-[#7c6ff7]/70 pointer-events-none hidden sm:block"
            animate={{ y: [0, -16, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </>
      )}

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 sm:mb-8"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#7c6ff7]/30 bg-[#7c6ff7]/10 text-[#a78bfa]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7c6ff7] animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="font-black leading-[0.95] tracking-tight mb-5 sm:mb-6"
          style={{ fontSize: 'clamp(40px, 8vw, 96px)' }}
        >
          <span className="text-white block">We Build Brands</span>
          <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #7c6ff7 0%, #a78bfa 40%, #60d9ff 100%)' }}>
            That Dominate.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg md:text-xl text-[#8892a4] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          MNT Consult partners with ambitious businesses to craft strategic identities,
          world-class digital experiences, and marketing engines that drive real growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(124,111,247,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('work')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#7c6ff7] text-white font-bold rounded-2xl text-base"
            style={{ boxShadow: '0 0 30px rgba(124,111,247,0.3)' }}
          >
            See Our Work
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-base border border-white/10 bg-white/[0.04]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Let&apos;s Talk
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
              whileHover={{ y: -3 }}
              className="flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-white/[0.07] bg-white/[0.03]"
            >
              <span className="text-[#7c6ff7]">{stat.icon}</span>
              <div className="text-left">
                <div className="text-white font-black text-base sm:text-lg leading-none">{stat.value}</div>
                <div className="text-[#8892a4] text-xs mt-0.5">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#080b14] to-transparent pointer-events-none" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ height: ['4px', '10px', '4px'], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 rounded-full bg-[#7c6ff7]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
