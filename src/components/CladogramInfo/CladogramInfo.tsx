import React from 'react';
import styled from 'styled-components';

import Grid from 'components/Grid';
import { BodyText } from 'components/Typography';
import Node from 'components/Node';

const StyledSvg = styled.svg`
  background: ${props => props.theme.offWhite};
  padding: ${props => props.theme.spacers.sm}px;
`;

const CladogramInfo = () => {
  const nodeSize = { x: 200, y: 24 };
  return (
    <Grid gap="xl" p="lg" ac="start">
      <BodyText>
        The cladogram is a pan-able and zoom-able tree diagram. It shows the
        relationships between the nodes in the tree.
      </BodyText>

      <Grid gap="sm">
        <StyledSvg viewBox="-8 -12 250 24">
          <Node
            nodeSize={nodeSize}
            nodeDatum={{
              name: 'Root Node of the tree',
              attributes: { id: 'root' },
            }}
            rootId="root"
          />
        </StyledSvg>
        <BodyText>Click on the label to see the details of the node.</BodyText>
      </Grid>

      <Grid gap="sm">
        <StyledSvg viewBox="-8 -12 250 24">
          <Node
            nodeSize={nodeSize}
            nodeDatum={{
              name: 'Root Node of a subtree',
              attributes: { id: 'root', lineage: 'parent', hasChildren: true },
            }}
            rootId="root"
          />
        </StyledSvg>
        <BodyText>
          Click on the back arrow to go back to the parent subtree.
        </BodyText>
      </Grid>

      <Grid gap="sm">
        <StyledSvg viewBox="-8 -12 250 24">
          <Node
            nodeSize={nodeSize}
            nodeDatum={{
              name: 'Parent node (Clade)',
              attributes: { id: 'id', hasChildren: true },
            }}
          />
        </StyledSvg>
        <BodyText>Click on the circle to toggle showing the children.</BodyText>
      </Grid>

      <Grid gap="sm">
        <StyledSvg viewBox="-8 -12 250 24">
          <Node
            nodeSize={nodeSize}
            nodeDatum={{
              name: 'Selected node',
              attributes: { id: 'id', hasChildren: true },
            }}
            selectedNodeId="id"
          />
        </StyledSvg>
        <BodyText>Shows which node is shown in the side bar.</BodyText>
      </Grid>

      <Grid gap="sm">
        <StyledSvg viewBox="-8 -12 250 24">
          <Node
            nodeSize={nodeSize}
            nodeDatum={{
              name: 'Unnamed Clade',
              attributes: { id: 'mrcaId', hasChildren: true },
            }}
          />
        </StyledSvg>
        <BodyText>
          The label is not clickable as there is no further details yet.
        </BodyText>
      </Grid>

      <Grid gap="sm">
        <StyledSvg viewBox="-8 -12 250 24">
          <Node
            nodeSize={nodeSize}
            nodeDatum={{ name: 'Leaf Node (Species)' }}
          />
        </StyledSvg>
        <BodyText>The circle is not clickable.</BodyText>
      </Grid>
    </Grid>
  );
};

export default CladogramInfo;
