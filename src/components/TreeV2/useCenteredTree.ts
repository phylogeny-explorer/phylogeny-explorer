import { useState, useCallback } from 'react';

export const useCenteredTree = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useCallback(containerElem => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setDimensions({ width, height });
      setTranslate({ x: width / 4, y: height / 2 });
    }
  }, []);
  return { translate, dimensions, containerRef };
};
