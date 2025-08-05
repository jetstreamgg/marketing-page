import type { FAQItem } from './types';
import { cryptoGeneral } from './faqCryptoGeneral';
import { skyTokens } from './faqSkyTokens';
import { skymoney } from './faqSkymoney';
import { skyProtocolEcosystem } from './faqSkyProtocolEcosystem';
import { trade } from './faqTrade';
import { skySavingsRate } from './faqSkySavingsRate';
import { skyTokenRewards } from './faqSkyTokenRewards';
import { networkIntegrations } from './faqNetworkIntegrations';
import { skyStars } from './faqSkyStars';
import { placeholderDisplayNameForChronicleSection } from './faqPlaceholderDisplayNameForChronicleSection';
import { skyGovernance } from './faqSkyGovernance';
import { placeholderDisplayNameForRiskAndTermsSection } from './faqPlaceholderDisplayNameForRiskAndTermsSection';
import { placeholderDisplayNameForMiscellaneousSection } from './faqPlaceholderDisplayNameForMiscellaneousSection';
import { upgrade } from './faqUpgrade';
import { stakingEngine } from './faqStakingEngine';

export const faqDataset: FAQItem[] = [
  ...cryptoGeneral,
  ...skyTokens,
  ...skymoney,
  ...skyProtocolEcosystem,
  ...trade,
  ...skySavingsRate,
  ...skyTokenRewards,
  ...networkIntegrations,
  ...skyStars,
  ...placeholderDisplayNameForChronicleSection,
  ...skyGovernance,
  ...placeholderDisplayNameForRiskAndTermsSection,
  ...placeholderDisplayNameForMiscellaneousSection,
  ...upgrade,
  ...stakingEngine
];
