import Image from 'next/image';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { Text, Heading } from '@/app/components/Typography';
import { ButtonArrow } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { cn } from '@/app/lib/utils';
import { Transition } from './Transition';
import { useAutoClose } from '../hooks/useAutoClose';
import { IconButtonPlus } from './ui/button-client';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { InternalLink } from './InternalLink';
import { ArrowRight } from '@/app/components/icons/ArrowRight';
import { ExternalLink } from './ExternalLink';
import { useMarketingAnalytics, CTAType } from '../hooks/useMarketingAnalytics';

export const FeatureCard = ({
  title,
  emphasis,
  altEmphasis,
  reverse = true,
  descriptionElement,
  postTextElement,
  className,
  buttonText,
  buttonVariant,
  imgSrc,
  imgClassname,
  imgSize,
  isNotLaunched = false,
  isMediumSize = false,
  fullHeight = false,
  featurePageId,
  href,
  cardClassName
}: {
  title: string;
  emphasis: string;
  altEmphasis?: string;
  reverse?: boolean;
  descriptionElement: React.ReactNode;
  postTextElement: React.ReactNode;
  className: string;
  buttonText?: string;
  buttonVariant: any;
  imgSrc: any;
  imgClassname?: string;
  imgSize?: number[];
  isNotLaunched?: boolean;
  isMediumSize?: boolean;
  fullHeight?: boolean;
  featurePageId: string;
  href: string;
  cardClassName?: string;
}) => {
  const { bpi, isLoading: bpiLoading } = useBreakpointIndex();
  const { state, setState, setIsHover } = useAutoClose({ delay: 60000 });
  const { trackCTAClick } = useMarketingAnalytics();

  // Map featurePageId to CTA type
  const featureIdToCTAType: Record<string, CTAType> = {
    upgrade: 'feature_upgrade',
    trade: 'feature_trade',
    rewards: 'feature_rewards',
    savings: 'feature_savings',
    stake: 'feature_stake',
    expert: 'feature_expert',
    skylink: 'feature_skylink'
  };

  const defaultSizes: { [key: number]: number[]; default: number[] } = {
    [BP.sm]: [200, 200],
    [BP.md]: [264, 264],
    [BP.xl]: [338, 338],
    default: [448, 448]
  };
  imgSize = imgSize || defaultSizes[bpi] || defaultSizes.default;
  return (
    <Card
      className={cn(
        'relative overflow-hidden border-0 p-0',
        fullHeight ? 'h-full' : 'h-[416px] tablet:h-[438px] desktop:h-[560px] desktop-xl:h-[740px]',
        cardClassName
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Transition
        state={state}
        postTransitionClassName="scrollbar-hidden"
        postTransitionView={
          <div
            className={cn(
              'flex h-full max-w-[520px] flex-col justify-between p-5 text-white tablet:pt-6 desktop:p-7 desktop:pt-11 desktop-xl:max-w-[600px] desktop-xl:p-10',
              className
            )}
          >
            <div className="space-y-3">
              <Heading tag="h5">{altEmphasis || emphasis}</Heading>
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
        <div
          className={cn(
            className,
            'flex h-full flex-col justify-between overflow-hidden p-5 tablet:pt-6 desktop:p-7 desktop:pt-11'
          )}
        >
          <div className="flex flex-row flex-wrap-reverse items-center justify-between">
            <EmphasisHeading
              reverse={reverse}
              text={title}
              textClassName={isNotLaunched ? 'desktop:max-w-[240px] desktop-xl:max-w-[340px] mb-3' : ''}
              emphasisText={emphasis}
              tag="h5"
            />
            {isNotLaunched && (
              <div style={{ width: 'fit-content' }}>
                <Text
                  variant="ui-small"
                  className="mb-3 rounded-full bg-aurora-3 px-5 py-3.5 text-white/80 desktop:-mt-3"
                >
                  Launching Soon
                </Text>
              </div>
            )}
          </div>
          {descriptionElement}
          <div className={cn(imgClassname, `flex justify-center ${bpiLoading ? 'invisible' : ''}`)}>
            <Image src={imgSrc} width={imgSize[0]} height={imgSize[1]} alt="" />
          </div>
          <div className="h-14" />
        </div>
      </Transition>
      <div className="absolute bottom-7 left-7 z-[999] flex h-14 gap-2">
        <IconButtonPlus
          isOpen={state === 'open'}
          variant={buttonVariant}
          onClick={() => setState(state === 'open' ? 'close' : 'open')}
        />
        {buttonText && (
          <ExternalLink
            href={href}
            onClick={() => {
              const ctaType = featureIdToCTAType[featurePageId];
              if (ctaType) {
                const widgetParam = href.includes('widget=')
                  ? href.split('widget=')[1]?.split('&')[0]
                  : undefined;
                trackCTAClick(ctaType, href, widgetParam);
              }
            }}
          >
            <ButtonArrow variant={buttonVariant}>{buttonText}</ButtonArrow>
          </ExternalLink>
        )}
      </div>
    </Card>
  );
};
