import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { ExternalLink } from '@/app/components/ExternalLink';
import { Heading } from '@/app/components/Typography';
import { ButtonArrow } from '@/app/components/ui/button';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { useMarketingAnalytics } from '@/app/hooks/useMarketingAnalytics';

export default function FarmCTA() {
  const { url } = useSkyUrl('/?widget=rewards');
  const { trackCTAClick } = useMarketingAnalytics();

  return (
    <div className="flex h-[85vh] w-full flex-col items-center justify-center bg-gradient-to-b from-[rgba(19,20,44,1)] to-[rgba(30,19,80,1)] px-11 text-center sm:px-20">
      <>
        <Heading tag="h1" className="text-white desktop:tracking-[-3.28px]">
          Get rewarded for saving,
        </Heading>
        <EmphasisHeading
          text=""
          emphasisText="without giving up control."
          textClassName="desktop:tracking-[-3.28px] text-white"
          emphasisClassName="w-1/2 tablet:w-full text-highlightDarkBG"
        />
      </>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
        <ExternalLink href={url} noStyle onClick={() => trackCTAClick('launch_app_features', url)}>
          <ButtonArrow variant="twilight-1">Access Sky Token Rewards</ButtonArrow>
        </ExternalLink>
      </div>
    </div>
  );
}
