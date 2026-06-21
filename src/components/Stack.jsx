import { Section } from './Section'
import { STACK } from '../data/content'

export default function Stack() {
  return (
    <div className="relative border-y border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-white/[0.02]">
      <Section id="stack" eyebrow="Tech stack"
        title="Tools I build with"
        subtitle="A pragmatic toolkit refined over years of shipping production software across the stack.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STACK.map((cat) => (
            <div key={cat.group} className="glow-card rounded-2xl glass p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-sm font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">{cat.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
