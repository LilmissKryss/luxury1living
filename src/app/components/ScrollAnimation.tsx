'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-left' | 'slide-right' | 'slide-up' | 'scale-in';
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animationType = 'fade-in',
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'slide-left':
        return 'animate-slide-in-scroll';
      case 'slide-right':
        return 'animate-slide-in-scroll';
      case 'slide-up':
        return 'animate-fade-in-scroll';
      case 'scale-in':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in-scroll';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 