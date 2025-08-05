import type { FAQItem } from './types';

export const skyStars: FAQItem[] = [
  {
    question: 'What is the Spark Liquidity Layer',
    answer: `The Spark Liquidity Layer is a solution that utilizes smart contracts to deploy, withdraw and balance stablecoin liquidity across blockchains on demand. It distributes USDS, a native stablecoin of the decentralized Sky Protocol, and sUSDS, a native savings token for eligible users.

When you supply USDS to the Sky Savings Rate module, you access the Sky Savings Rate and receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the module and any value accrued to your position. Note that some Sky Protocol features are not available in selected jurisdictions.

In short, the Spark Liquidity Layer dynamically balances the mix of a highly liquid stablecoin—USDC— with a savings generating stablecoin—sUSDS—across networks in real time. This ensures liquidity is provided precisely when users need it rather than being locked idly across networks. For more information, see [Spark Documentation](https://docs.spark.fi/user-guides/spark-liquidity-layer).`,
    categories: ['Sky Stars']
  },
  {
    question: 'How is the Sky Ecosystem designed for community-driven innovation?',
    answer: `In addition to being designed for security, scalability and governance, the Sky Protocol’s architecture is built to enhance interoperability within the larger decentralized finance (DeFi) ecosystem.

The Sky Protocol’s native USDS stablecoin powers the open Sky ecosystem and is designed to scale. Sky provides liquidity for various DeFi applications, promoting efficient trading and enhancing the overall liquidity of the DeFi ecosystem. The composability features of the Protocol empower developers to build a richer DeFi environment by leveraging the tokens and rewards of the Sky Ecosystem, leading to integrations that offer new functionalities and efficiencies.

Visit the [Sky.money website](https://sky.money/) or the [Developer Documentation](https://developers.sky.money/) for more info.`,
    categories: ['Sky Stars']
  }
];
