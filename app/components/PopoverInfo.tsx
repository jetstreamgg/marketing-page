import {
  Popover,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/app/components/ui/popover';
import { Close, Info } from './icons';
import { Text } from './Typography';
import { getTooltipById } from '@/app/data';
import { parseMarkdownLinks } from '@/app/utils/parseMarkdownLinks';

const getContent = () => {
  // Get tooltips from centralized system
  const rewardsRateTooltip = getTooltipById('rewards-rate');
  const rateTooltip = getTooltipById('sky-savings-rate');
  const psmTooltip = getTooltipById('psm');
  const stakingRewardsRateTooltip = getTooltipById('staking-rewards-rates-srrs');
  const stusdsRateTooltip = getTooltipById('stusds-rate');
  const liquidationPriceStakingTooltip = getTooltipById('liquidation-price-staking');

  return {
    str: {
      title: rewardsRateTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(rewardsRateTooltip?.tooltip)}
        </Text>
      )
    },
    ssr: {
      title: rateTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(rateTooltip?.tooltip)}
        </Text>
      )
    },
    srr: {
      title: stakingRewardsRateTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(stakingRewardsRateTooltip?.tooltip)}
        </Text>
      )
    },
    psm: {
      title: psmTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(psmTooltip?.tooltip)}
        </Text>
      )
    },
    stusds: {
      title: stusdsRateTooltip?.title || '',
      description: (
        <Text className="whitespace-pre-line leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(stusdsRateTooltip?.tooltip)}
        </Text>
      )
    },
    'liquidation-price-staking': {
      title: liquidationPriceStakingTooltip?.title || '',
      description: (
        <Text className="leading-5 text-white/80" variant="ui-small-regular">
          {parseMarkdownLinks(liquidationPriceStakingTooltip?.tooltip)}
        </Text>
      )
    }
  };
};

export const PopoverInfo = ({
  type
}: {
  type: 'str' | 'ssr' | 'psm' | 'srr' | 'stusds' | 'sky-savings-rate' | 'liquidation-price-staking';
}) => {
  const content = getContent();

  // Map FAQ tooltip IDs to existing IDs
  const typeMapping: Record<string, keyof ReturnType<typeof getContent>> = {
    'sky-savings-rate': 'ssr' // FAQ uses 'sky-savings-rate' instead of 'ssr'
  };

  const actualType = typeMapping[type] || type;

  if (!(actualType in content)) return null;

  const tooltipContent = content[actualType as keyof typeof content];

  return (
    <Popover>
      <PopoverTrigger>
        <Info />
      </PopoverTrigger>
      <PopoverContent align="center" side="top" className="backdrop-blur-lg">
        {tooltipContent.title && (
          <Text variant="ui-medium" className="text-[16px] leading-6">
            {tooltipContent.title}
          </Text>
        )}
        <div className="flex w-full justify-end pb-2">
          <PopoverClose className="absolute right-4 top-4">
            <Close className="h-5 w-5 cursor-pointer" />
          </PopoverClose>
        </div>
        {tooltipContent.description}
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
};
