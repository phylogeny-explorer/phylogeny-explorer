import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 328px 1fr;
  grid-gap: ${(props) => props.theme.largeSpacer}px;
  align-items: center;
  height: ${(props) => props.theme.topbarHeight}px;
  padding: 0 ${(props) => props.theme.xlargeSpacer}px;
  background: ${(props) => props.theme.foreground};
  box-sizing: border-box;
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.spacer}px 0;
  position: absolute;
  top: 46px;
  left: 88px;
  background: ${(props) => props.theme.white};
  z-index: 1;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.12);
  width: 328px;
  max-height: 300px;
  overflow: auto;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  padding: ${(props) => props.theme.spacer}px
    ${(props) => props.theme.largeSpacer}px;
  :hover {
    background: ${(props) => props.theme.vlgrey};
  }
`;
