import type { FAQItem } from './types';

export const skyTokens: FAQItem[] = [
  {
    question: 'What is SKY, and how can I get it and use it?',
    answer: `SKY is the native governance token of the decentralized Sky Protocol and Ecosystem, and the upgrade of MKR.

You can access SKY in several ways:

• By upgrading your MKR tokens to SKY at a rate of 1:24,000 (1 MKR = 24,000 SKY) via the Sky.money web app.

• By directly trading USDC, USDT, ETH and USDS for it via the Sky.money web app.

• By supplying USDS to the Sky Token Rewards module of the Sky Protocol and accessing SKY as a reward.

• On cryptocurrency exchanges that support the SKY token.

SKY holders can use the token to:

• Participate directly in Sky Ecosystem Governance through a system of onchain voting, and/or to entrust their voting power to one or more governance delegates.

• Access Staking Rewards by supplying SKY to the Staking Engine of the Protocol.`,
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
    answer: `USDS is a native stablecoin of the Sky Protocol. It contributes significantly to the stability and economic value the Protocol and to the Sky Ecosystem due to several of its key characteristics, including:

• **Accessibility.** USDS is inclusive. Regardless of economic standing, anyone with internet access can access the Ethereum blockchain and use USDS.

• **Round-the-clock availability.** USDS is attainable 24/7.

• **Speed and affordability.** Because USDS moves on the blockchain, users can transfer it across the globe within seconds and at a fraction of the cost of wire services via traditional finance (TradFi). Users only pay a blockchain transaction, or gas, fee.

• **Transparency.** The Sky Protocol is transparent. Users have complete insight into all USDS and other Sky Protocol token transactions.

• **Security.** The design of the blockchain and its network of nodes, miners and validators, combined with the fact that cryptocurrencies like USDS are rooted in cryptography, enhance user security.

• **Trading options.** Popular tokens can be traded for USDS at current market prices using permissionless rails. With the non-custodial Sky.money web app, you can access the decentralized Sky Protocol to directly trade on the blockchain instead of relying on centralized entities.

• **Ecosystem builder.** USDS is a key component of the Sky Ecosystem and the decentralized finance (DeFi) movement. The more people use USDS, the more the Sky Protocol and DeFi ecosystems, generally, expand.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Is USDS pegged to the U.S. dollar or soft-pegged to the U.S. dollar?',
    answer:
      "USDS is soft-pegged to the U.S. dollar, meaning that it is designed to stay close to $1 in value, but doesn't guarantee a strict 1:1 value ratio with the U.S. dollar. Its value can fluctuate based on market conditions. For example, USDS might trade at +/-$1, depending on supply and demand. Importantly, the stability of USDS is supported by various mechanisms within the Sky Protocol, including overcollateralization and the use of Peg Stability Modules (PSMs), which help manage its price relative to the dollar.",
    categories: ['Sky Tokens']
  },
  {
    question: 'Are DAI and USDS the same?',
    answer:
      'USDS is the upgraded version of DAI. Like DAI, USDS is freely transferable; it can be used in connection with any software protocol or platform that supports it. You can use USDS to participate in the Sky Savings Rate to accumulate additional USDS, and to access Sky Token Rewards via the Sky.money web app.',
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
      'You can use the Sky.money web app, a non-custodial gateway to the decentralized Sky Protocol, to trade USDC, USDT, ETH or SKY for USDS (or vice versa). You can also upgrade your DAI to USDS, subject to any applicable blockchain transaction, or gas, fees. Gas fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. You can also obtain USDS on various crypto exchanges that decide to make it available on their platforms.',
    categories: ['Sky Tokens']
  },
  {
    question: 'How can I use USDS?',
    answer:
      'Like other decentralized stablecoins, USDS is freely transferable and can be used in connection with any software protocol or platform that supports it. Unlike other stablecoins, you can use USDS to participate in the Sky Savings Rate to accumulate additional USDS over time, and to access Sky Token Rewards, without giving up control of your digital assets. When you select SKY as your Sky Token Reward, you can participate—if you choose to do so—in the governance of the Sky Ecosystem.',
    categories: ['Sky Tokens']
  },
  {
    question: 'How do USDS and DAI maintain stability and benefit the ecosystem?',
    answer: `Overcollateralization and other mechanisms helps USDS maintain stability while also helping to manage risk.

Overcollateralization means that the total value of the collateral that backs a specific stablecoin must always be higher than the aggregate value of all of those stablecoins in circulation.

Other mechanisms of the decentralized Sky Protocol that are used to keep USDS stable are Peg Stability Modules (PSMs) and the Smart Burn Engine (SBE):

• **Peg Stability Modules (PSMs).** Peg Stability Modules (PSMs) are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.

• **The Smart Burn Engine (SBE).** The Smart Burn Engine is a smart contract that programmatically acquires SKY on the DeFi markets and deposits it into Sky Protocol-owned USDS/SKY liquidity pools using Sky Protocol surplus once the Surplus Buffer has hit a certain threshold set by Sky Ecosystem Governance. Depositing SKY into these pools improves token liquidity and also increases the capital buffers of the Sky Protocol. Note that the SBE no longer holds DAI and MKR. and it no longer buys MKR.

Importantly, the [Sky Ecosystem Dashboard](https://info.sky.money/) allows anyone to examine the health of the decentralized Sky Protocol in real time.

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
      'DAI is a stablecoin of the Sky Protocol. It is decentralized, backed by a surplus of collateral, soft-pegged to the value of the U.S. dollar, and easily user-generated and accessed. DAI is maintained by and will continue to be maintained by Sky Ecosystem Governance unless and until that body decides otherwise by vote. DAI can be upgraded to USDS, which powers the Sky Ecosystem.',
    categories: ['Sky Tokens']
  },
  {
    question: 'What is MKR?',
    answer: `MKR was the governance token of MakerDAO, which was rebranded to the Sky Ecosystem in September 2024. For a brief period of time, MKR joined SKY as a governance token of the Sky Ecosystem. In the spring of 2025, the Sky Ecosystem Governance community approved the upgrade of MKR to SKY, establishing SKY as the sole governance token of the Sky Protocol. The upgrade is at the rate of 1:24,000 (1 MKR = 24,000 SKY).

As the technical and functional evolution of MKR, SKY maintains the governance functionalities previously held by MKR. SKY holders can use the token to vote directly on Sky Ecosystem Governance proposals and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own, just as they once could with MKR.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Are SKY and MKR tokens the same?',
    answer: `Think of SKY not as different from MKR, but as the technical and functional evolution of MKR, with SKY inheriting the governance functionalities previously held by MKR. The upgrade is at the rate of 1:24,000 (1 MKR = 24,000 SKY).

### **Voting with SKY**

SKY is now the sole governance token of the Sky Protocol and Ecosystem. You can use your SKY to participate directly in governance through a system of decentralized onchain voting and/or to entrust your voting power to one or more delegates or a contract that you own. Voting with MKR is no longer possible.

### **Staking SKY**

When you stake SKY tokens to the Staking Engine using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide.

You may exit your Staking positions at any time; no exit fee applies. Staking Rewards Rates and the Borrow Rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, is supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens.`,
    categories: ['Sky Tokens']
  }
];
