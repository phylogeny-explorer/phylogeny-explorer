import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import { LargeText } from 'components/Typography';

const OrderedList = styled.ol`
  list-style: decimal inside;
  display: grid;
  grid-gap: ${props => props.theme.spacers.md}px;
`;

const Markdown = ({ linkTarget, children }: ReactMarkdownOptions) => (
  <ReactMarkdown
    components={{
      p: pProps => <LargeText {...pProps} />,
      ol: olProps => <OrderedList {...olProps} />,
      li: liProps => <LargeText as="li" {...liProps} />,
    }}
    linkTarget={linkTarget || '_blank'}
  >
    {children}
  </ReactMarkdown>
);

export default Markdown;
