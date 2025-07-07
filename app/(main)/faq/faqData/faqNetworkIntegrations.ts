import type { FAQItem } from './types';

export const networkIntegrations: FAQItem[] = [
  {
    question: 'What are Layer 2 networks, and how do they benefit users?',
    answer: `Layer 2 (L2) networks are blockchain scalability solutions built on top of existing blockchains (Layer 1 or L1 networks). While L2s exist across several blockchains, they are most commonly used with the Ethereum blockchain, where they are designed to solve two major problems: high transaction (gas) fees and slow transaction speeds, which can hinder scalability.

L2 solutions usually work by processing transactions on their own blockchain, and then bundling those transactions and submitting them back to the underlying L1 as a single transaction for final validation, which drastically increases the throughput.

Moving assets between L1 and L2 networks requires specialized protocols called bridges. While bridges can be designed to connect any two blockchain networks, L2 networks operate on top of L1s, inheriting their security, while delivering improved efficiency.

L2s used with Ethereum not only offer users much lower fees and much faster speeds (transactions can be near-instant), they can enable users to transact using the wallets and tools they are already familiar with. There is a tradeoff, however, as users bridging their assets between L1 and L2 networks generally must pay a transaction fee. For users making multiple transactions, the savings may outweigh that cost and you must use your own discretion. Also, L1 networks may provide stronger security guarantees compared to L2s, which often rely on centralized components and actors, which could potentially introduce points of failure.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What can I do with my assets once they are bridged to an L2 network?',
    answer: `On many L2s, you can perform the same types of transactions as on Ethereum Mainnet—i.e., trade tokens, use DeFi applications (dApps), etc.— but with reduced fees and faster transaction speeds. Many popular dApps have L2 versions, though not all are available on every L2. Please note that some features of Sky.money or the Sky Protocol will not be available on L2s.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What are the differences between centralized and decentralized bridges?',
    answer: `There are several differences between centralized and decentralized bridges.

**Centralized Bridges:**

* Rely on a trusted intermediary/entity to custody assets and manage transfers

* Use centralized validators or a single entity to verify transactions

* Are more vulnerable to single points of failure (custodial risk)

* Typically require Know Your Customer (KYC) and Anti-Money Laundering (AML) verifications

* Trade security for speed and lower costs

**Decentralized Bridges:**

* Use smart contracts and decentralized validator networks

* Lock assets in smart contracts

* Ensure the user is always in control of their assets (assets are non-custodial)

* Prioritize security and trustlessnes

* Typically do not require KYC/AML if they are permissionless

* Typically more expensive due to consensus requirements

Both types of bridges have associated risks. See the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Network Integrations']
  },
  {
    question: 'On what chains can I access USDS and other Sky Protocol tokens?',
    answer: `Currently, USDS is available on the Solana blockchain, the Base network and Arbitrum.

On Solana, only USDS is available. On Base, you can trade between USDS, sUSDS and USDC, and access the Sky Savings Rate.

Subject to Sky Ecosystem governance approval, Base (and other L2) users may soon be able to use the Sky Protocol’s bridge system SkyLink to access:

* Other Sky Ecosystem tokens, including SKY, the native governance token of the Sky Protocol

* Sky Token Rewards

* Rewards in the form of Star Agent tokens

SkyLink is the Sky system that provides the rails for Sky Ecosystem projects to bridge assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks.`,
    categories: ['Network Integrations']
  },
  {
    question: 'How do USDS and DAI maintain stability to stay reliably close in value to $1?',
    answer: `Special types of smart contracts called Peg Stability Modules (PSMs) are designed to maintain the stability of native Sky Protocol stablecoins, USDS and DAI. PSMs allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees. They are designed to maintain the stability of USDS and DAI.

Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.

Through PSMs, USDS or DAI is obtained via predictable-rate conversion (typically a 1:1 ratio with certain stablecoins, or, in the case of sUSDS, for an amount reflecting its current price) rather than through borrowing. For example, given the existence of a USDC-backed PSM, a user could supply 100 USDC stablecoins to generate100 USDS or 100 DAI (minus fees), without taking on any debt. Given that PSM operations are facilitated on the Sky Protocol directly and not on a DEX, price slippage (i.e., the difference between the expected price of a token and the actual price when traded) is not a concern. Low (or zero) fees and no slippage are some of the benefits of using PSM, which adds liquidity to the assets backing the PSM. That liquidity helps to keep the value of USDS and DAI stable.`,
    categories: ['Network Integrations']
  }
];
