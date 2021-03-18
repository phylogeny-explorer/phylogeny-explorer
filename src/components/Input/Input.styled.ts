import styled from 'styled-components';
import { HeadingLabel } from '../Typography';

export const Label = styled(HeadingLabel)`
  margin-bottom: ${(props) => props.theme.spacer}px;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.black};
  font-size: 16px;
  padding: ${(props) => props.theme.spacer}px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline: none;
`;
