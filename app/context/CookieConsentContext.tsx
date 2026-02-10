'use client';

import React, { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import type { ServiceConsent } from '../constants';
import { getStoredConsent, saveConsent } from '../lib/consentStorage';

export type BannerView = 'default' | 'manage';

interface CookieConsentContextProps {
  readonly consent: ServiceConsent | null;
  readonly bannerVisible: boolean;
  readonly bannerView: BannerView;
  readonly setBannerView: (view: BannerView) => void;
  readonly setConsent: (consent: ServiceConsent) => void;
  readonly showBanner: () => void;
  readonly hideBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextProps | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ServiceConsent | null>(getStoredConsent);
  const [bannerVisible, setBannerVisible] = useState(() => getStoredConsent() === null);
  const [bannerView, setBannerView] = useState<BannerView>('default');

  const setConsent = useCallback((newConsent: ServiceConsent) => {
    setConsentState(newConsent);
    saveConsent(newConsent);
    setBannerVisible(false);
  }, []);

  const showBanner = useCallback(() => {
    setBannerView('default');
    setBannerVisible(true);
  }, []);

  const hideBanner = useCallback(() => setBannerVisible(false), []);

  return (
    <CookieConsentContext.Provider
      value={{ consent, bannerVisible, bannerView, setBannerView, setConsent, showBanner, hideBanner }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
