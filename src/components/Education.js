import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { educationData } from '../data';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24 bg-darker-bg relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Education
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-1" />

          {[...educationData].reverse().map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative mb-12 pl-10"
            >
              <div className="absolute left-[-6px] top-0 w-3 h-3 bg-primary rounded-full border-4 border-darker-bg" />
              
              <motion.div
                whileHover={{ x: 5, borderColor: '#6366f1' }}
                className="bg-card-bg p-8 rounded-xl border border-border-color hover:shadow-glow-primary transition-all"
              >
                <span className="inline-block px-4 py-1.5 bg-darker-bg rounded-full text-sm text-text-muted font-semibold mb-4">
                  {edu.startDate} - {edu.endDate}
                </span>
                <h3 className="text-2xl font-semibold mb-2.5">{edu.degree}</h3>
                {edu.specialization && (
                  <p className="text-text-secondary mb-2.5">Specialization: {edu.specialization}</p>
                )}
                <h4 className="text-lg text-primary font-semibold mb-4">{edu.institution}</h4>
                {edu.cgpa && (
                  <div className="text-primary font-semibold text-lg mb-3">CGPA: {edu.cgpa}</div>
                )}
                {edu.percentage && (
                  <div className="text-primary font-semibold text-lg mb-3">{edu.percentage}</div>
                )}
                {edu.description && (
                  <p className="text-text-secondary leading-relaxed">{edu.description}</p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
