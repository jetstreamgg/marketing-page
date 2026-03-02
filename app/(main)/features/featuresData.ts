import { Save, Upgrade, Rewards, Trade, Activation, Expert, Vaults } from '@/app/components/icons';
import { UpgradeCard } from './components/cards/UpgradeCard';
import { TradeCard } from './components/cards/TradeCard';
import { RewardsCard } from './components/cards/RewardsCard';
import { SaveCard } from './components/cards/SaveCard';
import { ExpertCard } from './components/cards/ExpertCard';
import { StakeCard } from './components/cards/StakeCard';
import { VaultsCard } from './components/cards/VaultsCard';

type Feature = {
  icon: React.ElementType;
  title: string;
  isLong?: boolean;
  card: React.ElementType;
  id: string; //should be the same as the id of the card
  isAlpha?: boolean;
};

export const existingFeatures: Feature[] = [
  {
    icon: Rewards,
    title: 'Rewards',
    card: RewardsCard,
    id: 'rewards'
  },
  {
    icon: Save,
    title: 'Savings',
    card: SaveCard,
    id: 'savings'
  },
  {
    icon: Activation,
    title: 'Staking Engine',
    card: StakeCard,
    id: 'stake',
    isAlpha: false
  },
  {
    icon: Vaults,
    title: 'Vaults',
    card: VaultsCard,
    id: 'vaults'
  },
  {
    icon: Expert,
    title: 'Expert',
    card: ExpertCard,
    id: 'expert'
  },
  {
    icon: Upgrade,
    title: 'Upgrade',
    card: UpgradeCard,
    id: 'upgrade'
  },
  {
    icon: Trade,
    title: 'Trade',
    card: TradeCard,
    id: 'trade'
  }
];

export const comingSoonFeatures: Feature[] = [];

export const features: Feature[] = [...existingFeatures, ...comingSoonFeatures];
