import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './styles/App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <Navigation />
      <Header />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App