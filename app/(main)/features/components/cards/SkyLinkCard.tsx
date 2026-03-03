import Image from 'next/image';
import { FeaturesPageCard, LiFeatureCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsSkyBridge from '@/public/products_skybridge.png';
import ProductsSkyBridgeMobile from '@/public/features-skylink-mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { useRandomL2Name } from '@/app/hooks/useRandomL2Name';
import { ExternalLink } from '@/app/components/ExternalLink';

export const SkyLinkCard = () => {
  const { bpi, isLoading: isLoadingBreakpointIndex } = useBreakpointIndex();
  const randomL2Name = useRandomL2Name();

  return (
    <FeaturesPageCard
      id="skylink"
      tabs={[
        {
          label: 'Do more with SkyLink',
          title: 'Do more with SkyLink',
          content: (
            <>
              <TextFeatureCard>
                SkyLink is the system that provides the rails for the{' '}
                <ExternalLink href="https://app.sky.money/" className="text-black/80 underline">
                  Sky.money web app
                </ExternalLink>{' '}
                and Sky Ecosystem projects, such as{' '}
                <ExternalLink href="https://spark.fi/" className="text-black/80 underline">
                  Spark
                </ExternalLink>{' '}
                to link assets between the Sky Protocol on Ethereum Mainnet and a growing number of supported
                second-layer networks.
              </TextFeatureCard>
              <TextFeatureCard>
                SkyLink enhances your ability to manage your digital assets efficiently by seamlessly
                connecting Sky Protocol tokens and features, such as the Sky Savings Rate, across L2
                solutions.
              </TextFeatureCard>
              <TextFeatureCard>
                If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink
                introduces reduced fees and faster transaction speeds.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Access SkyLink',
          url: `?network=${randomL2Name}`,
          buttonVariant: 'azure-2',
          illustration: isLoadingBreakpointIndex ? null : (
            <Image
              alt="SkyBridge illustration"
              src={bpi === 0 ? ProductsSkyBridgeMobile : ProductsSkyBridge}
              className="absolute top-1/2 w-full -translate-y-1/2 px-3 tablet:bottom-0 tablet:right-0 tablet:top-auto tablet:w-[160%] tablet:max-w-[160%] tablet:translate-x-8 tablet:translate-y-8 tablet:rounded-tl-[20px] tablet:px-0 desktop:translate-x-10 desktop:translate-y-10"
              quality={100}
            />
          )
        }
      ]}
    />
  );
};
