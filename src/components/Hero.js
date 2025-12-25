import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { contactData } from '../data';

const Hero = () => {
  // Roles to display
  const roles = [
    "Machine Learning Engineer",
    "Backend Developer",
    "Embedded Systems Enthusiast"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const socialIcons = [
    { Icon: FaLinkedin, name: 'LinkedIn', url: contactData.social.linkedin },
    { Icon: FaGithub, name: 'GitHub', url: contactData.social.github },
    { Icon: FaCode, name: 'LeetCode', url: contactData.social.leetcode },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-1 opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -30, 30, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: -5 }}
          className="absolute top-1/2 -right-64 w-[500px] h-[500px] rounded-full bg-gradient-2 opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 30, -30, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: -10 }}
          className="absolute -bottom-48 left-1/2 w-[500px] h-[500px] rounded-full bg-gradient-3 opacity-20 blur-3xl"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-5 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl font-light text-text-secondary mb-4">
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-heading font-bold mb-4 text-gradient leading-tight"
          >
            SIVAKARTHICK B
          </motion.h1>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-heading font-normal text-text-secondary mb-8"
          >
            {roles.join(" • ")}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-5 mb-12"
          >
            {socialIcons.map(({ Icon, name, url }, index) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="flex flex-col items-center gap-2 px-6 py-5 bg-card-bg rounded-xl border border-border-color hover:bg-gradient-1 hover:border-transparent transition-all shadow-lg hover:shadow-glow-primary min-w-[120px] group"
              >
                <Icon className="text-4xl text-primary group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold text-text-secondary group-hover:text-white transition-colors">
                  {name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-5">
            <Link to="projects" smooth duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-1 text-white rounded-lg font-semibold text-base shadow-lg hover:shadow-glow-primary transition-all"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={500}>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-transparent border-2 border-primary text-text-primary rounded-lg font-semibold text-base hover:bg-primary hover:shadow-glow-primary transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
