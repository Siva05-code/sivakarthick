import React, { useState, useEffect } from 'react';
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import PageLoader from './components/PageLoader';
import Publications from './components/Publications';
// import Roles from './components/Roles';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Add any image preloading here if needed
      await new Promise(resolve => setTimeout(resolve, 100));
    };
    preloadResources();
  }, []);

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <SmoothScroll>
          <div className="App relative bg-dark-bg min-h-screen overflow-x-hidden" style={{ position: 'relative' }}>
            {/* Navbar */}
            <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />
            
            {/* Hero Section */}
            <Hero />
            
            {/* About Section */}
            <About />
            
            {/* Skills Section */}
            <Skills />
            
            {/* Projects Section */}
            <Projects />
            
            {/* Experience Section */}
            <Experience />
            
            {/* Education Section */}
            <Education />
            
            {/* Publications Section */}
            <Publications />
            
            {/* Certifications Section */}
            <Certifications />
            
            {/* Roles Section */}
            {/* <Roles /> */}
            
            {/* Contact Section */}
            <Contact />
            
            {/* Footer */}
            <Footer />
            
            {/* Resume Modal */}
            <ResumeModal 
              isOpen={isResumeModalOpen} 
              onClose={() => setIsResumeModalOpen(false)} 
            />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
