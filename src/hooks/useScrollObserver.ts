import { useEffect, useRef } from 'react';

export const useScrollObserver = (options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible');
        // Once visible, we can stop observing it if we only want it to animate once
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return elementRef;
};
