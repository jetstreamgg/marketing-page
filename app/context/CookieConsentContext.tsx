'use client';

import React, { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { CONSENT_STORAGE_KEY } from '../constants';

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

interface CookieConsentContextProps {
  readonly consent: ConsentStatus;
  readonly bannerVisible: boolean;
  readonly setConsent: (status: ConsentStatus) => void;
  readonly showBanner: () => void;
  readonly hideBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextProps | undefined>(undefined);

function getStoredConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending';
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored === 'accepted' || stored === 'rejected') return stored;
  return 'pending';
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentStatus>(getStoredConsent);
  const [bannerVisible, setBannerVisible] = useState(() => getStoredConsent() === 'pending');

  const setConsent = useCallback((status: ConsentStatus) => {
    setConsentState(status);
    if (status === 'pending') {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    } else {
      localStorage.setItem(CONSENT_STORAGE_KEY, status);
    }
    setBannerVisible(false);
  }, []);

  const showBanner = useCallback(() => setBannerVisible(true), []);
  const hideBanner = useCallback(() => setBannerVisible(false), []);

  return (
    <CookieConsentContext.Provider value={{ consent, bannerVisible, setConsent, showBanner, hideBanner }}>
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
