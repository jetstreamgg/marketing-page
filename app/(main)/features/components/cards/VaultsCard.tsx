import Image from 'next/image';
import { FetchedData } from '@/app/(main)/fetchData';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import FeaturesVaultsDesktop from '@/public/features_vaults_desktop.png';
import ProductsVaultsMobile from '@/public/products_vaults_mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';

export const VaultsCard = ({ data }: { data: FetchedData }) => {
  const { bpi, isLoading: isLoadingBreakpointIndex } = useBreakpointIndex();

  return (
    <FeaturesPageCard
      id="vaults"
      tabs={[
        {
          label: 'Vaults',
          title: 'Vaults',
          content: (
            <>
              <TextFeatureCard>
                Put your stablecoins (USDS, USDC and USDT) to work through Sky-curated Morpho vaults.
              </TextFeatureCard>
              <TextFeatureCard>
                Choose from a range of vaults with different market exposure, risk levels, and yields.
              </TextFeatureCard>
              <TextFeatureCard>
                When you deposit, your stablecoins are allocated to carefully selected lending markets — where
                borrowers post native Sky protocol tokens or established crypto assets as collateral.
              </TextFeatureCard>
            </>
          ),
          stats: [
            { id: 'rate', label: 'Vault Rate', value: data.vaultRate, prefix: 'Up to: ' },
            { id: 'tvl', label: 'Sky Curated Vaults TVL', value: data.vaultTvl }
          ],
          buttonCta: 'Access Vaults',
          url: '?widget=vaults',
          buttonVariant: 'vesper-2',
          illustration: isLoadingBreakpointIndex ? null : (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Vaults"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsVaultsMobile : FeaturesVaultsDesktop}
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
