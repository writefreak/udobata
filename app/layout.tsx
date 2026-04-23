import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Udobata — Nigerian Premium Menswear',
  description: 'Premium Nigerian menswear. Senators, Agbada, and Luxury Suits for the modern Nigerian man.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
