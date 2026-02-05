'use client';

import { usePostHog } from 'posthog-js/react';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

/**
 * CTA Types for Marketing Analytics
 *
 * These identify the specific call-to-action that was clicked, enabling analysis of:
 * - Which CTAs drive the most conversions
 * - CTA placement effectiveness (header vs hero vs footer)
 * - Feature interest (which widgets users want to access)
 *
 * NAMING CONVENTION:
 * - LaunchApp*  : Generic "Launch App" buttons (no specific widget)
 * - Token*      : Token-specific upgrade CTAs (MKR→SKY, DAI→USDS)
 * - Feature*    : Feature card CTAs that deeplink to specific widgets
 *
 * USAGE:
 *   trackCTAClick(CTAType.LaunchAppHero, url)
 */
export enum CTAType {
  // ============================================
  // LAUNCH APP CTAs (go to app.sky.money)
  // ============================================
  /** Header navigation "Launch App" button (desktop & tablet) */
  LaunchAppHeader = 'launch_app_header',
  /** Hero section "Launch App" button on homepage */
  LaunchAppHero = 'launch_app_hero',
  /** Footer "Launch app" button */
  LaunchAppFooter = 'launch_app_footer',
  /** FAQ page bottom CTA "Launch app" */
  LaunchAppFaq = 'launch_app_faq',
  /** Features page bottom CTA "Access Sky Token Rewards" */
  LaunchAppFeatures = 'launch_app_features',

  // ============================================
  // TOKEN UPGRADE CTAs (homepage token cards)
  // ============================================
  /** SKY token card: "Upgrade MKR to SKY" → ?widget=upgrade&source_token=MKR */
  TokenUpgradeSky = 'token_upgrade_sky',
  /** USDS token card: "Get USDS" → ?widget=upgrade&source_token=DAI */
  TokenUpgradeUsds = 'token_upgrade_usds',

  // ============================================
  // FEATURE CTAs (feature cards with widget deeplinks)
  // Used on homepage (Features section) and /features page
  // ============================================
  /** "Upgrade" → ?widget=upgrade */
  FeatureUpgrade = 'feature_upgrade',
  /** "Start Trading" → ?widget=trade */
  FeatureTrade = 'feature_trade',
  /** "Access Sky Token Rewards" → ?widget=rewards */
  FeatureRewards = 'feature_rewards',
  /** "Start Saving" → ?widget=savings */
  FeatureSavings = 'feature_savings',
  /** "Stake your SKY" / "Access Staking Rewards" → ?widget=stake */
  FeatureStake = 'feature_stake',
  /** "Get stUSDS" → ?widget=expert */
  FeatureExpert = 'feature_expert',
  /** "Access SkyLink" → ?widget=skylink (or ?network=...) */
  FeatureSkylink = 'feature_skylink'
}

/**
 * Maps feature page IDs to their corresponding CTA types.
 * Used by FeatureCard, FeaturesPageCard, and Features components.
 */
export const featureIdToCTAType: Record<string, CTAType> = {
  upgrade: CTAType.FeatureUpgrade,
  trade: CTAType.FeatureTrade,
  rewards: CTAType.FeatureRewards,
  savings: CTAType.FeatureSavings,
  stake: CTAType.FeatureStake,
  expert: CTAType.FeatureExpert,
  skylink: CTAType.FeatureSkylink
};

/**
 * Categories for external link tracking.
 * Helps segment external links by type for analysis.
 */
export type ExternalLinkCategory =
  | 'social' // Twitter, Discord, Telegram, etc.
  | 'docs' // Developer documentation
  | 'governance' // vote.sky.money, forum
  | 'ecosystem' // Other Sky ecosystem links (spark.fi, info.sky.money)
  | 'media' // Brand assets, media kit
  | 'other'; // Default/uncategorized

/**
 * Auto-detects the category of an external link based on URL patterns.
 * Returns undefined if no pattern matches (caller should provide explicit category or default to 'other').
 */
