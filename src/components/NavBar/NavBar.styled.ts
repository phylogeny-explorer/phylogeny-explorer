import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 328px auto;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  justify-content: start;
  align-items: center;
  height: ${props => props.theme.topbarHeight}px;
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.xlargeSpacer}px;
  background: ${props => props.theme.foreground};
  box-sizing: border-box;
`;
