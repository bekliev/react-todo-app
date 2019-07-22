import styled from 'styled-components'
import { getSize as gs } from '../utils';

const styles = {
  borderRadius: gs(28),
  padding: [gs(72), gs(62), gs(166)].join(' '),
  maxWidth: gs(870),
};

const Box = styled.div`
  background: #FFFFFF;
  box-shadow: 0px ${gs(8)} ${gs(16)} rgba(0, 0, 0, 0.25);
  border-radius: ${styles.borderRadius};
  padding: ${styles.padding};
  max-width: ${styles.maxWidth};
`;

export default Box;