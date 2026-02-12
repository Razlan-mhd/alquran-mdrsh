"use client";
import { useRef, useEffect } from "react";

export default function ContinuousSlideImages() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let x = 0;
    const speed = 0.5;
    let animationFrameId: number;

    const animate = () => {
      x -= speed;
      if (x <= -container.scrollWidth / 2) x = 0; // reset for infinite loop
      container.style.transform = `translateX(${x}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="mt-5 overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex gap-4"
        style={{ willChange: "transform" }}
      >
        {/* Original Images */}
        <img
          src="/Service/11.jpg"
          alt="1"
          className=" md:w-1/4 flex-shrink-0"
        />
        <img src="/Service/12.jpg" alt="2" className="md:w-1/4 flex-shrink-0" />
        <img src="/Service/10.jpg" alt="3" className="md:w-1/4 flex-shrink-0" />
        <img src="/Service/9.jpg" alt="4" className="md:w-1/4 flex-shrink-0" />

        {/* Duplicate for smooth looping */}
        <img src="/Service/11.jpg" alt="1" className="w-1/4 flex-shrink-0" />
        <img src="/Service/12.jpg" alt="2" className="w-1/4 flex-shrink-0" />
        <img src="/Service/10.jpg" alt="3" className="w-1/4 flex-shrink-0" />
        <img src="/Service/9.jpg" alt="4" className="w-1/4 flex-shrink-0" />
      </div>
    </div>
  );
}
