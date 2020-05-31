import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .Tree {
    user-select: none;

    .nodes {
      pointer-events: all;
    }

    .node {
      circle {
        fill: #06c9af;
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
          stroke: #fff;
        }
      }

      &.parent {
        circle {
          fill: #fff;
          stroke: #06c9af;
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
