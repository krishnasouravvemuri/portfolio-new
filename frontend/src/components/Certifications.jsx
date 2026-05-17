import { motion } from 'framer-motion'
import { BadgeCheck, ArrowUpRight } from 'lucide-react'
import Section from './Section.jsx'
import { CERTS } from '../data.js'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="// certifications" title="Certifications">
      <p className="text-muted mb-10 max-w-2xl">
        Verified credentials — click any badge to view official program.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {CERTS.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass rounded-2xl p-5 glow-border group flex items-center gap-4"
          >
            <div className={`shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${c.color} p-[3px] flex items-center justify-center shadow-lg`}>
              <div className="w-full h-full rounded-[9px] bg-white flex items-center justify-center p-2">
                <img
                  src={c.icon}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.replaceWith(Object.assign(document.createElement('span'), { textContent: '🎖️', style: 'fontSize:28px' })) }}
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <BadgeCheck size={14} className="text-accent2 shrink-0" />
                <p className="font-mono text-[10px] text-muted uppercase tracking-wider">{c.issuer}</p>
              </div>
              <p className="font-semibold mt-1 text-sm leading-snug">{c.name}</p>
            </div>
            <ArrowUpRight size={18} className="text-muted group-hover:text-accent2 group-hover:-translate-y-1 group-hover:translate-x-1 transition shrink-0" />
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
