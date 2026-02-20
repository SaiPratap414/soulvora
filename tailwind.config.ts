import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-light': 'hsl(var(--primary-light))',
        accent: 'hsl(var(--accent))',
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
        'card-hover': 'hsl(var(--card-hover))',
        border: 'hsl(var(--border))'
      },
      boxShadow: {
        soft: '0 12px 36px -20px rgba(15, 23, 42, 0.4)',
        glow: '0 0 40px -12px hsl(266 100% 64% / 0.4)',
        'glow-lg': '0 0 80px -20px hsl(266 100% 64% / 0.3)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: []
};

export default config;
