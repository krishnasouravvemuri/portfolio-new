import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {eyebrow && <p className="font-mono text-xs text-accent2 mb-2">{eyebrow}</p>}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="gradient-text">{title}</span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
