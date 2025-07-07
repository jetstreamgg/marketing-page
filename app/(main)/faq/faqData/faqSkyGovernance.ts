import type { FAQItem } from './types';

export const skyGovernance: FAQItem[] = [
  {
    question: "What's the role of multisig wallets in governance?",
    answer: `Some, but not all, ecosystem communities and decentralized autonomous organizations (DAOs) use multisig wallets in concert with community voting to enhance security over treasury assets, and to provide decentralized governance over the most critical protocol-level actions, such as upgrading smart contracts.

Multisig wallets reduce single points of failure in governance. They require multiple signers to approve any protocol-level additions and changes, distributing control across different stakeholders to support more democratic decision-making and appropriate thresholds.`,
    categories: ['Sky Governance']
  },
  {
    question: 'What is the Sky Ecosystem Dashboard?',
    answer: `The [Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), allows anyone to examine the health of the decentralized Sky Protocol in real time. Users can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, an estimation of annual profits, and much more. For more on the Dashboard, see this [blog post](https://blockanalitica.substack.com/p/the-sky-risk-and-analytics-dashboard) by Block Analitica.`,
    categories: ['Sky Governance']
  },
  {
    question: 'Where can I make Sky Ecosystem Governance proposals?',
    answer: `You can propose a change to the Sky Protocol or Sky Ecosystem Governance in the [Sky Forum](https://forum.sky.money/), where it can be reviewed by the community and debated. Depending on the results of community discussion in the Forum, your proposal may be placed in the [Sky Governance Voting portal](https://vote.makerdao.com/) and voted upon.`,
    categories: ['Sky Governance']
  }
];
