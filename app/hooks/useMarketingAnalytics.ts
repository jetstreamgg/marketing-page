'use client';

import { usePostHog } from 'posthog-js/react';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export type CTAType =
  | 'launch_app_header'
  | 'launch_app_hero'
  | 'launch_app_footer'
  | 'launch_app_faq'
  | 'launch_app_features'
  | 'token_upgrade_sky'
  | 'token_upgrade_usds'
  | 'feature_upgrade'
  | 'feature_trade'
  | 'feature_rewards'
  | 'feature_savings'
  | 'feature_stake'
  | 'feature_expert'
  | 'feature_skylink';

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
    (linkUrl: string) => {
      posthog?.capture('marketing_external_link_click', {
        link_url: linkUrl,
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
