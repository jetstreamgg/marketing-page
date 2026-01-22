import './globals.css';
import { Providers } from './providers';
import type { Metadata } from 'next';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import { PageAnimatePresence } from '@/app/components/PageAnimatePresence';
import { circleStdClassName } from '@/app/lib/fonts';
import { Header } from '@/app/components/Header';
import { ExternalLinkModal } from '@/app/components/ExternalLinkModal';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'sky.money',
  description: 'Your future in DeFi starts now',
  openGraph: {
    title: 'sky.money',
    description: 'Your future in DeFi starts now',
    url: 'https://sky.money',
    siteName: 'Sky',
    images: [
      {
        url: 'https://sky.money/social_media.png',
        width: 2400,
        height: 1260,
        alt: 'Sky - Your future in DeFi starts now'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sky.money',
    description: 'Your future in DeFi starts now',
    images: ['https://sky.money/social_media.png']
  }
};

export default async function RootLayout({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.markfi.xyz/scripts/analytics/0.11.21/cookie3.analytics.min.js"
          integrity="sha384-wtYmYhbRlAqGwxc5Vb9GZVyp/Op3blmJICmXjRiJu2/TlPze5dHsmg2gglbH8viT"
          crossOrigin="anonymous"
          async
          strategy="lazyOnload"
          site-id={process.env.NEXT_COOKIE3_SITE_ID || ''}
        />
      </head>
      <body className={`flex min-h-screen flex-col overflow-x-hidden ${circleStdClassName}`}>
        <Providers>
          <ExternalLinkModal />
          <Header />
          {process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK == 'true' ? (
            <PageAnimatePresence>{children}</PageAnimatePresence>
          ) : (
            <AuthWrapper>
              <PageAnimatePresence>{children}</PageAnimatePresence>
            </AuthWrapper>
          )}
        </Providers>
      </body>
    </html>
  );
}
