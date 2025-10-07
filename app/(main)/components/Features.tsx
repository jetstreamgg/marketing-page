import Image from 'next/image';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { Heading, List, Text } from '@/app/components/Typography';
import { ButtonArrow } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { cn, getTermsLink } from '@/app/lib/utils';
import { FeatureCard } from '../../components/FeatureCard';
import { Transition } from '@/app/components/Transition';
import { useAutoClose } from '@/app/hooks/useAutoClose';
import { IconButtonPlus } from '@/app/components/ui/button-client';
import FeaturesSkyBackground from '@/public/FeaturesBackground.png';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { InternalLink } from '@/app/components/InternalLink';
import { ArrowRight } from '@/app/components/icons/ArrowRight';
import { useState, useEffect, useRef } from 'react';
import { Banner } from '@/app/components/Banner';
import { FetchedData } from '../fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';
import { PopoverRateInfo } from '@/app/components/PopoverRateInfo';
import { PopoverSealInfo } from '@/app/components/PopoverSealInfo';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';
import { useRandomL2Name } from '@/app/hooks/useRandomL2Name';

const FeatureCardStats = ({
  APY,
  TVL,
  APYDescription,
  TVLDescription,
  className,
  type,
  cardWidth,
  isMobile
}: {
  APY: string;
  TVL: string;
  APYDescription: string;
  shortenedAPYDescription?: string;
  TVLDescription: string;
  className?: string;
  type?: 'ssr' | 'str' | 'srr' | 'stusds';
  cardWidth: number;
  isMobile?: boolean;
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center space-y-2 desktop-xl:space-y-3">
        {APY && (
          <div className="flex w-full" style={isMobile ? {} : { maxWidth: `${cardWidth * 0.5}px` }}>
            <Heading tag="h6">
              <span className="text-black/40">{APYDescription}</span>{' '}
              <span>
                {APY}
                {type && (
                  <span className="ml-1 inline-flex align-baseline">
                    <PopoverRateInfo type={type} />
                  </span>
                )}
              </span>
            </Heading>
          </div>
        )}
        {TVL && (
          <Heading tag="h6">
            <span className="text-black/40">{cardWidth < 596 ? 'TVL' : TVLDescription}</span>{' '}
            <span>{TVL}</span>
          </Heading>
        )}
      </div>
    </div>
  );
};

