import { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'PrideDragon Tech',
  description: 'Tecnología e innovación a tu alcance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}