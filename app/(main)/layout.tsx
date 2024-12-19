import '../globals.css';
import { Providers } from '../providers';
import type { Metadata } from 'next';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import { PageAnimatePresence } from '@/app/components/PageAnimatePresence';
import { circleStdClassName } from '@/app/lib/fonts';
import { Header } from '@/app/components/Header';
import { ExternalLinkModal } from '@/app/components/ExternalLinkModal';

export const metadata: Metadata = {
  title: 'sky.money',
  description: 'Your future in DeFi starts now'
};

export default async function RootLayout({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="en">
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

export const dynamic = 'force-dynamic';
