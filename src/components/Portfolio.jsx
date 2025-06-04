import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'other', label: 'Other' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/assets/img/portfolio/portfolio-1.jpg',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      image: '/assets/img/portfolio/portfolio-2.jpg',
      description: 'A mobile task management application with real-time synchronization, built using React Native and Firebase.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      image: '/assets/img/portfolio/portfolio-3.jpg',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.',
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'web',
      image: '/assets/img/portfolio/portfolio-4.jpg',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and data visualization.',
      technologies: ['Vue.js', 'Chart.js', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: '/assets/img/portfolio/portfolio-5.jpg',
      description: 'A comprehensive fitness tracking app with workout plans, progress tracking, and social features.',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      image: '/assets/img/portfolio/portfolio-6.jpg',
      description: 'A modern, responsive portfolio website with smooth animations and interactive elements.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const ProjectCard = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      <div className="glass rounded-2xl overflow-hidden hover-lift h-full">
        {/* Project Image */}
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.liveUrl, '_blank')
                  }}
                >
                  <ExternalLink size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.githubUrl, '_blank')
                  }}
                >
                  <Github size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <Eye size={16} />
                </motion.button>
              </div>
            </div>
          </div>
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-2 py-1 bg-white/10 text-white text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Project Image */}
          <div className="aspect-video overflow-hidden rounded-t-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-0">
                {project.title}
              </h2>
              <div className="flex space-x-3">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary px-4 py-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary px-4 py-2 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} className="mr-2" />
                  Source Code
                </motion.a>
              </div>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="portfolio" className="section py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg sm:text-xl text-gray-400">Check out my latest projects</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-red-500 text-white'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio