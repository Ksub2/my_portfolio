import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Work from './components/Work'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './components/shared'
import BackToTop from './components/BackToTop'

export default function App() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useReveal()

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
