import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-darker-bg py-10 border-t border-border-color relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap justify-between items-center gap-5">
          <p className="text-text-muted">&copy; 2025 SIVAKARTHICK B. All rights reserved.</p>
          
          <div className="flex gap-5">
            <Link to="home" smooth duration={500} className="text-text-secondary hover:text-primary cursor-pointer transition-colors">
              Home
            </Link>
            <Link to="about" smooth duration={500} className="text-text-secondary hover:text-primary cursor-pointer transition-colors">
              About
            </Link>
            <Link to="contact" smooth duration={500} className="text-text-secondary hover:text-primary cursor-pointer transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
