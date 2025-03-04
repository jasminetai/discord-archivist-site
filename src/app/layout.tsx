import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/app/components/header';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: {
    icon: '/site_favicon.ico',
  },
  title: 'Archivist',
  description: 'Discord bot for Super Bandit RIP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex flex-col w-full min-h-screen antialiased`}>
        <Header />
        <main className="flex-grow px-8 py-4 sm:px-16">{children}</main>
      </body>
    </html>
  );
}
