import React from 'react';
import styled from 'styled-components'

import { getSize as gs } from '../base/utils';

const Title = styled.h1`
  ${({ fs }) => `font-size: ${gs(fs)}`}
  ${({ mt }) => `margin-top: ${gs(mt)}`}
  ${({ mb }) => `margin-bottom: ${gs(mb)}`}
`;

export default React.memo(Title);