const FeatureCardLg = ({
  descriptionElement,
  title,
  emphasis,
  postTextElement,
  postTitle,
  className,
  buttonText,
  buttonVariant,
  imgSrc,
  mobileImgSrc,
  imgWidths = [295, 295, 457],
  imgHeights = [621, 621, 849],
  featurePageId,
  APY,
  TVL,
  type,
  APYDescription,
  TVLDescription,
  href,
  reverse = true,
  isAlpha = false
}: {
  descriptionElement: React.ReactNode;
  title: string;
  emphasis: string;
  postTitle: string;
  postTextElement: React.ReactNode;
  className: string;
  buttonText: string;
  buttonVariant: any;
  imgSrc: any;
  mobileImgSrc: any;
  imgWidths?: number[];
  imgHeights?: number[];
  featurePageId: string;
  APY: string;
  TVL: string;
  type?: 'ssr' | 'str' | 'srr' | 'stusds';
  APYDescription: string;
  TVLDescription: string;
  href: string;
  reverse?: boolean;
  isAlpha?: boolean;
}) => {
  const { state, setState, setIsHover } = useAutoClose({ delay: 60000 });
  const { bpi, isLoading: bpiLoading } = useBreakpointIndex();
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = cardRef.current;
    if (!containerElement) return;
    const updateSize = () => {
      setCardWidth(containerElement.offsetWidth);
    };
    updateSize();

    // Create observer to watch for changes in card size
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerElement);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className={cn(
        'relative flex h-[740px] overflow-hidden border-0 p-0 tablet:h-[560px] desktop:h-[600px] desktop-xl:h-[820px]',
        className
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Transition
        state={state}
        postTransitionView={
          <div
            className={cn(
              className,
              'flex h-full max-w-[520px] flex-col justify-between p-5 text-white tablet:pt-6 desktop:p-7 desktop:pt-11 desktop-xl:max-w-[600px] desktop-xl:p-10'
            )}
          >
            <div className="space-y-3">
              <Heading tag="h5">{postTitle}</Heading>
              <div className="text-white/80">{postTextElement}</div>
              <div>
                <InternalLink href={`/features#${featurePageId}`}>
                  <div className="flex items-center gap-1">
                    <Text variant="ui-medium">Learn more</Text>
                    <ArrowRight className="h-[12px] w-[12px] pt-0.5" />
                  </div>
                </InternalLink>
              </div>
            </div>
          </div>
        }
      >
        <div className="p-5 tablet:pb-0 tablet:pr-0 tablet:pt-6 desktop:pl-7 desktop:pt-11 desktop-xl:pl-10 desktop-xl:pt-10">
          <div className="mb-3 mr-8 flex flex-row flex-wrap-reverse justify-between">
            <EmphasisHeading reverse={reverse} text={title} emphasisText={emphasis} tag="h5" />
            {isAlpha && (
              <div style={{ width: 'fit-content' }}>
                <Text
                  variant="ui-small"
                  className="mb-3 rounded-full bg-aurora-3 px-5 py-3.5 text-white/80 desktop:-mt-3"
                >
                  Alpha launch
                </Text>
              </div>
            )}
          </div>
          <div className="flex flex-col tablet:flex-row tablet:space-x-8">
            <div className="flex h-full w-full flex-col justify-between pb-7 tablet:w-1/2 desktop:w-[60%] desktop-xl:w-[50%]">
              <div className="z-10 space-y-3 tablet:mr-7">{descriptionElement}</div>
            </div>
            <div className="z-0 flex w-full justify-center tablet:absolute tablet:bottom-0 tablet:right-0 tablet:block tablet:w-fit desktop:w-[35%] 2xl:w-fit">
              <Image
                src={bpi === BP.sm ? mobileImgSrc : imgSrc}
                width={
                  bpiLoading ? 0 : bpi > BP.xl ? imgWidths[2] : bpi > BP.md ? imgWidths[1] : imgWidths[0]
                }
                height={
                  bpiLoading ? 0 : bpi > BP.xl ? imgHeights[2] : bpi > BP.md ? imgHeights[1] : imgHeights[0]
                }
                alt=""
              />
            </div>
            <FeatureCardStats
              APY={APY}
              TVL={TVL}
              cardWidth={cardWidth}
              APYDescription={APYDescription}
              TVLDescription={TVLDescription}
              isMobile={true}
              className="mt-7 block tablet:hidden"
              type={type}
            />
          </div>
        </div>
        <FeatureCardStats
          APY={APY}
          TVL={TVL}
          APYDescription={APYDescription}
          TVLDescription={TVLDescription}
          cardWidth={cardWidth}
          className="absolute left-5 z-10 hidden tablet:bottom-28 tablet:block desktop:bottom-28 desktop:left-7 desktop-xl:bottom-36 desktop-xl:left-10"
          type={type}
        />
      </Transition>
      <div className="absolute bottom-5 left-5 z-[999] flex gap-2 desktop:bottom-7 desktop:left-7 desktop-xl:bottom-10 desktop-xl:left-10">
        <IconButtonPlus
          variant={buttonVariant}
          onClick={() => setState(state === 'open' ? 'close' : 'open')}
          isOpen={state === 'open'}
        />
        <ExternalLink href={href} noStyle>
          <ButtonArrow variant={buttonVariant}>{buttonText}</ButtonArrow>
        </ExternalLink>
      </div>
    </Card>
  );
};

const LeadCard = ({ className }: { className: string }) => {
  const TERMS_LINK = getTermsLink();

  return (
    <Card className={cn(className, 'flex h-full flex-col gap-4 border-none bg-transparent p-3')}>
      <div className="flex-grow">
        <Heading tag="h3" className="mt-9 desktop:mt-14">
          Explore the Sky.money&nbsp;app
        </Heading>
        <Text variant="p3" className="mt-3 tablet:mt-4 desktop:mt-5 desktop-xl:mt-6">
          Sky.money is a non-custodial gateway to the decentralised Sky Protocol. <br />
          It is accessible to eligible users 24/7.
        </Text>
      </div>
      <Banner title={TERMS_LINK[0].name} url={TERMS_LINK[0].url} />
    </Card>
  );
};

