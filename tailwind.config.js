/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#05060D',
        'bg-secondary': '#0D1224',
        'gradient-start': '#05060D',
        'gradient-mid': '#0D1224',
        'gradient-end': '#101A33',
        'accent-primary': '#2F6BFF',
        'accent-secondary': '#3FA9FF',
        'accent-tertiary': '#7FB8FF',
        'glass-border': 'rgba(255, 255, 255, 0.12)',
        'text-primary': '#F5FAFA',
        'text-secondary': '#A8B5C9',
        'text-muted': '#6B7B94',
        success: '#34D399',
      },
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        glass: '20px',
      },
      backdropBlur: {
        glass: '16px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(5, 8, 20, 0.45)',
        glow: '0 0 24px rgba(63, 169, 255, 0.35)',
      },
      backgroundImage: {
        'app-gradient':
          'linear-gradient(160deg, var(--bg-gradient-start) 0%, var(--bg-gradient-mid) 50%, var(--bg-gradient-end) 100%)',
        'cta-gradient': 'linear-gradient(120deg, var(--accent-primary), var(--accent-secondary))',
      },
    },
  },
  plugins: [],
}
