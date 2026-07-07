"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const fotos = [
  "/cati-foto.jpg",
  ...Array.from(
    { length: 37 },
    (_, i) => `/galeria/foto-${String(i + 1).padStart(2, "0")}.jpg`
  ),
];

export default function Galeria() {
  const [slide, setSlide] = useState(0);
  const [navigated, setNavigated] = useState(false);
  const next = () => {
    setNavigated(true);
    setSlide((s) => (s + 1) % fotos.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden px-6 py-16 sm:py-20"
      style={{
        background: "linear-gradient(180deg, #1a4a72 0%, #0a2340 100%)",
      }}
    >
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-8 h-px w-36 bg-white/25" />

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-elegant text-[30px] font-semibold text-white sm:text-4xl"
        >
          Nuestra óptica
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70"
        >
          Un espacio real en Benidorm, con la última tecnología para cuidar tu
          vista y tu audición.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-8 aspect-[3/4] w-[74%] max-w-[300px] overflow-hidden rounded-[24px] bg-black ring-1 ring-white/15"
          style={{ boxShadow: "0 30px 70px -30px rgba(0,0,0,0.7)" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slide}
              src={fotos[slide]}
              alt="Óptica de Cati Villaoslada en Benidorm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* next translucent control — on the right */}
          <button
            onClick={next}
            data-cursor="hover"
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md transition-colors hover:bg-white/30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* counter — only after the user starts navigating */}
          <AnimatePresence>
            {navigated && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-tight text-white/90 ring-1 ring-white/15 backdrop-blur-md"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(63,134,214,0.35) 0%, rgba(36,94,163,0.35) 100%)",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="8.5" cy="10.5" r="1.6" fill="currentColor" />
                  <path d="M4 18l5-4 3 2 4-3 4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {slide + 1} / {fotos.length}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mx-auto mt-8 h-px w-36 bg-white/25" />
      </div>
    </section>
  );
}
