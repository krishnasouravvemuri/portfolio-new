import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { EMAILS, PHONE, LOCATION, LINKEDIN_URL } from '../data.js'

function CopyChip({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className="ml-2 p-1.5 rounded-md bg-[var(--fg)]/5 hover:bg-accent/20 transition"
      aria-label="copy"
    >
      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
    </button>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${EMAILS[0]}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="relative pt-36 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-accent2 mb-2">// contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Get in touch</span>
          </h1>
          <p className="mt-4 text-muted max-w-xl">
            Open to internships, collaborations, and full-time AI / backend roles. Drop a message — I'll respond fast.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {EMAILS.map((e) => (
              <div key={e} className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-[var(--fg)]/5 transition">
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Mail size={20} className="text-accent2" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted">Email</p>
                  <a href={`mailto:${e}`} className="font-medium hover:text-accent2 transition break-all">{e}</a>
                </div>
                <CopyChip text={e} />
              </div>
            ))}

            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                <Phone size={20} className="text-accent2" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted">Phone</p>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="font-medium hover:text-accent2 transition">{PHONE}</a>
              </div>
              <CopyChip text={PHONE} />
            </div>

            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                <MapPin size={20} className="text-accent2" />
              </div>
              <div>
                <p className="text-xs text-muted">Location</p>
                <p className="font-medium">{LOCATION}</p>
              </div>
            </div>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-[var(--fg)]/5 transition group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                <Linkedin size={20} className="text-accent2" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted">LinkedIn</p>
                <p className="font-medium group-hover:text-accent2 transition">sri-venkata-krishna-sourav-v</p>
              </div>
            </a>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 space-y-4 glow-border"
          >
            <div>
              <label className="text-xs text-muted font-mono">name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--fg)]/5 border border-[var(--border)] focus:border-accent focus:outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted font-mono">email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--fg)]/5 border border-[var(--border)] focus:border-accent focus:outline-none transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted font-mono">message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-[var(--fg)]/5 border border-[var(--border)] focus:border-accent focus:outline-none transition resize-none"
                placeholder="Tell me about the role / project..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-5 py-3 rounded-xl font-medium bg-gradient-to-r from-accent to-accent2 shadow-lg shadow-accent/30 hover:shadow-accent/50 transition"
            >
              {sent ? 'Opening your email client…' : 'Send message'}
            </motion.button>
            <p className="text-xs text-muted text-center">
              Opens your default mail app addressed to {EMAILS[0]}.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
