import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILL_ICONS } from '../data.js'

let uid = 0

export default function RandomFloater() {
  const [pops, setPops] = useState([])

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const spawn = () => {
      const s = SKILL_ICONS[Math.floor(Math.random() * SKILL_ICONS.length)]
      const x = 80 + Math.random() * (window.innerWidth - 160)
      const y = 120 + Math.random() * (window.innerHeight - 240)
      const drift = (Math.random() - 0.5) * 80
      const rot = (Math.random() - 0.5) * 40
      const item = { id: ++uid, s, x, y, drift, rot }
      setPops((p) => [...p, item])
      setTimeout(() => setPops((p) => p.filter((i) => i.id !== item.id)), 2200)
    }
    spawn() // initial
    const t = setInterval(spawn, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <AnimatePresence>
        {pops.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.3, x: p.x, y: p.y, rotate: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.3, 1.2, 1, 0.5], x: p.x + p.drift, y: p.y - 60, rotate: p.rot }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut', times: [0, 0.2, 0.7, 1] }}
            className="absolute top-0 left-0"
            style={{ filter: `drop-shadow(0 0 20px ${p.s.color}aa)` }}
          >
            {p.s.emoji && !p.s.icon ? (
              <span className="text-4xl">{p.s.emoji}</span>
            ) : (
              <img
                src={p.s.icon}
                alt=""
                className={`w-12 h-12 object-contain ${p.s.invert ? 'invert-on-dark' : ''}`}
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
