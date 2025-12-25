import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaCheckCircle, FaCamera, FaGithub, FaExternalLinkAlt, FaSignature, FaComment } from 'react-icons/fa';
import { projectsData } from '../data';
import { FaBone, FaHeartPulse, FaSeedling, FaUsersViewfinder, FaWaveSquare } from 'react-icons/fa6';

const iconMap = {
  ultrasonic: FaWaveSquare,
  bone : FaBone,
  att : FaUsersViewfinder,
  mnist : FaSignature,
  hepa : FaHeartPulse,
  sugarcane : FaSeedling,
  sentiment : FaComment,
  camera: FaCamera,
};

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open and handle Escape key to close
  useEffect(() => {
    if (selectedProject) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const onKey = (e) => {
        if (e.key === 'Escape') setSelectedProject(null);
      };

      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = prev || '';
        window.removeEventListener('keydown', onKey);
      };
    }
    return undefined;
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-7">
          {[...projectsData].reverse().map((project, index) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: '#6366f1' }}
                onClick={() => setSelectedProject(project)}
                className="bg-card-bg rounded-xl border border-border-color overflow-hidden cursor-pointer hover:shadow-glow-primary transition-all group"
              >
                <div className="h-56 bg-darker-bg flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-1 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-9xl text-text-muted group-hover:text-primary transition-colors duration-500" />
                  </motion.div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold mb-3.5 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-5 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-darker-bg border border-border-color rounded-full text-xs text-text-secondary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-darker-bg border border-border-color rounded-full text-xs text-text-secondary font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Details <span className="text-xl">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card-bg border border-border-color rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-10 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-3xl text-text-secondary hover:text-primary transition-colors"
              >
                <FaTimes />
              </button>

              <h2 className="text-3xl font-bold mb-3">{selectedProject.title}</h2>
              <p className="text-primary mb-5">{selectedProject.date}</p>
              <p className="text-text-secondary leading-relaxed mb-8">{selectedProject.fullDescription}</p>

              {selectedProject.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-text-secondary">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.technologies && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-darker-bg border border-border-color rounded-lg text-sm text-text-secondary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {/* Conditional links: show only if provided */}
              {(selectedProject.githubLink || selectedProject.liveLink) && (
                <div className="flex flex-wrap gap-3">
                  {selectedProject.githubLink && selectedProject.githubLink.trim() !== "" && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-darker-bg border border-border-color rounded-lg text-sm text-text-secondary font-medium hover:bg-primary/10 transition-colors"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                  )}

                  {selectedProject.liveLink && selectedProject.liveLink.trim() !== "" && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-darker-bg border border-border-color rounded-lg text-sm text-text-secondary font-medium hover:bg-primary/10 transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
