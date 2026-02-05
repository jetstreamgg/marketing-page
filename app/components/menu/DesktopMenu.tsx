import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { useState } from 'react';
import { MenuTrigger } from './MenuTrigger';
import { SquareArrowRight } from '../icons';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { internalLinks, menuSections, sections, sectionsTitle } from './sections';
import { menuBackground } from './constants';
import { DesktopNavItem } from './DesktopNavItem';
import { Tone } from '@/app/context/AppContext';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { useMarketingAnalytics, CTAType } from '@/app/hooks/useMarketingAnalytics';

export const DesktopMenu = ({ tone }: { tone: Tone }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');
  const isMenuOpen = isHovered && !!selectedSection;
  const { url } = useSkyUrl();
  const { trackCTAClick } = useMarketingAnalytics();

  return (
    <motion.nav
      className={`pointer-events-auto top-0 mt-2 inline-block w-[700px] rounded-xl backdrop-blur-3xl ${
        isMenuOpen
          ? ''
          : tone === 'dark'
            ? 'border-gradient-before before:bg-header-border bg-header-glass before:rounded-xl'
            : 'border-gradient-before before:bg-header-border bg-header-glass before:rounded-xl'
      }`}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3
      }}
      animate={{
        height: isMenuOpen ? 'auto' : '68px'
      }}
      style={{ overflow: 'hidden', backgroundColor: isMenuOpen ? menuBackground : undefined }}
      exit={{ height: 'auto' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedSection('');
      }}
    >
      <div className="mt-[11px] flex items-center px-6">
        <div className={`flex items-center space-x-4 ${tone === 'dark' ? 'text-white' : ''}`}>
          {sections.map(section =>
            menuSections[section] ? (
              <MenuTrigger
                key={section}
                tone={tone}
                isSelected={selectedSection === section}
                isOpen={isMenuOpen}
                title={sectionsTitle[section]}
                onClick={() => setSelectedSection(selectedSection === section ? '' : section)}
              />
            ) : (
              <DesktopNavItem
                key={section}
                tone={tone}
                isMenuOpen={isMenuOpen}
                setSelectedSection={setSelectedSection}
                text={sectionsTitle[section]}
                link={internalLinks[section]}
                isExternal={internalLinks[section].startsWith('https://')}
              />
            )
          )}
          <DesktopNavItem
            tone={tone}
            text="Launch App"
            link={url}
            isExternal={true}
            isMenuOpen={isMenuOpen}
            setSelectedSection={setSelectedSection}
            iconRight={<SquareArrowRight className="h-5 w-5 rounded" />}
            onClick={() => trackCTAClick(CTAType.LaunchAppHeader, url)}
          />
        </div>
        <div />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <LayoutGroup id={selectedSection}>
            <Menu key={selectedSection}>
              {menuSections[selectedSection]?.map((component, index) => (
                <MenuItem
                  key={`${component.title}-${index}`}
                  href={component.href}
                  title={component.title}
                  isExternal={component.isExternal}
                  onClick={() => {
                    setSelectedSection('');
                    setIsHovered(false);
                  }}
                >
                  {component.description && component.description}
                </MenuItem>
              ))}
            </Menu>
          </LayoutGroup>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
