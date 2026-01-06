import type { FAQItem } from './types';
import { cryptoGeneral } from './faqCryptoGeneral';
import { skyProtocolEcosystem } from './faqSkyProtocolEcosystem';
import { skyAgentFrameworkAndStars } from './faqSkyAgentFrameworkAndStars';
import { skymoney } from './faqSkymoney';
import { skyTokens } from './faqSkyTokens';
import { upgrade } from './faqUpgrade';
import { trade } from './faqTrade';
import { skySavingsRate } from './faqSkySavingsRate';
import { skyTokenRewards } from './faqSkyTokenRewards';
import { expertModules } from './faqExpertModules';
import { stusdsModule } from './faqStusdsModule';
import { stakingEngine } from './faqStakingEngine';
import { networkIntegrations } from './faqNetworkIntegrations';
import { skyGovernance } from './faqSkyGovernance';

export const faqDataset: FAQItem[] = [
  ...cryptoGeneral,
  ...skyProtocolEcosystem,
  ...skyAgentFrameworkAndStars,
  ...skymoney,
  ...skyTokens,
  ...upgrade,
  ...trade,
  ...skySavingsRate,
  ...skyTokenRewards,
  ...expertModules,
  ...stusdsModule,
  ...stakingEngine,
  ...networkIntegrations,
  ...skyGovernance
];
