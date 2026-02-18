import type { FAQItem } from './types';

export const networkIntegrations: FAQItem[] = [
  {
    question: 'What is the Unichain L2 solution?',
    answer: `Layer 2 (L2) networks are blockchain scalability solutions built on top of existing blockchains (Layer 1 or L1 networks). While L2s exist across several blockchains, they are most commonly used with the Ethereum blockchain, where they are designed to solve two major problems: high transaction (gas) fees and slow transaction speeds, which can hinder scalability.

L2 solutions usually work by processing transactions on their own blockchain, and then bundling those transactions and submitting them back to the underlying L1 as a single transaction for final validation, which drastically increases the throughput.

Moving assets between L1 and L2 networks requires specialized protocols called bridges. While bridges can be designed to connect any two blockchain networks, L2 networks operate on top of L1s, inheriting their security while delivering improved efficiency.

L2s used with Ethereum not only offer users lower fees and faster speeds (transactions can be near-instant), they can enable users to transact using the wallets and tools they are already familiar with. There is a tradeoff, however, as users bridging their assets between L1 and L2 networks generally must pay a transaction fee. For users making multiple transactions, the savings may outweigh that cost and you must use your own discretion. Also, L1 networks may provide stronger security guarantees compared to L2s, which often rely on centralized components and actors, which could potentially introduce points of failure.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What can I do with my assets once they are linked to an L2 network?',
    answer:
      'On many L2s, you can perform the same types of transactions as on Ethereum Mainnet—i.e., trade tokens, use DeFi applications (dApps), etc.—but with reduced fees and faster transaction speeds. Many popular dApps have L2 versions, though not all are available on every L2. Please note that some features of Sky.money or the Sky Protocol will not be available on L2s.',
    categories: ['Network Integrations']
  },
  {
    question: 'Which tokens can I trade on supported L2s?',
    answer: `Supported trading pairs vary by network, depending also on your location and other criteria:

• **Ethereum Mainnet:** USDC, USDT, ETH, WETH, DAI, MKR, USDS, sUSDS, SKY, SPK

• **Base:** USDC, USDT, ETH, WETH, DAI, USDS, sUSDS

• **Arbitrum:** USDC, USDT, ETH, WETH, DAI, USDS, sUSDS

• **Optimism:** USDC, USDS, sUSDS

• **Unichain:** USDC, USDS, sUSDS

Using the Sky.money web app, you can interact with the Peg Stability Module (PSM) for conversions to and from **USDS**, **sUSDS**, and **USDC**. The PSM handles conversions programmatically, driven at your direction, between these pairs directly.

On some supported L2s, you can also access the Sky Savings Rate.

SkyLink is Sky Ecosystem’s multichain solution connecting USDS, SKY and other Sky Ecosystem tokens from the Ethereum Mainnet to other chains and L2 protocols.

Available tokens may evolve over time as new trading pairs are added. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for Sky.money web app access eligibility.`,
    categories: ['Network Integrations']
  },
  {
    question: 'How does trading on supported L2s differ from trading on Ethereum?',
    answer: `On Ethereum Mainnet, Base, and Arbitrum, the Sky.money web app features a native integration of [CoW Swap](https://swap.cow.fi/#/1/swap/WETH), a third-party decentralized exchange (DEX) aggregator. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.

On Optimism and Unichain, converting between tokens is made possible through a Peg Stability Module (PSM).`,
    categories: ['Network Integrations']
  },
  {
    question: 'Is the Savings feature experience on L2s the same as on Ethereum Mainnet?',
    answer:
      'Some features of Sky.money or the Sky Protocol are not available on supported Layer 2 (L2) solutions. There is no native Sky Savings Rate module deployed to supported L2s, for example. However, on some L2s, both USDS and USDC token support is made possible through a Peg Stability Module (PSM) deployed to those L2s. In those cases, the experience of using the Savings feature on supported Layer 2 (L2) networks and Ethereum is very similar.',
    categories: ['Network Integrations']
  },
  {
    question: 'Is the Sky Savings Rate percentage the same on Ethereum Mainnet and supported L2s?',
    answer:
      'Yes, the Sky Savings Rate percentage noted on supported Layer 2 (L2) solutions tracks the rate on Ethereum Mainnet. This is done programmatically in the Peg Stability Module (PSM) where deployed on supported L2s.',
    categories: ['Network Integrations']
  },
  {
    question: 'What is SkyLink?',
    answer:
      'SkyLink is Sky Ecosystem’s multichain solution connecting USDS, SKY and other Sky Ecosystem tokens from the Ethereum Mainnet to other chains and L2 protocols.',
    categories: ['Network Integrations']
  }
];
