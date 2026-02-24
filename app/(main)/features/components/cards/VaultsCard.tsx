import { FetchedData } from '@/app/(main)/fetchData';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';

export const VaultsCard = ({ data }: { data: FetchedData }) => {
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
          buttonVariant: 'flare-2',
          illustration: <div />
        }
      ]}
    />
  );
};
