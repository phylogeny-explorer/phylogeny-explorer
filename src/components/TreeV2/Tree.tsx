import React from 'react';
import { useRouter } from 'next/router';
import ReactTree from 'react-d3-tree';
import { linkHorizontal } from 'd3';
import {
  RawNodeDatum,
  RenderCustomNodeElementFn,
} from 'react-d3-tree/lib/types/common';

import { Clade } from 'lib/types';
import { useCenteredTree } from './useCenteredTree';
import { Wrapper } from './Tree.styled';

interface Props {
  data: Clade;
  isVertical?: boolean;
  // appendNode: (id: string) => void;
  onClickNode: (id: string) => void;
}

const Tree = ({ data, isVertical, onClickNode }: Props) => {
  const router = useRouter();
  const { translate, dimensions, containerRef } = useCenteredTree();
  const nodeSize = { x: 350, y: 24 };

  const renderCustomNodeElement: RenderCustomNodeElementFn = ({
    nodeDatum,
    toggleNode,
  }) => {
    const id = nodeDatum.attributes?.id.toString() || '';
    const hasChildren = nodeDatum.attributes?.hasChildren;
    const hasChildrenData = nodeDatum.children && nodeDatum.children.length > 0;
    const className = hasChildren ? 'node__branch' : 'node__leaf';

    const updateQuery = nodeId =>
      router.push({ pathname: '/tree', query: { nodeId } }, undefined, {
        shallow: true,
      });

    const onClickCircle = () => {
      if (id === data.id) updateQuery(nodeDatum.attributes?.lineage[0]);
      else if (hasChildrenData) toggleNode();
      else updateQuery(id);
    };

    return (
      <g width={nodeSize.x} height={nodeSize.y} className={className}>
        <circle r={5} onClick={onClickCircle} />

        <text dy="0.31em" x={12} className="rd3t-label__title overlay">
          {nodeDatum.name}
        </text>
        <text
          dy="0.31em"
          x={12}
          className={`rd3t-label__title ${
            id.includes('mrca') ? 'disabled' : ''
          }`}
          onClick={id.includes('mrca') ? undefined : () => onClickNode(id)}
        >
          {nodeDatum.name}
        </text>
      </g>
    );
  };

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
        renderCustomNodeElement={renderCustomNodeElement}
        pathFunc={straightPathFunc}
        initialDepth={2}
      />
    </Wrapper>
  );
};

export default Tree;
