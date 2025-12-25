import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaCheckCircle, FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Icon map for projects
const iconEmojis = {
  ultrasonic: '🔊',
  bone: '🦴',
  att: '👥',
  mnist: '✍️',
  hepa: '💊',
  sugarcane: '🌿',
  sentiment: '💬',
  camera: '📷',
};

const ProjectCard = ({ project, index, onClick }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt removed for better performance

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        const rect = cardRef.current?.getBoundingClientRect();
        onClick(project, rect);
      }}
      className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary/50 hover:scale-105 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated mesh pattern on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Project number removed to improve readability */}

      {/* Icon/Visual area */}
      <div className="relative h-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card-bg/50" />
        <motion.span 
          className="text-8xl"
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {iconEmojis[project.icon] || '💻'}
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="tag-animate px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-wider text-text-muted font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <span>View Project</span>
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowRight className="text-xs" />
          </motion.span>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const ProjectsPremium = () => {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null); // { project, rect }
  const [filter, setFilter] = useState('all');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Get unique tags for filter
  const allTags = ['all', ...new Set(projectsData.flatMap(p => p.tags.slice(0, 2)))].slice(0, 6);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.tags.includes(filter));

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      const onKey = (e) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onKey);
      };
    }
    return undefined;
  }, [selectedProject]);

  return (
    <section ref={sectionRef} id="projects" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={ref} className="mb-12 sm:mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm uppercase tracking-wider text-primary font-medium mb-4"
          >
            Featured Work
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 sm:mb-6 px-4"
          >
            Projects I've
            <span className="text-gradient-premium"> Built</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary max-w-7xl text-center mx-auto px-4"
          >
            A selection of my most passionately crafted works, showcasing my skills in machine learning, embedded systems, and full-stack development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...filteredProjects].reverse().map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={(project, rect) => setSelectedProject({ project, rect })}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-5 overflow-y-auto"
          >
            {/* Animated modal: start from card rect to centered modal */}
            <motion.div
              initial={(() => {
                const r = selectedProject.rect || {};
                return r.top != null ? { 
                  position: 'fixed',
                  top: r.top,
                  left: r.left,
                  width: r.width,
                  height: r.height,
                  opacity: 0.95,
                  borderRadius: 16,
                } : { scale: 0.9, y: 50, opacity: 0 };
              })()}
              animate={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                width: 'min(90vw, 960px)',
                height: 'auto',
                opacity: 1,
                borderRadius: 20,
              }}
              exit={(() => {
                const r = selectedProject.rect || {};
                return r.top != null ? { 
                  top: r.top,
                  left: r.left,
                  width: r.width,
                  height: r.height,
                  opacity: 0,
                } : { scale: 0.9, y: 50, opacity: 0 };
              })()}
              transition={{ type: "spring", damping: 24, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-card-bg to-darker-bg border border-white/10 rounded-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar-hidden"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-text-primary transition-all duration-300 z-10"
              >
                <FaTimes />
              </button>

              {/* Modal Header */}
              <div className="relative h-48 flex items-center justify-center bg-gradient-to-b from-primary/10 to-transparent">
                <span className="text-9xl">{iconEmojis[selectedProject.project.icon] || '💻'}</span>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs uppercase tracking-wider text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold mb-2">{selectedProject.project.title}</h2>
                <p className="text-primary mb-6">{selectedProject.project.date}</p>
                <p className="text-text-secondary leading-relaxed mb-8">{selectedProject.project.fullDescription}</p>

                {selectedProject.project.features && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-text-primary">Key Features</h3>
                    <ul className="space-y-3">
                      {selectedProject.project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-text-secondary">
                          <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.project.technologies && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-text-primary">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {(selectedProject.project.githubLink || selectedProject.project.liveLink) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                    {selectedProject.project.githubLink && selectedProject.project.githubLink.trim() !== "" && (
                      <a
                        href={selectedProject.project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all duration-300"
                      >
                        <FaGithub />
                        View Code
                      </a>
                    )}
                    {selectedProject.project.liveLink && selectedProject.project.liveLink.trim() !== "" && (
                      <a
                        href={selectedProject.project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 rounded-full text-sm font-medium text-white transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPremium;
