import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Mycontact';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white bg-white text-gray-900">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects/>
          <Contact/>
          <Footer/>
          
          {/* Contenu temporaire pour les autres sections */}
          <main>
            {/* <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#111111]">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Projects Section</h1>
                <p className="text-gray-500 dark:text-gray-400">Coming soon...</p>
              </div>
            </section> */}

            {/* <section id="contact" className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Contact Section</h1>
                <p className="text-gray-500 dark:text-gray-400">Coming soon...</p>
              </div>
            </section> */}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
