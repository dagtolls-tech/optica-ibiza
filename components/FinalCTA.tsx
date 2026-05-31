"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { WHATSAPP_HREF, SITE } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/fotos/foto-05.jpg"
          alt="Fachada de Óptica Ibiza en Benidorm"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/80" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-rojo">
            Tu cita empieza con un mensaje
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-bone md:text-6xl">
            Reserva hoy. Nota la diferencia mañana.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
            Escríbenos por WhatsApp y te buscamos hueco. Sin prisas, sin
            compromiso. Solo el trato que mereces.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={WHATSAPP_HREF}
            data-cursor="hover"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-rojo px-10 py-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-300 hover:scale-[1.04]"
          >
            Escríbenos por WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-sm text-bone/50">
            o llámanos al{" "}
            <a href={SITE.phoneHref} className="text-bone/80 underline-offset-4 hover:underline" data-cursor="hover">
              {SITE.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
