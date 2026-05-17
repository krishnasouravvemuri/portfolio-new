import { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ToastCtx = createContext({ push: () => {} })

let id = 0

export function ToastProvider({ children }) {
  const [items, setItems] = useState([])

  const push = useCallback((msg, opts = {}) => {
    let x = opts.x, y = opts.y
    if (x == null || y == null) {
      x = window.innerWidth - 200
      y = window.innerHeight - 100
    }
    // clamp into viewport with padding
    const W = 320
    x = Math.min(Math.max(16, x - W / 2), window.innerWidth - W - 16)
    y = Math.min(Math.max(80, y), window.innerHeight - 80)
    const t = { id: ++id, msg, emoji: opts.emoji || '✨', x, y }
    setItems((s) => [...s, t])
    setTimeout(() => setItems((s) => s.filter((x) => x.id !== t.id)), opts.duration || 2400)
  }, [])

  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="fixed inset-0 pointer-events-none z-[200]">
        <AnimatePresence>
          {items.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: -6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              style={{
                left: t.x,
                top: t.y,
                width: 320,
                textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 4px rgba(0,0,0,0.8)'
              }}
              className="absolute flex items-center gap-2 text-sm font-medium select-none"
            >
              <span className="text-lg">{t.emoji}</span>
              <span>{t.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  )
}

export const useToast = () => useContext(ToastCtx)
