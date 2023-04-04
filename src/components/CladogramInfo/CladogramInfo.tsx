import React from 'react';
import styled from 'styled-components';
import Scrollbars from 'rc-scrollbars';

import Grid from 'components/Grid';
import { BodyText } from 'components/Typography';
import Node, { NodeProps } from 'components/Node';

const StyledSvg = styled.svg`
  background: ${props => props.theme.offWhite};
  padding: ${props => props.theme.spacers.sm}px;
`;

const nodeSize = { x: 200, y: 24 };
interface NodeWithTextProps extends Omit<NodeProps, 'nodeSize'> {
  text: string;
}
const NodeWithText = ({ text, ...props }: NodeWithTextProps) => (
  <Grid gap="sm">
    <StyledSvg viewBox="-8 -12 250 24">
      <Node nodeSize={nodeSize} {...props} />
    </StyledSvg>
    <BodyText>{text}</BodyText>
  </Grid>
);

const CladogramInfo = () => (
  <Scrollbars autoHeight autoHeightMax="100%">
    <Grid gap="xl" p="lg" ac="start">
      <BodyText>
        The cladogram is a pan-able and zoom-able tree diagram. It shows the
        relationships between the nodes in the tree.
      </BodyText>

      <NodeWithText
        nodeDatum={{
          name: 'Root Node of the tree',
          attributes: { id: 'root' },
        }}
        rootId="root"
        text="Click on the label to see the details of the node."
      />
      <NodeWithText
        nodeDatum={{
          name: 'Root Node of a subtree',
          attributes: { id: 'root', lineage: 'parent', hasChildren: true },
        }}
        rootId="root"
        text="Click on the back arrow to go back to the parent subtree."
      />
      <NodeWithText
        nodeDatum={{
          name: 'Parent node (Clade)',
          attributes: { id: 'id', hasChildren: true },
        }}
        text="Click on the circle to toggle showing the children."
      />
      <NodeWithText
        nodeDatum={{
          name: 'Selected node',
          attributes: { id: 'id', hasChildren: true },
        }}
        selectedNodeId="id"
        text="Shows which node is shown in the side bar."
      />
      <NodeWithText
        nodeDatum={{
          name: 'Unnamed Clade',
          attributes: { id: 'mrcaId', hasChildren: true },
        }}
        text="The label is not clickable as there is no further details yet."
      />
      <NodeWithText
        nodeDatum={{ name: 'Leaf Node (Species)' }}
        text="The circle is not clickable."
      />
    </Grid>
  </Scrollbars>
);

export default CladogramInfo;
