"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Skip on touch / coarse pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      setHidden(false);

      const el = e.target as HTMLElement;
      const interactive = el.closest(
        "a, button, [data-cursor='hover'], input, label"
      );
      setHovering(Boolean(interactive));
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.25s" }}
    >
      <div
        ref={ringRef}
        className="absolute left-0 top-0 -ml-5 -mt-5 h-10 w-10 rounded-full border transition-[width,height,margin,background-color,border-color] duration-200 ease-out"
        style={{
          borderColor: hovering ? "#e2231a" : "rgba(244,241,234,0.6)",
          backgroundColor: hovering ? "rgba(226,35,26,0.12)" : "transparent",
          width: hovering ? 56 : 40,
          height: hovering ? 56 : 40,
          marginLeft: hovering ? -28 : -20,
          marginTop: hovering ? -28 : -20,
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full"
        style={{ backgroundColor: hovering ? "#e2231a" : "#f4f1ea" }}
      />
    </div>
  );
}
