import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaGithub, FaCode, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { contactData } from '../data';
import AnimatedBackground from './AnimatedBackground';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
//   const subtitleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const roles = [
    "Machine Learning Engineer",
    "Backend Developer", 
    "Embedded Systems Enthusiast"
  ];

  const socialIcons = [
    { Icon: FaLinkedin, name: 'LinkedIn', url: contactData.social.linkedin },
    { Icon: FaGithub, name: 'GitHub', url: contactData.social.github },
    { Icon: FaCode, name: 'LeetCode', url: contactData.social.leetcode },
  ];

  // Simplified - removed GSAP for better performance

  // Removed text splitting for better performance

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ position: 'relative' }}
    >
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBackground />
        {/* Main gradient orbs */}
        <div className="hero-gradient-orb absolute -top-[40%] -left-[20%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full bg-gradient-to-br from-purple-600/28 via-indigo-500/18 to-transparent blur-[40px] animate-pulse-slow" />
        <div className="hero-gradient-orb absolute -bottom-[30%] -right-[20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-tl from-blue-600/22 via-cyan-500/12 to-transparent blur-[40px] animate-pulse-slow animation-delay-2000" />
        <div className="hero-gradient-orb absolute top-[20%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-bl from-pink-500/18 via-rose-500/8 to-transparent blur-[30px] animate-pulse-slow animation-delay-4000" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-text-secondary">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to collaborations
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4 sm:mb-6 leading-[0.9] tracking-tight px-4"
          >
            <span className="block text-gradient-premium">
              SIVAKARTHICK B
            </span>
          </h1>

          {/* Subtitle with roles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary font-light mb-8 sm:mb-12 px-4"
          >
            {roles.join(" • ")}
          </motion.div>

          {/* Social Icons - Premium Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {socialIcons.map(({ Icon, name, url }, index) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:bg-white/10">
                  <Icon className="text-lg sm:text-xl text-text-secondary group-hover:text-primary transition-colors duration-300" />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4"
          >
            <Link to="projects" smooth duration={800} offset={-50}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-dark-bg rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-primary hover:text-white"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={800} offset={-50}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/20 text-text-primary rounded-full font-semibold text-sm sm:text-base hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] sm:text-xs text-text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em]">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaArrowDown className="text-text-muted text-xs sm:text-sm" />
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-12 sm:w-20 h-12 sm:h-20 border-l border-t border-white/10" />
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-12 sm:w-20 h-12 sm:h-20 border-r border-t border-white/10" />
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-12 sm:w-20 h-12 sm:h-20 border-l border-b border-white/10" />
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-12 sm:w-20 h-12 sm:h-20 border-r border-b border-white/10" />
    </section>
  );
};

export default Hero;
