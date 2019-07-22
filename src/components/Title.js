import styled from 'styled-components'

import { getSize as gs } from '../utils';

const Title = styled.h1`
  ${({ fs }) => `font-size: ${gs(fs)}`}
  ${({ mt }) => `margin-top: ${gs(mt)}`}
  ${({ mb }) => `margin-bottom: ${gs(mb)}`}
`;

export default Title;