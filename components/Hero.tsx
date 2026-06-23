"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { WHATSAPP_HREF } from "@/lib/site";

type Phase = "eye" | "video" | "crash" | "content";

export default function Hero() {
  const [phase, setPhase] = useState<Phase>("eye");
  const videoRef = useRef<HTMLVideoElement>(null);
  const ghostRef = useRef<HTMLVideoElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const skip = () => {
    timers.current.forEach(clearTimeout);
    setPhase("content");
  };

  // Eye intro. On mobile (and with "reduce motion") we skip the accident
  // video + crash screen entirely: just a soft, quick logo and then a big
  // entrance straight into the main content. Desktop keeps the full cinematic.
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    // Mobile (and reduce-motion): no logo intro at all — the page just enters
    // with a soft, persuasive fade straight into the main content.
    if (isMobile || reduce) {
      setPhase("content");
      return;
    }

    const t = setTimeout(() => setPhase("video"), 700);
    timers.current.push(t);
    return () => clearTimeout(t);
  }, []);

  // Start playback when the video phase begins
  useEffect(() => {
    if (phase !== "video") return;
    // If autoplay is blocked, skip ahead instead of freezing on black
    videoRef.current?.play().catch(() => setPhase("crash"));
    ghostRef.current?.play().catch(() => {});
    // Fallback in case onEnded doesn't fire
    const t = setTimeout(() => setPhase("crash"), 6500);
    timers.current.push(t);
    return () => clearTimeout(t);
  }, [phase]);

  // Crash black screen -> content
  useEffect(() => {
    if (phase !== "crash") return;
    const t = setTimeout(() => setPhase("content"), 3000);
    timers.current.push(t);
    return () => clearTimeout(t);
  }, [phase]);

  const cinematic = phase !== "content";

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* ===== Background: interior photo (final state) ===== */}
      <div className="absolute inset-0">
        <Image
          src="/fotos/foto-18.jpg"
          alt="Interior de Óptica Ibiza en Benidorm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/55" />
      </div>

      {/* ===== Accident video (myopia + astigmatism + flicker) ===== */}
      <AnimatePresence>
        {phase === "video" && (
          <motion.div
            className="absolute inset-0 overflow-hidden bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <video
              ref={videoRef}
              className="vision-blur absolute inset-0 h-full w-full object-cover"
              src="/video/accidente.mp4"
              poster="/video/accidente-poster.jpg"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setPhase("crash")}
            />
            {/* astigmatism ghost */}
            <video
              ref={ghostRef}
              aria-hidden
              className="astig-ghost absolute inset-0 h-full w-full object-cover"
              src="/video/accidente.mp4"
              muted
              playsInline
              preload="auto"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-white/70">
              Así ve el mundo quien no se revisa
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Crash → black screen with message ===== */}
      <AnimatePresence>
        {phase === "crash" && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-black px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl text-center"
            >
              <h2 className="font-surgena text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                No ver bien te puede
                <br />
                arruinar la vida.
              </h2>
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-rojo">
                Óptica Ibiza
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Eye intro on black ===== */}
      <AnimatePresence>
        {phase === "eye" && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/logo-eye.png"
              alt="Óptica Ibiza"
              className="eye-intro w-[300px] max-w-[80vw] sm:w-[360px]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Skip button (during cinematic) ===== */}
      {cinematic && (
        <button
          onClick={skip}
          data-cursor="hover"
          className="absolute right-5 top-5 z-40 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur transition-colors hover:bg-black/60"
        >
          Saltar intro
        </button>
      )}

      {/* ===== Top bar ===== */}
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <AnimatePresence>
            {phase === "content" && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5"
              >
                <img
                  src="/logo-eye-trans.png"
                  alt="Óptica Ibiza"
                  className="h-12 w-auto sm:h-14"
                />
                <span className="font-surgena text-2xl font-extrabold tracking-tight text-bone sm:text-3xl">
                  óptica <span className="text-rojo">ibiza</span>
                </span>
              </motion.span>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {phase === "content" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="hidden text-xs uppercase tracking-[0.25em] text-bone/60 sm:block"
              >
                Benidorm · desde 1997
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ===== Centered content (pronovamark-style) ===== */}
      <AnimatePresence>
        {phase === "content" && (
          <motion.div
            className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-6 text-xs uppercase tracking-[0.3em] text-bone/70 sm:text-sm"
            >
              Óptica y centro auditivo · Benidorm
            </motion.p>

            <h1 className="max-w-5xl font-surgena text-4xl font-extrabold leading-[1.04] tracking-tight text-bone sm:text-6xl md:text-7xl">
              Mira el mundo con total claridad.
            </h1>

            <p className="mt-6 max-w-3xl font-surgena text-xl font-bold leading-[1.18] tracking-tight text-rojo sm:text-3xl md:text-4xl">
              Tu miopía empeora. Tu ojo se cansa. Tu oído se gasta.
              <br />
              <span className="text-rojo">Tu vida empeora.</span>
            </p>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
              Casi 30 años cuidando la visión y la audición de Benidorm. Aquí no
              eres un número: te miramos a los ojos, te escuchamos y te
              acompañamos.
            </p>

            <motion.a
              href={WHATSAPP_HREF}
              data-cursor="hover"
              onClick={() => track("contacto_whatsapp", { boton: "hero" })}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-rojo py-4 pl-9 pr-3 shadow-[0_20px_60px_-15px_rgba(226,35,26,0.7)] ring-1 ring-white/10 transition-transform duration-300 hover:scale-[1.04]"
            >
              <span className="font-surgena text-base font-extrabold uppercase tracking-[0.16em] text-white sm:text-lg">
                Contactar ya
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-rojo transition-transform duration-300 group-hover:translate-x-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
