import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
  padding: ${props => props.theme.largeSpacer}px
    ${props => props.theme.xLargeSpacer}px;
`;

export const Section = styled.div``;

export const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export const Line = styled.div`
  height: 1px;
  background: ${props => props.theme.dgrey};
`;
