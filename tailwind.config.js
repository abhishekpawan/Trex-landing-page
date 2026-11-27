/** @type {import('tailwindcss').Config} */
// Trex 2.0 brand: "Midnight vault" dark tokens from the app's docs/design/tokens.md. Manrope.
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        page: '#0B1020',
        raised: '#141B33',
        field: '#1C2440',
        line: '#26304F',
        ink: '#EEF1F8',
        muted: '#A0A9C0',
        accent: '#8590F0',
        'accent-strong': '#4F5BD5',
        spark: '#C8F25A',
        'on-accent': '#0B1020',
        navy: '#0E1428',
      },
      fontFamily: { sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
