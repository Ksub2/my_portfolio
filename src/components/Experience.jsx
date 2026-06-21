import { Section } from './Section'
import { EXPERIENCE } from '../data/content'

export default function Experience() {
  return (
    <div className="relative border-y border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02]">
      <Section id="experience" eyebrow="Career"
        title="Where I've made an impact"
        subtitle="Six years of building, leading, and shipping across startups and product teams.">
        <div className="relative border-l-2 border-slate-200 dark:border-white/10 pl-8 space-y-10">
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="relative">
              <span className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 ring-4 ring-white dark:ring-[#080b14]"></span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-lg">{e.role} · <span className="text-brand-600 dark:text-brand-400">{e.company}</span></h3>
                <span className="text-sm font-mono text-slate-500 dark:text-slate-400">{e.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {e.points.map((pt, i) => (
                  <li key={i} className="flex gap-2.5 text-slate-600 dark:text-slate-300">
                    <span className="text-brand-500 mt-1.5 text-xs">▹</span><span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
