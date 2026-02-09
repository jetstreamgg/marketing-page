'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePostHog } from 'posthog-js/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCookieConsent } from '../context/CookieConsentContext';
import { ExternalLink } from './ExternalLink';
import { Text } from './Typography';
import { getFooterLinks } from '../lib/utils';

export function CookieConsentBanner() {
  const { consent, bannerVisible, setConsent } = useCookieConsent();
  const posthog = usePostHog();
  const [delayComplete, setDelayComplete] = useState(false);

  const privacyLink = useMemo(() => {
    return getFooterLinks().find(l => /privacy/i.test(l.name));
  }, []);

  useEffect(() => {
    const delay = 3_500;
    const timer = setTimeout(() => setDelayComplete(true), delay);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = useCallback(() => {
    setConsent('accepted');
    posthog?.opt_in_capturing();
  }, [setConsent, posthog]);

  const handleReject = useCallback(() => {
    // Stop PostHog capturing and clear any stored data.
    // With cookieless_mode: 'on_reject', opt_out_capturing() switches to cookieless
    // for the remainder of this session. On next page load, PostHog won't initialize
    // at all for rejected users (checked before posthog.init in PostHogProvider).
    posthog?.opt_out_capturing();
    posthog?.reset();
    setConsent('rejected');
  }, [setConsent, posthog]);

  return (
    <AnimatePresence>
      {bannerVisible && (consent !== 'pending' || delayComplete) && (
        <motion.div
          role="region"
          aria-label="Cookie consent"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 right-3 z-[999] min-h-[140px] min-w-[300px] max-w-[400px] rounded-xl border border-white/10 bg-dark p-5 tablet:right-5 desktop:right-10"
        >
          <Text variant="caption" className="text-white/60">
            We use analytics cookies, including third-party services, to understand how this site is used and
            to improve it. No personal data is collected.
            {privacyLink && (
              <>
                {' '}
                For more information, see our{' '}
                <ExternalLink href={privacyLink.url} skipConfirm className="underline underline-offset-2">
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
              onClick={handleReject}
              className="rounded-lg border border-white/20 px-4 py-2 text-[13px] font-medium text-white/60 transition-colors hover:border-white/40 hover:text-white"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-white/10 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-white/20"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
