import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from '../ExternalLink';
import { Menu } from './Menu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { internalLinks, menuSections, sections, sectionsTitle } from './sections';
import { MenuItem } from './MenuItem';
import { Heading } from '../Typography';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { menuBackground } from './constants';
import { ButtonArrow } from '@/app/components/ui/button';
import { Tone } from '@/app/context/AppContext';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { useMarketingAnalytics } from '@/app/hooks/useMarketingAnalytics';

const height = 56;

export const TabletMenu = ({
  isOpen,
  setIsOpen,
  tone
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  tone: Tone;
}) => {
  const { bpi } = useBreakpointIndex();
  const { url } = useSkyUrl();
  const { trackCTAClick } = useMarketingAnalytics();

  return (
    <motion.nav
      className={`absolute left-0 right-0 flex items-center justify-end space-x-2 pr-0 pt-2 lg:pr-2 ${
        isOpen ? 'pb-4' : ''
      } top-0`}
    >
      <div className="w-full">
        <div className={`h-[${height}px]`} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: '0px',
                backgroundColor: menuBackground,
                position: 'absolute',
                top: 0,
                paddingTop: '56px',
                left: 0,
                right: 0,
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px'
              }}
              animate={{ height: 'auto' }}
              exit={{ height: '0px', opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-xl"
            >
              <Menu key="menu" className="pointer-events-auto max-h-[calc(100vh-90px)] gap-0 overflow-y-auto">
                <Accordion
                  type="single"
                  defaultValue={bpi > BP.sm ? sections[0] : undefined}
                  collapsible
                  className="w-full border-t border-gray-500/60 text-white"
                >
                  {sections.slice(0, 3).map(section => (
                    <AccordionItem key={section} value={section} className="border-gray-500/60">
                      <AccordionTrigger>
                        <Heading tag="h5">{sectionsTitle[section]}</Heading>
                      </AccordionTrigger>
                      <AccordionContent>
                        {menuSections[section].map(item => (
                          <MenuItem
                            key={item.title}
                            className="-ml-3 -mr-5"
                            href={item.href}
                            title={item.title}
                            isExternal={item.isExternal}
                            onClick={() => {
                              setIsOpen(false);
                            }}
                          >
                            {item.description && item.description}
                          </MenuItem>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                {sections.slice(3, 6).map(section => (
                  <MenuItem
                    className="my-0 -ml-3 -mr-5"
                    key={section}
                    href={internalLinks[section]}
                    title={sectionsTitle[section]}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                ))}
                <ExternalLink
                  href={url}
                  className="-mr-2 mt-8 flex justify-center hover:text-white md:hidden"
                  onClick={() => trackCTAClick('launch_app_header', url)}
                >
                  <ButtonArrow
                    variant="glass-dark"
                    className="h-[${height}px] flex w-[180px] items-center justify-center space-x-2 rounded-xl border border-slate-200/30 bg-slate-200/50 px-4"
                  >
                    Launch App
                  </ButtonArrow>
                </ExternalLink>
              </Menu>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
