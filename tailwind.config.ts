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
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))'
      },
      boxShadow: {
        soft: '0 12px 36px -20px rgba(15, 23, 42, 0.4)'
      }
    }
  },
  plugins: []
};

export default config;
