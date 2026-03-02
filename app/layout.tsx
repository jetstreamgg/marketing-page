import './globals.css';
import { Providers } from './providers';
import type { Metadata } from 'next';
import { PageAnimatePresence } from '@/app/components/PageAnimatePresence';
import { circleStdClassName } from '@/app/lib/fonts';
import { Header } from '@/app/components/Header';
import { ExternalLinkModal } from '@/app/components/ExternalLinkModal';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'sky.money',
  description: 'Your future in DeFi starts now',
  verification: {
    google: '9phny0HaUVAhv5p4e17WNoda7kaCLUKF6lq-HiFaopc'
  },
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
      <body className={`flex min-h-screen flex-col overflow-x-hidden ${circleStdClassName}`}>
        <Providers>
          <ExternalLinkModal />
          <Header />
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
