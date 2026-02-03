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
          title: 'Access stUSDS tokens with USDS',
          content: (
            <>
              <TextFeatureCard>
                stUSDS is a risk token designed for eligible Sky Protocol expert users. It funds and supports
                liquidity for SKY stakers, encouraging more participation in SKY governance by active token
                holders, delegators and voters, leading to a more secure ecosystem.
              </TextFeatureCard>
              <TextFeatureCard>
                When you supply USDS to the stUSDS module of the protocol, you fund SKY-backed borrowing to
                access the stUSDS Rate <PopoverInfo type="stusds" /> and receive stUSDS tokens. The stUSDS
                tokens serve as a digital record of your USDS interaction with the stUSDS module and any value
                accrued to your position. For details, see{' '}
                <Link className="hover:underline hover:underline-offset-4" href="/faq">
                  &quot;What is stUSDS?&quot;
                </Link>{' '}
                In the FAQs.
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
