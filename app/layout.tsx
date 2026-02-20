import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Soulvora | You Deserve to Thrive, Not Just Survive',
  description:
    'Soulvora is your confidential companion for emotional wellness at work. Get real support, build resilience, and rediscover what it means to feel genuinely good.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="noise">{children}</body>
    </html>
  );
}
