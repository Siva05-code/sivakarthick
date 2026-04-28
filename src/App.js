import React, { useState, useEffect, Suspense, lazy } from 'react';
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SmoothScroll from './components/SmoothScroll';
import PageLoader from './components/PageLoader';
// import Roles from './components/Roles';

const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Publications = lazy(() => import('./components/Publications'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(() => {
    try {
      return !sessionStorage.getItem('portfolio_loader_seen');
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!showLoader) return;

    try {
      sessionStorage.setItem('portfolio_loader_seen', '1');
    } catch {
      // Ignore storage failures (private mode, disabled storage)
    }
  }, [showLoader]);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <PageLoader onLoadComplete={handleLoaderComplete} minDuration={350} />}

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

          {/* Lazy-load below-the-fold content for faster initial render */}
          <Suspense fallback={<div className="h-20" aria-hidden="true" />}>
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
          </Suspense>

          {/* Resume Modal */}
          <Suspense fallback={null}>
            <ResumeModal
              isOpen={isResumeModalOpen}
              onClose={() => setIsResumeModalOpen(false)}
            />
          </Suspense>
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
