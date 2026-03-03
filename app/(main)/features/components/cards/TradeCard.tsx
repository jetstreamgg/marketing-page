import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard, LiFeatureCard } from '../FeaturesPageCard';
import ProductsTrade from '@/public/products_trade.png';
import ProductsTradeMobile from '@/public/products_trade_mobile.png';
import { FetchedData } from '@/app/(main)/fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';

export const TradeCard = ({ data }: { data: FetchedData }) => {
  const { bpi, isLoading: bpiLoading } = useBreakpointIndex();

  return (
    <FeaturesPageCard
      id="trade"
      tabs={[
        {
          label: 'Trade crypto for USDS',
          title: 'Trade crypto for USDS',
          content: (
            <>
              <TextFeatureCard>
                Directly trade popular tokens for Sky ecosystem tokens using permissionless and non-custodial
                pools.
              </TextFeatureCard>
              <TextFeatureCard>
                Trade USDC, USDT, ETH and SKY for USDS, and vice versa. Use USDS to:
              </TextFeatureCard>
              <ul className="list-disc pl-7">
                <LiFeatureCard>Access Sky Token Rewards and support Sky Stars</LiFeatureCard>
                <LiFeatureCard>Access the Sky Savings Rate to accumulate additional USDS</LiFeatureCard>
              </ul>
              <TextFeatureCard>
                Trade USDC, USDT, ETH and USDS for SKY, and vice versa. Use SKY to:
              </TextFeatureCard>
              <ul className="list-disc pl-7">
                <LiFeatureCard>
                  Access the Staking Engine, where you can get Staking Rewards, borrow USDS, and delegate your
                  voting power
                </LiFeatureCard>
                <LiFeatureCard>Participate directly in decentralized onchain voting</LiFeatureCard>
              </ul>
              <TextFeatureCard>
                With Sky.money, it&apos;s easy to quickly trade, utilizing smart contracts on the blockchain
                instead of relying on centralized entities.
              </TextFeatureCard>
              <TextFeatureCard>
                Trades are powered by{' '}
                <ExternalLink href="https://swap.cow.fi/" className="text-black/80 underline">
                  CoW Swap
                </ExternalLink>
                .
              </TextFeatureCard>
            </>
          ),
          stats: [
            { id: 'price', label: 'ETH/USDS', value: data.ethPrice },
            { id: 'price', label: 'USDC/USDS', value: data.usdcPrice },
            { id: 'price', label: 'USDT/USDS', value: data.usdtPrice }
          ],
          buttonCta: 'Start Trading',
          url: `?widget=trade`,
          buttonVariant: 'sunset-1',
          illustration: !bpiLoading ? (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsTradeMobile : ProductsTrade}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        }
      ]}
    />
  );
};
