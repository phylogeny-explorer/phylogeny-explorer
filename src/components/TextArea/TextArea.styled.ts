import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { sharedInputStyle } from 'components/Input/Input.styled';

export const StyledTextArea = styled(TextareaAutosize)`
  ${sharedInputStyle}
  resize: none;
  height: unset;
  min-height: 200px;
`;
