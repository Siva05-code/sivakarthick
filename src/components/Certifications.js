import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaChartLine, FaIndustry, FaCode, FaPython, FaGithub } from 'react-icons/fa';
import { certificationsData } from '../data';

const iconMap = {
  certificate: FaCertificate,
  'chart-line': FaChartLine,
  industry: FaIndustry,
  code: FaCode,
  python: FaPython,
  github: FaGithub,
};

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 bg-darker-bg relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Certifications
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...certificationsData].reverse().map((cert, index) => {
            const Icon = iconMap[cert.icon] || FaCertificate;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5, borderColor: '#6366f1' }}
                className="bg-card-bg p-7 rounded-xl border border-border-color hover:shadow-glow-primary transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-1 opacity-0 hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="text-5xl text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1.5">{cert.title}</h3>
                    <div className="text-text-secondary text-sm">{cert.issuer}</div>
                  </div>
                </div>

                {cert.skills && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-darker-bg border border-border-color rounded-lg text-xs text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-border-color mt-auto">
                  <span className="text-text-muted text-sm">{cert.date}</span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-darker-bg border border-border-color rounded-lg text-sm font-medium text-primary hover:bg-primary hover:text-white hover:border-transparent transition-all"
                    >
                      Verify Credential
                    </a>
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

export default Certifications;
