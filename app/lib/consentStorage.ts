import { CONSENT_STORAGE_KEY, CONSENT_STORAGE_KEY_V2, type ServiceConsent } from '../constants';

function allServices(value: boolean): ServiceConsent {
  return { posthog: value, cookie3: value, google_analytics: value };
}

/**
 * Read granular consent from localStorage.
 * Falls back to migrating the legacy v1 string key if v2 is absent.
 * Returns null when no consent has been recorded (pending state).
 */
export function getStoredConsent(): ServiceConsent | null {
  if (typeof window === 'undefined') return null;

  const v2 = localStorage.getItem(CONSENT_STORAGE_KEY_V2);
  if (v2) {
    try {
      return JSON.parse(v2) as ServiceConsent;
    } catch {
      // Corrupted — treat as no consent
      localStorage.removeItem(CONSENT_STORAGE_KEY_V2);
      return null;
    }
  }

  // Migrate v1 → v2
  const v1 = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (v1 === 'accepted' || v1 === 'rejected') {
    const migrated = allServices(v1 === 'accepted');
    localStorage.setItem(CONSENT_STORAGE_KEY_V2, JSON.stringify(migrated));
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    return migrated;
  }

  return null;
}

export function saveConsent(consent: ServiceConsent): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_STORAGE_KEY_V2, JSON.stringify(consent));
  // Clean up legacy key if it still exists
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}

export function clearConsent(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CONSENT_STORAGE_KEY_V2);
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}
