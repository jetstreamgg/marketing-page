import { Heading, Text } from '@/app/components/Typography';
import { ButtonArrow, buttonVariants } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { graphikStdClassName } from '@/app/lib/fonts';
import { cn } from '@/app/lib/utils';
import { ReactNode, useState } from 'react';
import { PopoverInfo } from '@/app/components/PopoverInfo';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { ExternalLink } from '@/app/components/ExternalLink';
import { useMarketingAnalytics, CTAType } from '@/app/hooks/useMarketingAnalytics';

type Stat = {
  id: 'tvl' | 'rate' | 'price';
  label: string;
  value: string;
  prefix?: string;
};

type CardTab = {
  label?: string;
  title: string;
  content: ReactNode;
  stats?: Stat[];
  buttonCta?: string;
  url?: string;
  buttonVariant?: keyof typeof buttonVariants.variants.variant;
  illustration: ReactNode;
};

export function TextFeatureCard({ children }: { children: ReactNode }) {
  return (
    <Text
      variant="p2"
      className="desktop:!mt-[16px] desktop:text-[16px] desktop:leading-[21px] desktop-xl:!mt-[18px] desktop-xl:text-[18px] desktop-xl:leading-[24px]"
    >
      {children}
    </Text>
  );
}

export function LiFeatureCard({ children }: { children: ReactNode }) {
  return (
    <li
      className={`font-normal ${graphikStdClassName} text-[16px] leading-[22px] -tracking-1 desktop:text-[16px] desktop:leading-[21px] desktop-xl:text-[18px] desktop-xl:leading-[24px]`}
    >
      {children}
    </li>
  );
}

// Map feature card IDs to analytics CTA types
const featureIdToCTAType: Record<string, CTAType> = {
  upgrade: 'feature_upgrade',
  trade: 'feature_trade',
  rewards: 'feature_rewards',
  savings: 'feature_savings',
  stake: 'feature_stake',
  expert: 'feature_expert',
  skylink: 'feature_skylink'
};

