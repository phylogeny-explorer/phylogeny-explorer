import { useState, useCallback } from 'react';

export const useCenteredTree = () => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useCallback(containerElem => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 4, y: height / 2 });
    }
  }, []);
  return { translate, containerRef };
};
