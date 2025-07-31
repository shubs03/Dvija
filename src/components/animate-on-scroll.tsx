"use client";

import { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  reAnimate?: boolean;
}

export function AnimateOnScroll({ children, className, reAnimate = false }: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!reAnimate) {
            observer.unobserve(element);
          }
        } else {
          if (reAnimate) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [reAnimate]);

  return (
    <div ref={ref} data-visible={isVisible} className={cn(className, 'fade-in-up')}>
      {children}
    </div>
  );
}
