'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const baseItems = [
  'Brand Strategy', 'UI/UX Design', 'Web Development',
  'Growth Marketing', 'Product Strategy', 'SEO & Analytics',
  'Motion Design', 'Conversion Optimisation',
]

export default function Marquee() {
  const baseRef = useRef<HTMLDivElement>(null)
  const [baseWidth, setBaseWidth] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (baseRef.current) setBaseWidth(baseRef.current.offsetWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const row = (items: typeof baseItems, prefix = '') =>
    items.map((item, i) => (
      <span key={`${prefix}${i}`} className="inline-flex items-center shrink-0">
        <span className="text-[#8892a4] text-xs font-semibold tracking-widest uppercase px-5">
          {item}
        </span>
        <span className="text-[#7c6ff7] text-xs">✦</span>
      </span>
    ))

  return (
    <div className="relative py-4 overflow-hidden border-y border-white/[0.05] bg-[#0a0e18] select-none">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0e18] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0e18] to-transparent z-10 pointer-events-none" />

      {/* Animate by exact pixel width of one copy → always seamless */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={baseWidth > 0 ? { x: [0, -baseWidth] } : {}}
        transition={baseWidth > 0 ? { duration: 30, repeat: Infinity, ease: 'linear', repeatType: 'loop' } : {}}
      >
        <div ref={baseRef} className="flex items-center">
          {row(baseItems)}
        </div>
        <div className="flex items-center" aria-hidden="true">
          {row(baseItems, 'b-')}
        </div>
      </motion.div>
    </div>
  )
}
