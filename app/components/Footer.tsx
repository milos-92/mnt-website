'use client'

import { motion } from 'framer-motion'

const links = {
  Services: ['Brand Strategy', 'UX & Design', 'Development', 'Growth Marketing'],
  Company: ['About Us', 'Our Work', 'Careers', 'Blog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const socials = [
  { label: '𝕏', href: '#' },
  { label: 'Li', href: '#' },
  { label: 'Gh', href: '#' },
]

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#05080f] border-t border-white/[0.05] relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#7c6ff7]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Strip */}
        <div className="py-14 border-b border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white mb-1">
              Ready to start your project?
            </h3>
            <p className="text-[#8892a4] text-sm">Let&apos;s build something great together.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(124,111,247,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            className="shrink-0 px-7 py-3.5 rounded-2xl text-white font-bold text-sm transition-all"
            style={{ background: 'linear-gradient(135deg, #7c6ff7, #a78bfa)', boxShadow: '0 0 20px rgba(124,111,247,0.2)' }}
          >
            Get in Touch →
          </motion.button>
        </div>

        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black text-white mb-4">
              MNT<span className="text-[#7c6ff7]">.</span>
            </div>
            <p className="text-[#8892a4] text-sm leading-relaxed max-w-xs mb-6">
              Helping ambitious businesses grow through strategy, design, and relentless execution. Since 2016.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, borderColor: 'rgba(124,111,247,0.4)', color: '#fff' }}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#8892a4] text-xs transition-all"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => section === 'Services' ? scrollTo('services') : section === 'Company' ? scrollTo('about') : undefined}
                      className="text-[#8892a4] text-sm hover:text-white transition-colors text-left hover:translate-x-1 transition-transform inline-block"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a5568] text-sm">
            &copy; {new Date().getFullYear()} MNT Consult. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[#4a5568] text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
