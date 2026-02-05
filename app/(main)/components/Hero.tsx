import { Heading } from '@/app/components/Typography';
import { AccentButton } from '@/app/components/ui/button';
import { HeroStats } from './HeroStats';
import { StarVariantOne } from '@/app/components/icons/Stars';
import { HeroPills } from './HeroPills';
import { motion } from 'framer-motion';
import {
  headingAnimation,
  headingAnimationTwo,
  headingAnimationThree,
  HomePageTransition
} from '@/app/components/PageTransition';
import { useRef } from 'react';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';
import { FetchedData } from '../fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { storageKey, SUNRISE_VIDEO_DELAY } from '@/app/constants';
import { useAppContext } from '@/app/context/AppContext';
import Image from 'next/image';
import { useMarketingAnalytics } from '@/app/hooks/useMarketingAnalytics';

export function Hero({ data }: { data: FetchedData }) {
  const divRef = useRef(null);
  const bottomDivRef = useRef(null);
  useHeaderInView(divRef, 'dark');
  useHeaderInView(bottomDivRef, 'dark');
  const { url } = useSkyUrl();
  const { trackCTAClick } = useMarketingAnalytics();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isFirstPlay, setIsFirstPlay, isSlowNetwork, isJsLoaded } = useAppContext();

  //skip sunrise if not first play
  const handleVideoLoaded = () => {
    if (videoRef.current && isFirstPlay === false) {
      videoRef.current.currentTime = SUNRISE_VIDEO_DELAY;
    }
    if (isFirstPlay) {
      setIsFirstPlay(false);
      sessionStorage.setItem(storageKey, 'true');
    }
  };

  //reset the video to the post-sunrise point, once it ends
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = SUNRISE_VIDEO_DELAY;
      videoRef.current.play().catch(error => console.error('Error playing video:', error));
    }
  };

  const Div = isJsLoaded ? motion.div : 'div';

  return (
    <HomePageTransition isFirstLoad={isFirstPlay !== false}>
      <div
        ref={divRef}
        className={`relative flex w-full flex-col items-center justify-center overflow-visible px-3 text-center tablet:h-screen tablet:px-5 ${
          isJsLoaded ? '' : 'animate-initial-fade opacity-0'
        }`}
      >
        <Image
          src="/SkyBackgroundVideo.png"
          alt="Sky background"
          loading="eager"
          sizes="100vw"
          fill
          className={`animate-initial-fade absolute inset-0 min-h-full w-screen object-cover tablet:h-full`}
        />

        {isFirstPlay !== undefined && (
          <>
            {/* Fallback background while video is loading */}
            <Image
              src={isFirstPlay ? '/SkyBackgroundStars.png' : '/SkyBackgroundVideo.png'}
              alt="Sky background"
              loading="eager"
              sizes="100vw"
              fill
              className="absolute inset-0 min-h-full w-screen object-cover tablet:h-full"
            />
            {!isSlowNetwork ? (
              <video
                ref={videoRef}
                muted
                autoPlay={isFirstPlay !== undefined}
                playsInline
                onLoadedMetadata={handleVideoLoaded}
                onEnded={handleVideoEnded}
                className="absolute inset-0 min-h-full w-screen object-cover tablet:h-full"
              >
                <source src="/HomeVideoBackground.mp4" type="video/mp4" />
                {/* Fallback background if video doesn't load */}
                <Image
                  src="/SkyBackground.png"
                  alt="Sky background"
                  className="absolute inset-0 min-h-full w-screen object-cover tablet:h-full"
                  loading="eager"
                  sizes="100vw"
                  fill
                />
              </video>
            ) : (
              <Image
                src="/SkyBackgroundLowRes.png"
                alt="Sky background"
                className="absolute inset-0 min-h-full w-screen object-cover tablet:h-full"
                loading="eager"
                sizes="100vw"
                fill
              />
            )}
          </>
        )}
        <div className="relative z-20 mt-[30vh] flex w-full justify-center">
          <div className="flex w-full flex-col items-center">
            <Heading tag="h1" className="w-full text-balance text-white tablet:text-balance">
              <Div variants={headingAnimation} initial={'initial'} animate={'animate'}>
                Get rewarded for saving,
              </Div>
              <Div variants={headingAnimationTwo} initial={'initial'} animate={'animate'}>
                without giving up&nbsp;control
              </Div>
            </Heading>
            <Div variants={headingAnimationThree} initial={'initial'} animate={'animate'}>
              <ExternalLink href={url} noStyle onClick={() => trackCTAClick('launch_app_hero', url)}>
                <AccentButton className="relative z-10 mt-6 tablet:mt-8 desktop-xl:mt-12">
                  <StarVariantOne className="absolute right-0 top-0 -translate-y-1/2 translate-x-1 rotate-45" />
                  Launch App
                </AccentButton>
              </ExternalLink>
            </Div>
            <HeroPills />
          </div>
        </div>
        <div ref={bottomDivRef} className="z-10 mb-[54px] mt-56 w-full tablet:mt-auto desktop:w-fit">
          <HeroStats data={data} />
        </div>
      </div>
    </HomePageTransition>
  );
}
