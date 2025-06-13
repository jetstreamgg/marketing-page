import { FAQItem } from './faqData';

export const skyLink: FAQItem[] = [
  {
    question: 'On what chains can I access USDS and other Sky Protocol tokens?',
    answer: `USDS is available on the Solana blockchain, the Base network, Arbitrum, Optimism and Unichain.
On Solana, only USDS is available. On supported L2 networks, you can trade between USDS, sUSDS and USDC, and access the Sky Savings Rate. 
SkyLink is the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks.`,
    categories: ['SkyLink']
  },
  {
    question: 'What is SkyLink and how does it work?',
    answer: `SkyLink is the Sky system that provides the rails for Sky Ecosystem projects, such as [Spark](https://spark.fi/), to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks. This enables end users on L2s, such as Base, Arbitrum, Optimism and Unichain, to tap into Sky Protocol features via the Sky Ecosystem projects' rails. 

If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['SkyLink']
  },
  {
    question: 'What are Layer 2 networks, and how do they benefit users?',
    answer: `Layer 2 (L2) networks are blockchain scalability solutions built on top of existing blockchains (Layer 1 or L1 networks). While L2s exist across several blockchains, they are most commonly used with the Ethereum blockchain, where they are designed to solve two major problems: high transaction (gas) fees and slow transaction speeds, which can hinder scalability.

L2 solutions usually work by processing transactions on their own blockchain, and then bundling those transactions and submitting them back to the underlying L1 as a single transaction for final validation, which drastically increases the throughput. 

Moving assets between L1 and L2 networks requires specialized protocols called bridges. While bridges can be designed to connect any two blockchain networks, L2 networks operate on top of L1s, inheriting their security, while delivering improved efficiency. 

L2s used with Ethereum not only offer users much lower fees and much faster speeds (transactions can be near-instant), they can enable users to transact using the wallets and tools they are already familiar with. There is a tradeoff, however, as users bridging their assets between L1 and L2 networks generally must pay a transaction fee. For users making multiple transactions, the savings may outweigh that cost and you must use your own discretion. Also, L1 networks may provide stronger security guarantees compared to L2s, which often rely on centralized components and actors, which could potentially introduce points of failure.`,
    categories: ['SkyLink']
  },
  {
    question: 'What can I do with my assets once they are linked to an L2 network?',
    answer: `On many L2s, you can perform the same types of transactions as on Ethereum Mainnet—i.e., trade tokens, use DeFi applications (dApps), etc.— but with reduced fees and faster transaction speeds. Many popular dApps have L2 versions, though not all are available on every L2. Please note that some features of  the [Sky.money web app](https://app.sky.money/) or the Sky Protocol will not be available on L2s.`,
    categories: ['SkyLink']
  }
];
