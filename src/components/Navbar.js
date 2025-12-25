import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = ({ onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-darker-bg/95 backdrop-blur-xl py-4 border-b border-border-color' 
          : 'bg-dark-bg/80 backdrop-blur-md py-5 border-b border-border-color'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="home" smooth duration={500} className="cursor-pointer flex items-center">
            <motion.div whileHover={{ scale: 1.50 }} className="flex items-center gap-3">
              <img
                src={`${process.env.PUBLIC_URL}/sk-logo.png`}
                alt="Sivakarthick"
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="ml-2 text-lg font-semibold text-text-primary">SIVAKARTHICK B</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                spy
                offset={-70}
                className="relative px-4 py-2 text-text-secondary hover:text-text-primary cursor-pointer font-medium transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary group-hover:w-[calc(100%-2rem)] transition-all duration-300" />
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onResumeClick}
              className="ml-2 px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <FiFileText /> Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary text-2xl z-50"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col space-y-2 py-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  smooth
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-card-bg rounded-lg cursor-pointer transition-all"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              onClick={() => {
                setIsOpen(false);
                onResumeClick();
              }}
              className="mx-4 px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              <FiFileText /> Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
