import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import ActivationImg from '@/public/features-activation.png';

export const ActivationCard = () => (
  <FeaturesPageCard
    isComingSoon
    id="activation"
    tabs={[
      {
        label: 'Get rewards with Activation',
        title: 'Get rewards with Activation',
        content: (
          <>
            <TextFeatureCard>Activation is on the way.</TextFeatureCard>
            <TextFeatureCard>
              Supply SKY tokens to the Activation module of the decentralised Sky Protocol to begin
              accumulating Activation Token Rewards in the form of USDS or various Sky Star tokens—you choose.
            </TextFeatureCard>
            <TextFeatureCard>
              SKY supplied to Activation does not support delegation or voting.
            </TextFeatureCard>
            <TextFeatureCard>
              Activate or Deactivate your SKY anytime, with no restrictions or fees. With Sky.money, you
              always remain in control of funds, as this feature is non-custodial.
            </TextFeatureCard>
            <TextFeatureCard>
              The implementation of Activation is subject to governance approval.
            </TextFeatureCard>
          </>
        ),
        illustration: (
          <div className="flex h-full w-full -translate-y-[4%] scale-110 items-center justify-center pb-6">
            <div className="relative h-full w-full">
              <Image
                alt="Activation illustration"
                src={ActivationImg}
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </div>
        )
      }
    ]}
  />
);
