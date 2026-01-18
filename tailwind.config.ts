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
        accent: {
          DEFAULT: '#00d4aa',
          blue: '#00a8ff',
          pink: '#ff006e',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          mid: '#1a1a2e',
        },
      },
      fontFamily: {
        sans: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-slow': 'float 25s ease-in-out infinite reverse',
        'float-slower': 'float 30s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'slideUp': 'slideUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glow: {
          '0%, 100%': { borderColor: 'rgba(0, 212, 170, 0.3)' },
          '50%': { borderColor: 'rgba(0, 212, 170, 0.8)' },
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animationDelay: {
        '200': '0.2s',
        '400': '0.4s',
        '600': '0.6s',
        '800': '0.8s',
        '1000': '1s',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}

export default config
