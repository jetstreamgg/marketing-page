import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsExpert from '@/public/features_expert.png';
import ProductsExpertMobile from '@/public/features_expert_mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { FetchedData } from '@/app/(main)/fetchData';
import { PopoverInfo } from '@/app/components/PopoverInfo';
import Link from 'next/link';

export const ExpertCard = ({ data }: { data: FetchedData }) => {
  const { bpi, isLoading: isLoadingBreakpointIndex } = useBreakpointIndex();

  return (
    <FeaturesPageCard
      id="expert"
      tabs={[
        {
          title: 'Access Expert Rewards with USDS',
          content: (
            <>
              <TextFeatureCard>
                Expert modules unlock advanced functionality tailored to experienced users.
              </TextFeatureCard>
              <TextFeatureCard>
                They include products like stUSDS and the Morpho vault, which use USDS to support liquidity,
                enable advanced yield strategies, and expand participation across the Sky ecosystem.
              </TextFeatureCard>
            </>
          ),
          stats: [
            { id: 'rate', label: 'Expert Rates up to:', value: data.stusdsApy },
            { id: 'tvl', label: 'Expert TVL', value: data.stusdsTvl }
          ],
          buttonCta: 'Access stUSDS Rewards',
          url: `?widget=expert`,
          buttonVariant: 'nocturnal-2',
          illustration: isLoadingBreakpointIndex ? null : (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Stusds module"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsExpertMobile : ProductsExpert}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          )
        }
      ]}
    />
  );
};
