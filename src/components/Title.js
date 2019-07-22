import styled from 'styled-components'

import { getSize as gs } from '../utils';

const Title = styled.h1`
  ${({ fs }) => `
    font-size: ${gs(fs)};
    @media (min-width: 768px) {
      font-size: ${gs(fs * 1.5)};
    }
  `}

  ${({ mt }) => `margin-top: ${gs(mt)}`}
  ${({ mb }) => `margin-bottom: ${gs(mb)}`}
`;

export default Title;