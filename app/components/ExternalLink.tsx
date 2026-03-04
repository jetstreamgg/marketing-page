import posthog from 'posthog-js';
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import { ALLOWED_DOMAINS, RESTRICTED_DOMAINS } from '../constants';
import { useMarketingAnalytics, ExternalLinkCategory } from '../hooks/useMarketingAnalytics';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
  noStyle?: boolean;
  skipConfirm?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /** Optional category for analytics. Auto-detected from URL if not provided. */
  linkCategory?: ExternalLinkCategory;
}

export function ExternalLink({
  href,
  children,
  target = '_blank',
  className,
  noStyle = false,
  skipConfirm,
  onClick,
  linkCategory
}: ExternalLinkProps) {
  const { setExternalLinkModalOpened, setExternalLinkModalUrl } = useAppContext();
  const { trackExternalLinkClick } = useMarketingAnalytics();

  // Check if this link goes to the app (CTA) vs external site
  const appUrl = process.env.NEXT_PUBLIC_WEBAPP_URL || 'https://app.sky.money';
  const isAppLink = (() => {
    try {
      return new URL(href).hostname === new URL(appUrl).hostname;
    } catch {
      return false;
    }
  })();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Track external link clicks, but skip app links (CTAs handle their own tracking)
    if (!isAppLink) {
      trackExternalLinkClick(href, linkCategory);
    }

    // Call optional onClick handler (e.g., for CTA-specific tracking)
    onClick?.(e);

    if (
      !skipConfirm &&
      (RESTRICTED_DOMAINS.some(domain => href.includes(domain)) ||
        !ALLOWED_DOMAINS.some(domain => href.includes(domain)))
    ) {
      e.preventDefault();
      setExternalLinkModalUrl(href);
      setExternalLinkModalOpened(true);
      return;
    }

    // For app links, append PostHog identity params at click time
    // (PostHog may not be loaded during render, so we do this here)
    if (isAppLink) {
      const finalUrl = appendPostHogParams(href);
      if (finalUrl !== href) {
        e.preventDefault();
        window.open(finalUrl, target);
      }
    }
  };

  return (
    <a
      className={noStyle ? '' : cn('text-white transition-colors hover:text-[#947EFF]', className)}
      href={href}
      target={target}
      onClick={handleLinkClick}
    >
      {children}
    </a>
  );
}

/**
 * Appends PostHog identity params to a URL for cross-domain attribution.
 * Called at click time (not render time) because PostHog may not be loaded during render.
 */
function appendPostHogParams(url: string): string {
  try {
    const distinctId = posthog.get_distinct_id?.();
    const sessionId = posthog.get_session_id?.();

    // Don't append if PostHog isn't initialized or IDs are the cookieless placeholder
    if (!distinctId || distinctId === '$posthog_cookieless') return url;

    const urlObj = new URL(url);
    if (distinctId) urlObj.searchParams.set('__ph_id', distinctId);
    if (sessionId) urlObj.searchParams.set('__ph_session_id', sessionId);
    return urlObj.toString();
  } catch {
    return url;
  }
}
