import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from './AnimatedBackground';
import { educationData } from '../data';

const EducationPremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="education" className="py-8 sm:py-10 lg:py-14 relative overflow-hidden">
      <AnimatedBackground />
      <motion.div style={{ y }} className="absolute top-0 left-0 w-[420px] h-[420px] bg-gradient-to-br from-secondary/8 to-transparent rounded-full blur-[48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="mb-10 sm:mb-14 text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-sm uppercase tracking-wider text-secondary font-medium mb-4">Education</motion.span>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.08 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold px-4">My <span className="text-gradient-premium">Academics</span></motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[...educationData].reverse().map((edu, idx) => (
            <motion.div key={edu.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.03] backdrop-blur-sm rounded-2xl p-6 hover:shadow-glow-primary transition-all">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{edu.degree}</h3>
                  {edu.specialization && <div className="text-text-secondary mb-1">Specialization: <span className="text-text-primary font-medium">{edu.specialization}</span></div>}
                  <div className="text-primary font-semibold">{edu.institution}</div>
                </div>
                <div className="text-text-muted text-sm whitespace-nowrap">{edu.startDate} — {edu.endDate}</div>
              </div>

              <div className="text-text-secondary mb-4">{edu.description}</div>

              <div className="flex items-center gap-3 flex-wrap">
                {edu.cgpa && <div className="px-3 py-1 bg-darker-bg border border-border-color rounded-full text-sm text-text-primary">CGPA: {edu.cgpa}</div>}
                {edu.percentage && <div className="px-3 py-1 bg-darker-bg border border-border-color rounded-full text-sm text-text-primary">{edu.percentage}</div>}
                {edu.honors && <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">{edu.honors}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPremium;
