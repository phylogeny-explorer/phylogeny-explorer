import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

interface InputProps {
  isContained?: boolean;
}

export const Input = styled.input<InputProps>`
  color: ${props => props.theme.black};
  font-size: 16px;
  padding: ${props => props.theme.spacer}px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline: none;

  ${props =>
    props.isContained &&
    `border: 1px solid ${props.theme.vvlgrey};
  `}
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacer}px 0;
  position: absolute;
  top: 37px;
  left: 0;
  background: ${props => props.theme.white};
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
  padding: ${props => props.theme.spacer}px
    ${props => props.theme.largeSpacer}px;
  :hover {
    background: ${props => props.theme.vlgrey};
  }
`;
