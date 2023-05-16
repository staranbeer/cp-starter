import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { Block } from '@cube-dev/ui-kit';
import { motion } from 'framer-motion';

import { CPButton } from './Buttons';

function CPTab({
  href,
  children,
  isSelected = false,
  linkStyles,
  direction = 'vertical',
  selectedHighlight = false,
  onPress = () => {},
  ...otherProps
}: {
  href?: any;
  children?: ReactNode;
  isSelected?: boolean;
  linkStyles?: any;
  direction?: 'vertical' | 'horizontal';
  onPress?: () => void;
  selectedHighlight?: boolean;
}) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <motion.div
      layout
      layoutRoot
      style={{
        paddingBottom: direction === 'horizontal' ? '0' : '7px',
        position: 'relative',
        paddingLeft: direction === 'horizontal' ? '7px' : ' 0',
      }}
    >
      {/* BORDER COLOR AND TRANSITION */}
      {isSelected && (
        <motion.div
          layout
          layoutId="border"
          transition={{
            layout: {
              duration: 0.18,
              ease: 'easeOut',
            },
          }}
          style={{
            content: '',
            height: direction === 'vertical' ? '3px' : '80%',
            width: direction === 'vertical' ? '90%' : '3px',
            bottom: direction === 'vertical' ? '0' : '10%',
            left: direction === 'vertical' ? '5%' : '0',
            position: 'absolute',
            borderRadius: '4px',
            background: 'var(--cp-surface-primary)',
          }}
        />
      )}
      {/* tab should have a background if it is selected  */}
      {isSelected && selectedHighlight && (
        <motion.div
          layout
          layoutId="selected"
          transition={{
            layout: {
              duration: 0.2,
              ease: 'easeOut',
            },
          }}
          style={{
            height: '80%',
            width: 'calc(100% - 8px)',
            top: '10%',
            left: '8px',
            content: '',
            position: 'absolute',
            borderRadius: '8px',
            background: 'var(--cp-surface-active)',
            opacity: '1',
          }}
        />
      )}

      {href ? (
        <Link
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          style={{
            fontWeight: isSelected ? '500' : '400',
            color: isSelected ? 'var(--cp-text)' : 'var(--cp-text-soft)',
            position: 'relative',
            padding: direction === 'vertical' ? '0.5rem 1.25rem' : '0.75rem 1rem',
            borderRadius: '0.5rem',
            display: 'inline-block',
            ...linkStyles,
          }}
          href={href}
          {...otherProps}
        >
          {/* BACKGROUND COLOR AND hover TRANSITION */}
          {isHovering ? (
            <motion.span
              layout
              className="highlight"
              layoutId="highlight"
              transition={{
                layout: {
                  duration: 0.2,
                  ease: 'easeOut',
                },
              }}
              style={{
                content: '',
                position: 'absolute',
                top: direction === 'vertical' ? '0' : '10%',
                left: direction === 'vertical' ? '5%' : '0',
                height: direction === 'vertical' ? '100%' : '80%',
                width: direction === 'vertical' ? '90%' : '100%',
                background: 'var(--cp-surface-active)',
                borderRadius: '8px',
                zIndex: '-4',
              }}
            />
          ) : null}
          {children}
        </Link>
      ) : (
        <CPButton
          fill="transparent"
          padding="0.5rem 1rem"
          variant="invisible"
          onPress={onPress}
          {...otherProps}
          fontWeight={isSelected ? '500' : '400'}
        >
          {children}
        </CPButton>
      )}
    </motion.div>
  );
}

export default CPTab;
