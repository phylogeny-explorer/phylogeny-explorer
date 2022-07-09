import React from 'react';
import { useRouter } from 'next/router';
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';

import { G, Text } from './Node.styled';

interface Props {
  nodeSize: { x: number; y: number };
  rootId?: string;
  onClickNode?: (id: string) => void;
  nodeDatum: RawNodeDatum;
  toggleNode?: () => void;
  selectedNodeId?: string;
}

const Node = ({
  rootId,
  onClickNode,
  nodeDatum,
  toggleNode,
  nodeSize,
  selectedNodeId,
}: Props) => {
  const router = useRouter();

  const id = nodeDatum.attributes?.id.toString() || '';
  const hasChildren = nodeDatum.attributes?.hasChildren;
  const hasChildrenData = nodeDatum.children && nodeDatum.children.length > 0;
  const parent = nodeDatum.attributes?.lineage?.[0];

  const updateQuery = nodeId =>
    router.push({ pathname: '/tree', query: { nodeId } }, undefined, {
      shallow: true,
    });

  const onClickCircle = () => {
    if (hasChildrenData) toggleNode?.();
    else updateQuery(id);
  };

  const goToParent = () => updateQuery(parent);

  return (
    <G
      width={nodeSize.x}
      height={nodeSize.y}
      isRoot={id === rootId}
      isLeaf={!hasChildren}
    >
      {parent && id === rootId && (
        <polygon points="5,5 -5,0 5,-5" onClick={goToParent} />
      )}
      {id !== rootId && <circle r={5} onClick={onClickCircle} />}

      <Text dy="0.31em" x={12} overlay>
        {nodeDatum.name}
      </Text>
      <Text
        dy="0.31em"
        x={12}
        disabled={id.includes('mrca')}
        selected={id === selectedNodeId}
        onClick={
          id.includes('mrca') || id === selectedNodeId
            ? undefined
            : () => onClickNode?.(id)
        }
      >
        {nodeDatum.name}
      </Text>
    </G>
  );
};

export default Node;
