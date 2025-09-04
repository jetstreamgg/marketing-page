import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover';
import { Close, Info } from './icons';
import { Text } from './Typography';
import { ExternalLink } from './ExternalLink';

const content = {
  str: {
    title: 'Sky Token Rewards Rate (STR)',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        The Sky Token Rewards (STR) rate is variable, and is determined by the following factors: the current
        issuance rate of the reward token in question, as set through the relevant onchain governance
        processes pertinent to the reward token in question (for example, SKY issuance rate is decided by the
        decentralised Maker/Sky ecosystem onchain governance), the current market price of the reward token in
        question, and the user’s proportional percentage of the total supply within the pool of funds accruing
        that particular reward. STR rate may be volatile. The rate provided here is an estimate of the
        relevant STR rate expressed in expected rate per annum, should be automatically updated every 5
        minutes and is powered by data provided by a third party (
        <ExternalLink href="https://blockanalitica.com/" className="hover:text-white hover:underline">
          BlockAnalitica
        </ExternalLink>
        ). This figure does not represent or guarantee future results.
      </Text>
    )
  },
  ssr: {
    title: 'SSR Rate (SSR)',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        The Sky Savings Rate (SSR) is variable, determined by decentralised Sky Ecosystem onchain governance,
        and configured on the Ethereum blockchain. Sky Ecosystem governance is able to adapt the SSR and other
        relevant parameters at any time at its discretion and without notice, based on market conditions,
        protocol surplus and other factors. The rate provided here is an estimate of the SSR expressed in
        expected compounded rate per annum, should be automatically updated every 5 minutes, and is powered by
        data provided by a third party (
        <ExternalLink href="https://blockanalitica.com/" className="hover:text-white hover:underline">
          BlockAnalitica
        </ExternalLink>
        ). This figure does not represent or guarantee future results.
      </Text>
    )
  },
  srr: {
    title: 'Staking Rewards Rates (SRR)',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        Staking Rewards Rates (SRRs) are variable and may fluctuate. They are determined by: (1) the current
        issuance rate of the rewards set through onchain governance processes, and (2) the market price of the
        staked SKY at the time of each calculation. The SRRs shown are estimated annual rates, updated using
        data provided by a third party (
        <ExternalLink href="https://blockanalitica.com/" className="hover:text-white hover:underline">
          BlockAnalitica
        </ExternalLink>
        ). These figures are for informational purposes only and do not guarantee future results.
      </Text>
    )
  },
  psm: {
    title: 'Peg Stability Module (PSM)',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        PSMs are smart contracts that allow users to convert certain stablecoins directly with the Sky
        Protocol for USDS or DAI at a fixed rate, with zero protocol fees; however, gas fees will apply. They
        are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX)
        transactions, PSM operations do not involve trading between users. Instead, they are direct,
        non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the
        Sky Protocol.
      </Text>
    )
  },
  stusds: {
    title: 'stUSDS',
    description: (
      <Text className="leading-5 text-white/80" variant="ui-small-regular">
        Stusds rate
      </Text>
    )
  }
};

export const PopoverRateInfo = ({ type }: { type: 'str' | 'ssr' | 'psm' | 'srr' | 'stusds' }) => {
  if (!(type in content)) return null;

  return (
    <Popover>
      <PopoverTrigger>
        <Info />
      </PopoverTrigger>
      <PopoverContent align="center" side="top" className="backdrop-blur-lg">
        {content[type].title && (
          <Text variant="ui-medium" className="text-[16px] leading-6">
            {content[type].title}
          </Text>
        )}
        <div className="flex w-full justify-end pb-2">
          <PopoverClose className="absolute right-4 top-4">
            <Close className="h-5 w-5 cursor-pointer" />
          </PopoverClose>
        </div>
        {content[type].description}
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
};
