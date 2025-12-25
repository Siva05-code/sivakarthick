import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutData } from '../data';
import AnimatedBackground from './AnimatedBackground';

const AboutPremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="about" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Animated background gradients - Lusion style */}
      <AnimatedBackground />
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-secondary/8 to-transparent rounded-full blur-[60px] pointer-events-none animate-gradient-shift"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/8 to-transparent rounded-full blur-[50px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={ref} className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-l uppercase tracking-wider text-secondary font-medium mb-4"
          >
            About Me
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 sm:mb-6 px-4"
          >
            Nice to
            <span className="text-gradient-premium"> Meet You</span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Image */}
            <div className="relative mb-12 max-w-sm">
              <div className="relative w-full aspect-[3/3.5] rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10">
                <img 
                  src="/sivakarthick.png" 
                  alt="Sivakarthick B" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-40" />
              </div>
            </div>

            {/* Quick Stats - Education & Location */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.slice(0,2).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.05] transition-colors"
                >
                  <p className="text-xs text-text-muted mb-1 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-sm text-text-primary font-medium">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Role */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-primary">
                {aboutData.role}
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-6 text-text-secondary leading-relaxed text-base md:text-lg">
              <p>{aboutData.description1}</p>
              <p>{aboutData.description2}</p>
            </div>

            {/* Specializations */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-sm uppercase tracking-wider text-text-muted mb-4">
                Specializations
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Backend Development', 'Embedded Systems', 'Python', 'TensorFlow', 'Django'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPremium;
