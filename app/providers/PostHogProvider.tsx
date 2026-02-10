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

let hasInitializedPostHog = false;

function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CONSENT_STORAGE_KEY);
}

// CONSENT-BASED INITIALIZATION
// - Rejected users: PostHog is NOT initialized at all (zero events, zero network requests).
// - Pending users: Cookieless anonymous tracking via server-side hash (cookieless_mode: 'always').
// - Accepted users: Full persistent tracking from the first $pageview.
//
// Why cookieless_mode: 'always' for pending users (not 'on_reject')?
// The 'on_reject' mode only activates when isExplicitlyOptedOut() is true, which requires
// an explicit opt_out_capturing() call — opt_out_capturing_by_default doesn't trigger it.
// Using 'always' guarantees cookieless tracking from the first event for pending users.
// The CookieConsentBanner switches the mode via set_config() when the user makes a choice.
export function initializePostHogIfNeeded(forceAccepted = false) {
  if (typeof window === 'undefined' || !POSTHOG_ENABLED || !POSTHOG_KEY || hasInitializedPostHog) {
    return;
  }

  const storedConsent = getStoredConsent();
  const hasAccepted = forceAccepted || storedConsent === 'accepted';
  const hasRejected = storedConsent === 'rejected';

  if (hasRejected && !forceAccepted) {
    return;
  }

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

    // PERSISTENCE: localStorage+cookie for cross-session and cross-subdomain attribution.
    // Most data stored in localStorage (keeps headers small), but identity properties
    // (distinct_id, device_id, session_id) are also persisted in cookies so that
    // cross_subdomain_cookie: true can share them across *.sky.money subdomains.
    persistence: 'localStorage+cookie',

    // COOKIELESS MODE
    // Pending users: 'always' → server-side hashed identity, no cookies/localStorage for tracking.
    //   distinct_id is '$posthog_cookieless' (replaced server-side with daily hash).
    //   Each day produces a new hash, so cross-day tracking is impossible.
    // Accepted users: undefined → full persistent tracking with stable UUID distinct_id.
    // Rejected users: never reach here (PostHog not initialized).
    // Requires "Cookieless server hash mode" enabled in PostHog project settings.
    cookieless_mode: hasAccepted ? undefined : 'always',

    // AUTOCAPTURE DISABLED — manual events only via useMarketingAnalytics hook.
    autocapture: false,

    // SESSION REPLAY DISABLED — requires explicit consent.
    disable_session_recording: true,

    // PRIVACY SETTINGS
    respect_dnt: true, // Honor browser's Do Not Track setting
    ip: false, // Don't capture IP addresses server-side
    property_denylist: ['$ip'], // Extra protection: strip $ip from all events

    // CROSS-DOMAIN ATTRIBUTION
    // Shares cookies across *.sky.money subdomains (sky.money <-> app.sky.money)
    cross_subdomain_cookie: true,

    loaded: posthogClient => {
      posthogClient.register({
        app_name: 'marketing'
      });

      // Restore consent for returning accepted users.
      // Rejected users never reach here (PostHog not initialized).
      // Pending users are already in cookieless mode via cookieless_mode: 'always'.
      if (hasAccepted) {
        posthogClient.opt_in_capturing();
      }

      if (process.env.NODE_ENV === 'development') {
        posthogClient.debug();
      }
    }
  });

  hasInitializedPostHog = true;
}

// Initialize immediately unless this visitor has explicitly rejected.
initializePostHogIfNeeded();

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
