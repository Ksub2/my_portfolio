import { Icon, icons, useTypewriter } from './shared'
import { Social } from './Section'
import { PROFILE, SKILL_STRIP } from '../data/content'

function CodeWindow() {
  return (
    <div className="glow-card rounded-2xl glass shadow-2xl shadow-brand-900/10 overflow-hidden font-mono text-[13px] leading-relaxed">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/70 dark:border-white/10">
        <span className="w-3 h-3 rounded-full bg-rose-400"></span>
        <span className="w-3 h-3 rounded-full bg-amber-400"></span>
        <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
        <span className="ml-3 text-xs text-slate-400 dark:text-slate-500">engineer.dart</span>
      </div>
      {/* code body */}
      <pre className="p-5 overflow-x-auto text-slate-700 dark:text-slate-300">
<span className="text-fuchsia-500">class</span> <span className="text-amber-500">Engineer</span> {'{'}
{'\n'}  <span className="text-fuchsia-500">final</span> String name = <span className="text-emerald-500">'{PROFILE.firstName}'</span>;
{'\n'}  <span className="text-fuchsia-500">final</span> List&lt;String&gt; stack = [
{'\n'}    <span className="text-emerald-500">'Flutter'</span>, <span className="text-emerald-500">'Dart'</span>, <span className="text-emerald-500">'Firebase'</span>,
{'\n'}  ];
{'\n'}
{'\n'}  <span className="text-sky-500">Future</span>&lt;<span className="text-amber-500">Product</span>&gt; <span className="text-sky-500">build</span>(<span className="text-amber-500">Idea</span> idea) <span className="text-fuchsia-500">async</span> {'{'}
{'\n'}    <span className="text-fuchsia-500">return</span> idea
{'\n'}      .<span className="text-sky-500">design</span>()
{'\n'}      .<span className="text-sky-500">engineer</span>()
{'\n'}      .<span className="text-sky-500">ship</span>(); <span className="text-slate-400">// 🚀</span>
{'\n'}  {'}'}
{'\n'}{'}'}</pre>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(PROFILE.roles)

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade"></div>
        <div className="absolute top-0 -left-20 w-80 h-80 bg-brand-500/30 dark:bg-brand-600/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-32 right-0 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '5s' }}></div>
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-fuchsia-400/20 dark:bg-fuchsia-600/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '9s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium glass">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {PROFILE.availability}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I'm {PROFILE.firstName}.
          </h1>
          <div className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            <span className="gradient-text">{typed}</span>
            <span className="caret h-7 sm:h-8 lg:h-9"></span>
          </div>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-all">
              View my work <Icon path={icons.arrow} className="w-4 h-4" />
            </a>
            <a href={PROFILE.resume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass font-semibold hover:-translate-y-0.5 transition-all">
              <Icon path={icons.download} className="w-4 h-4" /> Resume
            </a>
            <div className="ml-1"><Social /></div>
          </div>
        </div>

        <div className="animate-float">
          <CodeWindow />
        </div>
      </div>

      {/* Skill marquee */}
      <div className="mt-16 md:mt-24 overflow-hidden marquee-mask py-2">
        <div className="flex w-max animate-marquee gap-3">
          {[...SKILL_STRIP, ...SKILL_STRIP].map((s, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full text-sm font-medium glass text-slate-600 dark:text-slate-300 whitespace-nowrap">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
