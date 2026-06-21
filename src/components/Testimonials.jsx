import { Section } from './Section'
import { Icon, icons } from './shared'
import { TESTIMONIALS } from '../data/content'

export default function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Kind words"
      title="What people say"
      subtitle="Feedback from teammates, founders, and product leads I've worked with.">
      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="glow-card rounded-2xl glass p-6 flex flex-col hover:-translate-y-1 transition-transform">
            <Icon path={icons.quote} className="w-8 h-8 text-brand-500/40" />
            <blockquote className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-cyan-400 text-white text-sm font-bold">
                {t.avatar}
              </span>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t.title}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
