import type { FAQItem } from './types';

export const stakingEngine: FAQItem[] = [
  {
    question: 'What is the Staking Engine?',
    answer: `The Staking Engine is a feature of the decentralized Sky Protocol. When you stake SKY tokens using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power the SKY token provides. Here's a brief overview:

• **Access Rewards.** Supply SKY tokens to access Staking Rewards in the form of SKY. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

• **Borrow.** Borrow USDS against your supplied SKY. You can decide to pay back all of your debt, withdraw your staked SKY, and claim some or all of your rewards at any time. Your SKY and claimed rewards are then released from the Staking Engine smart contract back to your connected wallet. The USDS Borrow Rate and debt ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

• **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions.

Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens. With Sky, you always remain in control of your assets.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How do I stake my SKY using the Sky.money web app.',
    answer: `Using the Sky.money web app, you can stake your SKY in four steps:

1. **Supply SKY.** Supply SKY to the Staking Engine to create one or more positions through which you access Staking Rewards and more. At this step, you can also choose to Borrow USDS against your SKY (optional). There is a minimum borrow amount set as a risk parameter by Sky Ecosystem Governance. Borrowing carries risk of liquidation.

2. **Choose Reward.** Choose from the Staking Reward options when available.
3. **Delegate (optional)**. You may choose to transfer the voting power your staked SKY provides to a recognized delegate or a contract you own.
4. **Confirm Staking Position.** Your SKY tokens, as well as any rewards that you accumulate, are supplied to a non-custodial smart contract such that no intermediary takes custody of those tokens.

With Sky, you always remain in control of your assets.`,
    categories: ['Staking Engine']
  },
  {
    question: 'What are Staking Rewards?',
    answer: `When you supply SKY tokens to the Staking Engine using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How are Staking Rewards funded?',
    answer: `When you stake SKY tokens using the Sky.money web app, you can access Staking Rewards in the form of SKY. You may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power the SKY token provides. Funding is as follows:

• **SKY as Staking Rewards:** SKY rewards distributed to SKY stakers are funded by the Sky Protocol's treasury and originate from buybacks executed by the Smart Burn Engine. Under current governance-determined parameters, a portion of protocol surplus is programmatically allocated to open-market buybacks that are either burned or redistributed to staked SKY holders through autonomous protocol mechanisms. The parameters, specific sources, routing, and distribution of rewards are determined by Sky Ecosystem Governance and may change over time.

• **SKY-backed borrowing:** The capital for SKY-backed borrowing is provided by Expert Module users who deposit USDS to that module to access the stUSDS Rate and receive stUSDS in return. The stUSDS tokens serve as a digital record of their USDS interaction with the stUSDS module and any change to the value of their position. The rewards distributed to stUSDS holders come from the interest paid by SKY borrowers (the SKY Borrow Rate) and protocol revenues.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How are Staking Rewards rates determined?',
    answer: `Staking Rewards rates are variable and may fluctuate.

Staking Rewards rates are determined by: 1) the current issuance parameter of rewards (how many rewards are distributed, as determined by Sky Ecosystem Governance), and 2) the current market price of SKY tokens at the time of calculation.
The rates shown in Sky.money are estimated annual rates that can change over time due to both Sky Ecosystem Governance decisions on reward issuance and fluctuations in the market price of SKY.

