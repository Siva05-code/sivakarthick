import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutData } from '../data';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          {aboutData.title}
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto md:mx-0"
          >
            <div className="w-80 h-80 bg-card-bg rounded-xl border border-border-color overflow-hidden relative z-10 group">
              <div className="absolute inset-0 bg-gradient-1 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10" />
              <img 
                src="/sivakarthick.png" 
                alt="Sivakarthick B" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-1 opacity-20 blur-xl rounded-xl -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-6">{aboutData.role}</h3>
            <p className="text-text-secondary leading-relaxed mb-5 text-lg">
              {aboutData.description1}
            </p>
            <p className="text-text-secondary leading-relaxed mb-8 text-lg">
              {aboutData.description2}
            </p>

            <div className="space-y-4">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <span className="font-semibold text-text-muted min-w-[110px]">{stat.label}:</span>
                  <span className="text-text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
