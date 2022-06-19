import styled from 'styled-components';
import { SmallText } from 'components/Typography';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background: ${props => props.theme.black}; */

  .rd3t-link {
    stroke: ${props => props.theme.lgrey};
    stroke-width: 2px;
  }

  .rd3t-node,
  .node__branch {
    fill: ${props => props.theme.white};
    stroke: ${props => props.theme.primary};
    stroke-width: 2.5px;
  }

  .node__leaf {
    fill: ${props => props.theme.primary};
    stroke: none;
  }

  .rd3t-label__title {
    fill: ${props => props.theme.offBlack};
    stroke: none;
    font-size: 14px;
    font-weight: 500;

    &.disabled {
      fill: ${props => props.theme.grey};
      cursor: default;
    }
  }
`;

export const NodeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  stroke: ${props => props.theme.dgrey};

  button {
    stroke: ${props => props.theme.primary};
  }
`;

export const Node = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  border-radius: 12px;
  padding: ${props => props.theme.spacer}px;
  box-sizing: border-box;
  background: ${props => props.theme.white};
`;

export const Text = styled(SmallText)`
  flex: 1;
  color: ${props => props.theme.offBlack};
`;
