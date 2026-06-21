import { PROFILE } from '../data/content'
import { Icon, icons } from './shared'

export function Social() {
  const items = [
    { href: PROFILE.github, icon: icons.github, label: 'GitHub' },
    { href: PROFILE.linkedin, icon: icons.linkedin, label: 'LinkedIn' },
    { href: PROFILE.twitter, icon: icons.twitter, label: 'Twitter' },
    { href: `mailto:${PROFILE.email}`, icon: icons.mail, label: 'Email' },
    { href: PROFILE.facebook, icon: icons.facebook, label: 'Facebook' },
    { href:PROFILE.instagram, icon: icons.instagram, label: 'Instagram'},
  ]
  return (
    <div className="flex items-center gap-2">
      {items.map((it) => (
        <a key={it.label} href={it.href} target="_blank" rel="noreferrer" aria-label={it.label}
          className="p-2.5 rounded-xl glass text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:-translate-y-0.5 transition-all">
          <Icon path={it.icon} />
        </a>
      ))}
    </div>
  )
}

export function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-5 py-20 md:py-28 reveal ${className}`}>
      <div className="mb-12 max-w-2xl">
        <p className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-xs">
          <span className="w-6 h-px bg-brand-500"></span>{eyebrow}
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-slate-600 dark:text-slate-400 text-lg">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
