import styled from 'styled-components';

interface Props {
  isHorizontal?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${props => (props.isHorizontal ? 'row' : 'column')};
  align-items: flex-start;

  button {
    border: 1px solid ${props => props.theme.vvlgrey};
    border-radius: 0;

    &:first-child {
      border-radius: ${props => props.theme.borderRadius}px
        ${props => (props.isHorizontal ? 0 : props.theme.borderRadius)}px 0
        ${props => (props.isHorizontal ? props.theme.borderRadius : 0)}px;
    }

    &:last-child {
      border-radius: 0
        ${props => (props.isHorizontal ? props.theme.borderRadius : 0)}px
        ${props => props.theme.borderRadius}px
        ${props => (props.isHorizontal ? 0 : props.theme.borderRadius)}px;
    }

    & + button {
      ${props =>
        props.isHorizontal ? 'margin-left: -1px;' : 'margin-top: -1px;'}
    }
  }
`;
