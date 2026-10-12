import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component for smooth number roll-up when scrolled into view.
 * @param {number} target - The number to count up to.
 * @param {string} prefix - Optional text prefix (e.g. "< ")
 * @param {string} suffix - Optional text suffix (e.g. "+", "×")
 * @param {number} duration - Animation duration in ms (default 1600ms)
 */
export default function AnimatedCounter({ target, prefix = '', suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let startTime = null;

          const animateStep = (now) => {
            if (!startTime) startTime = now;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic: 1 - (1 - progress)^3
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * target);

            setCount(currentCount);

            if (progress < 1) {
              window.requestAnimationFrame(animateStep);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(animateStep);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasStarted]);

  return (
    <span ref={elementRef}>
      {prefix}{count}{suffix}
    </span>
  );
}
