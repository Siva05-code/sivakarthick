import React from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40 - Math.random() * 40, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.05, 0.3, 0.05],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Larger glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${60 + Math.random() * 100}px`,
            height: `${60 + Math.random() * 100}px`,
            background: i % 2 === 0 ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Animated lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            left: 0,
            right: 0,
            top: `${20 + i * 30}%`,
            opacity: 0.1,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
