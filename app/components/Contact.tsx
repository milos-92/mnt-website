'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const contactMethods = [
  { icon: '✉', label: 'Email Us', value: 'hello@mntconsult.com' },
  { icon: '◉', label: 'Response Time', value: 'Within 24 hours' },
  { icon: '◈', label: 'Active Clients', value: '4 ongoing projects' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 bg-[#080b14] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#7c6ff7]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <div className="w-8 h-px bg-[#7c6ff7]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#7c6ff7]">Get in Touch</span>
            <div className="w-8 h-px bg-[#7c6ff7]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-3 sm:mb-4">Ready to Grow?</h2>
          <p className="text-[#8892a4] text-base sm:text-lg max-w-md mx-auto">
            Tell us about your project. We&apos;ll get back to you within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-3"
          >
            {contactMethods.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.2 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-[#0d1220]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7c6ff7]/10 border border-[#7c6ff7]/20 flex items-center justify-center text-[#7c6ff7] shrink-0">
                  {m.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#8892a4] mb-0.5">{m.label}</div>
                  <div className="text-white font-semibold text-sm truncate">{m.value}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-4 sm:p-5 rounded-2xl border border-[#7c6ff7]/20 bg-[#7c6ff7]/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wide">Currently Accepting</span>
              </div>
              <p className="text-[#8892a4] text-sm leading-relaxed">
                2 open spots for Q3 2025. Projects starting from $8,000.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 relative rounded-3xl border border-white/[0.06] bg-[#0d1220] p-6 sm:p-8 overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
          >
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#7c6ff7]/40 to-transparent" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 sm:py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6"
                    style={{ background: 'linear-gradient(135deg, #7c6ff7, #a78bfa)', boxShadow: '0 0 40px rgba(124,111,247,0.4)' }}
                  >
                    <span className="text-white text-2xl sm:text-3xl">✓</span>
                  </motion.div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-[#8892a4]">We&apos;ll be in touch within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                    className="mt-5 text-sm text-[#7c6ff7] hover:text-[#a78bfa] transition-colors"
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {(['name', 'email'] as const).map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-bold text-[#8892a4] uppercase tracking-wider mb-2">
                          {field === 'name' ? 'Your Name' : 'Email Address'}
                        </label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          placeholder={field === 'name' ? 'Alex Johnson' : 'alex@company.com'}
                          required
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          className="w-full bg-[#080b14] border rounded-xl px-4 py-3.5 text-white placeholder-[#4a5568] text-sm outline-none transition-all duration-200"
                          style={{
                            borderColor: focused === field ? '#7c6ff7' : 'rgba(255,255,255,0.06)',
                            boxShadow: focused === field ? '0 0 0 3px rgba(124,111,247,0.15)' : 'none',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#8892a4] uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      placeholder="Tell us about your project, timeline, and goals..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-[#080b14] border rounded-xl px-4 py-3.5 text-white placeholder-[#4a5568] text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        borderColor: focused === 'message' ? '#7c6ff7' : 'rgba(255,255,255,0.06)',
                        boxShadow: focused === 'message' ? '0 0 0 3px rgba(124,111,247,0.15)' : 'none',
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(124,111,247,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 font-bold rounded-2xl text-white text-base"
                    style={{ background: 'linear-gradient(135deg, #7c6ff7, #a78bfa)', boxShadow: '0 0 30px rgba(124,111,247,0.25)' }}
                  >
                    Send Message →
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
