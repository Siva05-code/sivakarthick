import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiFileText, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const NavbarPremium = ({ onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }
    }
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3' 
            : 'py-5'
        }`}
      >
        {/* Background blur layer */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="home" smooth duration={800} className="cursor-pointer z-50">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                className="flex items-center gap-3"
              >
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/sk-logo.png`}
                    alt="Sivakarthick"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${isOpen ? 'text-dark-bg' : 'text-text-primary'}`}>
                  SIVAKARTHICK B
                </span>
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={800}
                  spy
                  offset={-70}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`relative px-4 py-2 cursor-pointer group ${activeSection === item.to ? 'nav-item-active' : ''}`}
                >
                  <span className={`text-sm font-medium transition-all duration-300 group-hover:scale-110 inline-block ${
                    activeSection === item.to ? 'text-text-primary' : 'text-text-secondary group-hover:text-primary'
                  }`}>
                    {item.name}
                  </span>
                  {/* Nav underline */}
                  <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary group-hover:w-[calc(100%-2rem)] transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onResumeClick}
                className="px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 flex items-center gap-2"
              >
                <FiFileText className="text-base" />
                Resume
              </motion.button>
              <Link to="contact" smooth duration={800}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-5 py-2.5 bg-white text-dark-bg rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-white/90 transition-all duration-300"
                >
                  Let's Talk
                  <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center z-50 transition-colors duration-300 ${isOpen ? 'text-dark-bg' : 'text-text-primary'}`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="text-2xl" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="text-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Background */}
            <motion.div 
              className="absolute inset-0 bg-white"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              style={{ transformOrigin: 'top' }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center items-center px-5">
              <nav className="flex flex-col items-center gap-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      to={item.to}
                      smooth
                      duration={800}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl sm:text-5xl font-heading font-bold text-dark-bg hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTAs */}
              <motion.div
                variants={linkVariants}
                custom={navItems.length}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-12 flex flex-col sm:flex-row items-center gap-4"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onResumeClick();
                  }}
                  className="px-6 py-3 border-2 border-dark-bg text-dark-bg rounded-full font-semibold flex items-center gap-2 hover:bg-dark-bg hover:text-white transition-all duration-300"
                >
                  <FiFileText />
                  View Resume
                </button>
                <Link to="contact" smooth duration={800} onClick={() => setIsOpen(false)}>
                  <button className="px-6 py-3 bg-dark-bg text-white rounded-full font-semibold flex items-center gap-2 hover:bg-primary transition-all duration-300">
                    Let's Talk
                    <FiArrowUpRight />
                  </button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={linkVariants}
                custom={navItems.length + 1}
                initial="closed"
                animate="open"
                exit="closed"
                className="absolute bottom-10 left-0 right-0 flex justify-center gap-6 text-sm text-dark-bg/60"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-bg transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-bg transition-colors">GitHub</a>
                <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark-bg transition-colors">LeetCode</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarPremium;
