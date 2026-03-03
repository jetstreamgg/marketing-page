import * as React from 'react';
import { InternalLink } from './InternalLink';
import { SkyLogoColor } from './SkyLogoColor';
import { Heading, Text } from './Typography';
import { ButtonArrow } from './ui/button';
import { ExternalLink } from './ExternalLink';
import { Link as LinkIcon } from './icons';
import { getFooterLinks, isExternalUrl } from '../lib/utils';
import { Socials } from './Socials';
import { useRef } from 'react';
import { useHeaderInView } from '../hooks/useHeaderInView';
import { useSkyUrl } from '../hooks/useSkyUrl';
import { useMarketingAnalytics, CTAType } from '../hooks/useMarketingAnalytics';
import { useCookieConsent } from '../context/CookieConsentContext';

type LinkItem = { title: string; url: string };
type LinkSection = [string, LinkItem[]];

const linksA: LinkSection[] = [
  [
    'Explore',
    [
      { title: 'All Features', url: '/features' },
      { title: 'Sky Token Rewards', url: '/features#rewards' },
      { title: 'Sky Savings Rate', url: '/features#savings' },
      { title: 'Staking Engine', url: '/features#stake' },
      { title: 'Vaults', url: '/features#vaults' },
      { title: 'Expert', url: '/features#expert' },
      { title: 'Upgrade', url: '/features#upgrade' },
      { title: 'Trade', url: '/features#trade' }
    ]
  ],
  [
    'Ecosystem',
    [
      {
        title: 'Brand Guidelines',
        url: 'https://web3-growth.notion.site/Sky-Brand-Kit-ec871fa39f9d41bf9cc4446e7d1f6997?p=ebe95d12947642b6bf69cbac9d09c972&pm=c'
      },
      {
        title: 'Media Assets',
        url: 'https://www.notion.so/Sky-Brand-Kit-ec871fa39f9d41bf9cc4446e7d1f6997?pvs=4'
      },
      { title: 'FAQs', url: '/faq' },
      { title: 'Whitepaper', url: 'https://ipfs.io/ipfs/Qmex5coqQPXqo4FvCkPqvKfH2ibBgACTsUV3YrTGaC86LQ' }
    ]
  ]
];
const linksB: LinkSection[] = [
  [
    'Participate',
    [
      { title: 'Governance', url: 'https://vote.sky.money' },
      { title: 'Community', url: 'https://forum.sky.money/' }
    ]
  ],
  [
    'Build',
    [
      { title: 'Developer Documentation', url: 'https://developers.sky.money' },
      { title: 'Audits', url: 'https://developers.sky.money/security/security-measures/overview#audits' }
    ]
  ]
];

export function Footer() {
  const { url } = useSkyUrl();
  const targetRef = useRef(null);
  useHeaderInView(targetRef, 'dark');
  const { trackCTAClick } = useMarketingAnalytics();
  const { showBanner } = useCookieConsent();

  const footerLinks = getFooterLinks();

  const externalClass = 'hover:text-white hover:underline hover:underline-offset-4';

  return (
    // main container
    <div
      ref={targetRef}
      className="flex flex-col gap-20 bg-dark px-3 pb-8 pt-16 tablet:px-5 desktop:gap-10 desktop:p-10"
    >
      <div className="flex flex-col gap-10 tablet:flex-row desktop:justify-between">
        <InternalLink href="/">
          <SkyLogoColor width={90} height={32} />
        </InternalLink>
        <div className="desktop:w-1/2">
          <Text variant="ui-medium" className="text-white desktop:ml-2.5">
            The decentralised Sky Protocol was built from the core module of the Maker Protocol, one of the
            largest and most popular decentralized finance protocols in the world.
          </Text>
        </div>
      </div>
      {/* CTA section container */}
      <div className="flex flex-wrap justify-between gap-20 desktop:flex-nowrap desktop:gap-5">
        {/* CTA earning */}
        <div className="group flex w-full flex-wrap items-center justify-between gap-8 border-t border-white/60 pt-5 transition-colors tablet:pt-6 desktop:w-1/2 desktop:flex-col desktop:items-stretch desktop:hover:border-white">
          <div className="tablet:w-1/2 desktop:w-full">
            <Heading
              className="text-white transition-colors desktop:text-white/60 desktop:group-hover:text-white"
              tag="h3"
            >
              Control what&apos;s yours with Sky.
            </Heading>
          </div>
          <div>
            <ExternalLink href={url} noStyle onClick={() => trackCTAClick(CTAType.LaunchAppFooter, url)}>
              <ButtonArrow variant="nocturnal-2">Launch app</ButtonArrow>
            </ExternalLink>
          </div>
        </div>
        {/* CTA socials */}
        <div className="group flex w-full flex-wrap items-center justify-between gap-8 border-t border-white/60 pt-5 transition-colors tablet:pt-6 desktop:w-1/2 desktop:flex-col desktop:items-stretch desktop:hover:border-white">
          <div className="tablet:w-1/2 desktop:w-full">
            <Heading
              className="text-white transition-colors desktop:text-white/60 desktop:group-hover:text-white"
              tag="h3"
            >
              Stay connected. Join the Sky community.
            </Heading>
          </div>
          <Socials variant="glass-dark" />
        </div>
      </div>
      {/* links section container */}
      <div className="flex flex-wrap justify-between gap-12 desktop:mt-14 desktop:flex-nowrap">
        {[linksA, linksB].map((sections, i) => {
          return (
            <div
              key={sections[i][0]}
              className="flex w-full flex-col flex-wrap justify-between gap-12 tablet:flex-row desktop:w-1/2"
            >
              {sections.map(([header, items]) => {
                return (
                  <div key={header} className="flex-1 desktop:w-1/2">
                    <Text variant="caption" className="pb-1 text-white/60">
                      {header}
                    </Text>
                    {items.map(({ title, url }) => {
                      return isExternalUrl(url) ? (
                        <ExternalLink key={title} href={url} className={externalClass}>
                          <div className="flex items-center gap-1 pt-4">
                            <Text variant="ui-medium">{title}</Text>
                            <LinkIcon className="h-3 w-3 text-white" />
                          </div>
                        </ExternalLink>
                      ) : (
                        <InternalLink key={title} href={url}>
                          <Text
                            variant="ui-medium"
                            className="pt-4 text-white hover:underline hover:underline-offset-4"
                          >
                            {title}
                          </Text>
                        </InternalLink>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* copyright section */}
      <div className="flex flex-wrap justify-between gap-7 desktop:flex-nowrap">
        <div className="w-full tablet:w-1/2">
          <Text variant="ui-small-regular" className="justify-end text-white/50">
            © {new Date().getFullYear()} All rights reserved
          </Text>
        </div>
        <div className="flex w-full gap-3 tablet:w-1/2">
          {footerLinks.map((link, index) => (
            <ExternalLink key={index} href={link.url} className={externalClass}>
              <Text variant="ui-small" className="text-white">
                {link.name}
              </Text>
            </ExternalLink>
          ))}
          <button onClick={showBanner} className={externalClass}>
            <Text variant="ui-small" className="text-white">
              Cookie Settings
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
}
