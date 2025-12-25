/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
        'dark-bg': '#0a0a0f',
        'darker-bg': '#050509',
        'card-bg': '#141420',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0c0',
        'text-muted': '#7b7b8a',
        'border-color': '#252530',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'sm-custom': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'md-custom': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'lg-custom': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.5)',
        'glow-md': '0 0 20px rgba(99, 102, 241, 0.6)',
        'glow-lg': '0 0 30px rgba(99, 102, 241, 0.7)',
        'glow-primary': '0 0 25px rgba(99, 102, 241, 0.6), 0 0 50px rgba(99, 102, 241, 0.3)',
        'glow-secondary': '0 0 25px rgba(139, 92, 246, 0.6), 0 0 50px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-particles': 'float-particles 20s infinite ease-in-out',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
        },
        'float-particles': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.08' },
          '25%': { transform: 'translate(10px, -15px)', opacity: '0.12' },
          '50%': { transform: 'translate(-10px, 15px)', opacity: '0.08' },
          '75%': { transform: 'translate(15px, 8px)', opacity: '0.1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
