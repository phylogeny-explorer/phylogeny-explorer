import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;

  .Tree {
    user-select: none;

    .nodes {
      cursor: pointer;
      pointer-events: all;
    }

    .node {
      cursor: pointer;

      circle {
        fill: #06c9af;
      }

      text {
        fill: #606060;
        font-size: 12px;
        font-family: sans-serif;
        text-anchor: start;
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
        }

        text {
          text-anchor: end;
        }
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
