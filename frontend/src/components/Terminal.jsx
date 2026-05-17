import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SKILL_ICONS, PROFILE, EMAILS, LINKEDIN_URL, GITHUB_URL, PHONE, JOURNEY, EXPERIENCE, CERTS, PROJECTS } from '../data.js'

const HELP = `Available commands:

  help, --help        show this menu
  about               who is Sourav
  skills              tech stack
  projects            list projects
  experience          work experience
  education           journey from school to now
  certs               certifications
  connect             social links / contact info
  whoami              fingerprint check
  date                current time
  clear               wipe terminal`

function run(cmd) {
  const c = cmd.trim().toLowerCase()
  if (!c) return ''
  if (c === 'help' || c === '--help' || c === '-h') return HELP
  if (c === 'about') {
    return `${PROFILE.name}
${PROFILE.title} · ${PROFILE.tagline}

${PROFILE.summary}`
  }
  if (c === 'skills') {
    const names = SKILL_ICONS.map((s) => s.name)
    const groups = [
      ['Languages', ['Python', 'Java', 'SQL']],
      ['Frameworks', ['Django', 'FastAPI', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'LangChain', 'RAG']],
      ['Cloud / DevOps', ['AWS', 'Docker', 'Kubernetes', 'Linux']],
      ['Tools', ['Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm', 'MySQL', 'OCR']]
    ]
    return groups.map(([g, items]) => `  ${g.padEnd(16)} ${items.filter((x) => names.includes(x) || true).join(', ')}`).join('\n')
  }
  if (c === 'projects') {
    return PROJECTS.map((p) => `  • ${p.name} — ${p.subtitle}\n    ${p.code}`).join('\n\n')
  }
  if (c === 'experience') {
    return EXPERIENCE.map((e) => `  ${e.role} @ ${e.company}\n  ${e.period}\n${e.bullets.map((b) => '   ▸ ' + b).join('\n')}`).join('\n\n')
  }
  if (c === 'education') {
    return JOURNEY.map((j) => `  ${j.year.padEnd(22)} ${j.title} — ${j.org} (${j.score})`).join('\n')
  }
  if (c === 'certs' || c === 'certifications') {
    return CERTS.map((c) => `  ★ ${c.name}\n    ${c.issuer}`).join('\n\n')
  }
  if (c === 'connect') {
    return `  email     ${EMAILS[0]}
  email     ${EMAILS[1]}
  phone     ${PHONE}
  linkedin  ${LINKEDIN_URL}
  github    ${GITHUB_URL}`
  }
  if (c === 'whoami') return 'guest@23sou.xyz'
  if (c === 'date') return new Date().toString()
  if (c === 'clear') return '__clear__'
  return `command not found: ${cmd}\ntry 'help' for the list.`
}

const BOOT = [
  { type: 'sys', text: "sourav-os v1.0 · type 'help' or '--help' to begin" },
  { type: 'cmd', text: 'help' },
  { type: 'out', text: HELP }
]

export default function Terminal() {
  const [history, setHistory] = useState(BOOT)
  const [input, setInput] = useState('')
  const [stack, setStack] = useState([])
  const [si, setSi] = useState(-1)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [history])

  function submit(e) {
    e.preventDefault()
    const cmd = input
    if (!cmd.trim()) return
    const out = run(cmd)
    if (out === '__clear__') setHistory([])
    else setHistory((h) => [...h, { type: 'cmd', text: cmd }, { type: 'out', text: out }])
    setStack((s) => [cmd, ...s])
    setSi(-1)
    setInput('')
  }

  function onKey(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const n = Math.min(si + 1, stack.length - 1)
      if (n >= 0) { setSi(n); setInput(stack[n]) }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const n = si - 1
      if (n < 0) { setSi(-1); setInput('') }
      else { setSi(n); setInput(stack[n]) }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const cmds = ['help', 'about', 'skills', 'projects', 'experience', 'education', 'certs', 'connect', 'whoami', 'date', 'clear']
      const match = cmds.find((c) => c.startsWith(input.toLowerCase()))
      if (match) setInput(match)
    }
  }

  const quick = ['help', 'about', 'skills', 'projects', 'connect']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={() => inputRef.current?.focus()}
      className="rounded-2xl overflow-hidden glow-border shadow-2xl bg-black border border-white/10"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="flex-1 text-center font-mono text-xs text-zinc-400">sourav@portfolio: ~</span>
      </div>

      {/* body */}
      <div
        ref={scrollRef}
        className="font-mono text-[13px] leading-relaxed p-4 h-80 md:h-96 overflow-y-auto text-zinc-200 bg-black"
      >
        {history.map((h, i) => {
          if (h.type === 'sys') return <p key={i} className="text-zinc-500">{h.text}</p>
          if (h.type === 'cmd') return (
            <p key={i}><span className="text-emerald-400">➜</span> <span className="text-cyan-400">~</span> <span>{h.text}</span></p>
          )
          return <pre key={i} className="whitespace-pre-wrap text-zinc-300 my-1">{h.text}</pre>
        })}

        <form onSubmit={submit} className="flex items-center gap-2 mt-1">
          <span className="text-emerald-400">➜</span>
          <span className="text-cyan-400">~</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            autoFocus
            spellCheck={false}
            className="flex-1 bg-transparent outline-none text-zinc-100 caret-emerald-400"
            placeholder="type a command…"
          />
        </form>
      </div>

      {/* quick chips */}
      <div className="flex flex-wrap gap-2 p-3 bg-zinc-950 border-t border-white/10">
        {quick.map((q) => (
          <button
            key={q}
            onClick={() => {
              const out = run(q)
              if (out === '__clear__') setHistory([])
              else setHistory((h) => [...h, { type: 'cmd', text: q }, { type: 'out', text: out }])
              inputRef.current?.focus()
            }}
            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 hover:bg-accent/30 border border-white/10 transition"
          >
            {q}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
