import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { heroContent } from '../../data/heroContent';
import { personalInfo } from '../../data/personalInfo';
import SnakeGame from './SnakeGame';

const Hero = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const content = heroContent[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gameVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="hero" 
      className={`min-h-screen flex items-center pt-20 px-6 transition-colors duration-300 relative overflow-hidden ${
        isDark ? 'bg-[#0a0a0a]' : 'bg-white'
      }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay - adapts to theme */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-r from-black/95 via-black/90 to-black/85'
            : 'bg-gradient-to-r from-white/95 via-white/90 to-white/85'
        }`}></div>
        {/* Additional gradient for depth */}
        <div className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/80'
            : 'bg-gradient-to-b from-white/50 via-transparent to-white/80'
        }`}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <div className="space-y-4">
              <motion.div 
                className={`font-mono text-sm ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}
                variants={itemVariants}
              >
                {content.greeting}
              </motion.div>
              
              <motion.h1 
                className={`text-4xl md:text-6xl font-bold leading-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                variants={itemVariants}
              >
                {content.name}
              </motion.h1>
              
              <motion.div 
                className={`text-xl md:text-2xl font-light font-mono ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}
                variants={itemVariants}
              >
                {content.title}
              </motion.div>
              
              <motion.p 
                className={`text-lg max-w-lg ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
                variants={itemVariants}
              >
                {content.description}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              variants={itemVariants}
              viewport={{ amount: 0.3 }}
            >
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className={`px-6 py-3 font-semibold rounded-lg transition ${
                  isDark 
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  {content.cta.primary}
                </button>
              </motion.a>

              <motion.a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 border rounded-lg transition ${
                  isDark 
                    ? 'border-cyan-400 text-gray-500 hover:bg-cyan-400 hover:text-black' 
                    : 'border-blue-600  hover:bg-blue-600 hover:text-white'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>

              <motion.a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 border rounded-lg transition ${
                  isDark 
                    ? 'border-cyan-400 text-gray-500 hover:bg-cyan-400 hover:text-black' 
                    : 'border-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>

            {/* GitHub Link */}
            <motion.div 
              className={`pt-4 font-mono text-sm ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}
              variants={itemVariants}
              viewport={{ amount: 0.3 }}
            >
              <div>{content.githubLink}</div>
              <a 
                href={content.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${
                  isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
                } underline inline-flex items-center gap-1`}
              >
                {content.github} <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Snake Game */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={gameVariants}
            initial="hidden"
            animate="visible"
          >
            <SnakeGame />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;