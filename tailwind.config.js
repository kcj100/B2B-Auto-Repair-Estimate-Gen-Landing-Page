/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#0f0f0f',
          800: '#161616',
          700: '#1c1c1c',
          600: '#242424',
          500: '#2e2e2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'ambient-drift': {
          '0%, 100%': { transform: 'translate(-50%, 0px) scale(1)', opacity: '0.85' },
          '50%': { transform: 'translate(-47%, 18px) scale(1.06)', opacity: '1' },
        },
      },
      animation: {
        'ambient-drift': 'ambient-drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
