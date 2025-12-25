import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from './AnimatedBackground';
import { rolesData } from '../data';

const RolesPremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section ref={sectionRef} id="roles" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <AnimatedBackground />
      <motion.div 
        style={{ y }} 
        className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-gradient-to-tl from-secondary/8 to-transparent rounded-full blur-[48px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="mb-10 sm:mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-l uppercase tracking-wider text-secondary font-medium mb-4"
          >
            Leadership
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold px-4"
          >
            Leadership <span className="text-gradient-premium">Roles</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {[...rolesData].reverse().map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ y: -5, borderColor: '#6366f1' }}
              className="relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:shadow-glow-primary transition-all"
            >
              
              <div className="flex justify-between items-start gap-4 mt-3">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{role.title}</h3>
                  <div className="text-primary font-semibold mb-2 text-sm md:text-base">{role.organization}</div>
                </div>
                <div className="text-text-muted text-xs md:text-sm whitespace-nowrap">{role.period}</div>
              </div>
              
              {role.summary && (
                <p className="text-text-secondary text-sm mt-3 line-clamp-3 leading-relaxed">{role.summary}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesPremium;
