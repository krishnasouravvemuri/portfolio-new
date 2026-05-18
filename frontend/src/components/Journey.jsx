import { motion } from 'framer-motion'
import { JOURNEY } from '../data.js'
import Section from './Section.jsx'

const STEPS = [...JOURNEY].reverse()

export default function Journey() {
  return (
    <Section id="journey" eyebrow="// flowchart" title="My journey">
      <p className="text-muted mb-10 max-w-2xl">
        From classroom to codebase — every step that shaped the path here.
      </p>
      <p className="mb-10 max-w-2xl italic font-semibold text-base md:text-lg">
        <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
          Not the nine pointer you are looking for
        </span>{' '}
        <span className="not-italic">😜</span>
      </p>

      <div className="relative">
        {/* connector line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-accent via-accent2 to-pink-500"
        />

        <div className="space-y-10">
          {STEPS.map((step, i) => {
            const left = i % 2 === 0
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex md:items-center ${left ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* node */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-xl shadow-lg shadow-accent/40 animate-glow"
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* card */}
                <div className={`ml-20 md:ml-0 md:w-[45%] ${left ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-5 glow-border"
                  >
                    <p className="font-mono text-xs text-accent2 mb-1">{step.year}</p>
                    <h4 className="font-semibold text-lg">{step.title}</h4>
                    <p className="text-sm text-muted">{step.org}</p>
                    <p className="mt-2 text-sm font-medium">{step.score}</p>
                  </motion.div>
                </div>

                {/* arrow indicator (except last) */}
                {i < STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-7 text-accent2 text-xl"
                  >
                    ▼
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
