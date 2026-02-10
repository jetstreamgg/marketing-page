'use client';

import { usePostHog } from 'posthog-js/react';
import { useCallback } from 'react';

type VpnCheckResult = 'allowed' | 'vpn_blocked' | 'region_blocked' | 'error';
type BlockReason = 'vpn_detected' | 'network_error' | 'restricted_region';

export function useVpnAnalytics() {
  const posthog = usePostHog();

  const trackVpnCheckCompleted = useCallback(
    (params: {
      isVpn: boolean | null;
      isRestrictedRegion: boolean | null;
      countryCode: string | null;
      result: VpnCheckResult;
    }) => {
      posthog?.capture('marketing_vpn_check_completed', {
        is_vpn: params.isVpn,
        is_restricted_region: params.isRestrictedRegion,
        country_code: params.countryCode,
        result: params.result
      });
    },
    [posthog]
  );

  const trackVpnBlockedPageView = useCallback(
    (params: { blockReason: BlockReason; countryCode: string | null }) => {
      posthog?.capture('marketing_vpn_blocked_page_view', {
        block_reason: params.blockReason,
        country_code: params.countryCode
      });
    },
    [posthog]
  );

  return {
    trackVpnCheckCompleted,
    trackVpnBlockedPageView
  };
}
