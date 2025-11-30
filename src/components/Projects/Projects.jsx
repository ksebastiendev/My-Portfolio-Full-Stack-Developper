import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { projectsContent } from '../../data/projectsContent';

const Projects = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const content = projectsContent[language];

  return (
    <section
      id="projects"
      className={`min-h-screen py-20 px-6 transition-colors duration-300 ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}
          >
            {content.title}
          </h2>
          <div
            className={`w-20 h-1 mx-auto mb-4 ${
              isDark ? 'bg-cyan-400' : 'bg-blue-600'
            }`}
          />
          <p
            className={`text-lg mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {content.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p
            className={`text-lg leading-relaxed text-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {content.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-xl overflow-hidden border ${
                isDark
                  ? 'bg-gray-900 bg-opacity-50 border-gray-800'
                  : 'bg-white border-gray-200'
              } backdrop-blur-sm transition-all duration-300`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? 'bg-gradient-to-t from-gray-900 to-transparent'
                      : 'bg-gradient-to-t from-white to-transparent'
                  }`}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-cyan-500 bg-opacity-20 text-cyan-400'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {/* View Demo Button */}
                  {project.liveUrl ? (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                        isDark
                          ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <ExternalLink size={16} />
                      {content.buttons.viewDemo}
                    </motion.a>
                  ) : (
                    <button
                      disabled
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold cursor-not-allowed ${
                        isDark
                          ? 'bg-gray-800 text-gray-600'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      <ExternalLink size={16} />
                      {content.buttons.comingSoon}
                    </button>
                  )}

                  {/* View Code Button */}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 transition-colors ${
                      isDark
                        ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;