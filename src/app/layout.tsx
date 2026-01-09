import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const viewport: Viewport = {
  themeColor: '#C06C84',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Likhon Sheikh | বাংলা কবিতা ও গদ্য',
  description: 'Likhon Sheikh-এর ব্যক্তিগত কবিতা ও গদ্য সংগ্রহ। প্রেম, ভালোবাসা, বিরহ এবং জীবনের গভীর অনুভূতি নিয়ে লেখা কবিতা।',
  keywords: ['বাংলা কবিতা', 'বাংলা গদ্য', 'প্রেমের কবিতা', 'বিরহের কবিতা', 'Likhon Sheikh'],
  authors: [{ name: 'Likhon Sheikh' }],
  openGraph: {
    title: 'Likhon Sheikh | বাংলা কবিতা ও গদ্য',
    description: 'ব্যক্তিগত কবিতা ও গদ্য সংগ্রহ',
    type: 'website',
    locale: 'bn_BD',
    siteName: 'Likhon Sheikh',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="lenis lenis-smooth">
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
