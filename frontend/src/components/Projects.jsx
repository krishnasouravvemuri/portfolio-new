import { motion } from 'framer-motion'
import { Folder, ArrowUpRight, Github, ExternalLink, ImageIcon } from 'lucide-react'
import Section from './Section.jsx'
import { PROJECTS } from '../data.js'

function Thumb({ src }) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-accent/10 to-accent2/10 border border-[var(--border)] group/thumb">
      <img
        src={src}
        alt=""
        onLoad={(e) => { const n = e.currentTarget.nextElementSibling; if (n) n.style.display = 'none' }}
        onError={(e) => { e.currentTarget.style.display = 'none' }}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110 relative z-10"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-muted pointer-events-none">
        <ImageIcon size={20} />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="// projects" title="Things I've built">
      <p className="text-muted mb-10 max-w-2xl">
        Backend systems, AI integrations, and full-stack platforms — built end to end.
      </p>

      <div className="space-y-12">
        {PROJECTS.map((p, i) => {
          const reverse = i % 2 === 1
          return (
            <motion.a
              key={p.name}
              href={p.code}
              target="_blank"
              rel="noreferrer"
              data-project={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center cursor-pointer group/project ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* media */}
              <motion.div
                whileHover={{ y: -6 }}
                className="relative glass rounded-3xl p-5 glow-border"
              >
                <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br ${p.accent} flex items-center justify-center`}>
                  <img
                    src={p.thumbnails[0]}
                    alt={p.name}
                    onLoad={(e) => { const n = e.currentTarget.nextElementSibling; if (n) n.style.display = 'none' }}
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                    className="w-full h-full object-cover relative z-10"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--fg)]/85 pointer-events-none">
                    <Folder size={48} className="mb-3 drop-shadow-lg" />
                    <p className="text-2xl font-bold">{p.name}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  {p.thumbnails.slice(1).map((t) => (
                    <Thumb key={t} src={t} />
                  ))}
                  <Thumb src={p.thumbnails[0]} />
                </div>
              </motion.div>

              {/* details */}
              <div className="space-y-4">
                <p className="font-mono text-xs text-accent2">// 0{i + 1}</p>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {p.name}
                </h3>
                <p className="text-muted text-lg">{p.subtitle}</p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass rounded-2xl p-5"
                >
                  <p className="text-sm leading-relaxed">{p.description}</p>
                </motion.div>

                <ul className="space-y-2">
                  {p.bullets.map((b, idx) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 }}
                      className="flex gap-3 text-sm"
                    >
                      <span className="text-accent2 mt-0.5">▸</span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[11px] px-3 py-1.5 rounded-lg bg-[var(--fg)]/5 border border-[var(--border)]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {p.code && (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass group-hover/project:bg-[var(--fg)]/10 transition text-sm">
                      <Github size={16} /> View Code <ArrowUpRight size={14} className="group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5 transition" />
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>
    </Section>
  )
}
