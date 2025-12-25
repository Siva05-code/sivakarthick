import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data';

const ExperiencePremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="experience" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/8 to-transparent rounded-full blur-[60px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={ref} className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-sm uppercase tracking-wider text-secondary font-medium mb-4"
          >
            Experience
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold px-4"
          >
            My
            <span className="text-gradient-premium"> Journey</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {[...experienceData].reverse().map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-12 sm:mb-16 last:mb-0"
            >
              {/* Timeline connector */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-[7.5rem] top-12 bottom-[-3rem] sm:bottom-[-4rem] w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              )}

              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 sm:gap-6 md:gap-12 items-start">
                {/* Date Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative flex-shrink-0"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs md:text-sm font-medium text-primary whitespace-nowrap">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    {exp.startDate} - {exp.endDate}
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-bg hidden md:block" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-primary/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <h4 className="text-lg text-primary font-semibold mb-4">{exp.company}</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">{exp.description}</p>
                  
                  {exp.responsibilities && (
                    <div className="space-y-3 pt-6 border-t border-white/10">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{resp}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Decorative corner */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/10 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePremium;
