"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import GlassesGlitch from "./GlassesGlitch";

const logos = [
  { src: "/logos/rayban.png", alt: "Ray-Ban" },
  { src: "/logos/bvlgari.png", alt: "Bvlgari" },
  { src: "/logos/armani.png", alt: "Emporio Armani" },
  { src: "/logos/dg.png", alt: "Dolce & Gabbana" },
  { src: "/logos/versace.png", alt: "Versace" },
  { src: "/logos/silhouette.png", alt: "Silhouette" },
  { src: "/logos/miumiu.png", alt: "Miu Miu" },
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...logos, ...logos];
  return (
    <div className="flex overflow-hidden">
      <div
        className="marquee-track animate-marquee flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24"
        style={{
          ["--marquee-duration" as string]: reverse ? "44s" : "38s",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            data-cursor="hover"
            className="relative h-10 w-32 shrink-0 opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-14 md:w-44"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(min-width: 768px) 176px, 128px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="overflow-hidden bg-ink py-12 md:py-16">
      <div className="mx-auto mb-8 max-w-7xl px-6 text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-rojo">
            Colaboradores oficiales
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-bold leading-tight tracking-tight text-bone/80 md:text-3xl">
            Colaboradores con las mejores gafas para ti.
          </h2>
        </Reveal>
      </div>

      <div className="relative flex min-h-[240px] flex-col justify-center md:min-h-[300px]">
        {/* glitching glasses stage (behind the logos) */}
        <GlassesGlitch />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent md:w-40" />
        <div className="relative z-20 flex flex-col gap-8">
          <Row />
          <Row reverse />
        </div>
      </div>
    </section>
  );
}
