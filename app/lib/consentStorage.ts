import { CONSENT_STORAGE_KEY, CONSENT_STORAGE_KEY_V2, type ServiceConsent } from '../constants';

const CONSENT_COOKIE_NAME = 'sky_consent';

function allServices(value: boolean): ServiceConsent {
  return { posthog: value, cookie3: value, google_analytics: value };
}

/**
 * Determine the top-level domain for cross-subdomain cookies.
 * Returns '.sky.money' in production, '' on localhost.
 */
function getCookieDomain(): string {
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') return '';
  const parts = hostname.split('.');
  return parts.length >= 2 ? `.${parts.slice(-2).join('.')}` : '';
}

/**
 * Read the raw sky_consent cookie value.
 */
function readCookieRaw(): string | null {
  if (typeof document === 'undefined') return null;
  for (const c of document.cookie.split(';')) {
    const trimmed = c.trim();
    if (trimmed.startsWith(`${CONSENT_COOKIE_NAME}=`)) {
      return trimmed.slice(CONSENT_COOKIE_NAME.length + 1);
    }
  }
  return null;
}

/**
 * Write JSON consent data to the cross-subdomain cookie.
 * This is a consent-management cookie (strictly necessary) — exempt from consent requirements.
 */
function writeCookie(data: Record<string, boolean>): void {
  if (typeof document === 'undefined') return;
  const domain = getCookieDomain();
  const domainAttr = domain ? `; domain=${domain}` : '';
  const value = encodeURIComponent(JSON.stringify(data));
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}${domainAttr}; path=/; max-age=31536000; SameSite=Lax`; // 1 year
}

/**
 * Read consent from the cross-subdomain sky_consent cookie.
 * Single source of truth for consent state across all *.sky.money subdomains.
 *
 * On first load, migrates legacy localStorage consent (v1 or v2) to the cookie.
 * Keys not present in the cookie default to false.
 * Returns null when no consent has been recorded (pending state).
 */
export function getStoredConsent(): ServiceConsent | null {
  if (typeof document === 'undefined') return null;

  const raw = readCookieRaw();
  if (raw) {
    try {
      const data = JSON.parse(decodeURIComponent(raw));
      if (typeof data === 'object' && data !== null) {
        return {
          posthog: data.posthog === true,
          cookie3: data.cookie3 === true,
          google_analytics: data.google_analytics === true
        };
      }
    } catch {
      // Corrupted cookie — treat as no consent
    }
  }

  // Migrate legacy localStorage → cookie (one-time)
  if (typeof window !== 'undefined') {
    const migrated = migrateLegacyStorage();
    if (migrated) {
      saveConsent(migrated);
      return migrated;
    }
  }

  return null;
}

/**
 * Migrate legacy localStorage consent (v1 string or v2 JSON) to cookie.
 * Removes legacy keys after reading. Returns null if nothing to migrate.
 */
function migrateLegacyStorage(): ServiceConsent | null {
  // Try v2 first
  try {
    const v2 = localStorage.getItem(CONSENT_STORAGE_KEY_V2);
    if (v2) {
      const parsed = JSON.parse(v2) as ServiceConsent;
      localStorage.removeItem(CONSENT_STORAGE_KEY_V2);
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return parsed;
    }
  } catch {
    localStorage.removeItem(CONSENT_STORAGE_KEY_V2);
  }

  // Try v1
  const v1 = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (v1 === 'accepted' || v1 === 'rejected') {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    return allServices(v1 === 'accepted');
  }
  if (v1) {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  }

  return null;
}

/**
 * Save consent to the cross-subdomain cookie.
 * Merges with existing cookie data so other apps' keys aren't lost
 * (e.g. tarmac writes posthog, marketing writes cookie3 + google_analytics).
 * Also cleans up legacy localStorage if present.
 */
export function saveConsent(consent: ServiceConsent): void {
  if (typeof document === 'undefined') return;

  // Read existing cookie to preserve keys from other apps
  let existing: Record<string, boolean> = {};
  const raw = readCookieRaw();
  if (raw) {
    try {
      const parsed = JSON.parse(decodeURIComponent(raw));
      if (typeof parsed === 'object' && parsed !== null) {
        existing = parsed;
      }
    } catch {
      // Corrupted — overwrite
    }
  }

  writeCookie({ ...existing, ...consent });

  // Clean up legacy localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CONSENT_STORAGE_KEY_V2);
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  }
}

/**
 * Clear all consent (delete the cookie).
 */
export function clearConsent(): void {
  if (typeof document === 'undefined') return;
  const domain = getCookieDomain();
  const domainAttr = domain ? `; domain=${domain}` : '';
  document.cookie = `${CONSENT_COOKIE_NAME}=; path=/; max-age=0${domainAttr}`;

  if (typeof window !== 'undefined') {
    localStorage.removeItem(CONSENT_STORAGE_KEY_V2);
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  }
}
