import styled from 'styled-components';
import Img from 'next/image';

export const Image = styled(Img)`
  mix-blend-mode: plus-lighter;
  filter: invert(1);
`;

export const Info = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
  max-width: 380px;
`;
