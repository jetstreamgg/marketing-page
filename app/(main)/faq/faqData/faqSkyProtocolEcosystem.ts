import type { FAQItem } from './types';

export const skyProtocolEcosystem: FAQItem[] = [
  {
    question: 'Where can I find all of the Sky Protocol’s smart contract addresses?',
    answer: `The Sky Protocol’s smart contract addresses are listed in the [Developer Documentation](https://developers.sky.money/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Has the Sky Protocol undergone security audits?',
    answer: `Yes. The code behind the Sky Protocol is open source and has undergone extensive [audits](https://developers.sky.money/security/security-measures/overview#audits) by highly regarded auditing firms within the industry, including ChainSecurity and Cantina . For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I see the Sky Protocol’s total liquidity?',
    answer: `[The Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), enables anyone to examine the health of the Sky Protocol in real time. You can view the total value locked (TVL) in the Sky Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total amount of collateral backing the system, an estimation of annual rewards, and much more.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Explain Peg Stability Modules, how they work, and their advantages?',
    answer: `Peg Stability Modules (PSMs) are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol. PSMs effectively create a "price ceiling" and "price floor" for the stablecoins, keeping around $1, as users can always swap directly with the Protocol when profitable.

Through PSMs, USDS or DAI is obtained via predictable-rate conversion (typically a 1:1 ratio with certain stablecoins, or, in the case of sUSDS, for an amount reflecting its current price) rather than through borrowing. For example, given the existence of a USDC-backed PSM, a user could supply 100 USDC stablecoins to generate100 USDS or 100 DAI (minus fees), without taking on any debt. Given that PSM operations are facilitated on the Sky Protocol directly and not on a DEX, price slippage (i.e., the difference between the expected price of a token and the actual price when traded) is not a concern. Low (or zero) fees and no slippage are some of the benefits of using PSM, which adds liquidity to the assets backing the PSM. That liquidity helps to keep the value of USDS and DAI stable.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What are oracles?',
    answer: `The decentralized, non-custodial Sky Protocol relies on oracles, which are third-party services that provide offchain price feed data to the blockchain. Oracles support DeFi protocols in a number of ways, and offer users and end users the following:

* **Increased stability:** Reliable price data ensures efficient collateralization of stablecoins and minimises the risk of under-collateralized borrowing, safeguarding pegs.

* **Transparency and decentralization:** The use of multiple independent oracle feeds reduces a protocol’s or decentralized exchange’s reliance on any single source, promoting transparency and trust in a system.

* **Flexibility and innovation:** The modular design of an oracle system allows for both integration of new data sources and feeds, and separation. In other words, oracles can be on- and off-boarded when needs arise.

Sky Core currently uses oracles provided by [Chronicle](https://chroniclelabs.org/).

**Who is the provider of oracles for the Sky Protocol?**

Sky Core currently uses oracles provided by [Chronicle](https://chroniclelabs.org/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What are the risks of using oracles?',
    answer: `Oracle manipulation, failure or outage are the primary and most critical risks for Decentralized Finance (DeFi) protocols, as they would directly disrupt core operations. If the oracle stops providing data altogether, the protocol usually cannot continue functioning, potentially freezing operations entirely.

Oracles can introduce risks related to data integrity, centralization and latency— each of which can significantly impact DeFi protocols.

* **Data Integrity Risks**: A compromised oracle can feed false data into a DeFi system, which can lead to manipulated prices, faulty liquidations or incorrect smart contract executions.

* **Latency Risks**: Some oracles may not provide real-time data updates, which can distort price discovery, impact trading strategies, and create arbitrage inefficiencies.

To mitigate these risks, many DeFi projects rely on decentralized oracles, which aggregate data from multiple sources to improve accuracy, reliability and enhanced resilience against manipulation.`,
    categories: ['Sky Protocol & Ecosystem']
  }
];
