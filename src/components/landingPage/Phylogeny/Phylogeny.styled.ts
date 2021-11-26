import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.xxLargeSpacer}px;
  box-sizing: border-box;
  background: ${props => props.theme.dprimary};
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  grid-auto-flow: column;

  img {
    filter: invert(1);
    mix-blend-mode: screen;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
  max-width: 380px;
`;
