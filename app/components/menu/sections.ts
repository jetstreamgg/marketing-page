export const menuSections: Record<
  string,
  {
    title: string;
    description?: string;
    href: string;
    isExternal?: boolean;
  }[]
> = {
  explore: [
    {
      title: 'All Features',
      href: '/features'
    },
    {
      title: 'Upgrade',
      href: 'features#upgrade'
    },
    {
      title: 'Trade',
      href: 'features#trade'
    },
    {
      title: 'Sky Token Rewards',
      href: 'features#rewards'
    },
    {
      title: 'Sky Savings Rate',
      href: 'features#savings'
    },
    {
      title: 'Staking Engine',
      href: 'features#stake'
    },
    {
      title: 'SkyLink',
      href: 'features#skylink'
    },
    {
      title: 'Expert',
      href: 'features#expert'
    }
  ],
  participate: [
    // {
    //   title: 'Stars',
    //   href: '#stars'
    // },
    {
      title: 'Governance',
      href: 'https://vote.sky.money/',
      isExternal: true
    },
    {
      title: 'Community',
      href: 'https://forum.sky.money/',
      isExternal: true
    }
  ],
  build: [
    {
      title: 'Developer Documentation',
      href: 'https://developers.sky.money',
      isExternal: true
    }
  ]
};

export const internalLinks: Record<string, string> = {
  mkrUpgradeHub: 'https://upgrademkrtosky.sky.money/',
  ['FAQs']: '/faq'
};

export const sections = [...Object.keys(menuSections), ...Object.keys(internalLinks)];
export const sectionsTitle: Record<string, string> = {
  explore: 'Explore',
  participate: 'Participate',
  build: 'Build',
  mkrUpgradeHub: 'MKR to SKY Upgrade Hub',
  FAQs: 'FAQs'
  // about: 'About'
};