Rates are updated using data from a third-party provider (i.e., [BlockAnalitica](https://blockanalitica.com/)). Therefore, rates shown do not guarantee future results.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How do I change my Staking Reward selection?',
    answer: `Go to the Stake & Borrow widget in the Sky.money web app. There, you will see your Staking position(s) and your reward choice for each position.

If you currently receive USDS as your reward, you will see a message informing you that USDS rewards have been disabled and SKY has been added as a Staking Reward option. If you do not currently receive USDS as a reward, you will not see this message.

To change your reward selection quickly, bypassing the borrow and delegate steps, click on the drop-down beside your reward ticker symbol to see the current option(s). After making your selection, the app will fast-forward you to the last step of managing your Staking position, where you can confirm the change to activate your updated reward choice.

If you would rather manage your position(s) in the typical way, you would go to the Stake & Borrow widget and click on Manage Position to be taken through all of the Staking steps. At Step 2, you can change your reward choice.`,
    categories: ['Staking Engine']
  },
  {
    question:
      'Now that USDS is disabled as a Staking Reward option, do I have to unstake before changing my Staking Reward selection?',
    answer: 'No. You can change your Staking Reward selection without unstaking your SKY.',
    categories: ['Staking Engine']
  },
  {
    question: 'Do I need to repay the USDS that I’ve borrowed before changing my Staking Reward selection?',
    answer: 'No. You can change your Staking Reward selection without repaying the USDS you’ve borrowed.',
    categories: ['Staking Engine']
  },
  {
    question: 'Is there a deadline for claiming my USDS Staking Rewards?',
    answer:
      'No. While USDS rewards are disabled as a Staking Reward option, and the USDS rate set to zero, the pool of USDS will remain forever so that you can claim your rewards anytime.',
    categories: ['Staking Engine']
  },
  {
    question: 'How does the Staking Engine enable borrowing?',
    answer: `The Staking Engine is a feature of the decentralized Sky Protocol. When you stake SKY tokens, you can access Staking Rewards and may also choose to create one or more positions, including a position that enables you to generate and borrow USDS stablecoins against your supplied SKY.

You can manage your borrow position at any time and withdraw or pay back USDS whenever you would like. Your SKY and claimed rewards are then released from the Staking Engine smart contract back to your connected wallet.

The USDS Borrow Rate and debt ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

Please note that opening a USDS borrow position subjects you to liquidation risk if at any time the value of your supplied collateral drops below the required threshold (liquidation price) and your position becomes undercollateralized. If this were to occur, the smart contract would automatically liquidate and auction your collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'How is the USDS Borrow Rate determined?',
    answer:
      'The USDS Borrow Rate and debt ceiling are parameters determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting.',
    categories: ['Staking Engine']
  },
  {
    question: 'Can I borrow USDS using ETH?',
    answer:
      'Yes. For example, you can do so via the Borrow feature of [Spark](https://Spark.fi), but not via the Sky.money web app. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.',
    categories: ['Staking Engine']
  },
  {
    question: 'What happens if my USDS borrow position is liquidated?',
    answer: `When you borrow USDS stablecoins against SKY tokens using the Staking Engine of the Sky Protocol or some other method, your position is subject to liquidation risk in the following scenario: If at any time the value of your supplied collateral drops below the required threshold (liquidation price), your position is undercollateralized. That means it will be liquidated and your supplied collateral will be auctioned, coordinated through Sky Ecosystem Governance channels. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'How do Sky liquidation auctions work?',
    answer: `The liquidation auctions of the Sky Protocol are automated processes that occur when a USDS or DAI borrow position becomes unsafe due to price fluctuations.

A borrow position is subject to liquidation risk if at any time the value of the supplied collateral drops below the required threshold (liquidation price) and the position becomes undercollateralized. If this were to occur, the system would automatically liquidate and auction the collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

### **The Auction**

The auction begins with the "lot" (i.e., the collateral amount being sold). There are two phases to an auction:

• **Price Discovery Phase:** The decreasing price auction where the system offers a fixed amount of collateral for a decreasing amount of USDS or DAI.

• **Price Recovery Phase:** If needed, bidders compete to accept a smaller portion of the fixed lot of collateral to ensure the maximum USDS or DAI is recovered.

### **Keeper Participation**

Multiple "keepers" (individuals or automated bots operated by professional trading firms and market makers) participate in these auctions to help ensure competitive pricing. They monitor for liquidation opportunities and submit bids. Keepers must have USDS or DAI ready to purchase the liquidated collateral.

Keepers might yield a profit by leveraging price differences between the auction price provided by Sky Protocol oracles and the price on exchanges. Similar to a Dutch-style auction system, the auction price starts above the real market price and drops by a defined ratio in defined time intervals.

### **Winning**

The winning bidder receives the collateral, and the recovered USDS or DAI is used to:

• Repay the position's debt.

• Cover the liquidation penalty, which is determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting.

• Return any surplus to the original position holder. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'What is the difference between Sky Token Rewards and Staking Rewards?',
    answer: `Sky Token Rewards are what you can access when you supply USDS stablecoins to the Sky Token Rewards module of the Sky Protocol.

Staking Rewards are what you can access when you stake SKY to the Staking Engine of the Sky Protocol.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How does managing a Staking Engine position work?',
    answer:
      'You can change your Staking Reward selection and manage your position(s) at any time. You can also withdraw or pay back USDS whenever you would like. Your SKY and claimed rewards are then released from the Staking Engine smart contract back to your connected wallet.',
    categories: ['Staking Engine']
  }
];
