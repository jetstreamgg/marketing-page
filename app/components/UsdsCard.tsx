import { TokenCard } from './TokenCard';
import { Text } from './Typography';
import { ButtonArrow } from './ui/button';
import { Link } from './ui/link';
import CoinUsds from '@/public/coin_usds.png';
import { useState } from 'react';
import { TokenModal } from './TokenModal';
import DaiToUsds from '@/public/dai_to_usds.png';
import { FetchedData } from '@/app/(main)/fetchData';
import { useSkyUrl } from '../hooks/useSkyUrl';
import { ExternalLink } from './ExternalLink';
import { useMarketingAnalytics, CTAType } from '../hooks/useMarketingAnalytics';

export const UsdsCard = ({ data }: { data: FetchedData }) => {
  const [open, setOpen] = useState(false);
  const { url } = useSkyUrl('/?widget=upgrade&source_token=DAI');
  const { trackCTAClick } = useMarketingAnalytics();

  return (
    <>
      <TokenCard
        title="Rate 1:1"
        description="DAI to USDS"
        token={CoinUsds}
        alt="USDS"
        content={
          <>
            <Text variant="p3-medium">USDS. Designed to scale.</Text>
            <Text variant="p3" className="mt-2 text-black/80">
              The USDS stablecoin powers the open Sky ecosystem. It is the upgraded version of DAI, providing
              new ways for you to have more rewarding crypto experiences.
            </Text>
          </>
        }
        footer={
          <>
            <ButtonArrow variant="sunset-2" size="sm" onClick={() => setOpen(true)}>
              Learn More
            </ButtonArrow>
            <Link
              href={url}
              icon="arrowNoBg"
              target="_blank"
              onClick={() => trackCTAClick(CTAType.TokenUpgradeUsds, url, 'upgrade')}
            >
              Get USDS
            </Link>
          </>
        }
      />
      <TokenModal
        open={open}
        setOpen={setOpen}
        heading="USDS."
        emphasisHeading="Designed to scale."
        showRisks={false}
        content={
          <div>
            <Text variant="p3">
              USDS is the stablecoin of the decentralised Sky Protocol. It is the upgraded version of DAI,
              powering the open Sky ecosystem and providing new ways for you to have more rewarding crypto
              experiences.
              <br />
              <br />
              Get USDS by:
            </Text>
            <ul className="mt-1 list-disc pl-7 desktop:mt-2">
              <li>
                <Text variant="p3"> Trading DAI for USDS on the Sky Protocol</Text>
              </li>
              <li>
                <Text variant="p3">Trading USDC, USDT, ETH or SKY for USDS</Text>
              </li>
            </ul>
            <br />
            <Text variant="p3">Use USDS to:</Text>
            <ul className="mt-1 list-disc pl-7 desktop:mt-2">
              <li>
                <Text variant="p3">Access Sky Token Rewards</Text>
              </li>
              <li>
                <Text variant="p3">Access the Sky Savings Rate and accumulate additional USDS</Text>
              </li>
            </ul>
            <br />
            <Text variant="p3">
              With Sky.money, you always remain in control of your funds.
              <br />
              <br />
              Upgrading is optional.
            </Text>
          </div>
        }
        href="#"
        footer={
          <ExternalLink
            href={url}
            noStyle
            onClick={() => trackCTAClick(CTAType.TokenUpgradeUsds, url, 'upgrade')}
          >
            <ButtonArrow variant="sunset-1" size="sm">
              Get USDS
            </ButtonArrow>
          </ExternalLink>
        }
        illustration={DaiToUsds}
        imgAlt="Illustration of upgrading DAI to USDS"
        labelOne="With: USDS Get: SKY — Sky Token Rewards Rate"
        statOne={data.rewardsApy}
        labelTwo="Sky Savings Rate"
        statTwo={data.saveApy}
      />
    </>
  );
};
