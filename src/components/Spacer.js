import React from 'react';
import styled from 'styled-components';

import { getSize as gs } from '../base/utils';

const Spacer = styled.hr`
  border: 0;
  background: none;
  margin: 0;
  padding-bottom: ${({ size }) => gs(size)};
`;

export default React.memo(Spacer);