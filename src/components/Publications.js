import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaBone, FaTools, FaExternalLinkAlt } from 'react-icons/fa';
import { publicationsData } from '../data';

const iconMap = {
  brain: FaBrain,
  bone: FaBone,
  a: FaTools,
  cam: FaCamera,
};

const PublicationsPremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section ref={sectionRef} id="publications" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-[60px] pointer-events-none"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/8 to-transparent rounded-full blur-[60px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={ref} className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm uppercase tracking-wider text-primary font-medium mb-4"
          >
            Research & Innovation
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 sm:mb-6 px-4"
          >
            Publications &
            <span className="text-gradient-premium"> Patent</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary max-w-6xl mx-auto px-4"
          >
            My contributions to the scientific community through research papers and patented innovations.
          </motion.p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-1 gap-6 max-w-6xl mx-auto">
          {[...publicationsData].reverse().map((pub, index) => {
            const Icon = iconMap[pub.icon];
            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
              >
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  <div className="absolute top-4 right-4 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-500"
                  >
                    <Icon className="text-3xl text-primary" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                    {pub.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6 text-base">
                    {pub.description}
                  </p>

                  {/* DOI Link */}
                  {pub.doi && (
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1">
                          <span className="text-xs text-text-muted uppercase tracking-wider block mb-1">
                            DOI
                          </span>
                          <span className="text-sm text-text-secondary font-mono break-all">
                            {pub.doi}
                          </span>
                        </div>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary rounded-xl text-sm font-medium text-primary hover:text-white border border-primary/20 hover:border-primary transition-all duration-300"
                          >
                            View
                            <FaExternalLinkAlt className="text-xs" />
                          </a>
                        )}
                      </div>
                    </div>
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

export default PublicationsPremium;
