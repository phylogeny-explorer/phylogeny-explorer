import React, { FC } from 'react';
import styled from 'styled-components';
import { readableColor } from 'polished';

interface WrapperProps {
  background: 'dprimary' | 'dsecondary' | 'white';
  isFullWidth?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: ${props => props.theme.xxLargeSpacer}px;
  box-sizing: border-box;
  background: ${props => props.theme[props.background]};
  color: ${props =>
    readableColor(props.theme[props.background], props.theme.black)};

  @media screen and (max-width: 600px) {
    padding: ${props => props.theme.xLargeSpacer}px;
  }

  ${props => props.isFullWidth && `justify-content: unset;`}
`;

interface InnerProps {
  isRow?: boolean;
  isFullWidth?: boolean;
}

export const Inner = styled.div<InnerProps>`
  max-width: 1200px;
  display: grid;
  grid-auto-flow: ${props => (props.isRow ? 'column' : 'row')};
  grid-gap: ${props => props.theme.largeSpacer}px;
  grid-template-columns: 1fr;

  @media screen and (max-width: 700px) {
    grid-auto-flow: row;
    grid-template-columns: unset;
  }

  ${props => props.isFullWidth && 'max-width: unset;'}
  ${props =>
    props.isRow && props.isFullWidth && 'grid-template-columns: auto 1fr;'}
`;

interface Props {
  background: 'dprimary' | 'dsecondary' | 'white';
  isRow?: boolean;
  isFullWidth?: boolean;
}

const Section: FC<Props> = ({ background, isRow, isFullWidth, children }) => (
  <Wrapper background={background} isFullWidth={isFullWidth}>
    <Inner isRow={isRow} isFullWidth={isFullWidth}>
      {children}
    </Inner>
  </Wrapper>
);

export default Section;
