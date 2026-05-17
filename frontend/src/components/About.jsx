import { motion } from 'framer-motion'
import { SKILLS, CERTS } from '../data.js'
import Section from './Section.jsx'
import { BadgeCheck } from 'lucide-react'

export default function About() {
  return (
    <Section id="about" eyebrow="// about" title="About me">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="font-semibold mb-4 text-lg">Skills</h3>
          <div className="space-y-4">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat}>
                <p className="font-mono text-xs text-muted mb-2">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="font-semibold mb-4 text-lg">Certifications</h3>
          <ul className="space-y-3">
            {CERTS.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <BadgeCheck size={20} className="text-accent2 mt-0.5 shrink-0" />
                <span className="text-sm">{c}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
