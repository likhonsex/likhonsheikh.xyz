'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling with performance optimizations
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Optimize animation frame for better performance
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop with proper cleanup
    const rafId = requestAnimationFrame(raf);

    // Cleanup on unmount to prevent memory leaks
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
