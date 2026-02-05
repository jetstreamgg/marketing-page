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
  const isAppLink = href.startsWith(appUrl);

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
