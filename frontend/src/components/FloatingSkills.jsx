import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { SKILL_ICONS } from '../data.js'
import Terminal from './Terminal.jsx'

function IconArt({ s, size = 44 }) {
  if (!s) return null
  if (s.emoji && !s.icon) return <span style={{ fontSize: size }}>{s.emoji}</span>
  return (
    <img
      src={s.icon}
      alt={s.name}
      loading="lazy"
      style={{ width: size, height: size }}
      className={`object-contain ${s.invert ? 'invert-on-dark' : ''}`}
      onError={(e) => {
        if (s.emoji) {
          const span = document.createElement('span')
          span.textContent = s.emoji
          span.style.fontSize = `${size}px`
          e.currentTarget.replaceWith(span)
        } else {
          e.currentTarget.style.opacity = 0.3
        }
      }}
    />
  )
}

export default function FloatingSkills() {
  const positioned = useMemo(
    () =>
      SKILL_ICONS.map((s) => ({
        ...s,
        delay: Math.random() * 2,
        dur: 5 + Math.random() * 4,
        ampX: 6 + Math.random() * 16,
        ampY: 6 + Math.random() * 16
      })),
    []
  )

  return (
    <>
      <section id="about" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-mono text-xs text-zinc-500 mb-2">// skills</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Tech I work with</h2>
            <p className="text-zinc-400 mt-3 max-w-xl">
              Languages, frameworks, AI, and cloud tools I use day to day.
            </p>
          </div>

          {/* free floating icons */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-x-6 gap-y-14 py-6">
            {positioned.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.3, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 200, damping: 14 }}
                className="flex flex-col items-center group"
              >
                <motion.div
                  animate={{
                    y: [0, -s.ampY, 0, s.ampY * 0.5, 0],
                    x: [0, s.ampX, 0, -s.ampX * 0.7, 0],
                    rotate: [0, 6, -6, 3, 0]
                  }}
                  transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.5, rotate: 0, zIndex: 30 }}
                  className="flex items-center justify-center"
                  style={{ filter: `drop-shadow(0 8px 24px ${s.color}99)` }}
                >
                  <IconArt s={s} size={48} />
                </motion.div>
                <p className="text-[11px] mt-3 font-mono text-zinc-500 group-hover:text-white transition text-center">
                  {s.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="mb-6">
          <p className="font-mono text-xs text-zinc-500 mb-2">// terminal</p>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Try the CLI</h3>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm">
            Type <span className="font-mono">help</span> to list commands.
          </p>
        </div>
        <Terminal />
      </section>
    </>
  )
}
