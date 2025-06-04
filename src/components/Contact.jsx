import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ashishyesale007@gmail.com',
      link: 'mailto:ashishyesale007@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9699981300',
      link: 'tel:+919699981300',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kolhapur, India',
      link: '#',
      color: 'text-red-400'
    },
    {
      icon: Clock,
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM',
      link: '#',
      color: 'text-orange-400'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SAGE-AGI', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashishyesale', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://twitter.com/yesaleashish', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/ashish_yesale', color: 'hover:text-pink-400' },
    { icon: Youtube, href: 'https://www.youtube.com/@ashishyesale', color: 'hover:text-red-500' }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="section py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're someone looking to build something, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 sm:p-6 rounded-xl hover-lift flex items-center space-x-4 group"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm sm:text-base">{info.title}</h4>
                    <p className="text-gray-400 text-sm sm:text-base">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass rounded-lg hover-lift transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary py-4 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send size={20} />
                      <span>Send Message</span>
                    </div>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span className="text-sm">
                      {submitStatus === 'success' 
                        ? 'Message sent successfully! I\'ll get back to you soon.' 
                        : 'Failed to send message. Please try again.'}
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Ashish Yesale. All rights reserved. Built with ❤️ using React & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact