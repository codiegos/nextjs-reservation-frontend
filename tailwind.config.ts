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
      sans: ['var(--primary-font)'],
    },
    extend: {
      colors: {
        primary: '#120037',
        secondary: '#29007D',
        tertiary: '#3A00B0',
      },
    },
  },
  plugins: [],
}
export default config
