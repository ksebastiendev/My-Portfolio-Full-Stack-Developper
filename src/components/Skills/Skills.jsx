import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { skillsContent } from '../../data/skillsContent';

const Skills = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const content = skillsContent[language];

  return (
    <section
      id="skills"
      className={`min-h-screen py-20 px-6 transition-colors duration-300 ${
        isDark ? 'bg-[#111111]' : 'bg-white'
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
         viewport={{ amount: 0.3 }}
          transition={{ duration: 0.3 }}
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
         viewport={{ amount: 0.3 }}
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

        {/* Skills Grid - 3 columns layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {content.categories.slice(0, 3).map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className={`p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-900 bg-opacity-50 border-gray-800'
                  : 'bg-gray-50 border-gray-200'
              } backdrop-blur-sm`}
            >
              {/* Category Title */}
              <h3
                className={`text-2xl font-bold mb-6 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {category.name}
              </h3>

              {/* Skills Grid - 2x3 or 1x2 for Mobile */}
              <div className={`grid ${category.skills.length > 2 ? 'grid-cols-3' : 'grid-cols-2'} gap-4`}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'hover:bg-gray-800'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {/* Logo */}
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    {/* Name */}
                    <span
                      className={`text-xs text-center font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - Design & Tools (2 columns centered) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.categories.slice(3).map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              vviewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: (categoryIndex + 3) * 0.1 }}
              className={`p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-900 bg-opacity-50 border-gray-800'
                  : 'bg-gray-50 border-gray-200'
              } backdrop-blur-sm`}
            >
              {/* Category Title */}
              <h3
                className={`text-2xl font-bold mb-6 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {category.name}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 ${
                      isDark
                        ? 'hover:bg-gray-800'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {/* Logo */}
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    {/* Name */}
                    <span
                      className={`text-xs text-center font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;