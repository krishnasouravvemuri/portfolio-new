import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../theme.jsx'
import { useToast } from '../toast.jsx'

const DARK_MSGS = [
  { msg: 'Embraced the dark side. 🦇', emoji: '🌙' },
  { msg: 'Eyes saved. Battery saved. Vibes peaked.', emoji: '🌃' },
  { msg: 'Hackerman mode engaged.', emoji: '💻' },
  { msg: 'Goodbye photons. Hello productivity.', emoji: '🕶️' },
  { msg: '404: Light not found.', emoji: '🌑' }
]
const LIGHT_MSGS = [
  { msg: 'Whoa, daylight! ☀️', emoji: '☀️' },
  { msg: 'Brave choice. Squint responsibly.', emoji: '😎' },
  { msg: 'Photons unleashed.', emoji: '✨' },
  { msg: 'Sunshine and clean syntax.', emoji: '🌞' },
  { msg: "Bright side, here we go.", emoji: '🌻' }
]

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { push } = useToast()
  const dark = theme === 'dark'

  function onClick(e) {
    const nextDark = !dark
    toggle()
    const pool = nextDark ? DARK_MSGS : LIGHT_MSGS
    const pick = pool[Math.floor(Math.random() * pool.length)]
    const r = e.currentTarget.getBoundingClientRect()
    push(pick.msg, { emoji: pick.emoji, x: r.left + r.width / 2, y: r.bottom + 12 })
  }

  return (
    <button
      onClick={onClick}
      aria-label="toggle theme"
      className="relative w-14 h-8 rounded-full glass border border-white/10 flex items-center px-1 transition"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent2 shadow-lg shadow-accent/40 flex items-center justify-center ${dark ? '' : 'ml-auto'}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={dark ? 'moon' : 'sun'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {dark ? <Moon size={12} className="text-white" /> : <Sun size={12} className="text-white" />}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </button>
  )
}
