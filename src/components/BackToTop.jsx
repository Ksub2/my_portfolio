import { useState, useEffect } from 'react'
import { Icon, icons } from './shared'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={toTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-1 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Icon path={icons.arrowUp} className="w-5 h-5" />
    </button>
  )
}
