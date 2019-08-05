import React from 'react';
import styled from 'styled-components';

import { colors } from '../base/config';
import { getSize as gs } from '../base/utils';

const Button = styled.button`
  border: 0;
  border-radius: ${({radius}) => radius};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: white;
  font-weight: 600;

  padding: ${gs(22)} ${gs(30)};
  min-width: ${gs(200)};

  > * {
    margin: 0 ${gs(10)}
  }

  ${({ color }) => [
    color === 'red' && `
      background-color: ${colors.red.base};
      &:hover, &:focus { background-color: ${colors.red.hover} }
      &.active, &:active { background-color: ${colors.red.active} }
    `,
    color === 'blue' && `
      background-color: ${colors.blue.base};
      &:hover, &:focus { background-color: ${colors.blue.hover} }
      &.active, &:active { background-color: ${colors.blue.active} }
    `,
  ].filter(Boolean).join('')}
`;

Button.defaultProps = {
  color: 'red',
  radius: '4px'
}

export default React.memo(Button);