import React, { useEffect, useRef } from "react";
import { useInView, useSpring, useMotionValue } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

export function CountUp({ end, duration = 2, delay = 0, suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 40, damping: 20 });
  const [displayValue, setDisplayValue] = React.useState("0");

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        count.set(end);
      }, delay * 1000);
    }
  }, [isInView, end, delay, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      setDisplayValue(Math.round(v).toString());
    });
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
