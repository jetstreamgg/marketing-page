'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { type ServiceConsent, type ServiceId } from '../constants';
import { useCookieConsent } from '../context/CookieConsentContext';
import { applyPostHogConsent } from '../providers/PostHogProvider';
import { ExternalLink } from './ExternalLink';
import { Text } from './Typography';
import { getFooterLinks } from '../lib/utils';

type ServiceConfig = { id: ServiceId; label: string; description: string };

const SERVICES: ServiceConfig[] = [
  { id: 'posthog', label: 'PostHog', description: 'Usage analytics' },
  { id: 'cookie3', label: 'Cookie3', description: 'Web3 marketing analytics' },
  { id: 'google_analytics', label: 'Google Analytics', description: 'Website analytics' }
];

function allServices(value: boolean): ServiceConsent {
  return { posthog: value, cookie3: value, google_analytics: value };
}

export function CookieConsentBanner() {
  const { consent, bannerVisible, bannerView, setBannerView, setConsent } = useCookieConsent();
  const [delayComplete, setDelayComplete] = useState(false);

  // Local toggle state for the manage view
  const [toggles, setToggles] = useState<ServiceConsent>(() => consent ?? allServices(true));

  // Sync toggles when banner reopens OR consent changes while banner is open
  // (e.g. user changed consent on another subdomain and switched back to this tab)
  const prevVisibleRef = useRef(bannerVisible);
  const prevConsentRef = useRef(consent);

  const bannerJustOpened = bannerVisible && !prevVisibleRef.current;
  const consentChangedWhileOpen =
    bannerVisible &&
    (consent?.posthog !== prevConsentRef.current?.posthog ||
      consent?.cookie3 !== prevConsentRef.current?.cookie3 ||
      consent?.google_analytics !== prevConsentRef.current?.google_analytics);

  if (bannerJustOpened || consentChangedWhileOpen) {
    const synced = consent ?? allServices(true);
    if (
      synced.posthog !== toggles.posthog ||
      synced.cookie3 !== toggles.cookie3 ||
      synced.google_analytics !== toggles.google_analytics
    ) {
      setToggles(synced);
    }
  }
  prevVisibleRef.current = bannerVisible;
  prevConsentRef.current = consent;

  const privacyLink = useMemo(() => {
    return getFooterLinks().find(l => /privacy/i.test(l.name));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDelayComplete(true), 3_500);
    return () => clearTimeout(timer);
  }, []);

  const applyConsent = useCallback(
    (newConsent: ServiceConsent) => {
      applyPostHogConsent(newConsent.posthog);
      setConsent(newConsent);

      // Third-party scripts can't be unloaded from memory once executed.
      // If any were enabled and are now disabled, reload to ensure they stop.
      if (
        (consent?.cookie3 && !newConsent.cookie3) ||
        (consent?.google_analytics && !newConsent.google_analytics)
      ) {
        window.location.reload();
      }
    },
    [setConsent, consent]
  );

  const handleAcceptAll = useCallback(() => applyConsent(allServices(true)), [applyConsent]);
  const handleSave = useCallback(() => applyConsent(toggles), [applyConsent, toggles]);

  const handleToggle = useCallback((id: ServiceId) => {
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const visible = bannerVisible && (consent !== null || delayComplete);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Cookie consent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 right-3 z-[999] min-w-[300px] max-w-[400px] rounded-xl border border-white/10 bg-dark p-5 tablet:right-5 desktop:right-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            {bannerView === 'default' ? (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Text variant="caption" className="text-white/60">
                  We use analytics cookies, including third-party services, to understand how this site is
                  used and to improve it. No personal data is collected.
                  {privacyLink && (
                    <>
                      {' '}
                      For more information, see our{' '}
                      <ExternalLink
                        href={privacyLink.url}
                        skipConfirm
                        className="underline underline-offset-2"
                      >
                        {privacyLink.name}
                      </ExternalLink>
                      .
                    </>
                  )}
                </Text>
                <Text variant="caption" className="mt-3 text-white/60">
                  You can change your preference at any time via Cookie Settings in the footer.
                </Text>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setBannerView('manage')}
                    className="rounded-lg border border-white/20 px-4 py-2 text-[13px] font-medium text-white/60 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Manage
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="rounded-lg bg-white/10 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/20"
                  >
                    Accept All
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="manage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Text variant="caption-medium" className="text-white">
                  Manage cookie preferences
                </Text>
                <Text variant="caption" className="mt-2 text-white/40">
                  Choose which analytics services you allow. You can update these at any time.
                </Text>
                <div className="mt-4 flex flex-col gap-3">
                  {SERVICES.map(service => (
                    <label key={service.id} className="flex items-center justify-between">
                      <div>
                        <Text variant="caption-medium" className="text-white/80">
                          {service.label}
                        </Text>
                        <Text variant="caption" className="text-white/40">
                          {service.description}
                        </Text>
                      </div>
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={toggles[service.id]}
                        onChange={() => handleToggle(service.id)}
                      />
                      <div className="relative h-6 w-11 shrink-0 cursor-pointer rounded-full bg-white/10 transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white/40 after:transition-transform peer-checked:bg-[#5116CC] peer-checked:after:translate-x-5 peer-checked:after:bg-white peer-focus-visible:ring-2 peer-focus-visible:ring-white/50" />
                    </label>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setBannerView('default')}
                    className="rounded-lg border border-white/20 px-4 py-2 text-[13px] font-medium text-white/60 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSave}
                    className="rounded-lg bg-white/10 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/20"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
