'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const navLinks = ['Services', 'Work', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setActive(id)
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <motion.nav
          animate={{
            backgroundColor: scrolled || open ? 'rgba(8,11,20,0.95)' : 'rgba(8,11,20,0.5)',
            borderColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
            boxShadow: scrolled ? '0 0 0 1px rgba(124,111,247,0.1), 0 20px 60px rgba(0,0,0,0.5)' : 'none',
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1 px-2 py-2 rounded-2xl border border-white/[0.06] w-full max-w-3xl"
          style={{ backdropFilter: 'blur(24px)' }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-3 py-2 shrink-0"
          >
            <span className="text-lg font-black tracking-tight text-white">
              MNT<span className="text-[#7c6ff7]">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            <div className="w-px h-5 bg-white/10 mx-1" />
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="relative px-4 py-2 text-sm font-medium rounded-xl group"
              >
                <span className={`relative z-10 transition-colors duration-200 ${active === link ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                  {link}
                </span>
                {active === link && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('Contact')}
            className="hidden md:block ml-auto px-5 py-2.5 bg-[#7c6ff7] text-white text-sm font-semibold rounded-xl transition-colors hover:bg-[#6a5de8]"
            style={{ boxShadow: '0 0 20px rgba(124,111,247,0.3)' }}
          >
            Get Started
          </motion.button>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-2 ml-auto pr-1">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('Contact')}
              className="px-4 py-2 bg-[#7c6ff7] text-white text-sm font-semibold rounded-xl"
            >
              Start
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04]"
              aria-label="Toggle menu"
            >
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.2 }} className="w-4 h-px bg-white block origin-center" />
              <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} className="w-4 h-px bg-white block" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.2 }} className="w-4 h-px bg-white block origin-center" />
            </motion.button>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl border border-white/10 bg-[#0d1220]/95 p-2 md:hidden"
            style={{ backdropFilter: 'blur(24px)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link)}
                className="w-full text-left px-4 py-3.5 text-white font-medium rounded-xl hover:bg-white/[0.06] transition-colors flex items-center justify-between group"
              >
                {link}
                <span className="text-[#7c6ff7] opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
