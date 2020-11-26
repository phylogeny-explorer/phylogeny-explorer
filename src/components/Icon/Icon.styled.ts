import styled from 'styled-components';
import { transparentize } from 'polished';
import { Heading, BodyText } from '../Typography';

export const ClickWrapper = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${props => transparentize(0.95, props.theme.vdgrey)};
    box-shadow: 0 0 0 3px ${props => transparentize(0.95, props.theme.vdgrey)};
  }
`;

export const StoryRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacer}px;
`;

export const StoryTitle = styled(Heading)`
  margin-bottom: ${props => props.theme.spacer}px;
`;

export const StoryItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 25%;
  margin-bottom: ${props => props.theme.smallSpacer}px;
`;

export const StoryItemName = styled(BodyText)`
  margin-left: ${props => props.theme.spacer}px;
`;
