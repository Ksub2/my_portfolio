import { Section } from './Section'
import { Icon, icons } from './shared'
import { PROJECTS } from '../data/content'

function Card({ p, featured }) {
  return (
    <article className={`group glow-card rounded-2xl glass overflow-hidden hover:-translate-y-1 transition-all ${featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
      <div className={`relative ${featured ? 'h-44' : 'h-36'} bg-gradient-to-br ${p.accent} grid place-items-center overflow-hidden`}>
        {p.cover ? (
          <>
            <img src={p.cover} alt={`${p.title} cover`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
            {p.logo && (
              <img src={p.logo} alt={`${p.title} logo`}
                className="absolute bottom-3 left-3 h-11 w-11 rounded-xl shadow-lg ring-2 ring-white/20" />
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid opacity-30"></div>
            {p.logo ? (
              <img src={p.logo} alt={`${p.title} logo`}
                className={`${featured ? 'h-24' : 'h-20'} w-auto rounded-2xl shadow-lg group-hover:scale-110 transition-transform`} />
            ) : (
              <span className={`${featured ? 'text-6xl' : 'text-5xl'} drop-shadow-lg group-hover:scale-110 transition-transform`}>{p.icon}</span>
            )}
          </>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          {p.repo && p.repo !== '#' && (
            <a href={p.repo} target="_blank" rel="noreferrer" aria-label="Source code"
              className="p-2 rounded-lg bg-black/30 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50">
              <Icon path={icons.github} className="w-4 h-4" />
            </a>
          )}
          {p.link && p.link !== '#' && (
            <a href={p.link} target="_blank" rel="noreferrer" aria-label="Live demo"
              className="p-2 rounded-lg bg-black/30 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50">
              <Icon path={icons.external} className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-bold text-lg">{p.title}</h3>
          {featured && <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-brand-100 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300">Featured</span>}
        </div>
        <p className="text-sm text-brand-600 dark:text-brand-400 font-medium">{p.subtitle}</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300">{t}</span>
          ))}
        </div>
        {p.repo && p.repo !== '#' && (
          <a href={p.repo} target="_blank" rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400 hover:gap-2.5 transition-all">
            <Icon path={icons.github} className="w-4 h-4" /> View on GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <Section id="work" eyebrow="Selected work"
      title="Projects I'm proud of"
      subtitle="A few products spanning mobile, web, and backend — built to scale and crafted with care.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <Card key={p.title} p={p} featured={p.featured} />
        ))}
      </div>
    </Section>
  )
}
