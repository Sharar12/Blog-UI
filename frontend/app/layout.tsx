import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blog UI',
  description: 'A full-stack Blog application with Laravel and Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
