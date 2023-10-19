import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--primary-font)', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-50': '#e4e6ff',
        'primary-100': '#cfd0ff',
        'primary-200': '#a8a8ff',
        'primary-300': '#7974ff',
        'primary-400': '#5a3eff',
        'primary-500': '#4b13ff',
        'primary-600': '#4400ff',
        'primary-700': '#4400ff',
        'primary-800': '#3c00e4',
        'primary-900': '#3500b0',
        'primary-950': '#120037',
      },
    },
  },
  plugins: [],
}
export default config
