import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Welcome({ show, onDone }) {
  useEffect(() => {
    if (!show) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.scrollTo({ top: 0 })
    const t = setTimeout(onDone, 2000)
    return () => { clearTimeout(t); document.body.style.overflow = prev }
  }, [show, onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center px-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs sm:text-sm text-zinc-400 mb-3 tracking-widest uppercase"
            >
              booting portfolio…
            </motion.p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight">
              <span className="gradient-text">Welcome.</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-zinc-400 text-sm sm:text-base"
            >
              I'm <span className="text-white font-semibold">Sourav</span> — AI &amp; Backend Developer.
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
              className="mt-8 mx-auto w-48 h-0.5 bg-gradient-to-r from-accent via-accent2 to-pink-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
