import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, navLinks } from '../data/personalInfo';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = navLinks[language];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
      isDark 
        ? 'bg-black bg-opacity-90 border-gray-800' 
        : 'bg-white bg-opacity-90 border-gray-200'
    } backdrop-blur-sm border-b`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#hero" 
            className={`text-xl font-bold transition-colors ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}
          >
            {personalInfo.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm transition-colors hover:text-cyan-400 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Controls (Theme + Language) */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-gray-800 text-yellow-400' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
                isDark 
                  ? 'bg-cyan-500 bg-opacity-20 text-cyan-400 hover:bg-opacity-30' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
              aria-label="Toggle language"
            >
              {language === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'hover:bg-gray-800 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden pt-4 pb-2 border-t mt-4 ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex flex-col space-y-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-sm py-2 transition-colors hover:text-cyan-400 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;