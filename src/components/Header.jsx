import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Youtube, ChevronDown } from 'lucide-react'

const Header = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/yesaleashish', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/SAGE-AGI', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashishyesale', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/ashish_yesale', color: 'hover:text-pink-400' },
    { icon: Youtube, href: 'https://www.youtube.com/@ashishyesale', color: 'hover:text-red-500' }
  ]

  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="header" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-red-500 to-green-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img 
                    src="/assets/img/bgcopy.jpg" 
                    alt="Ashish Yesale"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-white/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-blue-500/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Ashish Yesale
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
              I'm a{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-red-400 to-green-400 bg-clip-text text-transparent font-bold"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                tech nerd, tech enthusiast
              </motion.span>
              {' '}from Bharat
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experienced Software Engineer creating innovative solutions. Skilled in Android Development, 
            CyberSecurity, Python, and web development. Passionate about delivering high-quality results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#contact"
              className="btn btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#portfolio"
              className="btn btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full glass hover-lift transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

export default Header