import styled from 'styled-components';

export const Images = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  grid-auto-flow: column;
  margin-top: ${props => props.theme.largeSpacer}px;

  @media screen and (max-width: 600px) {
    grid-auto-flow: row;
  }
`;
export const Info = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
  max-width: 380px;
`;
