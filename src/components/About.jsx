import React from 'react'
import { motion } from 'framer-motion'
import { User, Phone, MapPin, Mail, GraduationCap, Briefcase } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Website', value: 'ashishyesale.dev' },
    { icon: Phone, label: 'Phone', value: '+91 9699981300' },
    { icon: MapPin, label: 'City', value: 'Kolhapur, India' },
    { icon: GraduationCap, label: 'Degree', value: 'B.Tech (Computer Science)' },
    { icon: Mail, label: 'Email', value: 'ashishyesale007@gmail.com' },
    { icon: Briefcase, label: 'Freelance', value: 'Available' }
  ]

  const stats = [
    { number: '2', label: 'Open Source Contributions' },
    { number: '3+', label: 'Projects Completed' },
    { number: '24/7', label: 'Hours Of Support' },
    { number: '1+', label: 'Certifications' }
  ]

  const skills = [
    { name: 'HTML', percentage: 100, color: 'from-orange-500 to-red-500' },
    { name: 'CSS', percentage: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', percentage: 75, color: 'from-yellow-500 to-orange-500' },
    { name: 'PHP', percentage: 80, color: 'from-purple-500 to-blue-500' },
    { name: 'WordPress/CMS', percentage: 90, color: 'from-blue-600 to-purple-600' },
    { name: 'Photoshop', percentage: 55, color: 'from-blue-400 to-blue-600' },
    { name: 'Java', percentage: 80, color: 'from-red-500 to-orange-500' },
    { name: 'Python', percentage: 90, color: 'from-green-500 to-blue-500' },
    { name: 'C/C++', percentage: 55, color: 'from-gray-500 to-blue-500' }
  ]

  const interests = [
    { name: 'YouTube', icon: '📺', color: 'text-red-400' },
    { name: 'Network Marketing', icon: '📊', color: 'text-blue-400' }
  ]

  const softSkills = [
    { name: 'Social Media Handling', icon: '📱', color: 'text-pink-400' },
    { name: 'UI-UX Designer', icon: '🎨', color: 'text-purple-400' },
    { name: 'Web Designer', icon: '💻', color: 'text-blue-400' },
    { name: 'App Designer', icon: '📱', color: 'text-orange-400' },
    { name: 'Singing', icon: '🎵', color: 'text-green-400' },
    { name: 'Leadership', icon: '👑', color: 'text-yellow-400' },
    { name: 'Team Management', icon: '👥', color: 'text-indigo-400' }
  ]

  const hardSkills = [
    { name: 'Video Editing', icon: '🎬', color: 'text-red-400' },
    { name: 'Photography', icon: '📸', color: 'text-orange-400' },
    { name: 'Project Management', icon: '📋', color: 'text-green-400' }
  ]

  return (
    <section id="about" className="section py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-400">Learn more about me</p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="glass p-4 rounded-2xl">
                <img 
                  src="/assets/img/bgcopy.jpg" 
                  alt="Ashish Yesale"
                  className="w-full max-w-sm rounded-xl object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-red-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Full-Stack Web Developer & Graphic Designer
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Experienced Software Engineer creating innovative solutions. Skilled in Android Development, 
              CyberSecurity, Python, and web development. Passionate about delivering high-quality results.
            </p>

            {/* Personal Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 glass rounded-lg hover-lift"
                >
                  <info.icon className="text-blue-400 flex-shrink-0" size={20} />
                  <div className="min-w-0">
                    <span className="text-gray-400 text-sm block">{info.label}:</span>
                    <span className="text-white text-sm font-medium truncate block">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-6">
              Artificial Intelligence (AI) and Machine Learning (ML) are rapidly advancing fields within software
              engineering, with applications ranging from self-driving cars to personalized recommendations.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-4 sm:p-6 rounded-xl text-center hover-lift"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Programming Languages</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-4 sm:p-6 rounded-xl hover-lift"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests, Soft Skills, Hard Skills */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Interests</h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg hover-lift flex items-center space-x-3"
                >
                  <span className="text-2xl">{interest.icon}</span>
                  <span className={`font-medium ${interest.color}`}>{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg hover-lift flex items-center space-x-3"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className={`font-medium text-sm sm:text-base ${skill.color}`}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">Hard Skills</h3>
            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg hover-lift flex items-center space-x-3"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className={`font-medium ${skill.color}`}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About