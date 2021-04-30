import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.xlargeSpacer}px;
  padding: ${props => props.theme.xlargeSpacer}px;
  max-width: 400px;
`;
