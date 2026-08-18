import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          50: '#F4F6FA',
          100: '#E8ECF4',
          200: '#C9D2E2',
          300: '#9FABC3',
          400: '#64718D',
          500: '#3D4A63',
          600: '#263349',
          700: '#1A2436',
          800: '#121B2B',
          900: '#0B1220',
        },
        signal: {
          DEFAULT: '#0066F5',
          50: '#EBF2FF',
          100: '#D6E5FF',
          200: '#AECCFF',
          300: '#7AAFFF',
          400: '#3D8CFF',
          500: '#0066F5',
          600: '#0052CC',
          700: '#003E99',
          800: '#002B6B',
          900: '#001A40',
        },
        data: {
          DEFAULT: '#00C2A8',
          50: '#E6FBF8',
          100: '#C9F5EF',
          200: '#93EADF',
          300: '#54DCCB',
          400: '#1CC9B5',
          500: '#00C2A8',
          600: '#009E8A',
          700: '#007A6B',
          800: '#00564C',
          900: '#00332E',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,18,32,0.04), 0 4px 16px rgba(11,18,32,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
