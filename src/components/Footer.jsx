import { Social } from './Section'
import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
          © {new Date().getFullYear()} {PROFILE.name}. Designed & built with React, Vite & Tailwind CSS.
        </p>
        <Social />
      </div>
    </footer>
  )
}
