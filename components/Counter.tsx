"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({
  to,
  duration = 1.8,
  prefix = "",
  suffix = "",
  separator = ".",
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
