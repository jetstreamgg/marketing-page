import { Text } from '@/app/components/Typography';
import { motion } from 'framer-motion';
import { getSunriseDelay } from '@/app/constants';
import { FetchedData } from '../fetchData';
import { PopoverInfo } from '@/app/components/PopoverInfo';

export function HeroStats({ data }: { data: FetchedData }) {
  return (
    <motion.div
      className="flex flex-col gap-6 text-white tablet:flex-row tablet:gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: getSunriseDelay() + 0.6 }}
    >
      {data.users && (
        <div className="flex flex-col items-center gap-1 tablet:w-1/3 desktop:w-[300px] desktop:gap-2 desktop-xl:w-96">
          <Text variant="p3">Sky Protocol Users</Text>
          <Text variant="n1">{data.users}</Text>
        </div>
      )}
      {data.totalTvl && (
        <div className="flex flex-col items-center gap-1 tablet:w-1/3 desktop:w-[300px] desktop:gap-2 desktop-xl:w-96">
          <Text variant="p3">Sky Protocol TVL</Text>
          <Text variant="n1">{data.totalTvl}</Text>
        </div>
      )}
      {data.rewardsApy && (
        <div className="flex flex-col items-center gap-1 tablet:w-1/3 desktop:w-[300px] desktop:gap-2 desktop-xl:w-96">
          <div className="flex">
            <Text variant="p3" className="pr-2">
              Sky Savings Rate
            </Text>
            <PopoverInfo type="ssr" />
          </div>
          <Text variant="n1" className="max-w-full break-words text-center">
            {data.saveApy}
          </Text>
        </div>
      )}
    </motion.div>
  );
}
