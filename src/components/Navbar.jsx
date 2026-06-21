import { useState, useEffect } from 'react'
import { Icon, icons } from './shared'
import { PROFILE } from '../data/content'

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Stack', 'Work', 'Experience', 'Contact']

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-[#080b14]/80 backdrop-blur-xl border-b border-slate-200/70 dark:border-white/10' : ''}`}>
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-lg tracking-tight flex items-center gap-2.5 group">
          <img src="/logo.png" alt="KD logo" className="w-9 h-9 rounded-xl shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform" />
          <span>{PROFILE.firstName}<span className="gradient-text">.dev</span></span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              {l}
            </a>
          ))}
          <button onClick={() => setDark(!dark)} aria-label="Toggle theme"
            className="ml-1 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
            <Icon path={dark ? icons.sun : icons.moon} />
          </button>
          <a href="#contact"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-all">
            Let's talk
          </a>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <button onClick={() => setDark(!dark)} aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
            <Icon path={dark ? icons.sun : icons.moon} />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu"
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
            <Icon path={open ? icons.close : icons.menu} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#080b14] border-b border-slate-200 dark:border-white/10 px-5 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5">
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-2.5 rounded-lg bg-brand-600 text-white font-semibold">
            Let's talk
          </a>
        </div>
      )}
    </header>
  )
}
