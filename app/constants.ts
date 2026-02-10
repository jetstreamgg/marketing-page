const SUNRISE_DELAY = 2;

export const SUNRISE_VIDEO_DELAY = 5.2; //loop back here after home video ends (seconds)

export const storageKey = 'isFirstPlay';

export const getSunriseDelay = () => {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    if (sessionStorage.getItem(storageKey) === 'true') {
      return 0;
    }
  }
  return SUNRISE_DELAY;
};

export const CONSENT_STORAGE_KEY = 'cookie_consent';
export const CONSENT_STORAGE_KEY_V2 = 'cookie_consent_v2';

export type ServiceId = 'posthog' | 'cookie3' | 'google_analytics';
export type ServiceConsent = Record<ServiceId, boolean>;

export const ALLOWED_DOMAINS = ['sky.money', 'app.sky.money', 'docs.sky.money'];
// Subdomains that require explicit user acknowledgment before navigation
export const RESTRICTED_DOMAINS = ['developers.sky.money'];
