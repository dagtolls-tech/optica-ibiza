"use client";

import Counter from "./Counter";
import Reveal from "./Reveal";

const stats = [
  {
    value: <Counter to={29} prefix="+" />,
    label: "Años de experiencia profesional",
  },
  {
    value: <Counter to={30000} prefix="+" />,
    label: "Clientes contentos",
  },
  {
    value: <Counter to={50000} prefix="+" />,
    label: "Ojos y oídos cuidados",
  },
  {
    value: <span>24/7</span>,
    label: "La óptica que de verdad se preocupa por ti",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 lg:grid-cols-4 lg:gap-x-10">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flex min-w-0 flex-col">
              <span className="tabular block whitespace-nowrap font-display text-4xl font-extrabold leading-none tracking-tight text-bone sm:text-5xl">
                {s.value}
              </span>
              <span className="mt-3 block h-[3px] w-12 bg-rojo" />
              <p className="mt-4 max-w-[15rem] text-xs font-medium uppercase leading-snug tracking-[0.12em] text-bone/55 sm:text-sm">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
