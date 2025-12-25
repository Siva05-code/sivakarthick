import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { rolesData } from '../data';

const Roles = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="roles" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Leadership Roles
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto space-y-7">
          {[...rolesData].reverse().map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: '#6366f1' }}
              className="bg-card-bg p-8 rounded-xl border border-border-color hover:shadow-glow-primary transition-all"
            >
                <h3 className="text-xl font-semibold mb-2.5">{role.title}</h3>
                <div className="text-primary font-semibold mb-2">{role.organization}</div>
                <div className="text-text-muted text-sm">{role.period}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
