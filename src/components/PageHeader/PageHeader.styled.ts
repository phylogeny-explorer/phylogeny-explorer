import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: ${props => props.theme.spacer}px;
  align-items: center;
  height: ${props => props.theme.topbarHeight}px;
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.xlargeSpacer}px;
  background: rgba(43, 48, 52, 0.92);
  box-sizing: border-box;
`;
