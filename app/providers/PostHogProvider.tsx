'use client';

/**
 * PostHog Analytics Provider
 *
 * WHY PROVIDER PATTERN VS INSTRUMENTATION-CLIENT.TS?
 * -------------------------------------------------
 * Next.js 15.3+ supports initializing PostHog in instrumentation-client.ts:
 *
 *   // instrumentation-client.ts (alternative approach)
 *   import posthog from 'posthog-js'
 *   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, { ... })
 *
 * We use the Provider pattern because:
 *
 * 1. REACT HOOKS INTEGRATION
 *    - The usePostHog() hook requires PostHogProvider context
 *    - Our useMarketingAnalytics hook uses usePostHog() for CTA tracking
 *    - Without the provider, you'd import posthog directly everywhere
 *
 * 2. AUTOMATIC PAGE VIEW TRACKING
 *    - capture_pageview: 'history_change' fires $pageview on every URL change
 *    - Works with App Router client-side navigation
 *    - PostHog auto-captures UTM params from URL
 *
 * NO CUSTOM PAGE VIEW EVENTS:
 * We rely on PostHog's standard $pageview instead of custom marketing_page_view.
 *
 * DISTINGUISHING MARKETING VS APP EVENTS:
 * We register a super property `app_name: 'marketing'` that's attached to every event.
 * - In production: Can also filter by $host (sky.money vs app.sky.money)
 * - In development/preview: URLs may be similar, so app_name is the reliable filter
 * - When the web app integrates PostHog, it will use `app_name: 'app'`
 */

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { type ReactNode } from 'react';
import { CONSENT_STORAGE_KEY } from '../constants';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const POSTHOG_ENABLED = process.env.NEXT_PUBLIC_POSTHOG_ENABLED === 'true';

// Initialize PostHog (runs once on client)
if (typeof window !== 'undefined' && POSTHOG_ENABLED && POSTHOG_KEY) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,

    // PAGE VIEW TRACKING
    // 'history_change' automatically captures $pageview on every URL change.
    // Works with App Router client-side navigation.
    // PostHog auto-captures UTM params from URL query strings.
    capture_pageview: 'history_change',

    // PAGE LEAVE TRACKING
    // Captures $pageleave when user leaves/closes page.
    // Required for Web Analytics bounce rate and session duration.
    // Also includes scroll depth metrics (max_scroll, last_scroll) automatically.
    capture_pageleave: true,

    // PERSISTENCE: localStorage vs memory
    // - 'localStorage': Persists user ID across sessions (better attribution)
    // - 'memory': Session-only, no cookies/storage (more private, GDPR-friendly)
    // Using localStorage for cross-session attribution. Switch to 'memory' for cookieless.
    persistence: 'localStorage',

    // COOKIE CONSENT: cookieless anonymous tracking when opted out.
    // With 'on_reject', opt_out_capturing() uses cookieless tracking
    // (privacy-preserving server-side hash, nothing stored on device)
    // instead of dropping events entirely.
    cookieless_mode: 'on_reject',

    // AUTOCAPTURE DISABLED
    // When true, PostHog auto-captures all clicks, inputs, etc.
    // We disable for privacy (manual events only) and smaller payload.
    // All tracking is explicit via useMarketingAnalytics hook.
    autocapture: false,

    // SESSION REPLAY DISABLED
    // Records user sessions for UX debugging. Requires explicit consent.
    // Enable later with consent banner if needed.
    disable_session_recording: true,

    // PRIVACY SETTINGS
    respect_dnt: true, // Honor browser's Do Not Track setting
    ip: false, // Don't capture IP addresses
    property_denylist: ['$ip'], // Extra protection: filter $ip from all events

    // CROSS-DOMAIN ATTRIBUTION
    // Shares cookies across *.sky.money subdomains (sky.money <-> app.sky.money)
    // Required for tracking user journey: marketing site -> app conversion
    cross_subdomain_cookie: true,

    loaded: posthogClient => {
      // Register super property to distinguish marketing site events from app events.
      // This is attached to every event (including automatic ones like $pageview).
      // Allows filtering by app_name in PostHog dashboards across all environments.
      posthogClient.register({
        app_name: 'marketing'
      });

      // Restore consent state for returning users at init time (before React hydrates).
      // This ensures PostHog is in the correct mode immediately.
      const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (storedConsent === 'accepted') {
        posthogClient.opt_in_capturing();
      } else if (storedConsent === 'rejected') {
        posthogClient.opt_out_capturing();
      }

      // Debug mode logs all events to browser console in development
      // Helpful for verifying events fire correctly
      if (process.env.NODE_ENV === 'development') {
        posthogClient.debug();
      }
    }
  });
}

/**
 * PostHogProvider - Wraps app with PostHog context
 *
 * Provides:
 * - usePostHog() hook access for all child components
 * - Automatic $pageview tracking via capture_pageview: 'history_change'
 * - Automatic $pageleave tracking with scroll depth
 *
 * PAGE VIEW TRACKING:
 * We rely on PostHog's automatic $pageview (capture_pageview: 'history_change')
 * instead of custom events. PostHog auto-captures UTM params from URL.
 *
 * APP IDENTIFICATION:
 * Every event includes `app_name: 'marketing'` super property for filtering.
 *
 * KILL SWITCH: Set NEXT_PUBLIC_POSTHOG_ENABLED=false to disable all tracking
 * without code changes (useful for debugging or compliance issues).
 */
export function PostHogProvider({ children }: { children: ReactNode }) {
  // Kill switch: renders children without PostHog when disabled
  if (!POSTHOG_ENABLED || !POSTHOG_KEY) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
