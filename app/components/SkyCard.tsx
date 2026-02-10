import { TokenCard } from './TokenCard';
import { Text } from './Typography';
import { ButtonArrow } from './ui/button';
import { Link } from './ui/link';
import CoinSky from '@/public/coin_sky.png';
import { BP, useBreakpointIndex } from '../hooks/useBreakpointIndex';
import { useState } from 'react';
import MkrToSky from '@/public/mkr_to_sky.png';
import { TokenModal } from './TokenModal';
import { FetchedData } from '@/app/(main)/fetchData';
import { useSkyUrl } from '../hooks/useSkyUrl';
import { ExternalLink } from './ExternalLink';
import { useMarketingAnalytics, CTAType } from '../hooks/useMarketingAnalytics';

export const SkyCard = ({ data }: { data: FetchedData }) => {
  const { bpi } = useBreakpointIndex();
  const [open, setOpen] = useState(false);
  const { url } = useSkyUrl('/?widget=upgrade&source_token=MKR');
  const { trackCTAClick } = useMarketingAnalytics();

  return (
    <>
      <TokenCard
        title="Rate 1:24,000"
        description="MKR to SKY"
        token={CoinSky}
        alt="SKY"
        content={
          <>
            <Text variant="p3-medium">SKY. The upgrade of MKR.</Text>
            <Text variant="p3" className="mt-1 text-black/80">
              SKY is now the sole governance token of Sky Protocol, representing an evolution in
              accessibility, user experience and scalability.
            </Text>
          </>
        }
        footer={
          <>
            <ButtonArrow variant="celestial-3" size="sm" onClick={() => setOpen(true)}>
              Learn More
            </ButtonArrow>
            <Link
              href={url}
              icon="arrowNoBg"
              target="_blank"
              onClick={() => trackCTAClick(CTAType.TokenUpgradeSky, url, 'upgrade')}
            >
              {bpi <= BP.md ? 'Upgrade' : 'Upgrade MKR to SKY'}
            </Link>
          </>
        }
      />
      <TokenModal
        open={open}
        setOpen={setOpen}
        showRisks={false}
        heading="SKY."
        emphasisHeading="The upgrade of MKR."
        content={
          <Text variant="p1">
            Access rewards and reserve your voice in governance with SKY, the technical and functional
            evolution of MKR. 
            <br />
            <br />
            SKY inherits the governance rights and privileges previously held by MKR. Use SKY to vote directly
            or to delegate your voting power, just as you once did with MKR.
            <br />
            <br />
            Upgrading in a timely fashion ensures reduced governance complexity and a more effective,
            efficient and resilient ecosystem for all. For upgrade details and step-by-step upgrade
            instructions, please visit the{' '}
            <ExternalLink href={'https://upgrademkrtosky.sky.money/'} className="text-black/80 underline">
              MKR to SKY Upgrade Hub.
            </ExternalLink>
            <br />
            <br />
            Upgrading is optional.
          </Text>
        }
        // TODO: Add link to risks page
        href="#"
        footer={
          <ExternalLink
            href={url}
            noStyle
            onClick={() => trackCTAClick(CTAType.TokenUpgradeSky, url, 'upgrade')}
          >
            <ButtonArrow variant="celestial-3" size="sm">
              Upgrade MKR to SKY
            </ButtonArrow>
          </ExternalLink>
        }
        illustration={MkrToSky}
        imgAlt="Illustration of upgrading MKR to SKY"
        labelOne="SKY price"
        statOne={data.skyPrice}
        labelTwo="MKR to SKY Rate"
        statTwo="1:24,000"
      />
    </>
  );
};
