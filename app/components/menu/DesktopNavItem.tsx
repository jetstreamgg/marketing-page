import { InternalLink } from '../InternalLink';
import { Text } from '../Typography';
import { ExternalLink } from '../ExternalLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tone } from '@/app/context/AppContext';

export const DesktopNavItem = ({
  text,
  link,
  isMenuOpen,
  isExternal,
  setSelectedSection,
  iconRight,
  tone,
  onClick
}: {
  iconRight?: React.ReactNode;
  text: string;
  link: string;
  tone: Tone;
  isMenuOpen: boolean;
  isExternal?: boolean;
  setSelectedSection: (section: string) => void;
  onClick?: () => void;
}) => {
  const [isItemHovered, setIsItemHovered] = useState(false);
  const LinkComponent = isExternal ? ExternalLink : InternalLink;
  const isOverDarkBg = tone === 'dark' || isMenuOpen;
  return (
    <div
      className={`relative ${isMenuOpen ? 'text-gray-500' : tone === 'dark' ? 'text-white' : 'text-black'}`}
      onMouseEnter={() => {
        setSelectedSection('');
        setIsItemHovered(true);
      }}
      onMouseLeave={() => {
        setIsItemHovered(false);
      }}
    >
      <LinkComponent
        href={link}
        className={`${isOverDarkBg ? 'text-white hover:text-white' : 'text-black hover:text-black'}`}
        onClick={onClick}
      >
        <div className="flex h-10 items-center space-x-2">
          <Text variant="ui-small" className="inline-block whitespace-nowrap">
            {text}
          </Text>
          {iconRight}
        </div>
        {isItemHovered && (
          <motion.div
            layoutId="underline"
            className={`absolute bottom-[5px] mt-1 h-[1px] w-full ${isOverDarkBg ? 'bg-white' : 'bg-black'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
          />
        )}
      </LinkComponent>
    </div>
  );
};
