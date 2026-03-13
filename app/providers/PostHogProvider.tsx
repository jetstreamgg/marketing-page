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
import { getStoredConsent, saveConsent } from '../lib/consentStorage';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const POSTHOG_ENABLED = process.env.NEXT_PUBLIC_POSTHOG_ENABLED === 'true';

let hasInitializedPostHog = false;

// CONSENT-BASED INITIALIZATION
// Consent is stored in the cross-subdomain sky_consent cookie (shared across *.sky.money).
//
// - Rejected users: PostHog is NOT initialized at all (zero events, zero network requests).
// - Pending users: Memory-only persistence (persistence: 'memory'). Each user gets a real UUID
//   distinct_id that lives only in JavaScript heap memory — no cookies, localStorage, or
//   sessionStorage. Cleared on page close/refresh. This enables cross-domain attribution
//   by passing the UUID via URL params when navigating to app.sky.money.
// - Accepted users: Full persistent tracking from the first $pageview.
export function initializePostHogIfNeeded(forceAccepted = false) {
  if (typeof window === 'undefined' || !POSTHOG_ENABLED || !POSTHOG_KEY || hasInitializedPostHog) {
    return;
  }

  const consent = getStoredConsent();
  const hasAccepted = forceAccepted || consent?.posthog === true;
  const hasRejected = consent?.posthog === false;

  if (hasRejected && !forceAccepted) {
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,

    // PERSON PROFILES
    // 'always' ensures PostHog creates person profiles for all users, including
    // pending-consent users with memory-only persistence. Without this, the SDK
    // defaults to 'identified_only' which requires posthog.identify() calls.
    person_profiles: 'always',

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

    // PERSISTENCE
    // Accepted users: localStorage+cookie for cross-session and cross-subdomain attribution.
    // Pending users: memory only — UUID exists in JS heap, no device storage.
    //   Enables cross-domain attribution via URL params (see ExternalLink component).
    persistence: hasAccepted ? 'localStorage+cookie' : 'memory',

    autocapture: true,

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
      // Pending users use memory persistence — no opt-in needed.
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
 * Apply a consent change at runtime.
 * Handles the memory → full tracking transition (and vice versa)
 * using the global posthog singleton directly.
 * Consent is written to the cross-subdomain sky_consent cookie via saveConsent().
 */
export function applyPostHogConsent(enabled: boolean) {
  if (enabled) {
    // Ensure PostHog is initialized (handles rejected → accepted transition)
    initializePostHogIfNeeded(true);

    // Upgrade from memory to persistent storage and opt in.
    // The existing in-memory distinct_id carries over so the session continues seamlessly.
    posthog.set_config({ persistence: 'localStorage+cookie' });
    posthog.opt_in_capturing();
    posthog.register({ app_name: 'marketing' });
  } else {
    if (!hasInitializedPostHog) return;
    // reset() MUST come before opt_out — reset clears all stored data including
    // opt flags. opt_out_capturing() must be last so the opt-out flag persists.
    posthog.reset();
    posthog.opt_out_capturing();
  }
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
