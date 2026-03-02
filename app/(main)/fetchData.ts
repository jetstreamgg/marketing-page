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
  vaultRate: string;
  vaultTvl: string;
}

const MORPHO_VAULT_ADDRESSES = [
  '0xf42bca228D9bd3e2F8EE65Fec3d21De1063882d4', // USDS Risk Capital
  '0x56bfa6f53669B836D1E0Dfa5e99706b12c373ecf', // USDC Risk Capital
  '0xE15fcC81118895b67b6647BBd393182dF44E11E0', // USDS Flagship
  '0x2bD3A43863c07B6A01581FADa0E1614ca5DF0E3d' // USDT Risk Capital
];

async function fetchMorphoVaultsData(): Promise<{ vaultRate: string; vaultTvl: string }> {
  const aliases = MORPHO_VAULT_ADDRESSES.map(
    (addr, i) => `vault${i}: vaultV2ByAddress(address: "${addr}", chainId: 1) { avgNetApy totalAssetsUsd }`
  );

  const query = `query { ${aliases.join('\n')} }`;

  const response = await fetch('https://api.morpho.org/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
    next: { revalidate: 300 }
  });

  const json = await response.json();
  const data = json.data;

  let maxApy = 0;
  let totalTvl = 0;

  for (let i = 0; i < MORPHO_VAULT_ADDRESSES.length; i++) {
    const vault = data[`vault${i}`];
    if (vault) {
      const apy = parseFloat(vault.avgNetApy) || 0;
      const tvl = parseFloat(vault.totalAssetsUsd) || 0;
      if (apy > maxApy) maxApy = apy;
      totalTvl += tvl;
    }
  }

  return {
    vaultRate: maxApy > 0 ? formatPercent(maxApy) : '',
    vaultTvl: totalTvl > 0 ? '$' + formatNumber(totalTvl, { compact: true, maxDecimals: 2 }) : ''
  };
}

export const fetchData = async (): Promise<FetchedData> => {
  try {
    if (!process.env.API_URL) throw new Error('API_URL is not defined');

    const [apiResponse, morphoData] = await Promise.all([
      fetch(process.env.API_URL, {
        next: { revalidate: 300 } //5 minutes
      }),
      fetchMorphoVaultsData().catch(error => {
        Sentry.captureException(error, {
          tags: { type: 'api_error', endpoint: 'morpho-vaults' }
        });
        console.error('Error fetching Morpho vaults data:', error);
        return { vaultRate: '', vaultTvl: '' };
      })
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
      stusdsApy:
        flattenedData.stusds_rate !== undefined ? formatPercent(parseFloat(flattenedData.stusds_rate)) : '',
      stusdsTvl:
        flattenedData.stusds_tvl !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.stusds_tvl), { compact: true, maxDecimals: 0 })
          : '',
      vaultRate: morphoData.vaultRate,
      vaultTvl: morphoData.vaultTvl
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
      stusdsTvl: '',
      vaultRate: '',
      vaultTvl: ''
    };
  }
};
