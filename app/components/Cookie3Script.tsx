'use client';

import Script from 'next/script';
import { useCookieConsent } from '../context/CookieConsentContext';

export function Cookie3Script() {
  const { consent } = useCookieConsent();

  if (consent !== 'accepted') return null;

  return (
    <Script
      src="https://cdn.markfi.xyz/scripts/analytics/0.11.21/cookie3.analytics.min.js"
      integrity="sha384-wtYmYhbRlAqGwxc5Vb9GZVyp/Op3blmJICmXjRiJu2/TlPze5dHsmg2gglbH8viT"
      crossOrigin="anonymous"
      async
      strategy="lazyOnload"
      site-id={process.env.NEXT_PUBLIC_COOKIE3_SITE_ID || ''}
    />
  );
}
