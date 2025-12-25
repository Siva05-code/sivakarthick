import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { contactData } from '../data';

const ContactPremium = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hello,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, '_blank');
    setStatus('Opening Gmail...');
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 2000);
  };

  const contactInfo = [
    { Icon: FaEnvelope, label: 'Email', value: contactData.email, href: `mailto:${contactData.email}` },
    { Icon: FaPhone, label: 'Phone', value: contactData.phone, href: `tel:${contactData.phone}` },
    { Icon: FaMapMarkerAlt, label: 'Location', value: contactData.location, href: null },
  ];

  const socialLinks = [
    { Icon: FaLinkedin, name: 'LinkedIn', url: contactData.social.linkedin },
    { Icon: FaGithub, name: 'GitHub', url: contactData.social.github },
    { Icon: FaCode, name: 'LeetCode', url: contactData.social.leetcode },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-[60px] pointer-events-none"
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
            Get In Touch
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold px-4"
          >
            Let's Start a
            <span className="text-gradient-premium"> Conversation</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6\">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6\">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/[0.05] border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/[0.05] border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:border-primary/50 focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs sm:text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/[0.05] border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:border-primary/50 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-dark-bg rounded-full font-semibold text-sm sm:text-base hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2"
              >
                Send Message
                <FiArrowUpRight className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              {status && (
                <p className="text-xs sm:text-sm text-primary">{status}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6\">
              {contactInfo.map(({ Icon, label, value, href }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-lg text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-text-primary hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-text-primary">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-sm font-semibold text-text-primary">Open to collaborations</p>
                </div>
                <p className="text-xs text-text-secondary">
                  Interested in collaborations, product development and research partnerships
                </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPremium;
