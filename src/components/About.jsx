import { Section } from './Section'
import { Icon, icons, useCountUp } from './shared'
import { PROFILE, SERVICES } from '../data/content'

function Stat({ value, suffix, label }) {
  const [val, ref] = useCountUp(value)
  return (
    <div ref={ref} className="rounded-2xl glass p-5">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text tabular-nums">
        {val}{suffix}
      </div>
      <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Engineering products people love">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{PROFILE.about}</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PROFILE.stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 grid sm:grid-cols-2 md:grid-cols-1 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="glow-card rounded-2xl glass p-5 hover:-translate-y-1 transition-transform">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white">
                <Icon path={icons[s.icon]} />
              </div>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
