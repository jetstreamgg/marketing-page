import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { ExternalLink } from '@/app/components/ExternalLink';
import { Heading } from '@/app/components/Typography';
import { ButtonArrow } from '@/app/components/ui/button';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { useMarketingAnalytics } from '@/app/hooks/useMarketingAnalytics';

export default function FarmCTA() {
  const { bpi } = useBreakpointIndex();
  const { url } = useSkyUrl();
  const { trackCTAClick } = useMarketingAnalytics();
  const isMobile = bpi <= BP.sm;
  return (
    <div className="flex h-[85vh] w-full flex-col items-center justify-center bg-dark px-11 text-center sm:px-20">
      {isMobile ? (
        <>
          <Heading tag="h1" className="text-white desktop:tracking-[-3.28px]">
            Unlock the
          </Heading>
          <EmphasisHeading
            text=""
            emphasisText="next evolution"
            textClassName="desktop:tracking-[-3.28px] text-white"
            emphasisClassName="w-1/2 tablet:w-full text-highlightDarkBG"
          />
          <EmphasisHeading
            text=""
            emphasisText="of DeFi."
            textClassName="desktop:tracking-[-3.28px] text-white"
            emphasisClassName="w-1/2 tablet:w-full text-highlightDarkBG"
          />
        </>
      ) : (
        <>
          <Heading tag="h1" className="text-white desktop:tracking-[-3.28px]">
            Unlock the
          </Heading>
          <EmphasisHeading
            text=""
            emphasisText="next evolution of DeFi."
            textClassName="desktop:tracking-[-3.28px] text-white"
            emphasisClassName="w-1/2 tablet:w-full text-highlightDarkBG"
          />
        </>
      )}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
        <ExternalLink href={url} noStyle onClick={() => trackCTAClick('launch_app_faq', url)}>
          <ButtonArrow variant="twilight-1">Launch app</ButtonArrow>
        </ExternalLink>
      </div>
    </div>
  );
}
