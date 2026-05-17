import { Github, Linkedin, Mail } from 'lucide-react'
import { LINKEDIN_URL, EMAILS } from '../data.js'

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Sourav. Built with React + Tailwind.</p>
        <div className="flex items-center gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin size={18} /></a>
          <a href={`mailto:${EMAILS[0]}`} className="hover:text-white transition"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
