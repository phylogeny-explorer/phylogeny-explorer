import React from 'react';
import ReactTree from 'react-d3-tree';
import { linkHorizontal } from 'd3';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';

import { Node as Data } from 'lib/types';
import Node from 'components/Node';
import { useCenteredTree } from './useCenteredTree';
import { Wrapper } from './Tree.styled';

interface Props {
  data: Data;
  isVertical?: boolean;
  // appendNode: (id: string) => void;
  onClickNode: (id: string) => void;
  selectedNodeId?: string;
}

const Tree = ({ data, isVertical, onClickNode, selectedNodeId }: Props) => {
  const { translate, dimensions, containerRef } = useCenteredTree();
  const nodeSize = { x: 350, y: 24 };

  const straightPathFunc = linkDatum => {
    const { source, target } = linkDatum;
    return (
      linkHorizontal()({
        source: [source.y + source.data.name.length * 8, source.x],
        target: [target.y, target.x],
      }) || ''
    );
  };

  return (
    <Wrapper id="treeWrapper" key={data.id} ref={containerRef}>
      <ReactTree
        data={data as RawNodeDatum}
        translate={translate}
        dimensions={dimensions}
        nodeSize={nodeSize}
        separation={{ siblings: 1, nonSiblings: 2 }}
        orientation={isVertical ? 'vertical' : 'horizontal'}
        renderCustomNodeElement={nodeProps => (
          <Node
            {...nodeProps}
            nodeSize={nodeSize}
            onClickNode={onClickNode}
            rootId={data.id}
            selectedNodeId={selectedNodeId}
          />
        )}
        pathFunc={straightPathFunc}
        initialDepth={1}
      />
    </Wrapper>
  );
};

export default Tree;
