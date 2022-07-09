import styled from 'styled-components';
import Icon from 'components/Icon';

interface WrapperProps {
  isOpen?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  z-index: 1;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14))
    drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));

  ${props => props.isOpen && `width: 300px;`}
`;

export const Header = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-auto-columns: 1fr auto;
  grid-gap: ${props => props.theme.spacer}px;
  align-items: center;
  padding: ${props => props.theme.smallSpacer}px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
`;

export const HeaderIcon = styled(Icon)`
  color: ${props => props.theme.black};
`;
