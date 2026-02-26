import Image from 'next/image';
import { FeaturesPageCard, LiFeatureCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsUpgrade from '@/public/features-upgrade.png';
import { FetchedData } from '@/app/(main)/fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';

export const UpgradeCard = ({ data }: { data: FetchedData }) => (
  <FeaturesPageCard
    id="upgrade"
    tabs={[
      {
        label: 'Upgrade to USDS and SKY',
        title: 'Upgrade to USDS and SKY',
        content: (
          <>
            <TextFeatureCard>
              Unlock all the decentralised Sky Protocol has to offer by easily and instantly upgrading your
              DAI to USDS at a rate of 1:1, and your MKR to SKY at a rate of 1: 24,000, subject to the Delayed
              Upgrade Penalty.*
            </TextFeatureCard>
            <TextFeatureCard>
              USDS powers the open Sky ecosystem, providing new ways for you to have more rewarding crypto
              experiences. Use USDS to:
            </TextFeatureCard>
            <ul className="list-disc pl-7">
              <LiFeatureCard>Access Sky Token Rewards and support Sky Stars</LiFeatureCard>
              <LiFeatureCard>Access the Sky Savings Rate to accumulate additional USDS</LiFeatureCard>
            </ul>
            <TextFeatureCard>
              SKY inherits the governance functionalities previously held by MKR, and represents an evolution
              in ease of use. Use SKY to:
            </TextFeatureCard>
            <ul className="list-disc pl-7">
              <LiFeatureCard>
                Vote directly or delegate your voting power, just as you did with MKR, via the Sky Governance
                Voting Portal.
              </LiFeatureCard>
              <LiFeatureCard>
                Access the Staking Engine of the Sky Protocol to create a position that enables you to receive
                Staking Rewards, generate and borrow USDS against your supplied SKY, and delegate the voting
                power the SKY token provides.
              </LiFeatureCard>
            </ul>
            <TextFeatureCard>
              Upgrade is a non-custodial feature. With Sky.money, you always remain in control of your funds.
            </TextFeatureCard>
            <TextFeatureCard>
              <span className="text-sm italic">
                *To facilitate a smooth and prompt transition, Sky Ecosystem Governance{' '}
                <ExternalLink
                  href="https://vote.makerdao.com/polling/QmTVd4iq"
                  className="text-black/80 underline"
                >
                  voted to introduce a time-based Delayed Upgrade Penalty
                </ExternalLink>
                , which will reduce the amount of SKY received per MKR upgraded, depending on when you choose
                to upgrade. For details, please visit the{' '}
                <ExternalLink href="https://upgrademkrtosky.sky.money" className="text-black/80 underline">
                  MKR to SKY Upgrade Hub
                </ExternalLink>
                .
              </span>
            </TextFeatureCard>
          </>
        ),
        stats: [
          { id: 'price', label: 'USDS Price', value: data.usdsPrice },
          { id: 'price', label: 'SKY Price', value: data.skyPrice }
        ],
        buttonCta: 'Upgrade',
        url: `?widget=upgrade`,
        buttonVariant: 'twilight-1',
        illustration: (
          <div className="h-full w-full p-4 tablet:py-0 tablet:pl-[25px] tablet:pr-0 desktop:pl-[49px] desktop:pr-[9px]">
            <div className="relative h-full w-full">
              <Image
                alt="Products upgrade"
                src={ProductsUpgrade}
                className="absolute w-full rounded-[40px] tablet:top-1/2 tablet:-translate-y-1/2"
                quality={100}
              />
            </div>
          </div>
        )
      }
    ]}
  />
);
