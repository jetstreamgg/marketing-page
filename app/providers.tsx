'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './context/AppContext';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { PostHogProvider } from './providers/PostHogProvider';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { Cookie3Script } from './components/Cookie3Script';
import { GoogleAnalyticsScript } from './components/GoogleAnalyticsScript';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <CookieConsentProvider>
      <PostHogProvider>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            {children}
            <CookieConsentBanner />
            <Cookie3Script />
            <GoogleAnalyticsScript />
          </AppProvider>
        </QueryClientProvider>
      </PostHogProvider>
    </CookieConsentProvider>
  );
}
