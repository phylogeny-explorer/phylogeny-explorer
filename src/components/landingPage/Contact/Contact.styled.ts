import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.xxLargeSpacer}px;
  grid-auto-flow: column;
  grid-template-columns: minmax(300px, 400px) 1fr;

  @media screen and (max-width: 600px) {
    grid-gap: ${props => props.theme.xLargeSpacer}px;
    grid-auto-flow: row;
    grid-template-columns: unset;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  grid-template-rows: min-content;
`;
