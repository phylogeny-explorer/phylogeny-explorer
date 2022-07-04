import styled from 'styled-components';
import { SmallText } from 'components/Typography';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto minmax(424px, 1fr);
  grid-auto-columns: minmax(200px, 512px);
  grid-gap: ${props => props.theme.spacers.xl}px;
`;

export const Nav = styled.aside`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: ${props => props.theme.spacers.lg}px;
`;

export const NavHeader = styled.div`
  display: grid;
`;

export const Subtitle = styled(SmallText)`
  color: ${props => props.theme.grey};
`;

export const NavItems = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: ${props => props.theme.spacers.sm}px;
  padding-left: ${props => props.theme.spacers.md}px;
`;

interface LinkTextProps {
  isActive?: boolean;
  isDisabled?: boolean;
}

export const LinkText = styled.a<LinkTextProps>`
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.foreground};
  cursor: pointer;
  white-space: nowrap;

  ${props =>
    props.isActive &&
    `font-weight: 500;
     letter-spacing: 0.1px;
     pointer-events: none;
     cursor: default;`}

  &:hover {
    text-decoration-color: unset;
  }
`;

export const ElementWrapper = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacers.lg}px;
  grid-auto-rows: max-content;
`;

export const Info = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacers.lg}px;
  align-items: start;
`;
