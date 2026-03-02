import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import SealedActivationImg from '@/public/features-sealed-activation.png';

export const SealedActivationCard = () => (
  <FeaturesPageCard
    isComingSoon
    id="sealed-activation"
    tabs={[
      {
        label: 'Get even more rewards with Sealed Activation',
        title: 'Get even more rewards with Sealed Activation',
        content: (
          <>
            <TextFeatureCard>
              Sealed Activation, a powerful Sky Protocol feature to incentivise long-term governance
              participation, is on the horizon.
            </TextFeatureCard>
            <TextFeatureCard>
              Subject to governance approval, you&apos;ll soon be able to opt to seal your SKY or MKR
              governance tokens to accumulate Activation Token Rewards in amounts greater than with simple
              Activation. You can receive rewards in the form of USDS or Sky Star tokens — you choose.
            </TextFeatureCard>
            <TextFeatureCard>Use your Sealed SKY or MKR to delegate your voting power.</TextFeatureCard>
            <TextFeatureCard>
              Unseal your SKY or MKR and withdraw anytime. Unsealing incurs an Exit Fee. The Exit Fee
              percentage is set by Sky ecosystem governance and increases automatically over time. When you
              unseal and withdraw, the Exit Fee is automatically extracted from the SKY or MKR you sealed.
              Accumulated Activation Token Rewards are not affected.
            </TextFeatureCard>
          </>
        ),
        illustration: (
          <div className="h-full w-full tablet:pl-[22px] desktop:pl-9">
            <div className="relative h-full w-full">
              <Image
                alt="Sealed Activation illustration"
                src={SealedActivationImg}
                className="absolute top-1/2 w-full -translate-y-1/2 px-[18px] tablet:bottom-[5px] tablet:top-auto tablet:translate-y-0 tablet:rounded-[20px] tablet:px-0 desktop:bottom-[26px]"
                quality={100}
              />
            </div>
          </div>
        )
      }
    ]}
  />
);
