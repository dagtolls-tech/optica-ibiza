"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

export default function Location() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* ===== Drone background ===== */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/benidorm.mp4"
        poster="/video/benidorm-poster.jpg"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-rojo">
              <span aria-hidden>◉</span> Dónde estamos
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-surgena text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              <span className="text-rojo">Benidorm.</span>
              <br />
              <span className="text-bone">Alicante.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/80 md:text-lg">
              Nuestro negocio operativo físicamente para ti. Contentos de tu
              llegada y preparados. Ven ya a Benidorm y prueba tus nuevas gafas o
              tratamiento.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-sm font-semibold text-bone backdrop-blur"
              >
                <span aria-hidden>◉</span> Calle Ibiza
              </span>
              <span
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-sm font-semibold text-bone backdrop-blur"
              >
                <span aria-hidden>✦</span> Te atendemos con claridad
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <p className="absolute bottom-5 right-6 z-10 text-[10px] uppercase tracking-[0.3em] text-bone/50">
        {SITE.city} · Costa Blanca
      </p>
    </section>
  );
}
