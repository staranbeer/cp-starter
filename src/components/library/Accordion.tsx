import { Dispatch, SetStateAction } from 'react';
import { CubeButtonProps } from '@cube-dev/ui-kit';
import { ChevronDown, ChevronUp } from '@jengaicons/react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import styled, { keyframes } from 'styled-components';

import { CPButton } from './Buttons';

const fadeInAnimation = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}`;

export const CPAccordion = styled(Accordion)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

export const CPAccordionItem = styled(AccordionItem)`
  border-radius: 0.5rem;
  border: 1px solid var(--cp-border);
  overflow: hidden;
  box-shadow: none;
`;

export const CPAccordionItemHeading = styled(AccordionItemHeading)`
  background: var(--cp-surface-subdued);
  overflow: hidden;
`;

export const CPAccordionItemButton = styled(AccordionItemButton)`
  height: 100%;
  padding: 1.25rem;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CPAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 1.25rem;
  background: var(--cp-surface);
  animation: ${fadeInAnimation} 0.3s ease-in;
`;

export const CPAccordionItemState = AccordionItemState;

//TODO fix props
export function AccItemExpansionButton(
  props: CubeButtonProps & {
    isAccOpen: boolean;
    setAccOpen: Dispatch<SetStateAction<boolean>>;
  },
) {
  const { isAccOpen, setAccOpen, styles, ...otherProps } = props;
  return (
    <CPButton
      variant="clear"
      width={'max-content'}
      onPress={() => {
        setAccOpen(!isAccOpen);
      }}
      border={'none'}
      padding={'0px'}
      styles={{ fontWeight: 500, fontSize: '1rem', lineHeight: '20px', ...styles }}
      fill={'#clear'}
      color={{ '': 'var(--primary-text)', hovered: 'var(--primary)' }}
      {...otherProps}
    >
      {isAccOpen ? 'Hide' : 'Show'}
    </CPButton>
  );
}

//TODO fix props
export function AccItemExpansionIconButton(
  props: CubeButtonProps & {
    openInNew?: boolean;
    isAccOpen: boolean;
    setAccOpen: Dispatch<SetStateAction<boolean>>;
  },
) {
  const { isAccOpen, setAccOpen, ...otherProps } = props;
  return (
    <CPButton
      variant="outline"
      onPress={() => {
        setAccOpen(!isAccOpen);
      }}
      label={'toggle-accordion'}
      icon={isAccOpen ? <ChevronUp /> : <ChevronDown />}
      color={{ '': 'var(--primary-text)', hovered: 'var(--primary)' }}
      outline={'none'}
      border={'none'}
      {...otherProps}
    />
  );
}
