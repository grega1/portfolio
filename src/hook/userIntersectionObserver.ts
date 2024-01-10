import { useEffect, useRef } from 'react';

type IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => void;

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverOptions
) => {
  const targetRef = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentTarget = targetRef.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [callback, options]);

  return targetRef;
};