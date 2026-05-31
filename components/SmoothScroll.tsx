"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Snappy but smooth — fast enough to incite action, not sluggish.
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      lerp: 0.12,
      wheelMultiplier: 1.05,
      smoothWheel: true,
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
