import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaBrain, FaServer, FaTools, FaCode } from 'react-icons/fa';
import { skillsData } from '../data';

const iconMap = {
  python: FaPython,
  brain: FaBrain,
  server: FaServer,
  tools: FaTools,
};

/* Use simple category icons for reliability: languages -> code/python, ml -> brain, backend -> server, tools -> tools */

const SkillsPremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={sectionRef} id="skills" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-[60px] pointer-events-none"
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
            Skills & Expertise
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold px-4"
          >
            What I
            <span className="text-gradient-premium"> Bring</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {Object.keys(skillsData).map((key, index) => {
            const skill = skillsData[key];
            const Icon = iconMap[skill.icon];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 overflow-hidden"
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating orbs on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.5s' }} />
                
                <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{skill.title}</h3>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => {
                    // choose icon by category to keep imports stable
                    let ItemIcon = null;
                    if (key === 'languages') {
                      ItemIcon = (item.name || '').toLowerCase() === 'python' ? FaPython : FaCode;
                    } else if (key === 'mlDataScience') {
                      ItemIcon = FaBrain;
                    } else if (key === 'backend') {
                      ItemIcon = FaServer;
                    } else if (key === 'tools') {
                      ItemIcon = FaTools;
                    }

                    return (
                      <span
                        key={item.name}
                        className="tag-animate inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                      >
                        {ItemIcon && <ItemIcon className="text-sm text-primary opacity-90" />}
                        <span>{item.name}</span>
                      </span>
                    );
                  })}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-8 h-0.5 bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute top-0 right-0 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsPremium;
