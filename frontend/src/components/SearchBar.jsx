import { useEffect, useRef, useState } from 'react'
import { Search, X, ArrowDown, ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const HIGHLIGHT_CLASS = '__pf_hl__'
const ACTIVE_CLASS = '__pf_hl_active__'

function clearHighlights() {
  document.querySelectorAll(`mark.${HIGHLIGHT_CLASS}`).forEach((m) => {
    const parent = m.parentNode
    if (!parent) return
    parent.replaceChild(document.createTextNode(m.textContent || ''), m)
    parent.normalize()
  })
}

function highlight(term) {
  clearHighlights()
  if (!term || term.length < 2) return []
  const root = document.querySelector('main')
  if (!root) return []
  const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT
      const p = node.parentElement
      if (!p) return NodeFilter.FILTER_REJECT
      if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'MARK'].includes(p.tagName)) return NodeFilter.FILTER_REJECT
      if (p.closest('nav')) return NodeFilter.FILTER_REJECT
      return re.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    }
  })
  const targets = []
  let n
  while ((n = walker.nextNode())) targets.push(n)
  const created = []
  for (const node of targets) {
    const frag = document.createDocumentFragment()
    const txt = node.nodeValue
    let last = 0
    re.lastIndex = 0
    let m
    while ((m = re.exec(txt)) !== null) {
      if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)))
      const mark = document.createElement('mark')
      mark.className = HIGHLIGHT_CLASS
      mark.textContent = m[0]
      frag.appendChild(mark)
      created.push(mark)
      last = re.lastIndex
    }
    if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)))
    node.parentNode.replaceChild(frag, node)
  }
  return created
}

export default function SearchBar() {
  const [open, setOpen] = useState(false)
  const [term, setTerm] = useState('')
  const [matches, setMatches] = useState([])
  const [idx, setIdx] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
        setTimeout(() => inputRef.current?.focus(), 50)
      }
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      const found = highlight(term)
      setMatches(found)
      setIdx(0)
      if (found[0]) {
        found[0].classList.add(ACTIVE_CLASS)
        found[0].scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 150)
    return () => clearTimeout(t)
  }, [term])

  function go(delta) {
    if (!matches.length) return
    matches[idx]?.classList.remove(ACTIVE_CLASS)
    const next = (idx + delta + matches.length) % matches.length
    setIdx(next)
    matches[next]?.classList.add(ACTIVE_CLASS)
    matches[next]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  function close() {
    setOpen(false)
    setTerm('')
    clearHighlights()
    setMatches([])
  }

  return (
    <>
      <button
        onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50) }}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl glass hover:bg-[var(--fg)]/10 transition text-xs text-muted"
      >
        <Search size={14} />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden md:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--fg)]/10">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4"
            onClick={close}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl glass rounded-2xl p-3 glow-border shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Search size={18} className="text-accent2" />
                <input
                  ref={inputRef}
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') go(e.shiftKey ? -1 : 1)
                  }}
                  placeholder="Search page… (Django, AWS, RAG…)"
                  className="flex-1 bg-transparent outline-none py-2 text-base"
                />
                {term && (
                  <span className="text-xs font-mono text-muted">
                    {matches.length ? `${idx + 1}/${matches.length}` : '0'}
                  </span>
                )}
                <button onClick={() => go(-1)} disabled={!matches.length} className="p-1.5 rounded-lg hover:bg-[var(--fg)]/10 disabled:opacity-30"><ArrowUp size={14} /></button>
                <button onClick={() => go(1)} disabled={!matches.length} className="p-1.5 rounded-lg hover:bg-[var(--fg)]/10 disabled:opacity-30"><ArrowDown size={14} /></button>
                <button onClick={close} className="p-1.5 rounded-lg hover:bg-[var(--fg)]/10"><X size={14} /></button>
              </div>
              <p className="text-[11px] font-mono text-muted mt-2 px-1">
                Enter ↵ next · Shift+Enter prev · Esc close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
