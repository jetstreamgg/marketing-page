import { FAQItem } from './faqData';

export const stakingEngine: FAQItem[] = [
  {
    question: 'What is the Staking Engine?',
    answer: `The Staking Engine is a feature of the decentralized Sky Protocol. It has replaced the Seal Engine, offering the same features but it has no exit fee and it only supports SKY tokens, not MKR. 

For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money). 

Overview of the Staking Engine
When you supply SKY tokens to the Staking Engine using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power the SKY token provides. Here's a brief overview:

* **Access Rewards.** Supply SKY tokens to access Staking Rewards, initially in the form of USDS. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

* **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and withdraw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

* **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions.   

You may exit your Staking positions at any time; no exit fee applies. The Staking Reward rate and Borrow Rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens. With Sky, you always remain in control of your assets.`,
    categories: ['Staking Engine']
  },
  {
    question: 'What are Staking Rewards?',
    answer: `Staking Rewards can be accessed when you supply SKY tokens to the Staking Engine of the decentralized Sky Protocol.

The Staking Engine is a feature of the Sky Protocol. When you supply SKY tokens to the Staking Engine using the [Sky.money web app](https://app.sky.money), you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide. Here's a brief overview:

* **Access Rewards.** Supply SKY tokens to access Staking Rewards, initially in the form of USDS. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

* **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and withdraw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

* **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions.     

You may exit your Staking positions at any time; no exit fee applies. The Staking Reward rate and Borrow rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens. With Sky, you always remain in control of your assets.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How is the Staking Rewards rate determined?',
    answer:
      'The Staking Rewards rate is determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting.',
    categories: ['Staking Engine']
  },
  {
    question: 'How does the Staking Engine enable borrowing?',
    answer: `The Staking Engine is a feature of the decentralized Sky Protocol. When you supply SKY tokens to the Staking Engine using the [Sky.money web app](https://app.sky.money), you can access Staking Rewards and may also choose to create one or more positions, including a position that enables you to generate and borrow USDS stablecoins against your supplied SKY.

You can exit your borrow position at any time—no exit fee applies—and withdraw or pay back USDS whenever you would like. 

The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

Please note that opening a USDS borrow position subjects you to liquidation risk if at any time the value of your supplied collateral drops below the required threshold (liquidation price) and your position becomes undercollateralized. If this were to occur, the smart contract would automatically liquidate and auction your collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).  

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'How is the USDS Borrow Rate determined?',
    answer:
      'The USDS Borrow Rate and Debt Ceiling are parameters determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting.',
    categories: ['Staking Engine']
  },
  {
    question: 'Can I borrow USDS using ETH?',
    answer: `Yes, but only via [Spark](https://spark.fi)'s Borrow feature, not via the [Sky.money web app](https://app.sky.money). 

[Spark Borrow](https://spark.fi/borrow) enables you to borrow USDS stablecoins using various cryptocurrencies as collateral, including ETH. Spark is the very first Sky Star Agent (Star) and a top DeFi liquidity protocol. Stars are autonomous and independent decentralized projects within the larger Sky Ecosystem. For more information about the Borrow feature, you can review the [Spark Documentation](https://docs.spark.fi/user-guides/using-sparklend/borrow-dai-and-usds).`,
    categories: ['Staking Engine']
  },
  {
    question: 'What happens if my USDS borrow position is liquidated?',
    answer: `When you borrow USDS stablecoins against SKY tokens using the Staking Engine of the Sky Protocol or some other method, your position is subject to liquidation risk in the following scenario: If at any time the value of your supplied collateral drops below the required threshold (liquidation price), your position is undercollateralized and the smart contract will automatically liquidate it and auction your supplied collateral. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'How do Sky liquidation auctions work?',
    answer: `The liquidation auctions of the Sky Protocol are automated processes that occur when a USDS or DAI borrow position becomes unsafe due to price fluctuations.  

A borrow position is subject to liquidation risk if at any time the value of the supplied collateral drops below the required threshold (liquidation price) and the position becomes undercollateralized. If this were to occur, the system would automatically liquidate and auction the collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).  

**The Auction**

The auction begins with the "lot" (i.e., the collateral amount being sold). There are two phases to an auction:

* **Price Discovery Phase:** The decreasing price auction where the system offers a fixed amount of collateral for a decreasing amount of USDS or DAI.

* **Price Recovery Phase:** If needed, bidders compete to accept a smaller portion of the fixed lot of collateral to ensure the maximum USDS or DAI is recovered.

**Keeper Participation**

Multiple "keepers" (individuals or automated bots operated by professional trading firms and market makers) participate in these auctions to help ensure competitive pricing. They monitor for liquidation opportunities and submit bids. Keepers must have USDS or DAI ready to purchase the liquidated collateral. 

Keepers might yield a profit by leveraging price differences between the auction price provided by Sky Protocol oracles and the price on exchanges. Similar to a Dutch-style auction system, the auction price starts above the real market price and drops by a defined ratio in defined time intervals.

**Winning**

The winning bidder receives the collateral, and the recovered USDS or DAI is used to:

- Repay the position's debt

- Cover the liquidation penalty, which is determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting 

- Return any surplus to the original position holder. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/). 

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'What is the difference between Sky Token Rewards and Staking Rewards?',
    answer: `Sky Token Rewards are what you can access when you supply USDS stablecoins to the Sky Token Rewards module of the Sky Protocol. Sky Token Rewards take the form of SKY tokens. Both USDS and SKY are native tokens of the Sky Protocol.

Staking Rewards are what you can access when you supply SKY to the Staking Engine of the Sky Protocol. Staking Rewards take the form of USDS.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How does exiting a Staking Engine position work?',
    answer:
      'You can exit your Staking Engine position(s) at any time—no exit fee applies—and draw or pay back USDS whenever you would like.',
    categories: ['Staking Engine']
  },
  {
    question: 'What does it mean to delegate my voting power?',
    answer: `With SKY tokens comes voting power. Every SKY holder can participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting or transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the [Sky Governance Voting Portal](https://vote.sky.money).

**Delegating with SKY**

SKY holders can use their tokens to delegate their voting power via the Sky Governance Voting portal, or they can use the [Sky.money web app](https://app.sky.money/) to delegate via the Staking Engine of the Sky Protocol. Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate at any time (subject to the Sky Protocol's rules that prevent double voting or misuse of delegated voting power). 

Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.  

For a deep dive into Sky Ecosystem Governance, please refer to the [Sky Atlas](https://sky-atlas.powerhouse.io/), the [Sky Governance Voting Portal](https://vote.sky.money), and the [Sky Forum](https://forum.sky.money).`,
    categories: ['Staking Engine']
  },
  {
    question: 'Where can I learn about Sky Ecosystem Governance?',
    answer:
      'For a deep dive into the facets and checks and balances of Sky Ecosystem Governance, please refer to the [Sky Forum](https://forum.sky.money), the [Sky Governance Voting Portal](https://vote.sky.money), and the [Sky Atlas](https://sky-atlas.powerhouse.io/). The Sky Atlas is the definitive rulebook of the Sky Ecosystem, as determined by Sky Ecosystem Governance.',
    categories: ['Staking Engine']
  }
];
