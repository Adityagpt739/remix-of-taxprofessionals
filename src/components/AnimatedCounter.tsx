
import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000, // Default animation duration in milliseconds
  suffix = "",
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const initialValue = 0;
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        // Calculate the current count based on elapsed time
        const progress = elapsedTime / duration;
        const easedProgress = easeOutCubic(progress);
        const currentCount = Math.floor(initialValue + easedProgress * (end - initialValue));
        
        setCount(currentCount);
        requestAnimationFrame(updateCounter);
      } else {
        // Animation complete, set to final value
        setCount(end);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3);
  };

  return (
    <div ref={countRef} className={className}>
      {count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
