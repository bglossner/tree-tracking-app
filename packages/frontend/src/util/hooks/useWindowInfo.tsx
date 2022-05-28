/**
 * This hook is useful for getting window size and mobile vs desktop specs
 */

import { useEffect, useState } from "react";

export interface WindowSizeInfo {
  width: number | undefined;
  height: number | undefined;
  isDesktop: boolean;
  isMobile: boolean;
}

const getComputedValues = (): Pick<WindowSizeInfo, 'isDesktop' | 'isMobile'> => {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  return {
    isDesktop,
    isMobile: !isDesktop,
  };
};

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSizeInfo>({
    width: undefined,
    height: undefined,
    ...getComputedValues(),
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        ...getComputedValues(),
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}