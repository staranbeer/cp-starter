import { Check, JengaIconRegularProps, Spinner, X } from '@jengaicons/react';
import styled from 'styled-components';

export const CPIconLoading = (props: JengaIconRegularProps) => {
  return (
    <Spinner {...props}>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      />
    </Spinner>
  );
};

export const CPIconCheck = styled(Check)`
  color: green;
`;

export const CPIconClose = styled(X)`
  color: red;
`;
