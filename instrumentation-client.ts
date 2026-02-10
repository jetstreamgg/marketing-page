// This file configures the initialization of Sentry on the client.
// The config here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
//
// WHY POSTHOG IS NOT HERE:
// Next.js 15.3+ supports initializing PostHog in this file for simple setups.
// However, we use a Provider pattern (app/providers/PostHogProvider.tsx) instead because:
// 1. App Router client-side navigation requires manual page view tracking
// 2. We need usePostHog() hook for React component integration
// 3. UTM parameter capture requires Next.js useSearchParams() hook
// See PostHogProvider.tsx for detailed explanation.

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Environment configuration
  environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || 'development',

  // Performance Monitoring
  // Capture 10% of transactions in production, 100% in development
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Session Replay
  // Capture 10% of sessions, 100% of sessions with errors
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Debug mode for development
  debug: process.env.NODE_ENV !== 'production',

  // Release tracking
  release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,

  // Filter out noisy errors
  ignoreErrors: [
    // Browser extensions
    /^chrome-extension:\/\//,
    /^moz-extension:\/\//,
    // Network errors
    'Network Error',
    'Failed to fetch',
    'Load failed',
    // User aborted requests
    'AbortError',
    'The operation was aborted'
  ],

  // Configure the replay integration with privacy settings
  integrations: defaultIntegrations => {
    return defaultIntegrations.map(integration => {
      if (integration.name === 'Replay') {
        return Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true
        });
      }
      return integration;
    });
  },

  // Before sending, filter or modify events
  beforeSend(event, hint) {
    // Don't send events in development unless explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_SENTRY_DEBUG) {
      return null;
    }
    return event;
  }
});

// Capture router transitions for performance monitoring
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
