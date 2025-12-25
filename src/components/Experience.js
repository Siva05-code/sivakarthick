import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-darker-bg relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Experience
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-1" />

          {[...experienceData].reverse().map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 pl-10"
            >
              <div className="absolute left-[-6px] top-0 w-3 h-3 bg-primary rounded-full border-4 border-dark-bg" />
              
              <motion.div
                whileHover={{ x: 5, borderColor: '#6366f1' }}
                className="bg-card-bg p-8 rounded-xl border border-border-color hover:shadow-glow-primary transition-all"
              >
                <span className="inline-block px-4 py-1.5 bg-darker-bg rounded-full text-sm text-text-muted font-semibold mb-4">
                  {exp.startDate} - {exp.endDate}
                </span>
                <h3 className="text-2xl font-semibold mb-2.5">{exp.role}</h3>
                <h4 className="text-lg text-primary font-semibold mb-4">{exp.company}</h4>
                <p className="text-text-secondary leading-relaxed mb-5">{exp.description}</p>
                
                {exp.responsibilities && (
                  <div className="pt-5 border-t border-border-color">
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-text-secondary flex items-start gap-3">
                          <span className="text-primary font-bold mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
