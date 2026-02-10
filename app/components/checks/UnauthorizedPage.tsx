import { useEffect } from 'react';
import { useVpnAnalytics } from '../../hooks/useVpnAnalytics';
import { Heading, Text } from '../Typography';
import { SkyLoading } from '../SkyLoading';
import Image from 'next/image';
import BackgroundNotFound from '@/public/404_background.png';

type UnauthorizedPageProps = {
  vpnData: {
    isConnectedToVpn?: boolean;
    vpnIsLoading?: boolean;
    vpnError?: Error;
    countryCode?: string;
  };
};

const ErrorInfo = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Heading tag="h1" className="mb-4 text-2xl font-normal sm:text-[40px] md:mb-5">
        {title}
      </Heading>
      <Text className="font-normal sm:w-[500px] sm:text-lg md:text-xl lg:text-xl">
        Please make sure you&apos;re connected to the internet, and then try reloading the page.
      </Text>
    </div>
  );
};

export const UnauthorizedPage = ({ vpnData }: UnauthorizedPageProps) => {
  const authUrl = process.env.NEXT_PUBLIC_AUTH_URL;
  const { trackVpnBlockedPageView } = useVpnAnalytics();

  useEffect(() => {
    const blockReason = vpnData?.isConnectedToVpn
      ? 'vpn_detected'
      : vpnData?.vpnError
        ? 'network_error'
        : 'restricted_region';

    trackVpnBlockedPageView({
      blockReason,
      countryCode: vpnData?.countryCode ?? null
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative flex h-[100dvh] w-screen flex-col items-center justify-center gap-3 p-10 text-center text-white">
      <Image
        alt="Dark space sky background"
        src={BackgroundNotFound}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="relative flex flex-col items-center">
        {vpnData?.vpnIsLoading && (
          <div className="flex flex-col items-center justify-center">
            <Heading tag="h4" className="text-[22px] font-normal sm:text-2xl lg:text-2xl">
              Verifying connection...
            </Heading>
            <SkyLoading />
          </div>
        )}
        {(vpnData?.vpnError || !authUrl) && <ErrorInfo title={'Network Error'} />}
        {!vpnData?.vpnIsLoading && vpnData?.isConnectedToVpn && !vpnData?.vpnError && (
          <div className="flex flex-col items-center">
            <Heading tag="h1" className="mb-4 text-2xl font-normal sm:text-[40px] md:mb-5">
              VPN Detected
            </Heading>
            <div>
              <Text className="font-normal sm:w-[500px] sm:text-lg md:text-xl lg:text-xl">
                Access via VPN is not permitted. Please disconnect your VPN and refresh the page to continue.
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
