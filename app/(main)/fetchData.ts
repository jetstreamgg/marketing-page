import * as Sentry from '@sentry/nextjs';
import { formatNumber, formatPercent } from '@/app/utils';

export interface FetchedData {
  users: string;
  totalTvl: string;
  rewardsApy: string;
  skyPrice: string;
  rewardsTvl: string;
  saveApy: string;
  saveTvl: string;
  usdsPrice: string;
  ethPrice: string;
  usdcPrice: string;
  usdtPrice: string;
  stakeApy: string;
  stakeTvl: string;
  stusdsApy: string;
  stusdsTvl: string;
}

// Morpho vault address for Sky.money USDS Risk Capital vault
const MORPHO_VAULT_ADDRESS = '0xf42bca228D9bd3e2F8EE65Fec3d21De1063882d4';
const MORPHO_API_URL = 'https://api.morpho.org/graphql';

interface MorphoVaultData {
  avgNetApy: number | null;
  totalAssetsUsd: number | null;
}

async function fetchMorphoVaultData(): Promise<MorphoVaultData> {
  try {
    const response = await fetch(MORPHO_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query VaultRateAndTVL($address: String!, $chainId: Int!) {
          vaultV2ByAddress(address: $address, chainId: $chainId) {
            avgNetApy
            totalAssetsUsd
          }
        }`,
        variables: {
          address: MORPHO_VAULT_ADDRESS.toLowerCase(),
          chainId: 1
        }
      }),
      next: { revalidate: 300 } // 5 minutes
    });

    const result = await response.json();
    const vault = result?.data?.vaultV2ByAddress;

    return {
      avgNetApy: vault?.avgNetApy ?? null,
      totalAssetsUsd: vault?.totalAssetsUsd ?? null
    };
  } catch (error) {
    Sentry.captureException(error, {
      tags: { type: 'api_error', endpoint: 'morpho-vault' }
    });
    console.error('Error fetching Morpho vault data:', error);
    return { avgNetApy: null, totalAssetsUsd: null };
  }
}

export const fetchData = async (): Promise<FetchedData> => {
  try {
    if (!process.env.API_URL) throw new Error('API_URL is not defined');

    // Fetch both data sources in parallel
    const [apiResponse, morphoData] = await Promise.all([
      fetch(process.env.API_URL, {
        next: { revalidate: 300 } //5 minutes
      }),
      fetchMorphoVaultData()
    ]);

    const data = await apiResponse.json();

    // Flatten the array of objects into a single object
    const flattenedData = data.reduce(
      (acc: Record<string, string | number>, obj: Record<string, string | number>) => ({ ...acc, ...obj }),
      {}
    );

    return {
      users:
        flattenedData.sky_ecosystem_wallet_count !== undefined
          ? formatNumber(parseInt(flattenedData.sky_ecosystem_wallet_count))
          : '',
      totalTvl:
        flattenedData.sky_ecosystem_tvl !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.sky_ecosystem_tvl))
          : '',
      rewardsApy: (() => {
        const skyApy = flattenedData.sky_farm_apy ? parseFloat(flattenedData.sky_farm_apy) : 0;
        const spkApy = flattenedData.spk_farm_apy ? parseFloat(flattenedData.spk_farm_apy) : 0;
        const higherApy = Math.max(skyApy, spkApy);
        return higherApy > 0 ? formatPercent(higherApy) : '';
      })(),
      skyPrice:
        flattenedData.sky_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.sky_price_usd))
          : '',
      rewardsTvl:
        flattenedData.total_reward_tvl !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.total_reward_tvl), { compact: true, maxDecimals: 2 })
          : '',
      saveApy:
        flattenedData.sky_savings_rate_apy !== undefined
          ? formatPercent(parseFloat(flattenedData.sky_savings_rate_apy), { maxDecimals: 18 })
          : '',
      saveTvl:
        flattenedData.sky_savings_rate_tvl !== undefined
          ? '$' +
            formatNumber(parseFloat(flattenedData.sky_savings_rate_tvl), { compact: true, maxDecimals: 0 })
          : '',
      usdsPrice:
        flattenedData.usds_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.usds_price_usd), { maxDecimals: 2 })
          : '',
      usdcPrice:
        flattenedData.usdc_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.usdc_price_usd), { maxDecimals: 2 })
          : '',
      ethPrice:
        flattenedData.weth_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.weth_price_usd), { maxDecimals: 0 })
          : '',
      usdtPrice:
        flattenedData.usdt_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.usdt_price_usd), { maxDecimals: 2 })
          : '',
      stakeApy: (() => {
        const skySpkApy = flattenedData.sky_spk_apy ? parseFloat(flattenedData.sky_spk_apy) : 0;
        const skyUsdsApy = flattenedData.sky_usds_apy ? parseFloat(flattenedData.sky_usds_apy) : 0;
        const skySkyApy = flattenedData.sky_sky_apy ? parseFloat(flattenedData.sky_sky_apy) : 0;
        const higherApy = Math.max(skySpkApy, skyUsdsApy, skySkyApy);
        return higherApy > 0 ? formatPercent(higherApy) : '';
      })(),
      stakeTvl:
        flattenedData.lse_total_tvl !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.lse_total_tvl), { compact: true, maxDecimals: 0 })
          : '',
      // Expert Rate = Max(stUSDS rate, Morpho rate)
      stusdsApy: (() => {
        const stusdsRate = flattenedData.stusds_rate ? parseFloat(flattenedData.stusds_rate) : 0;
        const morphoRate = morphoData.avgNetApy ?? 0;
        const maxRate = Math.max(stusdsRate, morphoRate);
        return maxRate > 0 ? formatPercent(maxRate) : '';
      })(),
      // Expert TVL = stUSDS TVL + Morpho vault TVL
      stusdsTvl: (() => {
        const stusdsTvl = flattenedData.stusds_tvl ? parseFloat(flattenedData.stusds_tvl) : 0;
        const morphoTvl = morphoData.totalAssetsUsd ?? 0;
        const combinedTvl = stusdsTvl + morphoTvl;
        return combinedTvl > 0 ? '$' + formatNumber(combinedTvl, { compact: true, maxDecimals: 0 }) : '';
      })()
    };
  } catch (error) {
    Sentry.captureException(error, {
      tags: { type: 'api_error', endpoint: 'protocol-data' }
    });
    console.error('Error fetching data:', error);
    return {
      users: '',
      totalTvl: '',
      rewardsApy: '',
      skyPrice: '',
      rewardsTvl: '',
      saveApy: '',
      saveTvl: '',
      usdsPrice: '',
      ethPrice: '',
      usdcPrice: '',
      usdtPrice: '',
      stakeApy: '',
      stakeTvl: '',
      stusdsApy: '',
      stusdsTvl: ''
    };
  }
};
