import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from './Section.jsx'
import { EMAILS, LINKEDIN_URL, GITHUB_URL } from '../data.js'

const cards = [
  { icon: Mail, label: 'Email', value: EMAILS[0], href: `mailto:${EMAILS[0]}`, color: 'from-rose-500 to-pink-500' },
  { icon: Mail, label: 'Email (alt)', value: EMAILS[1], href: `mailto:${EMAILS[1]}`, color: 'from-fuchsia-500 to-purple-500' },
  { icon: Linkedin, label: 'LinkedIn', value: 'sri-venkata-krishna-sourav-v', href: LINKEDIN_URL, color: 'from-sky-500 to-cyan-500' },
  { icon: Github, label: 'GitHub', value: 'krishnavitap', href: GITHUB_URL, color: 'from-zinc-500 to-zinc-700' }
]

export default function Connect() {
  return (
    <Section id="connect" eyebrow="// connect" title="Let's connect">
      <p className="text-muted mb-10 max-w-2xl">
        Open to internships, collaborations, and AI / backend roles. Pick any channel — fastest reply via email or LinkedIn.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c, i) => {
          const Inner = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-5 glow-border group h-full"
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg`}>
                  <c.icon size={22} className="text-white" />
                </div>
                {c.href && (
                  <ArrowUpRight size={18} className="text-muted group-hover:text-accent2 group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
                )}
              </div>
              <p className="font-mono text-xs text-muted mt-4">{c.label}</p>
              <p className="font-semibold mt-1 break-all">{c.value}</p>
            </motion.div>
          )
          return c.href ? (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {Inner}
            </a>
          ) : (
            <div key={c.label}>{Inner}</div>
          )
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-accent to-accent2 text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 transition"
        >
          Send a message <ArrowUpRight size={16} />
        </Link>
      </div>
    </Section>
  )
}
