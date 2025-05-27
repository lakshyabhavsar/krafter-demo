import React, { useRef, useEffect, useState, ReactNode } from "react";

interface AnimatedScrollContainerProps {
  children: ReactNode;
  className?: string;
  animationClass?: string; // e.g., 'animate-fadeInUp'
  durationClass?: string; // e.g., 'duration-700'
  easingClass?: string; // e.g., 'ease-in-out'
}

const AnimatedScrollContainer: React.FC<AnimatedScrollContainerProps> = ({
  children,
  className = "",
  animationClass = "animate-fadeInUp",
  durationClass = "duration-700",
  easingClass = "ease-in-out",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity transition-transform ${durationClass} ${easingClass} opacity-0 translate-y-8 ${
        isVisible ? `opacity-100 translate-y-0 ${animationClass}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedScrollContainer; 