const FeaturesBackground = () => (
  <div className="absolute inset-0 -z-20">
    <Image src={FeaturesSkyBackground} alt="Grayscale sky background" sizes="100vw" fill className="-z-20" />
    <div
      className="absolute -inset-1 -z-10 mix-blend-hard-light"
      // Gradient background
      style={{
        background:
          'linear-gradient(178deg, #FFF1FE -10.1%, #FFEBC4 6.08%, #FDB4FF 27.26%, #7F42FF 48.43%, #5AEBFF 64.61%, #FFF 90.79%)'
      }}
    />
    {/* Diffused white shapes */}
    <div className="absolute left-0 top-0 -z-10 h-[100px] w-full bg-gradient-to-b from-white to-white/0" />
    <div className="absolute left-0 top-0 -z-10 hidden h-[400px] w-full -translate-y-1/2 blur-[100px] desktop:block">
      <div className="h-full w-1/4 rounded-full bg-white" />
      <div className="absolute left-1/3 top-1/2 h-1/3 w-1/2 -translate-x-1/3 -translate-y-1/3 bg-white" />
      <div className="absolute -right-52 top-0 h-full w-1/3 bg-white" />
    </div>
  </div>
);

export function HomepageFeatures({ data }: { data: FetchedData }) {
  const randomL2Name = useRandomL2Name();
  const targetRef = useRef(null);
  useHeaderInView(targetRef, 'light');
  const { baseUrl } = useSkyUrl();
  const soonSectionClassName = 'h-[600px] tablet:h-[520px] desktop:h-[740px] desktop-xl:h-[780px]';

  return (
    <div ref={targetRef} className="relative h-full w-full overflow-hidden pt-5 desktop:pt-20">
      <FeaturesBackground />
      <div className="mb-5 flex w-full flex-col px-3 tablet:mb-8 tablet:w-full tablet:px-5 desktop:mb-20 desktop:px-9 desktop-xl:px-12">
        <EmphasisHeading
          text="Your new"
          emphasisText="favorite app"
          afterText="is here"
          tag="h1"
          textClassName="text-balance"
        />
        <div className="my-3 flex flex-col tablet:mb-4 tablet:mt-5 desktop:mt-6 desktop:flex-row desktop:items-center desktop:space-x-4 desktop-xl:mt-8">
          <Text variant="p3" className="mb-4 desktop:mb-0">
            Do more with your funds. Use Sky.money to experience the powerful features of the decentralized
            Sky Protocol, without giving up control.
          </Text>
          <InternalLink href="/features">
            <ButtonArrow variant="aurora-3" size="sm">
              View features
            </ButtonArrow>
          </InternalLink>
        </div>
      </div>
      {/* Container */}
      <div className="tablet:grid-rows-auto grid-rows-auto desktop:grid-rows-auto mb-24 grid auto-rows-min grid-cols-1 gap-5 p-1.5 tablet:grid-cols-2 tablet:p-2.5 desktop:gap-y-10 desktop:p-5 desktop-xl:p-10">
        {/* Section 1 */}
        <Card
          variant="glass"
          className="col-span-1 grid grid-cols-1 gap-5 rounded-3xl p-4 tablet:col-span-2 tablet:grid-cols-2"
        >
          <LeadCard className="col-span-1 tablet:col-span-1" />
          <FeatureCard
            href={`${baseUrl}/?widget=upgrade`}
            descriptionElement={
              <Text variant="p3">
                Unlock all the Sky Protocol has to offer by easily and instantly upgrading your DAI and MKR.
              </Text>
            }
            postTextElement={
              <Text variant="p2">
                Upgrade your DAI to USDS to access the many features of the decentralised Sky Protocol,
                including Sky Token Rewards and the Sky Savings Rate.
                <br />
                <br />
                Upgrade MKR to SKY to maintain the ability to participate in governance (vote and delegate),
                maintain access to Staking Rewards and avoid the Delayed Upgrade Penalty.
              </Text>
            }
            imgSrc="/products_upgrade.png"
            buttonVariant="sunset-3"
            buttonText="Upgrade"
            emphasis="Upgrade"
            title="to USDS and SKY"
            className="col-span-1 h-[500px] overflow-y-auto"
            cardClassName="col-span-2 tablet:col-span-1"
            featurePageId="upgrade"
          />
        </Card>

        {/* Section 2 */}
        <FeatureCardLg
          href={`${baseUrl}/?widget=trade`}
          descriptionElement={
            <Text variant="p3">
              Trade popular tokens for USDS and SKY, quickly and simply, utilising smart contracts on the
              blockchain instead of relying on centralised entities. Trades are powered by{' '}
              <ExternalLink href="https://swap.cow.fi/" className="text-black">
                CoW Swap
              </ExternalLink>
              .
            </Text>
          }
          postTextElement={
            <>
              <Text variant="p2" className="mb-4 desktop:mb-[18px] desktop-xl:mb-[20px]">
                Directly trade popular tokens for Sky ecosystem tokens at current market prices.
                <br />
              </Text>
              <ul className="list-disc pl-7">
                <li>
                  <Text variant="p2">
                    Trade USDC, USDT, ETH and SKY for USDS, and vice versa. Once you have USDS, you can use it
                    to access Sky Token Rewards and to access the Sky Savings Rate to accumulate more USDS.
                  </Text>
                </li>
                <li>
                  <Text variant="p2">
                    Trade USDC, USDT, ETH and USDS for SKY, and vice versa. Once you have SKY, you can use it
                    to access Staking Rewards and participate in Sky Ecosystem Governance.
                  </Text>
                </li>
              </ul>
            </>
          }
          imgSrc="/products_trade.png"
          mobileImgSrc="/products_trade_mobile.png"
          buttonVariant="twilight-3"
          buttonText="Start Trading"
          emphasis="Trade"
          title="crypto for USDS"
          postTitle="Trade crypto for USDS"
          className="col-span-1 h-[500px] overflow-y-auto tablet:col-span-2 tablet:h-[600px] desktop:col-span-1"
          featurePageId="trade"
          APY=""
          TVL=""
          APYDescription=""
          TVLDescription=""
        />
        <FeatureCardLg
          href={`${baseUrl}/?widget=savings`}
          descriptionElement={
            <Text variant="p3">
              Use USDS to access the Sky Savings Rate (SSR) and accumulate additional USDS over time.
              <br />
              <br />
              No minimum USDS supply amount is required; withdraw anytime.
              <br />
              <br />
              The Sky Savings Rate is variable, determined by ecosystem governance through a process of
              decentralised onchain voting.
              <br />
              <br />
              With Sky, you always remain in full control of your savings.
            </Text>
          }
          postTitle="Savings"
          postTextElement={
            <Text variant="p2">
              Supply USDS to the Sky Savings Rate module of the Sky Protocol to access the Sky Savings Rate
              and accumulate additional USDS over time. Start in seconds; no minimum supply amount is
              required.
              <br />
              <br />
              Tap into Sky and the unique power of the blockchain to always remain in full control of your
              money.
            </Text>
          }
          imgSrc="/products_savings.png"
          mobileImgSrc="/products_savings_mobile.png"
          buttonVariant="aurora-2"
          buttonText="Start Saving"
          emphasis="Save"
          title="USDS"
          className="col-span-1 tablet:col-span-2 desktop:col-span-1"
          featurePageId="savings"
          APY={data.saveApy}
          TVL={data.saveTvl}
          type="ssr"
          APYDescription="SSR Rate"
          TVLDescription="Sky Savings Rate TVL"
        />
        <FeatureCardLg
          href={`${baseUrl}/?widget=rewards`}
          descriptionElement={
            <Text variant="p3">
              Use USDS to access Sky Token Rewards and support Sky ecosystem projects.
              <br />
              <br />
              No minimum USDS supply amount required; withdraw anytime.
              <br />
              <br />
              The Sky Token Rewards rate is variable, dependent upon several factors, including the issuance
              rate of each Sky Token Reward.
              <br />
              <br />
              With Sky, you always remain in full control of your funds.
            </Text>
          }
          postTitle="Rewards"
          postTextElement={
            <Text variant="p2">
              Supply USDS to the Sky Token Rewards (STRs) module of the Sky Protocol to get Sky Token Rewards
              in the form of SKY governance tokens and Sky Star tokens.
              <br />
              <br />
              The Sky Token Rewards Rate is different for each type of token rewarded, and always fluctuates,
              dependent upon several factors, including the issuance rate of each Sky Token Reward, which is
              determined by Sky ecosystem governance.
              <br />
              <br />
              With{' '}
              <ExternalLink href="https://app.sky.money" className="text-sky-700 underline">
                Sky.money
              </ExternalLink>
              , it&apos;s easy to build a diversified Sky Token Rewards portfolio while always remaining in
              control of your funds.
            </Text>
          }
          imgSrc="/products_rewards.png"
          mobileImgSrc="/products_rewards_mobile.png"
          buttonVariant="aurora-3"
          buttonText="Get STRs"
          emphasis="Access Sky Token Rewards"
          title="with USDS"
          className="col-span-1 tablet:col-span-2 desktop:col-span-1"
          featurePageId="rewards"
          APY={data.rewardsApy}
          TVL={data.rewardsTvl}
          type="str"
          APYDescription="Sky Token Rewards Rates up to:"
          TVLDescription="Sky Token Rewards TVL"
        />
        <FeatureCardLg
          href={`${baseUrl}/?widget=stake`}
          descriptionElement={
            <Text variant="p3">
              The Staking Engine has replaced the Seal Engine of the Sky Protocol. It offers the same
              features, but it has no exit fee and only supports SKY tokens, not MKR.
              <br />
              <br />
              Stake SKY to earn rewards, delegate <PopoverSealInfo type="delegate" /> governance voting
              rights, and borrow <PopoverSealInfo type="borrow" /> USDS. You can stake or un-stake your SKY,
              and claim rewards, anytime.
            </Text>
          }
          postTitle="Staking Engine"
          postTextElement={
            <>
              <Text variant="p2" className="mb-4 desktop:mb-[18px] desktop-xl:mb-[20px]">
                The SKY tokens you supply to the Staking Engine provide access to Staking Rewards, and more.
                Your staked SKY enables you to create one or more positions through which you can:
                <br />
                <br />
                <ul className="list-disc pl-7">
                  <li>
                    <Text variant="p2">
                      <strong>Access Staking Rewards.</strong> Access USDS or Sky Star tokens as rewards.
                    </Text>
                  </li>
                  <li>
                    <Text variant="p2">
                      <strong>Borrow.</strong> Borrow
                      <PopoverSealInfo type="borrow" className="z-[1000]" /> USDS against your supplied SKY.
                      You can exit your borrow position at any time and withdraw or pay back USDS whenever you
                      would like.
                    </Text>
                  </li>
                  <li>
                    <Text variant="p2">
                      <strong>Delegate.</strong> Transfer the voting power of your supplied SKY tokens to a
                      recognized delegate
                      <PopoverSealInfo type="delegate" className="z-[1000]" /> or a contract that you own.
                      Your chosen delegate can then participate in the Sky Ecosystem Governance voting process
                      on your behalf.
                    </Text>
                  </li>
                </ul>
              </Text>
            </>
          }
          imgSrc="/products_stake_1.png"
          mobileImgSrc="/products_stake_1_mobile.png"
          buttonVariant="twilight-2"
          buttonText="Stake your SKY"
          emphasis="Access Staking rewards"
          title="with SKY"
          className="col-span-1 tablet:col-span-2 desktop:col-span-1"
          featurePageId="stake"
          APY={data.stakeApy}
          TVL={data.stakeTvl}
          type="srr"
          APYDescription="Staking Rewards Rates up to:"
          TVLDescription="Staking Engine TVL"
        />

        {/* Section 4 */}
        <Card
          variant="glass"
          className="col-span-1 grid grid-cols-1 gap-5 rounded-3xl border p-4 tablet:col-span-2 tablet:grid-cols-2"
        >
          <FeatureCardLg
            href={`${baseUrl}/?widget=expert`}
            descriptionElement={
              <Text variant="p3">
                Expert modules unlock high-level functionality tailored to experienced users. stUSDS, the
                first Expert token of the Sky Protocol, is a risk token that funds and supports liquidity for
                SKY stakers.
                <br />
                <br />
                Use USDS to access the stUSDS Rate <PopoverRateInfo type="stusds" /> and encourage more
                participation in SKY governance. No minimum supply amount is required.
              </Text>
            }
            postTitle="stUSDS Rewards"
            postTextElement={
              <>
                <Text variant="p3" className="mb-4 desktop:mb-[18px] desktop-xl:mb-[20px]">
                  stUSDS is a risk token structured to absorb a greater share of system risk in exchange for
                  the potential to capture a larger portion of protocol rewards.
                  <br />
                  <br />
                  When you supply USDS to the stUSDS module of the Protocol, you fund SKY-back borrowing to
                  access the stUSDS Rate <PopoverRateInfo type="stusds" /> and receive stUSDS tokens. The
                  stUSDS tokens serve as a digital record of your USDS interaction with the stUSDS module and
                  any value accrued to your position.
                  <br />
                  <br />
                  stUSDS funds and supports liquidity for SKY stakers, encouraging more participation in SKY
                  governance, leading to a more secure ecosystem.
                  <br />
                  <br />
                  The asset mix of stUSDS can be viewed on the{' '}
                  <ExternalLink href="https://info.sky.money/stusds" className="text-sky-700 underline">
                    Sky Ecosystem Dashboard
                  </ExternalLink>
                  .
                </Text>
              </>
            }
            imgSrc="/products_stUSDS.png"
            mobileImgSrc="/products_stUSDS_mobile.png"
            buttonVariant="azure-2"
            buttonText="Get stUSDS"
            emphasis="Access stUSDS tokens"
            title="with USDS"
            reverse={true}
            className="col-span-1 tablet:col-span-2 desktop:col-span-1"
            featurePageId="expert"
            APY={data.stusdsApy}
            TVL={data.stusdsTvl}
            type="stusds"
            APYDescription="stUSDS Rate"
            TVLDescription="stUSDS TVL"
          />
          <FeatureCardLg
            href={`${baseUrl}/?network=${randomL2Name}`}
            descriptionElement={
              <Text variant="p3">
                SkyLink is the system that provides the rails for the{' '}
                <ExternalLink href="https://app.sky.money/" className="text-text underline">
                  Sky.money
                </ExternalLink>{' '}
                web app and Sky Ecosystem projects, such as{' '}
                <ExternalLink href="https://spark.fi/" className="text-black/80 underline">
                  Spark,
                </ExternalLink>{' '}
                to bridge assets between the Sky Protocol on Ethereum Mainnet and a growing number of
                supported Layer 2 (L2) networks. SkyLink enables end users on L2s, such as Base, Arbitrum,
                Optimism and Unichain to tap into Sky Protocol features via the Sky Ecosystem projects&apos;
                rails. SkyLink seamlessly connects your Ethereum-based Sky Protocol tokens and features to
                supported L2 networks.
                <br />
                <br />
                If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink
                introduces reduced fees and faster transaction speeds.
              </Text>
            }
            postTextElement={
              <Text variant="p2">
                SkyLink enhances your ability to manage your digital assets efficiently by seamlessly
                connecting your Ethereum L1-based Sky Protocol tokens and features, such as the Sky Savings
                Rate, to supported L2 networks.
                <br />
                <br />
                If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink
                introduces reduced fees and faster transaction speeds.
              </Text>
            }
            imgSrc="/products_skybridge.png"
            mobileImgSrc="/features-skylink-mobile.png"
            imgWidths={[200, 600, 800]}
            buttonVariant="azure-2"
            buttonText="Access SkyLink"
            title="Connect with"
            emphasis="SkyLink"
            reverse={false}
            postTitle="SkyLink"
            className="col-span-1 tablet:col-span-2 desktop:col-span-1"
            featurePageId="skylink"
            APY=""
            TVL=""
            APYDescription=""
            TVLDescription=""
          />
        </Card>
      </div>
    </div>
  );
}
