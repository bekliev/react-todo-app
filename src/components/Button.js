import React from 'react';
import styled from 'styled-components';

import { colors } from '../base/config';
import { getSize as gs } from '../base/utils';

const Button = styled.button`
  border: 0;
  border-radius: ${({radius}) => radius};
  cursor: pointer;
  padding: ${gs(22)} ${gs(62)};

  ${({ color }) => [
    color === 'red' && `
      background-color: ${colors.red.base};
      &:hover { background-color: ${colors.red.hover} }
      &.active, &:active { background-color: ${colors.red.active} }
    `,
    color === 'blue' && `
      background-color: ${colors.blue.base};
      &:hover { background-color: ${colors.blue.hover} }
      &.active, &:active { background-color: ${colors.blue.active} }
    `,
  ].filter(Boolean).join('')}
`;

Button.defaultProps = {
  color: 'red',
  radius: '4px'
}

export default React.memo(Button);