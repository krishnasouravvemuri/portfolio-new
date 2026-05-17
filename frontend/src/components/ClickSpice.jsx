import { useEffect } from 'react'
import { useToast } from '../toast.jsx'

const RESUME_MSGS = [
  { msg: 'Resume incoming. Brace for impressiveness.', emoji: '📄' },
  { msg: 'Opening résumé in new tab…', emoji: '🚀' },
  { msg: 'Hope you brought coffee.', emoji: '☕' }
]
const LINKEDIN_MSGS = [
  { msg: "Let's connect on LinkedIn!", emoji: '🤝' },
  { msg: 'Networking activated.', emoji: '🔗' }
]
const GITHUB_MSGS = [
  { msg: 'Off to the repos!', emoji: '🐙' },
  { msg: 'Code awaits.', emoji: '💾' },
  { msg: 'Stars appreciated. ⭐', emoji: '⭐' }
]
const EMAIL_MSGS = [
  { msg: "Drafting an email? Let's talk!", emoji: '📧' },
  { msg: 'Inbox open. Reply fast.', emoji: '⚡' }
]
const PROJECT_MSGS = [
  { msg: 'Loading project repo…', emoji: '🛠️' },
  { msg: 'Take a look around!', emoji: '🔍' }
]
const GENERIC_MSGS = [
  { msg: 'Nice click.', emoji: '👌' },
  { msg: 'Curiosity engaged.', emoji: '🧠' },
  { msg: 'Exploring like a pro.', emoji: '🧭' }
]

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

export default function ClickSpice() {
  const { push } = useToast()

  useEffect(() => {
    let last = 0
    const onClick = (e) => {
      const a = e.target.closest('a, button')
      if (!a) return
      const now = Date.now()
      if (now - last < 800) return // throttle
      const href = (a.getAttribute('href') || '').toLowerCase()
      const text = (a.textContent || '').toLowerCase()
      const label = (a.getAttribute('aria-label') || '').toLowerCase()
      let p

      if (href.includes('drive.google') || text.includes('resume') || label.includes('resume')) p = pick(RESUME_MSGS)
      else if (href.includes('linkedin')) p = pick(LINKEDIN_MSGS)
      else if (href.includes('github')) p = pick(GITHUB_MSGS)
      else if (href.startsWith('mailto:')) p = pick(EMAIL_MSGS)
      else if (a.closest('[data-project]')) p = pick(PROJECT_MSGS)
      else if (Math.random() < 0.18) p = pick(GENERIC_MSGS)

      if (p) {
        last = now
        const r = a.getBoundingClientRect()
        push(p.msg, { emoji: p.emoji, x: r.left + r.width / 2, y: r.bottom + 12 })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [push])

  return null
}
