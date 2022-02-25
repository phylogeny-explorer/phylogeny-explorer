import styled from 'styled-components';

export const Info = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  align-content: start;
`;

export const Profiles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-gap: ${props => props.theme.xLargeSpacer}px
    ${props => props.theme.xxLargeSpacer}px;
  justify-content: center;
`;
