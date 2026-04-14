import { useEffect, useState, useCallback } from 'react';

export const useScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? currentScrollY / docHeight : 0;
    
    setScrollProgress(Math.max(0, Math.min(1, progress)));
    setScrollY(currentScrollY);
    setDirection(currentScrollY > lastScrollY ? 'down' : 'up');
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    scrollY,
    scrollProgress,
    direction,
    isScrolling: scrollY > 0,
  };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export const useScrollReveal = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { isVisible, setRef };
}; 