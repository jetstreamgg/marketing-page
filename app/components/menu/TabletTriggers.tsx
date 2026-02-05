import * as React from 'react';
import { ExternalLink } from '../ExternalLink';
import { ButtonArrow } from '@/app/components/ui/button';
import { IconButtonOpenClose } from '@/app/components/ui/button-client';
import { Tone } from '@/app/context/AppContext';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { useMarketingAnalytics } from '@/app/hooks/useMarketingAnalytics';

export const TabletTriggers = ({
  isOpen,
  setIsOpen,
  tone
}: {
  isOpen: boolean;
  tone: Tone;
  setIsOpen: (value: boolean) => void;
}) => {
  const { url } = useSkyUrl();
  const { trackCTAClick } = useMarketingAnalytics();

  return (
    <div className="pointer-events-auto z-10 flex items-center justify-end space-x-2">
      <ExternalLink
        href={url}
        className={`${
          tone === 'light' ? 'text-white hover:text-white' : 'text-black hover:text-black'
        } hidden md:block`}
        onClick={() => trackCTAClick('launch_app_header', url)}
      >
        <ButtonArrow
          style={{ color: isOpen ? 'white' : undefined }}
          variant={isOpen || tone !== 'light' ? 'glass-dark' : 'glass-light-contrast-nobg'}
        >
          Launch App
        </ButtonArrow>
      </ExternalLink>
      <IconButtonOpenClose
        style={{ height: 56, width: 56 }}
        variant={tone === 'light' ? 'glass-light-nobg' : 'glass-dark-nobg'}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        stroke={tone === 'light' && !isOpen ? 'black' : 'white'}
      />
    </div>
  );
};
