import type { FAQItem } from './types';

export const skyTokens: FAQItem[] = [
  {
    question: 'What is SKY, and how can I get it and use it?',
    answer:
      'SKY is the native governance token of the decentralized Sky Protocol and Ecosystem, and the upgrade of MKR. It is freely transferable and can be acquired on crypto exchanges or via dApps that support it. Depending on location or other criteria, eligible users of the Sky.money web app can trade USDS, USDT, ETH and USDC for SKY (and vice versa) within that app. They can also supply SKY tokens to the Staking Engine to access Staking Rewards and choose to create one or more positions, including positions that enable USDS borrowing against the supplied SKY and delegation of the voting power SKY tokens provide.',
    categories: ['Sky Tokens']
  },
  {
    question: 'What is USDS?',
    answer: `USDS is a stablecoin of the decentralized Sky Protocol and the upgrade of DAI. It is backed by a surplus of collateral and soft-pegged to the value of the U.S. dollar, meaning it is designed to maintain a value equal to or close to a dollar.

USDS is freely transferable and can be used in connection with any software protocol or platform that supports it.

USDS is also available on networks other than Ethereum Mainnet, including Solana, Base and Arbitrum. You can follow the health of USDS and all Sky Protocol tokens using the [Sky Ecosystem Dashboard](https://info.sky.money/).`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What are the characteristics of USDS?',
    answer: `USDS is a native stablecoin of the Sky Protocol. It contributes significantly to the stability and economic value the Protocol and to Sky Ecosystem due to several of its key characteristics, including:

• **Accessibility.** USDS is inclusive. Regardless of economic standing, anyone with internet access can connect the Ethereum blockchain and use USDS.

• **Round-the-clock availability.** USDS is attainable 24/7.

• **Speed and affordability.** Because USDS moves on the blockchain, users can transfer it across the globe within seconds and at a fraction of the cost of wire services via traditional finance (TradFi). Users only pay a blockchain transaction (gas) fee.

• **Transparency.** The Sky Protocol is transparent. Users have complete insight into all USDS and other Sky Protocol token transactions.

• **Security.** The transparent design of the blockchain and its network of nodes, miners and validators, combined with the fact that cryptocurrencies like USDS are rooted in cryptography, enhance user trust.

• **Trading options.** Popular tokens can be traded for USDS at current market prices using permissionless rails. With the non-custodial Sky.money web app, you can access the decentralized Sky Protocol to directly trade on the blockchain instead of relying on centralized entities.

• **Ecosystem builder.** USDS is a key component of Sky Ecosystem and the decentralized finance (DeFi) movement. The more people use USDS, the more the Sky Protocol and DeFi ecosystems, generally, expand.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Is USDS pegged to the U.S. dollar or soft-pegged to the U.S. dollar?',
    answer:
      "USDS is soft-pegged to the U.S. dollar, meaning that it is designed to stay close to $1 in value, but doesn't guarantee a strict 1:1 value ratio with the U.S. dollar. Its value can fluctuate based on market conditions. For example, USDS might trade at \+/-$1, depending on market supply and demand. Importantly, the stability of USDS is supported by various mechanisms within the Sky Protocol, including overcollateralization and the use of Peg Stability Modules (PSMs), which help manage its price relative to the dollar.",
    categories: ['Sky Tokens']
  },
  {
    question: 'Are DAI and USDS the same?',
    answer:
      'USDS is the upgraded version of DAI. Like DAI, USDS is freely transferable and can be used in connection with any software protocol or platform that supports it. You can use USDS to participate in the Sky Savings Rate to accumulate additional USDS, and to access Sky Token Rewards via the Sky.money web app.',
    categories: ['Sky Tokens']
  },
  {
    question: 'Is the USDS stablecoin superior to DAI?',
    answer:
      'USDS can be used in several ways DAI cannot, including to participate in the Sky Savings Rate and to access Sky Token Rewards without giving up control of your assets. Both USDS and DAI are backed by a surplus of collateral and soft-pegged to the value of the U.S. dollar, meaning each is designed to maintain a value equal to or close to a dollar. They are both native Sky Protocol tokens maintained by a broad and diversified community of individuals and entities from around the world who hold SKY, the native governance token of the Sky Protocol.',
    categories: ['Sky Tokens']
  },
  {
    question: 'How do I acquire USDS stablecoins?',
    answer:
      'Depending on your location or other criteria, you can use the Sky.money web app, a non-custodial gateway to the decentralized Sky Protocol, to trade USDC, USDT, ETH or SKY for USDS (or vice versa). You can also upgrade your DAI to USDS, subject to any applicable blockchain transaction (gas) fees. Gas fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. You can also obtain USDS on various crypto exchanges that decide to make it available on their platforms.',
    categories: ['Sky Tokens']
  },
  {
    question: 'How can I use USDS?',
    answer:
      'USDS is freely transferable and is used across onchain markets and supported applications. It can also be supplied into the Sky Savings Rate module to accumulate additional USDS, and to the Sky Token Rewards module to receive rewards determined by protocol mechanisms and Sky Ecosystem Governance. Using USDS in these ways supports a broader ecosystem strategy focused on scaling USDS usage through deep liquidity and expanded sources of protocol revenue that support these modules.',
    categories: ['Sky Tokens']
  },
  {
    question: 'How do USDS and DAI maintain stability and benefit the ecosystem?',
    answer: `USDS and DAI are designed to stay close to the value of the U.S. dollar, but they are not guaranteed to always equal exactly $1. Their stability comes from a combination of (1) system design choices such as collateralization; and (2) protocol mechanisms that help manage market supply and demand.

A key stability tool is the Peg Stability Module (PSM). PSMs allow predictable-rate, non-custodial conversions between certain stablecoins and USDS or DAI. By creating a clear path for conversion at a known rate, PSMs can support liquidity and make it easier for market participants to push prices back toward the target range when they drift.
Sky Protocol also uses liquidity and buffer mechanisms to support resilience. For example, when the Surplus Buffer reaches governance-set thresholds, protocol surplus can be used by automated mechanisms that add liquidity and strengthen system buffers.

These stability features benefit the broader Sky Ecosystem by making USDS and DAI more usable across many contexts. When a stable, widely usable asset exists, it can help support onchain activity such as trading, payments, integrations with other protocols, and participation in Sky Protocol modules.

Importantly, the [Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), allows anyone to examine the health of the decentralized Sky Protocol in real time. Users can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, estimated annual profits, and much more. For more on the Dashboard, see this [Substack post](https://blockanalitica.substack.com/p/the-sky-risk-and-analytics-dashboard) by Block Analitica.

For details on the risks associated with soft-pegged stablecoins, review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Tokens']
  },
  {
    question: "Do I need to do anything with the DAI I've supplied to the DAI Savings Rate (DSR) contract?",
    answer:
      "The DAI Savings Rate (DSR) contract remains unchanged, so you don't need to immediately do anything to your DAI in the DSR module. You can, however, withdraw your DSR position, and, if you're an eligible user of the Sky.money web app, upgrade your DAI to USDS, and then use the USDS to access the Sky Savings Rate.",
    categories: ['Sky Tokens']
  },
  {
    question: 'What is DAI?',
    answer:
      'DAI is a stablecoin of the Sky Protocol. It is decentralized, backed by a surplus of collateral, soft-pegged to the value of the U.S. dollar, and easily user-generated and accessed. DAI is maintained and will continue to be maintained by Sky Ecosystem Governance unless and until that body decides otherwise by vote. DAI can be upgraded to USDS, which powers Sky Ecosystem.',
    categories: ['Sky Tokens']
  },
  {
    question: 'What is MKR?',
    answer: `MKR was the governance token of MakerDAO, which was rebranded to Sky Ecosystem in September 2024. For a brief period of time, MKR coexisted with SKY as a governance token of Sky Ecosystem. In the spring of 2025, the Sky Ecosystem Governance community approved the upgrade of MKR to SKY, establishing SKY as the sole governance token of the Sky Protocol. The upgrade is at the rate of 1:24,000 (1 MKR = 24,000 SKY).

As the technical and functional evolution of MKR, SKY maintains the governance functionalities previously held by MKR. Voting with MKR is no longer supported. SKY holders can use the token to vote directly on Sky Ecosystem Governance proposals and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own, just as they once could with MKR.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Are SKY and MKR tokens the same?',
    answer: `Think of SKY not as different from MKR, but as the technical and functional evolution of MKR, with SKY inheriting the governance functionalities previously held by MKR. The upgrade is at the rate of 1:24,000 (1 MKR = 24,000 SKY).

### **Voting with SKY**

SKY is now the sole governance token of the Sky Protocol and Ecosystem. You can use your SKY to participate directly in governance through a system of decentralized onchain voting and/or to entrust your voting power to one or more delegates or a contract that you own. Voting with MKR is no longer possible.

### **Staking SKY**

When you stake SKY tokens to the Staking Engine using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide.

You may manage your Staking positions at any time. Staking Rewards Rates and the Borrow Rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, is supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How is USDS created?',
    answer: `USDS is created on the decentralized Sky Protocol when eligible users generate it against approved collateral that they supply to the Protocol. This process is governed by parameters set through Sky Ecosystem Governance, such as collateral types, limits, and minimum collateralization ratios. Users can generate USDS through the Staking Engine of the Sky Protocol via the non-custodial Sky.money web app or through other decentralized frontends that connect to the Protocol, such as [Spark.fi](https://spark.fi/).

USDS can also be created through the Protocol’s Peg Stability Module (PSM), which allows users to upgrade their DAI to USDS or to convert USDC to USDS at a 1:1 ratio.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Why are institutions becoming more interested in decentralized stablecoins like USDS?',
    answer: `Many financial institutions are exploring decentralized stablecoins because they offer transparency, verifiable data, and direct onchain access without relying on a single controlling party. As stablecoins become more widely understood, institutions increasingly recognize their potential to support global, programmable financial activity.

USDS is part of this shift because it is decentralized, non-custodial, and governed by a global community of SKY holders. Users can independently verify collateralization, system behavior, and risk parameters through open smart contracts and publicly accessible dashboards.

As always, interacting with the Sky Protocol involves risks, including smart-contract vulnerabilities, market volatility, and the absence of recourse for failed transactions or lost funds. For more information on the risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Tokens']
  }
];
