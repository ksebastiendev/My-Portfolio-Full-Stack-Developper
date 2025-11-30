import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Instagram, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerText = {
    en: `Copyright © ${currentYear} ${personalInfo.fullName}. All rights reserved.`,
    fr: `Copyright © ${currentYear} ${personalInfo.fullName}. Tous droits réservés.`
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: Github
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail
    }
  ];

  return (
    <footer
      className={`py-8 px-6 border-t transition-colors duration-300 ${
        isDark
          ? 'bg-black border-gray-800'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {footerText[language]}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    isDark
                      ? 'border-gray-800 hover:border-cyan-400 hover:bg-cyan-400 hover:bg-opacity-10'
                      : 'border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:bg-opacity-10'
                  }`}
                  aria-label={social.name}
                >
                  <Icon
                    size={20}
                    className={
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;