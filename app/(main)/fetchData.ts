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

export const fetchData = async (): Promise<FetchedData> => {
  try {
    if (!process.env.API_URL) throw new Error('API_URL is not defined');
    const response = await fetch(process.env.API_URL, {
      next: { revalidate: 300 } //5 minutes
    });
    const data = await response.json();

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
          : ''
    };
  } catch (error) {
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
