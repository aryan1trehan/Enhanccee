import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#000000',
        'light-green': '#1A1A1A',
        'gold': '#FFFFFF',
        'gold-light': '#E5E5E5',
        'gold-dark': '#CCCCCC',
        'gold-fade': 'rgba(255, 255, 255, 0.3)',
        'gold-fade-light': 'rgba(255, 255, 255, 0.1)',
        'gold-fade-medium': 'rgba(255, 255, 255, 0.5)',
        'cream': '#F5F5F5',
        'dark-teal': '#0A0A0A',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'water-ripple': 'water-ripple 2.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'water-ripple': {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0.9' },
          '25%': { opacity: '0.7' },
          '50%': { opacity: '0.5' },
          '75%': { opacity: '0.2' },
          '100%': { transform: 'translate(-50%, -50%) scale(2.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config

