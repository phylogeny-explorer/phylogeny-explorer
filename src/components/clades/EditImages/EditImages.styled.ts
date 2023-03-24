import styled from 'styled-components';

interface ImageWrapperProps {
  isSelected?: boolean;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  cursor: pointer;
  border: 4px solid transparent;

  ${props => props.isSelected && `border-color: ${props.theme.primary};`}
`;
