import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Palette, 
  Shield, 
  Database, 
  Globe,
  Camera,
  Video,
  Megaphone
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web development using modern technologies like React, Node.js, and various databases.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Responsive Design', 'Modern Frameworks', 'API Integration', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for Android and iOS platforms.',
      color: 'from-green-500 to-emerald-500',
      features: ['Android Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Deployment']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with focus on user experience.',
      color: 'from-purple-500 to-pink-500',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security assessment, penetration testing, and implementing security best practices.',
      color: 'from-red-500 to-orange-500',
      features: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Security Training']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing and optimizing databases for scalable and efficient data management.',
      color: 'from-indigo-500 to-blue-500',
      features: ['Database Architecture', 'Query Optimization', 'Data Migration', 'Backup Strategies']
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Creating visually appealing and functional websites with modern design principles.',
      color: 'from-teal-500 to-green-500',
      features: ['Responsive Layouts', 'Modern Aesthetics', 'SEO Optimization', 'Performance Tuning']
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography services for events, portraits, and commercial projects.',
      color: 'from-yellow-500 to-orange-500',
      features: ['Event Photography', 'Portrait Sessions', 'Commercial Shoots', 'Photo Editing']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing and post-production services for various media projects.',
      color: 'from-pink-500 to-red-500',
      features: ['Video Production', 'Post-Production', 'Motion Graphics', 'Color Grading']
    },
    {
      icon: Megaphone,
      title: 'Social Media Management',
      description: 'Comprehensive social media strategy and management for brand growth.',
      color: 'from-blue-600 to-purple-600',
      features: ['Content Strategy', 'Community Management', 'Analytics', 'Brand Building']
    }
  ]

  const ServiceCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="glass p-6 sm:p-8 rounded-2xl hover-lift h-full relative overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${service.color} p-4 sm:p-5 group-hover:scale-110 transition-transform duration-300`}>
            <service.icon className="w-full h-full text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-sm text-gray-300"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Hover effect button */}
          <motion.div
            className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium text-sm hover:shadow-lg transition-shadow duration-300`}>
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="services" className="section py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Services</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="glass p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm here to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="btn btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#portfolio"
                className="btn btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services