import Image from 'next/image';
import ProductsUpgrade from '@/public/features-upgrade.png';
import ProductsTrade from '@/public/products_trade.png';
import ProductsTradeMobile from '@/public/products_trade_mobile.png';
import SealedActivationImg from '@/public/features-sealed-activation.png';
import ActivationImg from '@/public/features-activation.png';
import FeaturesRewards from '@/public/features_rewards.png';
import FeaturesRewardsMobile from '@/public/features_rewards_mobile.png';
import HowItWorks from '@/public/rewards-how-it-works.png';
import UseRewards from '@/public/rewards-use.png';
import ProductsSavings from '@/public/products_savings.png';
import ProductsSavingsMobile from '@/public/products_savings_mobile.png';
import WhatIsSave from '@/public/savings-what-is-it.png';
import HowItWorksSavings from '@/public/savings-how-it-works.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import ProductsStake1 from '@/public/products_stake_1.png';
import ProductsStake2 from '@/public/products_stake_2.png';
import ProductsStake3 from '@/public/products_stake_3.png';
import ProductsStake4 from '@/public/products_stake_4.png';
import ProductsStake5 from '@/public/products_stake_5.png';
import ProductsStake6 from '@/public/products_stake_6.png';
import ProductsStake1Mobile from '@/public/products_stake_1_mobile.png';
import ProductsStake2Mobile from '@/public/products_stake_2_mobile.png';
import ProductsStake3Mobile from '@/public/products_stake_3_mobile.png';
import ProductsStake4Mobile from '@/public/products_stake_4_mobile.png';
import ProductsStake5Mobile from '@/public/products_stake_5_mobile.png';
import ProductsStake6Mobile from '@/public/products_stake_6_mobile.png';

export const PrefetchFeaturesAssets = () => {
  const { bpi } = useBreakpointIndex();
  return (
    <div className="hidden">
      <Image
        alt="Products upgrade"
        src={ProductsUpgrade}
        className="absolute w-full rounded-[40px] tablet:top-1/2 tablet:-translate-y-1/2"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products trade"
        placeholder="blur"
        src={ProductsTrade}
        className="absolute top-1/2 w-full -translate-y-1/2 rounded-[20px] desktop:rounded-[40px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products trade"
        placeholder="blur"
        src={ProductsTradeMobile}
        className="absolute top-1/2 w-full -translate-y-1/2 rounded-[20px] desktop:rounded-[40px]"
        quality={100}
        loading="eager"
      />

      <Image
        alt="Sealed Activation illustration"
        src={SealedActivationImg}
        className="absolute top-1/2 w-full -translate-y-1/2 px-[18px] tablet:bottom-[5px] tablet:top-auto tablet:translate-y-0 tablet:rounded-[20px] tablet:px-0 desktop:bottom-[26px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Activation illustration"
        src={ActivationImg}
        fill
        className="object-contain"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products earn rewards"
        placeholder="blur"
        src={bpi === 0 ? FeaturesRewardsMobile : FeaturesRewards}
        className="absolute left-1/2 h-full w-auto -translate-x-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:h-auto tablet:w-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+32px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-12 desktop:rounded-tl-[30px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Use Sky Token Rewards"
        src={UseRewards}
        fill
        className="object-contain"
        quality={100}
        loading="eager"
      />
      <Image
        alt="How Sky Token Rewards work"
        src={HowItWorks}
        fill
        className="object-contain"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products save"
        placeholder="blur"
        src={bpi === 0 ? ProductsSavingsMobile : ProductsSavings}
        className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="What is Sky Savings Rate"
        src={WhatIsSave}
        fill
        className="object-contain"
        quality={100}
        loading="eager"
      />
      <Image
        alt="How it works: sUSDS"
        src={HowItWorksSavings}
        fill
        className="object-contain"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products stake"
        placeholder="blur"
        src={bpi === 0 ? ProductsStake1Mobile : ProductsStake1}
        className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products stake"
        placeholder="blur"
        src={bpi === 0 ? ProductsStake2Mobile : ProductsStake2}
        className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products stake"
        placeholder="blur"
        src={bpi === 0 ? ProductsStake3Mobile : ProductsStake3}
        className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products stake"
        placeholder="blur"
        src={bpi === 0 ? ProductsStake4Mobile : ProductsStake4}
        className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products stake"
        placeholder="blur"
        src={bpi === 0 ? ProductsStake5Mobile : ProductsStake5}
        className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
        quality={100}
        loading="eager"
      />
      <Image
        alt="Products stake"
        placeholder="blur"
        src={bpi === 0 ? ProductsStake6Mobile : ProductsStake6}
        className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
        quality={100}
        loading="eager"
      />
    </div>
  );
};
