import { useEffect, useState, useCallback } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [totalScrollY, setTotalScrollY] = useState(0);

  const updateMousePosition = useCallback((e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const updateTotalScrollY = useCallback(() => {
    setTotalScrollY(window.scrollY + mousePosition.y);
  }, [mousePosition.y]);

  useEffect(() => {
    // Mouse move event
    window.addEventListener("mousemove", updateMousePosition);

    // Scroll event
    window.addEventListener("scroll", updateTotalScrollY);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updateTotalScrollY);
    };
  }, [updateMousePosition, updateTotalScrollY]);

  return { mousePosition, totalScrollY };
}
