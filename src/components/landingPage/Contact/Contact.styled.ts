import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.xxLargeSpacer}px;
  box-sizing: border-box;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  display: grid;
  grid-gap: ${props => props.theme.xLargeSpacer}px;
`;
