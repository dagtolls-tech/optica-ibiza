"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    photo: "/fotos/foto-24.jpg",
    tag: "Visión",
    title: "Salud visual de precisión",
    text: "Revisiones completas, control de miopía y topografía corneal con tecnología Topcon y MYAH. Vemos lo que otros no miran.",
    points: ["Revisiones visuales", "Terapia visual", "Control de miopía"],
  },
  {
    photo: "/fotos/foto-20.jpg",
    tag: "Audición",
    title: "Centro auditivo propio",
    text: "Estudios auditivos, adaptación de audífonos y seguimiento real. Recuperar las conversaciones también es salud.",
    points: ["Estudios auditivos", "Adaptación de audífonos", "Revisiones periódicas"],
  },
  {
    photo: "/fotos/foto-12.jpg",
    tag: "Contacto",
    title: "Lentes de contacto a medida",
    text: "Adaptación personalizada, incluidas lentes especiales. Cómodas, sanas y pensadas para tu día a día.",
    points: ["Adaptación personalizada", "Lentes especiales", "Seguimiento"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-rojo">
            Lo que hacemos
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-bone md:text-5xl">
            Una óptica especializada, no una franquicia.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} y={36}>
              <article
                data-cursor="hover"
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-inset ring-white/10 transition-colors duration-300 hover:bg-white/[0.06]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={s.photo}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-rojo px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-bone">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone/60">
                    {s.text}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-bone/75"
                      >
                        <span className="h-1 w-1 rounded-full bg-rojo" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
