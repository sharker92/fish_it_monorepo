import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Fish It',
  description: 'La aplicacion que hace sencillo tu super.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <h1 className="mt-4 p-4 mb-8 text-center text-4xl font-semibold text-gray-950">
            Welcome to Fish It 🎣
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}

