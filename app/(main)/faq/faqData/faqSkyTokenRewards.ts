import type { FAQItem } from './types';

export const skyTokenRewards: FAQItem[] = [
  {
    question: 'What are Sky Token Rewards, and how do they work?',
    answer:
      'When you supply USDS to the Sky Token Rewards module of the Sky Protocol, you receive Sky Token Rewards over time. These rewards are distributed automatically by smart contracts on the blockchain. The USDS, as well as the rewards received, are supplied to a non-custodial smart contract that represents the USDS pool of assets. That means no intermediary has custody of your supplied assets.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What tokens can I use to access Sky Token Rewards?',
    answer: 'Only USDS can be used to access Sky Token Rewards.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much USDS do I have to supply to accumulate Sky Token Rewards?',
    answer:
      'Eligible users can supply any amount of USDS to the Sky Token Rewards module of the decentralized Sky Protocol to begin accessing Sky Token Rewards. There is no minimum amount required. Eligible users can also withdraw their USDS at any time. With the Sky Protocol, you can receive rewards without giving up control of your supplied assets, as the Sky Token Rewards module is non-custodial.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How are Sky Token Rewards Rates calculated?',
    answer: `The Sky Token Reward Rate is different for each type of token rewarded, and always fluctuates, as determined by the following factors:

• The issuance rate of the token rewarded, which is determined by Sky Ecosystem Governance;

• The market price of the token rewarded; and

• The user's proportional supply within the total pool of assets linked to the Sky Token Rewards module.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How are Sky Token Rewards funded?',
    answer: `Users can supply USDS to the Sky Token Rewards module of the Sky Protocol to receive rewards in the form of Star Agent tokens and Chronicle Points. Sky Protocol reward mechanisms are designed to balance incentives for users while maintaining sustainability and minimizing unnecessary inflation. Sky Token Rewards are funded as follows:

• **Star Agent tokens as rewards:** Currently, Star Agent token rewards are funded using distributions to Sky from the investments in those Stars. This is not inflationary for the Sky Protocol, as these are external tokens acquired through investment.

• **Chronicle Points as rewards:** USDS suppliers can opt to receive Chronicle Points, which might ultimately become claimable for Chronicle tokens (CLE) at a rate of 10 points for every 1 CLE token. The total supply of CLE tokens is anticipated to be 10 billion. Chronicle Points are emitted at a rate of 3.75 billion per year. Any future opportunities to convert Chronicle Points into CLE tokens would be managed independently by Chronicle's own applications.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much does it cost to participate in Sky Token Rewards?',
    answer: `There is no fee to participate in the Sky Token Rewards feature of the Sky Protocol; however, with each transaction, you will likely pay a transaction (gas) fee for using the Ethereum blockchain network. That fee is neither controlled, imposed nor received by Sky.money or the Sky Protocol.

Note that if you have shied away from the Ethereum blockchain due to the high price of gas, the average price of gas on Ethereum has dropped significantly as a result of the 2024 Dencun upgrade.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How do I claim my Sky Token Rewards in the Sky.money web app?',
    answer:
      'To claim your Sky Token Rewards using the Sky.money web app, click on the Claim button in the Rewards feature of the app. You must claim all your Sky Token Rewards at once. It is not possible to claim partial rewards.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What is Chronicle?',
    answer:
      "Chronicle is the original oracle on Ethereum built within MakerDAO for the creation, management and maintenance of DAI. Today, [Chronicle's decentralized oracle network](https://docs.chroniclelabs.org/Intro/network) secures the decentralized, non-custodial Sky Protocol, [Spark](https://spark.fi/), and many other decentralized finance (DeFi) and real world asset (RWA) protocols.",
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What are Chronicle Points, and how do they work?',
    answer: `When an eligible user supplies USDS to the Sky Token Rewards module of the Sky Protocol through the Sky.money web app (or some other platforms) they can access Chronicle Points as rewards. No minimum amount of USDS is required to access those points.

Chronicle Points might ultimately become claimable for Chronicle tokens (CLE) at a rate of 10 points for every 1 CLE token. The total supply of CLE tokens is anticipated to be 10 billion. Chronicle Points are emitted at a rate of 3.75 billion per year. Any future opportunities to convert Chronicle Points into CLE tokens would be managed independently by Chronicle's own applications.`,
    categories: ['Sky Token Rewards']
  },
  {
    question:
      'Is there a minimum requirement of USDS that I need to supply to the Sky Protocol to start collecting Chronicle Points?',
    answer: 'No minimum supply of USDS is required.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'Where can I see the current total distribution of Chronicle Points?',
    answer:
      'You can view the current distribution of Chronicle Points on the [Sky Ecosystem Dashboard](https://info.sky.money/rewards/0x10ab606b067c9c461d8893c47c7512472e19e2ce).',
    categories: ['Sky Token Rewards']
  }
];
