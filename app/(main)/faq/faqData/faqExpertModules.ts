import type { FAQItem } from './types';

export const expertModules: FAQItem[] = [
  {
    question: 'What are Expert modules?',
    answer: 'Expert modules unlock high-level functionality tailored to experienced users.',
    categories: ['Expert modules']
  },
  {
    question: 'Is there a minimum amount of USDS I must supply to access Expert module rewards?',
    answer: 'No minimum amount of USDS is required.',
    categories: ['Expert modules']
  },
  {
    question: 'Does it cost anything to access Expert modules?',
    answer:
      'Accessing Expert modules via the Sky.money web app is free and neither controlled, imposed nor received by Skybase nor the Sky Protocol. However, any time you supply assets to or withdraw assets from the stUSDS module of the Sky Protocol, you will incur a transaction fee, called a gas fee, for using the Ethereum blockchain network.',
    categories: ['Expert modules']
  },
  {
    question: 'What is the stUSDS Rate, and how is it calculated?',
    answer: `The stUSDS rate is variable and calculated using the following formula:

stUSDS Rate = Utilization * (SKY Borrow Rate - stUSDS Accessibility Reward) + (1 - Utilization) * Sky Savings Rate

The rate is derived from the SKY Borrow Rate less the stUSDS Accessibility Reward on the utilized portion of your capital and the Sky Savings Rate on the unutilized portion. Utilization is the percent of funds in the stUSDS contract that are used to fund borrowing against staked SKY.

The SKY Borrow Rate is the current interest rate charged to SKY-backed borrowers and is dynamic and market-driven, based on the utilization of funds within the stUSDS contract.`,
    categories: ['Expert modules']
  }
];
