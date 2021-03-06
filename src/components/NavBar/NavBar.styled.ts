import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 328px auto 1fr;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  justify-content: start;
  align-items: center;
  height: ${props => props.theme.topbarHeight}px;
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.xlargeSpacer}px;
  background: rgba(43, 48, 52, 0.96);
  box-sizing: border-box;

  & > button:last-child {
    justify-self: end;
  }
`;
