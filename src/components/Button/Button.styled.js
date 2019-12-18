import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #06C9AF;
  border-radius: 3px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  ${props =>
    props.small &&
    `height: 24px;
     padding: 0 8px;`}
  ${props => props.dark && `background-color: black;`}
  ${props => props.light && `background-color: white;`}
  ${props =>
    props.disabled &&
    `background-color: lgrey;
     pointer-events: none;`}
     cursor: pointer;

     &:hover,
  &:focus {
    outline: none;
    background-color: #ACE8DD;
      transition: background-color 300;
  }
`;

export const Text = styled.div`
font-weight: 600;
text-transform: uppercase;
font-size: 14px;
letter-spacing: 1.25px;

  color: white;
  ${props => props.small && 'font-size: 9px;'}
  ${props => props.light && `color: black;`}
  ${props => props.disabled && `color: vlgrey;`}
`;
