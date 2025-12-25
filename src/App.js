import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Roles from './components/Roles';
import Education from './components/Education';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="App relative">
      <ParticlesBackground />
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Publications />
      <Certifications />
      <Roles />
      <Contact />
      <Footer />
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}

export default App;