export function inferLinkCategory(url: string): ExternalLinkCategory | undefined {
  const lowerUrl = url.toLowerCase();

  // Social platforms
  if (
    lowerUrl.includes('twitter.com') ||
    lowerUrl.includes('x.com') ||
    lowerUrl.includes('discord') ||
    lowerUrl.includes('telegram') ||
    lowerUrl.includes('youtube') ||
    lowerUrl.includes('github.com')
  ) {
    return 'social';
  }

  // Governance
  if (lowerUrl.includes('vote.sky.money') || lowerUrl.includes('forum.sky.money')) {
    return 'governance';
  }

  // Documentation
  if (lowerUrl.includes('developers.sky.money') || lowerUrl.includes('/docs')) {
    return 'docs';
  }

  // Media/Brand assets
  if (lowerUrl.includes('notion.so') || lowerUrl.includes('notion.site') || lowerUrl.includes('brand')) {
    return 'media';
  }

  // Ecosystem projects (Sky ecosystem only)
  if (lowerUrl.includes('spark.fi') || lowerUrl.includes('info.sky.money')) {
    return 'ecosystem';
  }

  return undefined;
}

type Viewport = 'mobile' | 'tablet' | 'desktop';

function getViewport(): Viewport {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export function useMarketingAnalytics() {
  const posthog = usePostHog();
  const pathname = usePathname();

  const trackCTAClick = useCallback(
    (ctaType: CTAType, destinationUrl: string, widgetParam?: string) => {
      posthog?.capture('marketing_cta_click', {
        cta_type: ctaType,
        cta_location: pathname,
        destination_url: destinationUrl,
        widget_param: widgetParam || null,
        viewport: getViewport()
      });
    },
    [posthog, pathname]
  );

  const trackExternalLinkClick = useCallback(
    (linkUrl: string, category?: ExternalLinkCategory) => {
      const resolvedCategory = category || inferLinkCategory(linkUrl) || 'other';
      posthog?.capture('marketing_external_link_click', {
        link_url: linkUrl,
        link_category: resolvedCategory,
        source_page: pathname,
        viewport: getViewport()
      });
    },
    [posthog, pathname]
  );

  const trackExternalLinkModalShown = useCallback(
    (targetUrl: string) => {
      posthog?.capture('marketing_external_link_modal_shown', {
        target_url: targetUrl,
        source_page: pathname
      });
    },
    [posthog, pathname]
  );

  const trackExternalLinkConfirmed = useCallback(
    (targetUrl: string) => {
      posthog?.capture('marketing_external_link_confirmed', {
        target_url: targetUrl,
        source_page: pathname
      });
    },
    [posthog, pathname]
  );

  const trackScrollDepth = useCallback(
    (depthPercent: 25 | 50 | 75 | 100) => {
      posthog?.capture('marketing_scroll_depth', {
        depth_percent: depthPercent,
        page_path: pathname,
        viewport: getViewport()
      });
    },
    [posthog, pathname]
  );

  const trackSectionView = useCallback(
    (sectionName: string) => {
      posthog?.capture('marketing_section_view', {
        section_name: sectionName,
        page_path: pathname,
        viewport: getViewport()
      });
    },
    [posthog, pathname]
  );

  const trackFAQSearch = useCallback(
    (resultsCount: number) => {
      // Note: Don't track the actual query for privacy
      posthog?.capture('marketing_faq_search', {
        results_count: resultsCount,
        has_results: resultsCount > 0,
        page_path: pathname
      });
    },
    [posthog, pathname]
  );

  const trackFAQItemExpand = useCallback(
    (faqCategory: string, faqQuestionId: string) => {
      posthog?.capture('marketing_faq_item_expand', {
        faq_category: faqCategory,
        faq_question_id: faqQuestionId,
        page_path: pathname
      });
    },
    [posthog, pathname]
  );

  return {
    trackCTAClick,
    trackExternalLinkClick,
    trackExternalLinkModalShown,
    trackExternalLinkConfirmed,
    trackScrollDepth,
    trackSectionView,
    trackFAQSearch,
    trackFAQItemExpand
  };
}
