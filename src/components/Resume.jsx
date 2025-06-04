import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react'

const Resume = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2022 - 2026 (Current)',
      institution: 'D.Y. Patil College of Engineering, Kolhapur',
      description: 'Currently pursuing Bachelor of Technology with focus on software engineering, algorithms, and modern development practices.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      period: '2020 - 2022',
      institution: 'Shivaji College, Kolhapur',
      description: 'Completed with distinction in Science stream with Mathematics, Physics, and Chemistry.'
    }
  ]

  const experience = [
    {
      title: 'Full-Stack Developer',
      period: '2023 - Present',
      company: 'Freelance',
      description: 'Developing modern web applications using React, Node.js, and various databases. Focus on creating responsive, user-friendly interfaces and robust backend systems.'
    },
    {
      title: 'Android Developer',
      period: '2022 - 2023',
      company: 'Personal Projects',
      description: 'Built several Android applications using Java and Kotlin. Implemented modern UI/UX patterns and integrated with various APIs and databases.'
    }
  ]

  const certifications = [
    {
      title: 'Web Development Certification',
      issuer: 'FreeCodeCamp',
      date: '2023',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, and backend development.'
    }
  ]

  const TimelineItem = ({ item, index, icon: Icon, type }) => (
    <motion.div
      initial={{ opacity: 0, x: type === 'education' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-2 sm:left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full border-2 border-gray-900"></div>
      
      {/* Content */}
      <div className="ml-12 sm:ml-16 glass p-4 sm:p-6 rounded-xl hover-lift">
        <div className="flex items-start space-x-3 mb-3">
          <Icon className="text-blue-400 mt-1 flex-shrink-0" size={20} />
          <div className="flex-1 min-w-0">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              {item.title || item.degree}
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-400 mb-2">
              <span className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{item.period || item.date}</span>
              </span>
              <span className="text-blue-400 font-medium">
                {item.company || item.institution || item.issuer}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )

  return (
    <section id="resume" className="section py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Resume</h2>
          <p className="text-lg sm:text-xl text-gray-400">Check My Resume</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left"
            >
              Education
            </motion.h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  icon={GraduationCap} 
                  type="education"
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left"
            >
              Experience
            </motion.h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  icon={Briefcase} 
                  type="experience"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Certifications</h3>
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <TimelineItem 
                key={index} 
                item={cert} 
                index={index} 
                icon={Award} 
                type="certification"
              />
            ))}
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="#"
            className="btn btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Resume</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume