import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.xxLargeSpacer}px;
  box-sizing: border-box;
  background: ${props => props.theme.dsecondary};
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
`;

export const Images = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
  grid-auto-flow: column;
  margin-top: ${props => props.theme.largeSpacer}px;
`;
