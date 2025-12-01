import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { contactContent } from '../data/contactContent';

const Contact = () => {
  const { language } = useLanguage();
  const { isDark } = useTheme();
  const content = contactContent[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simuler l'envoi (remplace par ta vraie logique d'envoi)
    setTimeout(() => {
      console.log('Form data:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
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
          className="max-w-3xl mx-auto mb-16"
        >
          <p
            className={`text-lg leading-relaxed text-center ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {content.description}
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div
              className={`p-8 rounded-xl border ${
                isDark
                  ? 'bg-gray-900 bg-opacity-50 border-gray-800'
                  : 'bg-white border-gray-200'
              } backdrop-blur-sm space-y-6`}
            >
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail
                  size={24}
                  className={isDark ? 'text-cyan-400' : 'text-blue-600'}
                />
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Email
                  </h3>
                  <a
                    href={`mailto:${content.info.email}`}
                    className={`transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-cyan-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {content.info.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone
                  size={24}
                  className={isDark ? 'text-cyan-400' : 'text-blue-600'}
                />
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Phone
                  </h3>
                  <a
                    href={`tel:${content.info.phone}`}
                    className={`transition-colors ${
                      isDark
                        ? 'text-gray-400 hover:text-cyan-400'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {content.info.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={24}
                  className={isDark ? 'text-cyan-400' : 'text-blue-600'}
                />
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Location
                  </h3>
                  <p
                    className={
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }
                  >
                    {content.info.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href={content.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex-1 p-4 rounded-xl border text-center transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-900 bg-opacity-50 border-gray-800 hover:border-cyan-400'
                    : 'bg-white border-gray-200 hover:border-blue-600'
                }`}
              >
                <Linkedin
                  size={32}
                  className={`mx-auto ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`}
                />
              </motion.a>

              <motion.a
                href={content.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex-1 p-4 rounded-xl border text-center transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-900 bg-opacity-50 border-gray-800 hover:border-cyan-400'
                    : 'bg-white border-gray-200 hover:border-blue-600'
                }`}
              >
                <Github
                  size={32}
                  className={`mx-auto ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`}
                />
              </motion.a>

              <motion.a
                href={content.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex-1 p-4 rounded-xl border text-center transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-900 bg-opacity-50 border-gray-800 hover:border-cyan-400'
                    : 'bg-white border-gray-200 hover:border-blue-600'
                }`}
              >
                <Twitter
                  size={32}
                  className={`mx-auto ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-xl border ${
              isDark
                ? 'bg-gray-900 bg-opacity-50 border-gray-800'
                : 'bg-white border-gray-200'
            } backdrop-blur-sm`}
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={content.form.namePlaceholder}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600'
                  } focus:outline-none`}
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={content.form.emailPlaceholder}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600'
                  } focus:outline-none`}
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={content.form.subjectPlaceholder}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600'
                  } focus:outline-none`}
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={content.form.messagePlaceholder}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-600'
                  } focus:outline-none`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  status === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : isDark
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {status === 'sending' ? (
                  content.form.sending
                ) : (
                  <>
                    <Send size={20} />
                    {content.form.submitButton}
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500 bg-opacity-20 border border-green-500 text-green-500 text-center"
                >
                  {content.form.success}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500 bg-opacity-20 border border-red-500 text-red-500 text-center"
                >
                  {content.form.error}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;