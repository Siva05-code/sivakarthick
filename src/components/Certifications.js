import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaCheckCircle } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';
import { certificationsData } from '../data';

const iconMap = {
  certificate: FaCertificate,
};

const CertificationsPremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={sectionRef} id="certifications" className="py-8 sm:py-10 lg:py-14 relative overflow-hidden">
      <AnimatedBackground />
      <motion.div style={{ y }} className="absolute top-8 right-0 w-[420px] h-[420px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-[48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="mb-10 sm:mb-14 text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm uppercase tracking-wider text-primary font-medium mb-4">Certifications</motion.span>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.08 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold px-4">Verified <span className="text-gradient-premium">Certificates</span></motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...certificationsData].reverse().map((cert, i) => {
            const Icon = iconMap[cert.icon] || FaCertificate;
            return (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative bg-card-bg p-6 rounded-2xl border border-border-color hover:shadow-glow-primary transition-all overflow-hidden">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Icon className="text-2xl text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <div className="text-text-secondary text-sm">{cert.issuer}</div>
                  </div>
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((s, idx) => (
                      <span key={idx} className="px-3 py-1 bg-darker-bg border border-border-color rounded-full text-xs text-text-secondary">{s}</span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border-color min-h-[44px]">
                  <span className="text-text-muted text-sm">{cert.date}</span>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-sm font-medium text-white hover:brightness-95 transition-all">
                      <FaCheckCircle />
                      Verify
                    </a>
                  ) : (
                    <span className="text-text-muted text-sm invisible">No link</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsPremium;
