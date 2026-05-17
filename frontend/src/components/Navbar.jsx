import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'
import { RESUME_URL } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'
import SearchBar from './SearchBar.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'Skills', hash: true },
  { to: '/#projects', label: 'Projects', hash: true },
  { to: '/#certifications', label: 'Certs', hash: true },
  { to: '/#about', label: 'Journey', hash: true },
  { to: '/#connect', label: 'Connect', hash: true },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const loc = useLocation()
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="w-full px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="font-bold tracking-tight text-lg shrink-0 text-white">
          {'<'}Sourav/{'>'}
        </Link>

        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {links.map((l, i) =>
            l.hash ? (
              <a key={l.to + i} href={l.to} className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition">{l.label}</a>
            ) : (
              <NavLink
                key={l.to + i}
                to={l.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm transition ${isActive && loc.pathname === l.to ? 'text-white' : 'text-zinc-400 hover:text-white'}`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <SearchBar />
          <ThemeToggle />
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-white text-black hover:bg-zinc-200 transition"
          >
            <FileText size={16} /> Resume
          </a>
          <Link
            to="/contact"
            className="sm:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-white/10"
          >
            <Mail size={16} />
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
