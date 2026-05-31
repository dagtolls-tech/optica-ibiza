"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Drop the transparent PNGs into public/gafas/ with these names.
const glasses = [
  { src: "/gafas/rayban.png", alt: "Ray-Ban" },
  { src: "/gafas/miumiu.png", alt: "Miu Miu" },
  { src: "/gafas/armani.png", alt: "Emporio Armani" },
  { src: "/gafas/ferragamo.png", alt: "Ferragamo" },
  { src: "/gafas/dolcegabbana.png", alt: "Dolce & Gabbana" },
  { src: "/gafas/versace.png", alt: "Versace" },
  { src: "/gafas/dg-vista.png", alt: "Dolce & Gabbana" },
];

export default function GlassesGlitch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px -15% 0px" });
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setI((v) => (v + 1) % glasses.length), 750);
    return () => clearInterval(id);
  }, [inView]);

  const current = glasses[i];

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      {/* theatrical white light wash behind the glasses */}
      <div
        className="absolute left-1/2 top-1/2 h-[150%] w-[60%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.18), rgba(255,255,255,0.05) 42%, transparent 72%)",
        }}
      />

      {/* glasses, glitching + swapping brand every 750ms */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          key={i}
          className="glass-stage relative h-[150px] w-[300px] md:h-[200px] md:w-[420px]"
        >
          <img
            src={current.src}
            alt={current.alt}
            className="glass-base absolute inset-0 h-full w-full object-contain"
          />
          <img
            src={current.src}
            alt=""
            aria-hidden
            className="glass-ghost glass-ghost-r absolute inset-0 h-full w-full object-contain"
          />
          <img
            src={current.src}
            alt=""
            aria-hidden
            className="glass-ghost glass-ghost-b absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
