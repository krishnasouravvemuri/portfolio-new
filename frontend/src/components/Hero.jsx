import { motion } from 'framer-motion'
import { Download, Linkedin, Github, Mail, Sparkles } from 'lucide-react'
import { PROFILE, RESUME_URL, LINKEDIN_URL, GITHUB_URL, EMAILS } from '../data.js'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center w-full">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="text-[var(--muted)] text-lg sm:text-xl mb-2"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[var(--fg)] font-extrabold tracking-tight leading-[0.95]"
            style={{ fontSize: 'clamp(56px, 10vw, 140px)' }}
          >
            {PROFILE.short}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xl sm:text-2xl text-[var(--fg)]/80 font-semibold"
          >
            {PROFILE.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-2 text-sm text-[var(--muted)] font-mono"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium bg-white text-black hover:bg-zinc-200 transition"
            >
              <Download size={18} /> Resume
            </a>
            <a
              href={`mailto:${EMAILS[0]}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--fg)]/10 transition"
            >
              <Mail size={16} /> Hire Me
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--fg)]/10 transition"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--fg)]/10 transition"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* right photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto"
        >
          <div className="relative float">
            <div className="w-56 h-64 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-elev)] flex items-center justify-center relative">
              <img
                src="/profile.jpg"
                alt="Sourav"
                onLoad={(e) => { const n = e.currentTarget.nextElementSibling; if (n) n.style.display = 'none' }}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--muted)] pointer-events-none">
                <Sparkles size={32} className="mb-2" />
                <p className="text-xs font-mono">drop photo at</p>
                <p className="text-xs font-mono">public/profile.jpg</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
