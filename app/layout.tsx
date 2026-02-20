import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Soulvora | Emotional Stability. Measurable Advantage.',
  description:
    'Soulvora helps leadership teams improve performance through emotional stability, proactive engagement, and measurable wellbeing outcomes.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
