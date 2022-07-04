import styled from 'styled-components';
import { triangle } from 'polished';
import Card from 'components/Card';

export const Wrapper = styled.div`
  justify-self: end;
  position: relative;
`;

export const PopupWrapper = styled.div`
  position: absolute;
  right: 24px;
  top: -24px;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
`;

export const Popup = styled(Card)`
  grid-gap: ${props => props.theme.spacers.sm}px;
  min-width: 300px;
  background: ${props => props.theme.white};
`;

export const Triangle = styled.div`
  ${props =>
    triangle({
      pointingDirection: 'right',
      width: '6px',
      height: '14px',
      foregroundColor: props.theme.white,
    })}
`;
