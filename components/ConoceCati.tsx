"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ConoceCati() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(true);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setPlaying(true);
  };

  return (
    <section
      className="relative w-full overflow-hidden px-6 pb-16 pt-2 sm:pb-20 sm:pt-3"
      style={{
        background:
          "linear-gradient(180deg, #1f5886 0%, #1a4a72 100%)",
      }}
    >
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 h-px w-36 bg-white/25" />

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-elegant text-[30px] font-semibold text-white sm:text-4xl"
        >
          Conoce a Cati
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70"
        >
          La optometrista que te lo explica a la cara, sin tecnicismos y con la
          cercanía que mereces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-8 aspect-[9/16] w-[74%] max-w-[300px] overflow-hidden rounded-[24px] ring-1 ring-white/15"
          style={{
            background: "#081a2c",
            boxShadow: "0 30px 70px -30px rgba(0,0,0,0.7)",
          }}
        >
          {hasVideo ? (
            <video
              ref={videoRef}
              src="/video/cati.mp4"
              poster="/video/cati-poster.jpg"
              playsInline
              controls={playing}
              onError={() => setHasVideo(false)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#081a2c]">
              <p className="px-6 text-xs uppercase tracking-[0.2em] text-white/40">
                Vídeo de Cati
              </p>
            </div>
          )}

          {/* Play overlay */}
          {!playing && (
            <button
              onClick={play}
              data-cursor="hover"
              aria-label="Reproducir vídeo de Cati"
              className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/10"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-transform duration-300 hover:scale-105">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7z" fill="#0a2340" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>

        <div className="mx-auto mt-8 h-px w-36 bg-white/25" />
      </div>
    </section>
  );
}
