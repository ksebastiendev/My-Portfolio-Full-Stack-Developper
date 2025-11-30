import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Code, Folder, Layers, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { aboutContent } from '../data/aboutContent';
import CVen from "../assets/cv/CV_Sebastien_KOUGBLENOU_EN.pdf";
import CVfr from "../assets/cv/CV_Sebastien_KOUGBLENOU_FR.pdf";
import profileImage from "../assets/profile.jpeg"; // ✅ Importer ta photo

const About = () => {
    const { language } = useLanguage();
    const { isDark } = useTheme();
    const content = aboutContent[language];

    const handleDownloadCV = () => {
        const cv = language === 'en' ? CVen : CVfr;
        const link = document.createElement('a');
        link.href = cv;
        link.download = `CV_Sebastien_KOUGBLENOU_${language.toUpperCase()}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const iconMap = {
        code: Code,
        folder: Folder,
        layers: Layers,
        users: Users
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section
            id="about"
            className={`min-h-screen py-20 px-6 transition-colors duration-300 ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
                }`}
        >
            <div className="container mx-auto max-w-6xl">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-cyan-400' : 'text-blue-600'
                            }`}
                    >
                        {content.title}
                    </h2>
                    <div
                        className={`w-20 h-1 mx-auto ${isDark ? 'bg-cyan-400' : 'bg-blue-600'
                            }`}
                    />
                </motion.div>

                {/* Main Content Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                   viewport={{ amount: 0.3 }}
                    className="grid md:grid-cols-2 gap-12 items-start mb-12"
                >
                    {/* LEFT SIDE - Photo + Stats */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        {/* Profile Photo */}
                        <div className="flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <div
                                    className={`absolute inset-0 rounded-full blur-2xl opacity-50 ${isDark ? 'bg-cyan-400' : 'bg-blue-600'
                                        }`}
                                    style={{ animation: 'pulse 3s ease-in-out infinite' }}
                                />
                                <img
                                    src={profileImage}
                                    alt="Sébastien Kougblenou"
                                    className={`relative w-64 h-64 rounded-full object-contain bg-[#F0E9E1] border-4 ${isDark ? 'border-cyan-400' : 'border-blue-600'
                                        }`}
                                />
                            </motion.div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {content.stats.map((stat, index) => {
                                const Icon = iconMap[stat.icon];
                                return (
                                    <motion.div
                                        key={index}
                                        variants={statsVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className={`p-6 rounded-xl border text-center ${isDark
                                                ? 'bg-gray-900 bg-opacity-50 border-gray-800 hover:border-cyan-400'
                                                : 'bg-white border-gray-200 hover:border-blue-600'
                                            } backdrop-blur-sm transition-all duration-300`}
                                    >
                                        <Icon
                                            size={32}
                                            className={`mx-auto mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-600'
                                                }`}
                                        />
                                        <div
                                            className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                                                }`}
                                        >
                                            {stat.value}
                                        </div>
                                        <div
                                            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                                }`}
                                        >
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Text Content */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Description */}
                        <div className="space-y-4">
                            {content.description.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'
                                        }`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Education Section */}
                        <div
                            className={`p-6 rounded-xl border ${isDark
                                    ? 'bg-gray-900 bg-opacity-50 border-gray-800'
                                    : 'bg-white border-gray-200'
                                } backdrop-blur-sm`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap
                                    size={28}
                                    className={isDark ? 'text-cyan-400' : 'text-blue-600'}
                                />
                                <h3
                                    className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                                        }`}
                                >
                                    {content.education.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {content.education.items.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-cyan-400 pl-4">
                                        <h4
                                            className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'
                                                }`}
                                        >
                                            {edu.institution}
                                        </h4>
                                        <p
                                            className={`text-sm ${isDark ? 'text-cyan-400' : 'text-blue-600'
                                                }`}
                                        >
                                            {edu.degree}
                                        </p>
                                        <p
                                            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                                }`}
                                        >
                                            {edu.period}
                                        </p>
                                        <p
                                            className={`text-sm mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'
                                                }`}
                                        >
                                            {edu.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTAs - CENTERED BELOW EVERYTHING */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDownloadCV}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${isDark
                                ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        <Download size={20} />
                        {content.cta.download}
                    </motion.button>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-colors ${isDark
                                ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                            }`}
                    >
                        <Mail size={20} />
                        {content.cta.contact}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;