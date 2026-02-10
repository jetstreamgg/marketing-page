'use client';

import { useAppContext } from '../context/AppContext';
import { Dialog, DialogContent } from '@/app/components/ui/dialog';
import { Heading, Text } from '@/app/components/Typography';
import { useCallback, useEffect } from 'react';
import { ButtonArrow, ButtonClose } from './ui/button';
import { Warning } from './icons';
import { ExternalLink } from './ExternalLink';
import { getTermsLink } from '../lib/utils';
import { useMarketingAnalytics } from '../hooks/useMarketingAnalytics';

export const ExternalLinkModal: React.FC = () => {
  const {
    externalLinkModalOpened,
    externalLinkModalUrl,
    setExternalLinkModalOpened,
    setExternalLinkModalUrl
  } = useAppContext();
  const { trackExternalLinkModalShown, trackExternalLinkConfirmed } = useMarketingAnalytics();

  // Track when modal is shown
  useEffect(() => {
    if (externalLinkModalOpened && externalLinkModalUrl) {
      trackExternalLinkModalShown(externalLinkModalUrl);
    }
  }, [externalLinkModalOpened, externalLinkModalUrl, trackExternalLinkModalShown]);

  const handleCancel = useCallback(
    (change: boolean) => {
      setExternalLinkModalUrl('');
      setExternalLinkModalOpened(change);
    },
    [setExternalLinkModalOpened, setExternalLinkModalUrl]
  );

  const handleConfirm = useCallback(() => {
    trackExternalLinkConfirmed(externalLinkModalUrl);
    setExternalLinkModalOpened(false);
    window.open(externalLinkModalUrl, '_blank');
  }, [externalLinkModalUrl, setExternalLinkModalOpened, trackExternalLinkConfirmed]);

  const TERMS_LINK = getTermsLink();

  return (
    <Dialog open={externalLinkModalOpened} onOpenChange={handleCancel}>
      <DialogContent
        className="terms-modal-background flex w-full flex-col items-center justify-center rounded-none p-5 tablet:w-[480px] tablet:rounded-2xl tablet:p-10 desktop-xl:w-[600px] desktop-xl:p-10"
        overlayClassName="z-[1000]"
        hideCloseArrow
      >
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-sunset-1">
          <Warning />
        </div>
        <Heading tag="h5" className="text-center text-white">
          Leaving Our Website
        </Heading>
        <Text variant="ui-medium" className="text-center text-[#9593A6]">
          You are about to leave our website and enter a site controlled by an independent third party within
          the Sky Ecosystem. We disclaim any liability for your interaction with this, and any other, external
          sites hosted under sky.money subdomains. For more information, please visit our{' '}
          <ExternalLink skipConfirm href={TERMS_LINK[0].url}>
            {TERMS_LINK[0].name}
          </ExternalLink>
          .
        </Text>
        <Text variant="ui-medium" className="text-center text-[#9593A6]">
          If you wish to proceed, click “Continue.” If not, click “Cancel” to remain on our site.
        </Text>
        <div className="mt-4 flex justify-between space-x-4">
          <ButtonClose onClick={() => handleCancel(false)} variant="sunset-1">
            Cancel
          </ButtonClose>
          <ButtonArrow onClick={handleConfirm} variant="twilight-1">
            Continue
          </ButtonArrow>
        </div>
      </DialogContent>
    </Dialog>
  );
};
