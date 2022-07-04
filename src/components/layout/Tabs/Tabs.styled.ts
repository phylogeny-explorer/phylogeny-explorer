import styled from 'styled-components';
import { Heading } from 'components/Typography';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: ${props => props.theme.largeSpacer}px;
`;

export const Nav = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.theme.largeSpacer}px;
  width: fit-content;
  align-items: baseline;
`;

interface TabProps {
  isActive?: boolean;
  isDisabled?: boolean;
}

export const Tab = styled(Heading)<TabProps>`
  cursor: pointer;
  white-space: nowrap;

  ${props =>
    props.isActive &&
    `color: ${props.theme.secondary};
     cursor: default;`}

  ${props =>
    props.isDisabled &&
    `color: ${props.theme.grey};
     pointer-events: none;
     cursor: default;`}

  &:focus {
    outline: none;
  }
`;
