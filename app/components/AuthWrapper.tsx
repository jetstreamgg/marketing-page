'use client';

import * as Sentry from '@sentry/nextjs';
import { useVpnCheck } from '@jetstreamgg/sky-hooks';
import { ReactNode, useEffect, useMemo, useRef } from 'react';
import { useVpnAnalytics } from '../hooks/useVpnAnalytics';
import { UnauthorizedPage } from './checks/UnauthorizedPage';

// It needs to be inside the wagmi & rainbow provider to get the address from the hook if checking address
// We only check VPN, not address
export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const authUrl = process.env.NEXT_PUBLIC_AUTH_URL || '';

  const { data: vpnData, isLoading: vpnIsLoading, error: vpnError } = useVpnCheck({ authUrl });
  const { trackVpnCheckCompleted } = useVpnAnalytics();
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    if (vpnError) {
      Sentry.captureException(vpnError, {
        level: 'warning',
        tags: { type: 'auth_error', check: 'vpn' }
      });
    }
  }, [vpnError]);

  const loaded = vpnData || vpnError;

  useEffect(() => {
    if (!loaded || hasTrackedRef.current) return;
    hasTrackedRef.current = true;

    const result = vpnError
      ? 'error'
      : vpnData?.isConnectedToVpn
        ? 'vpn_blocked'
        : vpnData?.isRestrictedRegion
          ? 'region_blocked'
          : 'allowed';

    trackVpnCheckCompleted({
      isVpn: vpnData?.isConnectedToVpn ?? null,
      isRestrictedRegion: vpnData?.isRestrictedRegion ?? null,
      countryCode: vpnData?.countryCode ?? null,
      result
    });
  }, [loaded, vpnData, vpnError, trackVpnCheckCompleted]);

  const isConnectedToVpn = vpnData?.isConnectedToVpn;

  const isAllowed = useMemo(
    () => !vpnIsLoading && !isConnectedToVpn && !vpnError,
    [vpnIsLoading, isConnectedToVpn, vpnError]
  );

  return loaded && !isAllowed ? (
    <UnauthorizedPage
      vpnData={{ isConnectedToVpn, vpnIsLoading, vpnError, countryCode: vpnData?.countryCode }}
    />
  ) : (
    <>{children}</>
  );
};
