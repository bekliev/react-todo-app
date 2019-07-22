import { createGlobalStyle } from 'styled-components'

import { baseSize } from '../base/config';
import { getSize as gs } from '../etc/utils';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${baseSize / 2}px;

    @media (min-width: 768px) {
      font-size: ${baseSize}px;
    }
  }

  body {
    background-color: #E5E5E5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 1024' fill='none'%3E%3Cpath fill='%23FF3767' d='M1598-212C1289 820 77 107-157 891l123 457 1913-512-281-1048z'/%3E%3Cpath fill='%234E95FF' d='M1625 554C1116 982 229 514-157 839v221h1782V554z'/%3E%3C/svg%3E");
    background-size: cover;
    min-height: 100vh;

    ${({p}) => `padding: ${gs(p)}`}
  }
`;

export default GlobalStyle;