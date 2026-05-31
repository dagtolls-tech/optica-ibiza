"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const moments = [
  "Volver a ver el rostro de tus nietos con nitidez.",
  "Conducir de noche tranquilo, sin deslumbramientos.",
  "Recuperar las conversaciones que se te escapaban.",
];

export default function Promise() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-rojo">
              Más que graduar
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-bone md:text-5xl">
              No vendemos gafas.
              <br />
              Te devolvemos momentos.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/65 md:text-lg">
              Cada revisión empieza por escucharte. Entendemos cómo vives, qué te
              cuesta y qué echas de menos. Luego ponemos casi 30 años de oficio a
              tu servicio para que vuelvas a disfrutarlo.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-5">
            {moments.map((m, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08}>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rojo" />
                  <span className="text-lg leading-snug text-bone/85 md:text-xl">
                    {m}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6">
          <Reveal y={40}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/fotos/foto-18.jpg"
                alt="Interior de Óptica Ibiza con monturas de primeras marcas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
