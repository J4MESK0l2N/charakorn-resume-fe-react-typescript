import { useEffect, useRef, useState } from "react";

export const useInView = <T extends HTMLElement>(): [
  React.RefObject<T | null>,
  boolean
] => {
  const ref = useRef<T | null>(null);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsShowing(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isShowing];
};
