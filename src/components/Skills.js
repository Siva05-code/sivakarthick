import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaBrain, FaServer, FaTools } from 'react-icons/fa';
import { skillsData } from '../data';

const iconMap = {
  python: FaPython,
  brain: FaBrain,
  server: FaServer,
  tools: FaTools,
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-darker-bg relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Skills & Expertise
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {Object.keys(skillsData).map((key, index) => {
            const skill = skillsData[key];
            const Icon = iconMap[skill.icon];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: '#6366f1' }}
                className="bg-card-bg p-8 rounded-xl border border-border-color hover:shadow-glow-primary transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-darker-bg rounded-lg text-primary">
                    <Icon className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item.name}
                      whileHover={{ scale: 1.05, backgroundColor: '#6366f1', color: '#fff', borderColor: '#6366f1' }}
                      className="px-4 py-2 bg-darker-bg border border-border-color rounded-full text-sm text-text-secondary font-medium transition-all cursor-default hover:shadow-glow-md"
                    >
                      {item.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
