import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import Section from './Section.jsx'
import { EXPERIENCE } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="// experience" title="Where I've worked">
      <div className="space-y-6">
        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 glow-border"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Briefcase size={20} className="text-accent2" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{e.role}</h3>
                  <p className="text-muted text-sm">{e.company}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-accent2 mt-2">{e.period}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[var(--fg)]/85">
                  <span className="text-accent2">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