export function FeaturesPageCard({
  isComingSoon = false,
  isAlpha = false,
  tabs,
  id
}: {
  isComingSoon?: boolean;
  isAlpha?: boolean;
  tabs: CardTab[];
  id: string;
}) {
  const { baseUrl } = useSkyUrl();
  const [selectedTab, setSelectedTab] = useState(tabs[0].label || tabs[0].title);
  const { trackCTAClick } = useMarketingAnalytics();

  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="h-full w-full" id={id}>
      <div
        className={cn(
          'h-full w-full overflow-hidden rounded-[20px] border-2 border-white/20 bg-gradient-to-bl from-10% to-[120%] p-5 backdrop-blur-[50px] tablet:p-8 desktop:gap-[52px] desktop:p-8 desktop:pr-4 desktop-xl:p-10',
          isComingSoon ? 'from-white/10 to-white/[17%]' : 'from-white/95 to-white/80'
        )}
      >
        <div className="flex h-full w-full flex-col gap-5 desktop-xl:gap-8">
          {isComingSoon && (
            <div className="w-fit rounded-full bg-white px-5 pb-3 pt-3.5">
              <Text variant="caption-medium" className="bg-nocturnal-1 bg-clip-text">
                Launching Soon
              </Text>
            </div>
          )}
          <div className="mb-2 flex flex-col-reverse items-center justify-between tablet:mb-4 tablet:flex-row">
            {tabs.length > 1 && (
              <TabsList className="flex w-fit flex-wrap justify-start gap-2 tablet:max-w-[80%]">
                {tabs.map(({ title, label = title }) => (
                  <TabsTrigger variant="secondary" key={label} value={label}>
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            )}
            {isAlpha && (
              <div className="mb-2 flex h-12 w-fit items-center justify-center self-start rounded-full bg-aurora-3 px-5 tablet:mb-0">
                <Text variant="caption-medium" className="text-center text-white">
                  Alpha launch
                </Text>
              </div>
            )}
          </div>
          <div className="flex min-h-0 w-full grow flex-col">
            {tabs.map(
              ({
                title,
                label = title,
                content,
                stats,
                buttonCta,
                url,
                buttonVariant = 'midnight-1',
                illustration
              }) =>
                selectedTab === label && (
                  <TabsContent
                    key={label}
                    value={label}
                    asChild
                    className="flex min-h-0 w-full grow flex-col-reverse justify-stretch gap-8 data-[state='inactive']:hidden tablet:flex-row tablet:justify-between tablet:gap-0"
                  >
                    <div>
                      {/* Copy */}
                      <div
                        className={cn(
                          'flex flex-col justify-between gap-10 tablet:pr-8 desktop:gap-5 desktop:pr-1 desktop-xl:gap-10 desktop-xl:pr-8',
                          isComingSoon ? 'text-white' : 'text-black'
                        )}
                      >
                        <div className="desktop:overflow-y-auto">
                          {/* Title */}
                          <Heading
                            tag="h3"
                            className="mb-3 tablet:mb-5 desktop:mb-5 desktop:text-[40px] desktop:leading-[40px] desktop-xl:mb-6 desktop-xl:text-[72px] desktop-xl:leading-[72px]"
                          >
                            {title}
                          </Heading>
                          {/* Content */}
                          <div
                            className={cn(
                              'mb-8 space-y-2 desktop:mb-5 desktop-xl:mb-10',
                              isComingSoon ? 'text-white' : 'text-black/80'
                            )}
                          >
                            {content}
                          </div>
                          {/* Stats */}
                          {stats && (
                            <div className="flex w-full flex-col gap-6 tablet:flex-row tablet:flex-wrap">
                              {stats.map(({ id: statId, label, value, prefix }) => {
                                if (value) {
                                  return (
                                    <div key={'stat-' + label} className="grow">
                                      <div className="mb-2 flex items-center desktop:mb-3">
                                        <Text variant="p3" className="pr-2">
                                          {label}
                                        </Text>
                                        {['rewards', 'savings', 'stake', 'expert'].includes(id) &&
                                          statId === 'rate' && (
                                            <PopoverInfo
                                              type={
                                                id === 'savings'
                                                  ? 'ssr'
                                                  : id === 'stake'
                                                    ? 'srr'
                                                    : id === 'expert'
                                                      ? 'stusds'
                                                      : 'str'
                                              }
                                            />
                                          )}
                                      </div>
                                      <div className="flex items-baseline">
                                        {prefix && (
                                          <Text tag="span" variant="p3" className="mr-2">
                                            {prefix}
                                          </Text>
                                        )}
                                        <Text
                                          tag="span"
                                          variant="n1"
                                          className="text-[32px] tablet:text-[40px] desktop:text-[48px] desktop-xl:text-[64px]"
                                        >
                                          {value}
                                        </Text>
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          )}
                          {/* Spacer that prevents showing unnecessary scrollbar on desktop */}
                          <div className="hidden h-10 w-full desktop:block" />
                        </div>
                        {/* CTA Button */}
                        {buttonCta && url && (
                          <div>
                            <ExternalLink
                              href={`${baseUrl}/${url}`}
                              onClick={() => {
                                const ctaType = featureIdToCTAType[id];
                                if (ctaType) {
                                  const widgetParam = url.includes('widget=')
                                    ? url.split('widget=')[1]?.split('&')[0]
                                    : undefined;
                                  trackCTAClick(ctaType, `${baseUrl}/${url}`, widgetParam);
                                }
                              }}
                            >
                              <ButtonArrow variant={buttonVariant}>{buttonCta}</ButtonArrow>
                            </ExternalLink>
                          </div>
                        )}
                      </div>
                      {/* Illustration */}
                      <div
                        className={cn(
                          'relative aspect-square w-full shrink-0 overflow-hidden tablet:aspect-auto tablet:w-72 tablet:overflow-visible desktop:w-[40%] desktop:max-w-[565px] desktop-xl:w-1/2',
                          isComingSoon &&
                            'rounded-lg border border-white/15 tablet:rounded-none tablet:border-none'
                        )}
                      >
                        {illustration}
                      </div>
                    </div>
                  </TabsContent>
                )
            )}
          </div>
        </div>
      </div>
    </Tabs>
  );
}
