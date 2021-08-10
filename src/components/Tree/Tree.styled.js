import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;

  .Tree {
    user-select: none;

    .nodes {
      pointer-events: all;
    }

    .node {
      circle {
        fill: ${props => props.theme.primary};
      }

      text {
        fill: #606060;
        font-size: 12px;
        font-family: sans-serif;
        text-anchor: start;
        cursor: pointer;

        &.overlay {
          stroke-linejoin: round;
          stroke-width: 3;
          stroke: ${props => props.theme.white};
        }
      }

      &.parent {
        circle {
          fill: ${props => props.theme.white};
          stroke: ${props => props.theme.primary};
          stroke-width: 2px;
          cursor: pointer;
        }

        text {
          text-anchor: end;
        }
      }

      &.root text {
        cursor: default;
      }
    }

    .links {
      fill: none;
      stroke: #959595;
      stroke-width: 1px;
      stroke-opacity: 0.8;
    }
  }
`;

export const ResetButton = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
