import Image from 'next/image';
import { FeaturesPageCard, LiFeatureCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsSkyBridge from '@/public/products_skybridge.png';
import ProductsSkyBridgeMobile from '@/public/features-skylink-mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { useRandomL2Name } from '@/app/hooks/useRandomL2Name';
import { ExternalLink } from '@/app/components/ExternalLink';

export const ExpertCard = () => {
  const { bpi, isLoading: isLoadingBreakpointIndex } = useBreakpointIndex();
  const randomL2Name = useRandomL2Name();

  return (
    <FeaturesPageCard
      id="expert"
      tabs={[
        {
          title: 'Expert',
          content: (
            <>
              <TextFeatureCard>Expert</TextFeatureCard>
            </>
          ),
          buttonCta: 'Access Expert',
          url: `?widget=expert`,
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
