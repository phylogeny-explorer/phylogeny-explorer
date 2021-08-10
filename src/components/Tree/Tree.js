/* eslint-disable no-param-reassign */
import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as d3 from 'd3';

import Button from 'components/Button';
import { Wrapper, ResetButton } from './Tree.styled';

const Tree = ({ data, loading, handleLoadMore }) => {
  console.log({ loading, handleLoadMore });
  const history = useHistory();
  const [newId, setNewId] = useState(data.id);
  const d3Container = useRef(null);
  const margin = { top: 32, right: 156, bottom: 32, left: 156 };

  useEffect(() => {
    if (data && data.id === newId && d3Container.current) {
      // remove current group
      d3.select(d3Container.current).selectAll('g').remove();

      const { width } = d3Container.current.getBoundingClientRect();
      const root = d3.hierarchy(data);
      const dy = width / 3;
      const dx = 32;
      const tree = d3.tree().nodeSize([dx, dy]);
      const diagonal = d3
        .linkHorizontal()
        .x(d => d.y)
        .y(d => d.x);

      root.x0 = dy / 4;
      root.y0 = 0;
      root.descendants().forEach((d, i) => {
        d.id = i;
        d._children = d.children;
        if (d.depth > 1) d.children = null;
      });

      const zoom = d3.zoom().scaleExtent([0.1, 2]);

      const svg = d3
        .select(d3Container.current)
        .attr('viewBox', [-margin.left, -margin.top, width, dx])
        .call(zoom)
        .append('g');

      zoom.on('zoom', () => {
        svg.attr('transform', d3.event.transform);
      });

      const gLink = svg.append('g').attr('class', 'links');

      const gNode = svg.append('g').attr('class', 'nodes');

      const update = source => {
        const duration = d3.event && d3.event.altKey ? 2500 : 250;
        const nodes = root.descendants().reverse();
        const links = root.links();

        // Compute the new tree layout.
        tree(root);

        let left = root;
        let right = root;
        root.eachBefore(node => {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
        });

        const height = right.x - left.x + margin.top + margin.bottom;

        const transition = svg
          .transition()
          .duration(duration)
          .attr('viewBox', [-margin.left, left.x - margin.top, width, height])
          .tween(
            'resize',
            window.ResizeObserver ? null : () => () => svg.dispatch('toggle')
          );

        // Update the nodes…
        const node = gNode.selectAll('g').data(nodes, d => d.id);

        // Enter any new nodes at the parent's previous position.
        const nodeEnter = node
          .enter()
          .append('g')
          .attr(
            'class',
            d =>
              `node ${d.data.hasChildren && 'parent'} ${
                d.data.isRoot && 'root'
              }`
          )
          .attr('transform', () => `translate(${source.y0},${source.x0})`)
          .attr('fill-opacity', 0)
          .attr('stroke-opacity', 0);

        nodeEnter
          .append('circle')
          .attr('r', 4)
          .on('click', d => {
            d.children = d.children ? null : d._children;
            update(d);
          });

        nodeEnter
          .append('text')
          .attr('dy', '0.31em')
          .attr('x', d => (d.data.hasChildren ? -10 : 8))
          .on('click', d => {
            setNewId(d.depth === 0 ? d.data.parentId : d.data.id);
            history.push(`/tree/${d.depth === 0 ? d.data.parentId : d.data.id}`);
          })
          .text(d => d.data.name)
          .clone(true)
          .lower()
          .attr('class', 'overlay');

        // Transition nodes to their new position.
        node
          .merge(nodeEnter)
          .transition(transition)
          .attr('transform', d => `translate(${d.y},${d.x})`)
          .attr('fill-opacity', 1)
          .attr('stroke-opacity', 1);

        // Transition exiting nodes to the parent's new position.
        node
          .exit()
          .transition(transition)
          .remove()
          .attr('transform', () => `translate(${source.y},${source.x})`)
          .attr('fill-opacity', 0)
          .attr('stroke-opacity', 0);

        // Update the links…
        const link = gLink.selectAll('path').data(links, d => d.target.id);

        // Enter any new links at the parent's previous position.
        const linkEnter = link
          .enter()
          .append('path')
          .attr('d', () => {
            const o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
          });

        // Transition links to their new position.
        link.merge(linkEnter).transition(transition).attr('d', diagonal);

        // Transition exiting nodes to the parent's new position.
        link
          .exit()
          .transition(transition)
          .remove()
          .attr('d', () => {
            const o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
          });

        // Stash the old positions for transition.
        root.eachBefore(d => {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      };

      update(root);
    }
  }, [data, margin, d3Container, history, newId]);

  return (
    <Wrapper>
      <svg className="Tree" width="100%" height="100%" ref={d3Container} />
      <ResetButton>
        <Button icon="crosshairs" dark />
      </ResetButton>
    </Wrapper>
  );
};

export default Tree;
