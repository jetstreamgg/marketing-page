import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface TransitionProps {
  postTransitionView: React.ReactNode;
  children: React.ReactNode;
  childrenRefOverride?: React.RefObject<HTMLDivElement>;
  postChildrenRefOverride?: React.RefObject<HTMLDivElement>;
  isSectionTransition?: boolean;
  duration?: number;
  delay?: number;
  width?: number | string;
  height?: number | string;
  state?: 'open' | 'close' | undefined;
  colorVariant?: string;
  middleColorVariant?: string;
  position?: 'bottomLeft' | 'topRight';
  postTransitionBackgroundColor?: string;
  postTransitionClassName?: string;
}

export const Transition: React.FC<TransitionProps> = ({
  postTransitionView,
  isSectionTransition,
  duration = 1,
  delay = 0.5,
  width = '100%',
  height = '100%',
  state,
  childrenRefOverride,
  postChildrenRefOverride,
  colorVariant = 'sunset-2',
  middleColorVariant,
  children,
  position = 'bottomLeft',
  postTransitionBackgroundColor = 'bg-slate-900',
  postTransitionClassName
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const defaultChildrenRef = useRef<HTMLDivElement>(null);
  const childrenRef = childrenRefOverride ?? defaultChildrenRef;
  const defaultPostTransitionRef = useRef<HTMLDivElement>(null);
  const postTransitionRef = postChildrenRefOverride ?? defaultPostTransitionRef;

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (state === undefined || !isSectionTransition) return;
    if (state === 'close' && childrenRef.current) {
      const scrollOffset = 30; // Adjust this value to control how far from the bottom you want to stop scrolling
      childrenRef.current.scrollTop =
        childrenRef.current.scrollHeight - childrenRef.current.clientHeight - scrollOffset;
    }
    if (state === 'open' && postTransitionRef.current) {
      postTransitionRef.current.scrollTop = 20; // Skip the trigger div
    }
  }, [state, containerSize.height, isSectionTransition]);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize(); // Initial size calculation

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  const biggerDimension =
    (containerSize.height > containerSize.width ? containerSize.height : containerSize.width) * 2;

  const middleVisibleDelay = (custom: number) =>
    middleColorVariant ? (custom === -180 ? 0 : custom === -135 ? 0.05 : 0.08) : custom === -180 ? 0 : 0.05;
  const middleExitDelay = (custom: number) =>
    middleColorVariant ? (custom === -90 ? 0 : custom === -135 ? 0.05 : 0.08) : custom === -90 ? 0 : 0.05;

  const variants = {
    hidden: { rotate: 0 },
    visible: (custom: number) => ({
      rotate: position === 'bottomLeft' ? custom : -custom,
      transition: {
        duration,
        delay: delay + middleVisibleDelay(custom),
        ease: 'easeInOut'
      }
    }),
    exit: (custom: number) => ({
      rotate: 0,
      transition: {
        duration,
        delay: delay + middleExitDelay(custom),
        ease: 'easeInOut'
      }
    })
  };

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        ref={childrenRef}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflowY: 'auto' }}
        initial={
          state !== undefined
            ? { opacity: state === 'close' ? 0 : 1, y: state === 'close' ? 20 : 0 }
            : undefined
        }
        animate={
          state !== undefined
            ? {
                opacity: state === 'close' ? 1 : 0,
                y: state === 'close' ? 0 : 20,
                transition: { duration: 0.7, delay: state === 'close' ? 1 : 0.3 }
              }
            : undefined
        }
      >
        {children}
      </motion.div>
      <AnimatePresence initial={false}>
        {state === 'open' && (
          <>
            <motion.div
              className={`bg-${colorVariant}`}
              style={{
                width: `${biggerDimension}px`,
                height: `${biggerDimension}px`,
                position: 'absolute',
                ...(position === 'bottomLeft'
                  ? { left: 0, bottom: -biggerDimension, transformOrigin: 'top left' }
                  : { right: -biggerDimension, top: 0, transformOrigin: 'top left' })
              }}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={-180}
            />
            {middleColorVariant && (
              <motion.div
                className={`bg-${middleColorVariant}`}
                style={{
                  width: `${biggerDimension}px`,
                  height: `${biggerDimension}px`,
                  position: 'absolute',
                  ...(position === 'bottomLeft'
                    ? { left: 0, bottom: -biggerDimension, transformOrigin: 'top left' }
                    : { right: -biggerDimension, top: 0, transformOrigin: 'top left' })
                }}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={-135}
              />
            )}
            <motion.div
              className={postTransitionBackgroundColor}
              style={{
                width: `${biggerDimension}px`,
                height: `${biggerDimension}px`,
                position: 'absolute',
                ...(position === 'bottomLeft'
                  ? { left: 0, bottom: -biggerDimension, transformOrigin: 'top left' }
                  : { right: -biggerDimension, top: 0, transformOrigin: 'top left' })
              }}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={-90}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {state === 'open' && (
          <motion.div
            ref={postTransitionRef}
            className={postTransitionClassName}
            style={{
              zIndex: 100,
              display: 'flex',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              overflowY: 'auto'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
            transition={{
              opacity: { duration: 0.5, delay: delay + 0.9 },
              y: { duration: 0.2, delay: delay + 0.9 }
            }}
          >
            {postTransitionView}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
