import styled, { css } from 'styled-components';
import { Colors } from 'lib/types';

const colorCss = css<{ colorName?: Colors }>`
  ${({ theme, colorName }) => colorName && `color: ${theme[colorName]};`}
`;

export const HeadingXLarge = styled.h3`
  font-size: 3rem;
  line-height: 3.5rem;
`;

export const HeadingLarge = styled.h4`
  font-size: 2.125rem;
  line-height: 2.25rem;
`;

export const Heading = styled.h5`
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

export const HeadingSmall = styled.h6`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  letter-spacing: 0.009rem;
  ${colorCss}
`;

export const SubtitleSmall = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.006rem;
  ${colorCss}
`;

export const HeadingLabel = styled.span`
  font-size: 0.6rem;
  line-height: 0.6rem;
  letter-spacing: 0.09rem;
  text-transform: uppercase;
`;

export const ButtonText = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
`;

export const ButtonTextSmall = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

export const LargeText = styled.p`
  font-size: 1.25rem;
  line-height: 1.5rem;

  strong {
    font-weight: 500;
  }

  ${colorCss}
`;

export const BodyText = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;

  strong {
    font-weight: 500;
  }

  em {
    font-style: italic;
  }

  ${colorCss}
`;

export const DescriptionText = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  ${colorCss}
`;

export const SmallText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  ${colorCss}
`;

export const InfographicXlarge = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
`;

export const InfographicLarge = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
`;

export const Infographic = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`;

export const InfographicSmall = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.125rem;
  letter-spacing: 0.06rem;
  text-transform: uppercase;
`;
