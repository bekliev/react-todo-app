import React from 'react';
import styled from 'styled-components';

import { colors } from '../base/config';
import { getSize as gs } from '../base/utils';

const Button = styled.button`
  border: 0;
  border-radius: ${({ radius }) => radius};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-weight: 600;
  user-select: none;

  padding: ${gs(22)} ${gs(30)};
  min-width: ${gs(200)};

  > * {
    margin: 0 ${gs(10)}
  }

  ${({ block }) => block && `
    display: flex;
    width: 100%;
  `}

  ${({ color }) => [
    color === 'red' && `
      background-color: ${colors.red.base};
      color: white;
      &:hover, &:focus { background-color: ${colors.red.hover} }
      &.active, &:active { background-color: ${colors.red.active} }
    `,
    color === 'blue' && `
      background-color: ${colors.blue.base};
      color: white;
      &:hover, &:focus { background-color: ${colors.blue.hover} }
      &.active, &:active { background-color: ${colors.blue.active} }
    `,
    color === 'green' && `
      background-color: ${colors.green.base};
      color: white;
      &:hover, &:focus { background-color: ${colors.green.hover} }
      &.active, &:active { background-color: ${colors.green.active} }
    `,
    color === undefined && `
      background-color: ${colors.white.base};
      &:hover, &:focus { background-color: ${colors.white.hover} }
      &.active, &:active { background-color: ${colors.white.active} }
    `,
  ].filter(Boolean).join('')}
`;

Button.defaultProps = {
  // color: 'red',
  radius: '4px'
}

export default React.memo(Button);