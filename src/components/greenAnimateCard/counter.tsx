"use client";
import { useEffect, useState } from "react";

type CountUpProps = {
  end: number;
  duration?: number; // milliseconds
};

export default function CountUp({ end, duration = 2500 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = 16;
    const steps = duration / interval;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}
