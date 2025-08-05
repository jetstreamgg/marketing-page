export type Category =
  | 'All FAQs'
  | 'Crypto (General)'
  | 'Sky Tokens'
  | 'Sky.money'
  | 'Sky Protocol & Ecosystem'
  | 'Trade'
  | 'Sky Savings Rate'
  | 'Sky Token Rewards'
  | 'Network Integrations'
  | 'Sky Stars'
  | 'Placeholder display name for Chronicle section'
  | 'Sky Governance'
  | 'Placeholder display name for risk and terms section'
  | 'Placeholder display name for miscellaneous section'
  | 'Upgrade'
  | 'Staking Engine';

export type FAQItem = {
  question: string;
  answer: string;
  categories: Category[];
};

export const ALL_FAQS = 'All FAQs';

export const categories: Category[] = [
  ALL_FAQS,
  'Crypto (General)',
  'Sky Tokens',
  'Sky.money',
  'Sky Protocol & Ecosystem',
  'Trade',
  'Sky Savings Rate',
  'Sky Token Rewards',
  'Network Integrations',
  'Sky Stars',
  'Placeholder display name for Chronicle section',
  'Sky Governance',
  'Placeholder display name for risk and terms section',
  'Placeholder display name for miscellaneous section',
  'Upgrade',
  'Staking Engine'
];
