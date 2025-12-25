import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaCode, FaArrowUp, FaHeart } from 'react-icons/fa';
import { FiMail, FiArrowUpRight } from 'react-icons/fi';
import { contactData } from '../data';

const FooterPremium = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaLinkedin, name: 'LinkedIn', url: contactData.social.linkedin },
    { Icon: FaGithub, name: 'GitHub', url: contactData.social.github },
    { Icon: FaCode, name: 'LeetCode', url: contactData.social.leetcode },
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer ref={footerRef} className="relative bg-darker-bg border-t border-white/5 overflow-hidden">
      {/* Large CTA Section */}
      <motion.div 
        style={{ y, opacity }}
        className="py-16 sm:py-20 md:py-24 lg:py-32 relative"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-text-muted mb-6"
          >
            Is your big idea ready?
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 sm:mb-8 px-4"
          >
            Let's work
            <span className="text-gradient-premium"> together!</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href={`mailto:${contactData.email}`}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-dark-bg rounded-full font-semibold text-base sm:text-lg hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
            >
              <FiMail className="text-xl" />
              <span>Get In Touch</span>
              <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="home" smooth duration={800} className="cursor-pointer inline-block mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/sk-logo.png`}
                    alt="Sivakarthick"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <span className="text-xl font-semibold text-text-primary">SIVAKARTHICK B</span>
                </div>
              </Link>
              <p className="text-text-secondary leading-relaxed max-w-md mb-6">
                Machine Learning Engineer & Backend Developer passionate about building intelligent systems and solving complex problems.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 text-text-secondary hover:text-primary transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-text-muted mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth
                      duration={800}
                      className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-text-muted mb-6">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {contactData.email}
                  </a>
                </li>
                <li className="text-text-secondary">
                  {contactData.location}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
            © {currentYear} SIVAKARTHICK B. All rights reserved.
          </p>
          

          {/* Scroll to top */}
          <Link
            to="home"
            smooth
            duration={800}
            className="group flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary cursor-pointer transition-colors duration-300"
          >
            Back to top
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-primary/20 border border-white/10 transition-all duration-300"
            >
              <FaArrowUp className="text-xs" />
            </motion.span>
          </Link>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
};

export default FooterPremium;
