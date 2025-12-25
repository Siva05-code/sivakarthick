import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { contactData } from '../data';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hello,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactData.email}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, '_blank');
    setStatus('Redirecting to Gmail...');
    
    setTimeout(() => {
      setStatus('Email Opened!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 2000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-darker-bg relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ scale: 1.05 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-16 cursor-pointer hover:text-primary transition-all hover:drop-shadow-glow-primary"
        >
          Get In Touch
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-semibold mb-5">Let's Connect</h3>
            <p className="text-text-secondary leading-relaxed mb-10 text-lg">
              I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-5 items-start">
                <FaEnvelope className="text-2xl text-primary mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-muted mb-1.5">Email</h4>
                  <a href={`mailto:${contactData.email}`} className="text-text-primary hover:text-primary transition-colors">
                    {contactData.email}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <FaPhone className="text-2xl text-primary mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-muted mb-1.5">Phone</h4>
                  <a href={`tel:${contactData.phone}`} className="text-text-primary hover:text-primary transition-colors">
                    {contactData.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-5 items-start">
                <FaMapMarkerAlt className="text-2xl text-primary mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-muted mb-1.5">Location</h4>
                  <p className="text-text-primary">{contactData.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: FaLinkedin, url: contactData.social.linkedin },
                { Icon: FaGithub, url: contactData.social.github },
                { Icon: FaCode, url: contactData.social.leetcode },
              ].map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, backgroundColor: '#6366f1' }}
                  className="w-14 h-14 rounded-xl bg-card-bg border border-border-color flex items-center justify-center text-text-primary text-xl hover:text-white transition-all shadow-md hover:shadow-glow-primary"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card-bg p-10 rounded-xl border border-border-color shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <div className="mb-6 relative group">
              <label className={`absolute left-4 text-text-muted transition-all pointer-events-none ${
                formData.name ? '-top-2.5 left-2 text-xs bg-card-bg px-2 text-primary' : 'top-3.5'
              } group-focus-within:-top-2.5 group-focus-within:left-2 group-focus-within:text-xs group-focus-within:bg-card-bg group-focus-within:px-2 group-focus-within:text-primary`}>
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 bg-darker-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
            
            <div className="mb-6 relative group">
              <label className={`absolute left-4 text-text-muted transition-all pointer-events-none ${
                formData.email ? '-top-2.5 left-2 text-xs bg-card-bg px-2 text-primary' : 'top-3.5'
              } group-focus-within:-top-2.5 group-focus-within:left-2 group-focus-within:text-xs group-focus-within:bg-card-bg group-focus-within:px-2 group-focus-within:text-primary`}>
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 bg-darker-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
            </div>
            
            <div className="mb-8 relative group">
              <label className={`absolute left-4 text-text-muted transition-all pointer-events-none ${
                formData.message ? '-top-2.5 left-2 text-xs bg-card-bg px-2 text-primary' : 'top-3.5'
              } group-focus-within:-top-2.5 group-focus-within:left-2 group-focus-within:text-xs group-focus-within:bg-card-bg group-focus-within:px-2 group-focus-within:text-primary`}>
                Your Message
              </label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 bg-darker-bg border border-border-color rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-vertical"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-1 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-glow-primary transition-all flex items-center justify-center gap-2"
            >
              {status || 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
