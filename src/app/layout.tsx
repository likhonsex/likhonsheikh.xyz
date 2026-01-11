import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SearchProvider } from '@/context/SearchContext';
import CommandPalette from '@/components/CommandPalette';

export const viewport: Viewport = {
  themeColor: '#C06C84',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'Likhon Sheikh | AI & Blockchain Developer',
    template: '%s | Likhon Sheikh',
  },
  description: 'Creator of autonomous AI tools and decentralized applications. Expert in React, Next.js, Solidity, Node.js, AI agents, and smart contracts.',
  keywords: ['AI developer', 'blockchain developer', 'React', 'Next.js', 'Solidity', 'smart contracts', 'autonomous AI'],
  authors: [{ name: 'Likhon Sheikh', url: 'https://likhonsheikh.xyz' }],
  creator: 'Likhon Sheikh',
  openGraph: {
    title: 'Likhon Sheikh | AI & Blockchain Developer',
    description: 'Creator of autonomous AI tools and decentralized applications',
    type: 'website',
    locale: 'en_US',
    siteName: 'Likhon Sheikh',
    url: 'https://likhonsheikh.xyz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Likhon Sheikh | AI & Blockchain Developer',
    description: 'Creator of autonomous AI tools and decentralized applications',
    creator: '@likhonsheikh',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn-avatars.huggingface.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn-avatars.huggingface.co" />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-paper-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-charcoal-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            <SmoothScroll />
            <CommandPalette />
            <main className="flex-1">
              {children}
            </main>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
