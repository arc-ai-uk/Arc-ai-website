/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#071A1A',
        'bg-secondary': '#0A2E2E',
        'gradient-start': '#071A1A',
        'gradient-mid': '#0F3D3D',
        'gradient-end': '#123D3B',
        'accent-primary': '#14B8A6',
        'accent-secondary': '#2DD4BF',
        'accent-tertiary': '#38BDF8',
        'glass-border': 'rgba(255, 255, 255, 0.12)',
        'text-primary': '#F5FAFA',
        'text-secondary': '#A8C5C2',
        'text-muted': '#6B8B87',
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
        glass: '0 8px 32px rgba(6, 40, 38, 0.45)',
        glow: '0 0 24px rgba(45, 212, 191, 0.35)',
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
