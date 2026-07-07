"use client";

import { motion } from "framer-motion";
import { track } from "@vercel/analytics";
import { WHATSAPP_HREF } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #071b33 0%, #0d2b48 42%, #17466e 78%, #1f5886 100%)",
      }}
    >
      {/* soft light bloom near the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[65%]"
        style={{
          background:
            "radial-gradient(120% 75% at 50% 4%, rgba(120,185,235,0.22), transparent 62%)",
        }}
      />

      {/* ===== Header bar (white) ===== */}
      <div className="absolute inset-x-0 top-0 z-20">
        <div className="flex items-center justify-between bg-white px-5 py-3.5 sm:px-8">
          <div className="leading-[0.95]">
            <p className="wordmark font-elegant text-[26px] uppercase text-marino sm:text-[32px]">
              Cati Villaoslada
            </p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-marino/60 sm:text-[10px]">
              Una marca de Óptica Ibiza
            </p>
          </div>
          <button
            aria-label="Menú"
            data-cursor="hover"
            className="flex flex-col items-end gap-[6px] p-1"
          >
            <span className="block h-[2.5px] w-7 rounded-full bg-marino" />
            <span className="block h-[2.5px] w-7 rounded-full bg-marino" />
            <span className="block h-[2.5px] w-7 rounded-full bg-marino" />
          </button>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 pb-8 pt-28 text-center sm:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="lining-nums mt-6 font-elegant text-[33px] font-semibold uppercase italic leading-[1.1] tracking-tight text-white sm:text-6xl"
        >
          28 años cuidando tu forma de ver la vida
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.8, ease }}
          className="mt-4 max-w-sm text-[11px] font-medium uppercase leading-relaxed tracking-[0.22em] text-white/70 sm:text-sm"
        >
          Ver bien cambia cómo vives. Empieza con Cati.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.8, ease }}
          className="reserva-title mt-6 font-elegant text-[34px] font-semibold uppercase leading-none tracking-tight text-white sm:text-6xl"
        >
          Tu revisión gratuita
        </motion.p>

        {/* CTA */}
        <motion.a
          href={WHATSAPP_HREF}
          data-cursor="hover"
          onClick={() => track("contacto_whatsapp", { boton: "hero_cati" })}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.8, ease }}
          className="cta-reserva group relative mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-4 ring-1 ring-white/25 sm:px-9"
          style={{
            background:
              "linear-gradient(180deg, #3f86d6 0%, #2f74c0 55%, #245ea3 100%)",
          }}
        >
          <span className="relative z-10 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white sm:text-[15px]">
            Reservar mi revisión con Cati
          </span>
          <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
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

        {/* Scarcity / urgency */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease }}
          className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
        >
          <span className="blink-dot block h-2.5 w-2.5 rounded-full bg-aceroLight" />
          <span className="text-[12px] font-medium tracking-tight text-white sm:text-sm">
            Esta semana quedan <span className="font-semibold">6 huecos</span>
          </span>
        </motion.div>

        {/* Professional trust details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-4 flex max-w-md flex-wrap items-center justify-center gap-x-2 gap-y-2"
        >
          {[
            "Sin compromiso",
            "Optometrista colegiada",
            "Especialista en terapia visual",
            "+6.000 seguidores",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-tight text-white/85 sm:text-[11px]"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="text-aceroLight">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>

        {/* Scroll hint → points to the video right below */}
        <div className="mt-12 flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Conoce a Cati en vídeo
          </span>
          <svg
            className="scroll-hint text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
