import styled from 'styled-components';
import Grid from 'components/Grid';

const Card = styled(Grid)`
  padding: ${props => props.theme.spacers[props.p || 'lg']}px;
  background: ${props => props.theme[props.bg || 'offWhite']};
`;

export default Card;
