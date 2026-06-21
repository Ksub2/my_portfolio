import { useState } from 'react'
import { Section, Social } from './Section'
import { Icon, icons } from './shared'
import { PROFILE, FORMSPREE_ENDPOINT } from '../data/content'

export default function Contact() {
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // Demo mode if no endpoint configured yet
    if (!FORMSPREE_ENDPOINT) {
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 4000)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  const sending = status === 'sending'

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something great">
      <div className="glow-card rounded-3xl glass p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Have an app idea, a project, or a role in mind? My inbox is always open — I'll get back to you as soon as I can.
          </p>
          <div className="mt-6 space-y-3">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"><Icon path={icons.mail} className="w-4 h-4" /></span>
              {PROFILE.email}
            </a>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10"><Icon path={icons.pin} className="w-4 h-4" /></span>
              {PROFILE.location}
            </div>
          </div>
          <div className="mt-6"><Social /></div>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition" />
            <input required type="email" name="email" placeholder="Email"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition" />
          </div>
          <input name="subject" placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition" />
          <textarea required name="message" rows="4" placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none transition"></textarea>
          <button type="submit" disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-70 text-white font-semibold shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-all">
            {status === 'sending' && 'Sending...'}
            {status === 'success' && '✓ Message sent!'}
            {status === 'error' && '✗ Something went wrong — try email'}
            {status === 'idle' && <>Send message <Icon path={icons.arrow} className="w-4 h-4" /></>}
          </button>
        </form>
      </div>
    </Section>
  )
}
