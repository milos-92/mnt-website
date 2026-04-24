'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'NovaPay',
    category: 'Fintech',
    type: 'Brand & Web Platform',
    description: 'Complete rebrand and digital platform for a next-gen payment startup. 200% increase in user signups post-launch.',
    gradient: 'from-[#7c6ff7] via-[#a78bfa] to-[#60d9ff]',
    metrics: [{ label: 'Signups', value: '+200%' }, { label: 'MRR', value: '3.1×' }],
    tags: ['Branding', 'Web Design', 'Dev'],
    year: '2024',
  },
  {
    id: '02',
    title: 'Archetype',
    category: 'SaaS',
    type: 'Product UX Design',
    description: 'Zero-to-one product design for a B2B workflow automation platform. NPS jumped from 31 to 72.',
    gradient: 'from-[#1e3a5f] via-[#2563eb] to-[#7c3aed]',
    metrics: [{ label: 'NPS Score', value: '72' }, { label: 'Churn', value: '-60%' }],
    tags: ['UX Design', 'Product', 'Systems'],
    year: '2024',
  },
  {
    id: '03',
    title: 'Verde Co.',
    category: 'E-Commerce',
    type: 'Growth Marketing',
    description: '3× revenue growth through full-funnel marketing and conversion optimisation over 9 months.',
    gradient: 'from-[#064e3b] via-[#059669] to-[#34d399]',
    metrics: [{ label: 'Revenue', value: '3×' }, { label: 'ROAS', value: '8.4' }],
    tags: ['Marketing', 'CRO', 'Analytics'],
    year: '2023',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32 px-4 sm:px-6 bg-[#0a0e18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-8 h-px bg-[#7c6ff7]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#7c6ff7]">Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Results That<br />
              <span className="text-[#8892a4] font-normal">Speak for Themselves.</span>
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ x: 4 }}
            className="text-sm text-[#7c6ff7] font-semibold flex items-center gap-2 shrink-0 self-start sm:self-auto"
          >
            View All <span>→</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5 }}
              className="group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-[#0d1220] cursor-pointer"
              style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.3)' }}
            >
              {/* Image area */}
              <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/25" />
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl border border-white/20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute top-4 left-5 text-white/10 text-4xl sm:text-5xl font-black">{p.id}</div>
                <span className="absolute top-4 right-4 text-xs text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">{p.year}</span>
                <span className="absolute bottom-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white">{p.category}</span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    View Case Study →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="text-xs text-[#8892a4] mb-1">{p.type}</div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">{p.title}</h3>
                <p className="text-[#8892a4] text-sm leading-relaxed mb-4">{p.description}</p>

                <div className="flex gap-5 mb-4 pb-4 border-b border-white/[0.06]">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg sm:text-xl font-black text-white">{m.value}</div>
                      <div className="text-xs text-[#8892a4]">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.05] text-[#8892a4] border border-white/[0.06]">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
