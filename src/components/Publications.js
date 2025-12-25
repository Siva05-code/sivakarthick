import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaBone, FaTools } from 'react-icons/fa';
import { publicationsData } from '../data';

const iconMap = {
  brain: FaBrain,
  bone: FaBone,
  a : FaTools,
};

const Publications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="publications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Publications & Patent
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          {[...publicationsData].reverse().map((pub, index) => {
            const Icon = iconMap[pub.icon];
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: '#6366f1' }}
                className="bg-card-bg p-8 rounded-xl border border-border-color hover:shadow-glow-primary transition-all relative overflow-hidden"
              >
                <motion.div
                  initial={{ left: '-100%' }}
                  whileHover={{ left: '100%' }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 h-full w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none"
                />
                
                <Icon className="text-6xl text-gradient mb-5" />
                <h3 className="text-2xl font-semibold mb-4 leading-tight">{pub.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-5">{pub.description}</p>
                <div className="pt-4 border-t border-border-color">
                  <span className="text-sm text-text-muted">DOI: </span>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:text-accent transition-colors"
                  >
                    {pub.doi}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
