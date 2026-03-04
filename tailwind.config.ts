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
        'bg': '#071414',
        'teal': '#0a2020',
        'emerald': '#0f3535',
        'gold': '#debf70',
        'gold-light': '#e2c992',
        'gold-dim': 'rgba(201,169,110,0.25)',
        'cream': '#f0ebe2',
        'cream-dim': 'rgba(240,235,226,0.65)',
        'white': '#faf8f4',
        // Legacy support - map old names to new colors
        'dark-green': '#071414',
        'dark-green-light': '#0a2020',
        'dark-green-dark': '#071414',
        'light-green': '#0f3535',
      },
    },
  },
  plugins: [],
}
export default config
